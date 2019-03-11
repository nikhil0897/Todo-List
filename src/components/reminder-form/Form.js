import React, { Component } from "react";

export class Form extends Component {
  render() {
    return (
      <div>
        <div
          id="myModal"
          class="modal hide fade"
          tabindex="-1"
          role="dialog"
          aria-labelledby="myModalLabel"
          aria-hidden="true"
        >
          <div class="modal-header">
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-hidden="true"
            >
              ×
            </button>
            <h3 id="myModalLabel">Modal header</h3>
          </div>
          <div class="modal-body">
            <div id="datetimepicker1" class="input-append date">
              <input data-format="dd/MM/yyyy hh:mm:ss" type="text" />
              <span class="add-on">
                <i data-time-icon="icon-time" data-date-icon="icon-calendar" />
              </span>
            </div>
          </div>
          <div class="modal-footer">
            <button class="btn" data-dismiss="modal" aria-hidden="true">
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Form;
