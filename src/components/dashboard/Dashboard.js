import React, { Component } from "react";
import ItemsList from "../items-list/ItemsList";
import "./Dashboard.css";
import Reminder from "../reminder/Reminder";

export class Dashboard extends Component {
  state = {
    showModal: false,
    idIndicator: 1,
    currentTask: "",
    currentCategory: "",
    allTasks: {
      personal: {
        today: [
          {
            name: "This is a todo",
            reminder: ""
          }
        ],
        tomorrow: [],
        someday: [],
        upcoming: []
      },
      work: {
        today: [
          {
            name: "This is official",
            reminder: ""
          }
        ],
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
  };

  addTaskToState = value => {
    let category = this.props.category;
    let updateList = { ...this.state.allTasks[category] };
    updateList["today"].push({
      id: this.state.idIndicator,
      name: value,
      category: category,
      completed: false,
      reminder: ""
    });
    if (category === "personal") {
      this.setState({
        personal: updateList,
        idIndicator: this.state.idIndicator + 1
      });
    } else if (category === "work") {
      this.setState({
        work: updateList,
        idIndicator: this.state.idIndicator + 1
      });
    } else if (category === "groceryList") {
      this.setState({
        groceryList: updateList,
        idIndicator: this.state.idIndicator + 1
      });
    }
  };

  onDeleteHandler = id => {
    let category = this.props.category;
    let updateList = { ...this.state.allTasks[category] };
    let index = -1;
    let indexReq = null;
    updateList["today"].forEach(eachTask => {
      // console.log(eachTask)
      index++;
      if (eachTask.id === id) {
        indexReq = index;
      }
    });

    updateList["today"].splice(indexReq, 1);

    if (category === "personal") {
      this.setState({
        personal: updateList,
        idIndicator: this.state.idIndicator + 1
      });
    } else if (category === "work") {
      this.setState({
        work: updateList,
        idIndicator: this.state.idIndicator + 1
      });
    } else if (category === "groceryList") {
      this.setState({
        groceryList: updateList,
        idIndicator: this.state.idIndicator + 1
      });
    }
  };

  // toggleModal = () => {
  //   this.setState({showModal: !this.state.showModal});
  // }
  setReminder = dateTime => {
    // console.log(dateTime);
    let id = this.state.idIndicator;
    let type = this.props.category;
    this.setState({
      // todos: this.state.allTasks[type].today.map(todo => {
      //   if (todo.id === id) {
      //     todo.reminder = JSON.stringify(dateTime);
      //   }
      //   return todo;
      // })
    });
  };

  showAddReminder = name => {
    console.log(this.state.category);
    this.setState({ currentTask: name });
  };

  render() {
    let stateAsProps = { ...this.state.allTasks[this.props.category] };
    return (
      <div className="DashboardContent">
        <ItemsList
          addButtonHandler={this.addTaskToState}
          currentState={stateAsProps}
          onDeleteHandler={this.onDeleteHandler}
          showAddReminder={this.showAddReminder}
        />
        {/* <div>
        <Toolbar
          // onAddHandler={this.addItemHandler}
          addButtonHandler={this.props.addButtonHandler}
        />
      </div>   */}
        {this.state.currentTask ? (
          <Reminder setReminder={this.setReminder} state={this.state} />
        ) : null}
      </div>
    );
  }
}

export default Dashboard;
