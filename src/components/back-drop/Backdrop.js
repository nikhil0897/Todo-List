import React from 'react'
import './Backdrop.css'

export default function Backdrop(props) {
    console.log(props.show);
  return props.show ? <div className="Backdrop" onClick={props.closeModal}></div> : null;
}
