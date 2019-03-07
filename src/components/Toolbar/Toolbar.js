import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Toolbar.css';

class Toolbar extends Component {
  state={
    itemName: ""
  }

  // static propTypes = {
  //   onAddHandler: PropTypes.func
  // };


  inputHandler(value) {
    this.setState({
      itemName: value
    });
  }

  render() {
    return (
      <div className="toolbar-section">
        <input
          className="toolbar-section__input"
          type="text"
          placeholder="Type the item"
          value={this.state.itemName}
          onChange={e => {
            this.inputHandler(e.target.value);
          }}
        />
        <i class="fas fa-arrow-circle-down fa-2x" style={{ color: '#a4a4a4', cursor: 'pointer', marginRight: '10px' }}
          disabled={!this.state.itemName}
          onClick={(event) => this.props.addButtonHandler(this.state.itemName)}></i>
      </div>
    );
  }
}

export default Toolbar;
