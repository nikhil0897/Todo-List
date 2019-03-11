import React, { Component } from 'react'
import ItemsList from '../ItemsList/ItemsList';
import './Dashboard.css'
import Reminder from '../reminder/Reminder';
import Modal from '../modal/Modal';
import Form from '../reminder-form/Form';


export class Dashboard extends Component {

  state = {
    showModal: false,
    idIndicator: 1,
    allTasks:{
      personal: {
        today: [
          {
            name: "This is a todo"
          }
        ],
        tomorrow:[],
        someday:[],
        upcoming:[]
      },
      work: {
        today: [],
        tomorrow: [],
        someday: [],
        upcoming: []
      },
      groceryList: {
        today: [],
        tomorrow: [],
        someday: [],
        upcoming: []
      }
    }
  }

  addTaskToState = (value) => {
    let category = this.props.category;
    let updateList = {...this.state.allTasks[category]}
    updateList["today"].push({
      id: this.state.idIndicator,
      name: value,
      category: category,
      completed: false
    })
    if(category === "personal"){
      this.setState({personal: updateList, idIndicator: this.state.idIndicator+1})
    } else if (category === "work") {
      this.setState({ work: updateList, idIndicator: this.state.idIndicator + 1 })
    } else if (category === "groceryList") {
      this.setState({ groceryList: updateList, idIndicator: this.state.idIndicator + 1 })
    }
  }

  onDeleteHandler = (id) => {
    let category = this.props.category;
    let updateList = { ...this.state.allTasks[category] }
    let index= -1;
    let indexReq = null;
    updateList["today"].forEach((eachTask) => {
      // console.log(eachTask)
      index++;
      if(eachTask.id === id){
        indexReq = index;
      }
    })

    updateList["today"].splice(indexReq, 1);
    
    if (category === "personal") {
      this.setState({ personal: updateList, idIndicator: this.state.idIndicator + 1 })
    } else if (category === "work") {
      this.setState({ work: updateList, idIndicator: this.state.idIndicator + 1 })
    } else if (category === "groceryList") {
      this.setState({ groceryList: updateList, idIndicator: this.state.idIndicator + 1 })
    }
  }

  toggleModal = () => {
    this.setState({showModal: !this.state.showModal});
  }

  render() {
    let stateAsProps ={...this.state.allTasks[this.props.category]};
    return (
      <div className='DashboardContent' >
        <Modal showModal = {this.state.showModal} closeModal={this.toggleModal}>
          <Form />
        </Modal>
        <ItemsList
          addButtonHandler={this.addTaskToState}
          currentState={stateAsProps}
          onDeleteHandler={this.onDeleteHandler}          
        />
        {/* <div>
        <Toolbar
          // onAddHandler={this.addItemHandler}
          addButtonHandler={this.props.addButtonHandler}
        />
      </div>   */}
        <Reminder toggleModal={this.toggleModal} />
      </div>
    )
  }
}

export default Dashboard
