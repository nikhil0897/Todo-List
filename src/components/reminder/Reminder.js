import React, { Component } from "react";
import "./Reminder.css";

export class Reminder extends Component {
  render() {
    return (
      <div className="showReminder">
        <div className="addReminder" style={{ marginLeft: "24px" }} onClick={this.props.toggleModal}>
          <i class="far fa-clock" style={{ paddingTop: "20px" }} />
          <p>Add Reminder</p>
        </div>
        <div className="addReminder">
          <i class="far fa-user" style={{ paddingTop: "20px" }} />
          <p>Share Task</p>
        </div>
        <div className="addReminder">
          <i class="far fa-file-alt" style={{ paddingTop: "20px" }} />
          <p>Personal</p>
        </div>
      </div>
    );
  }
}

export default Reminder;
