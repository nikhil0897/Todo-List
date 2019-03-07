import React, { Component } from 'react'
import ItemsList from '../ItemsList/ItemsList';
import './Dashboard.css'

export class Dashboard extends Component {

  state = {
    idIndicator: 1,
    allTasks:{
      personal: {
        today: [],
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
    console.log(value);
    let category = this.props.category;
    let updateList = {...this.state.allTasks[category]}
    console.log(updateList);
    updateList["today"].push({
      id: this.state.idIndicator,
      name: value,
      category: category
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
    console.log(updateList);
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

  render() {
    console.log(this.state);
    let stateAsProps ={...this.state.allTasks[this.props.category]};
    return (
      <div className='DashboardContent'>
        <ItemsList
          addButtonHandler={this.addTaskToState}
          currentState={stateAsProps}
          onDeleteHandler={this.onDeleteHandler}
        />
      </div>
    )
  }
}

export default Dashboard
