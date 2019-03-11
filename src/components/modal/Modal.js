import React from "react";
import "./Modal.css";
import BackDrop from "../back-drop/Backdrop";

export default function Modal(props) {
  return props.showModal ? (
    <div className="reminderModal">
      <BackDrop show={props.showModal} closeModal={props.closeModal} />
      {props.children}
    </div>
  ) : null;
}
