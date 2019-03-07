import React, { Component } from "react";
import Item from "../Item/Item";
import Toolbar from "../Toolbar/Toolbar";

import "./ItemsList.css";

class ItemList extends Component {
  // state = {
  //   items: {}
  // };

  // addItemHandler = itemName => {
  //   this.setState({
  //     items: {
  //       ...this.state.items,
  //       [+new Date()]: itemName
  //     }
  //   });
  // };

  // onDeleteHandler = itemKey => {
  //   let newStateItems = { ...this.state.items };

  //   delete newStateItems[itemKey];

  //   this.setState({
  //     items: {
  //       ...newStateItems
  //     }
  //   });
  // };

  render() {
    const itemsList = (Object.keys(this.props.currentState).map( list => {
        return this.props.currentState[list].map(eachItem => {
          console.log(eachItem);
          return (
            <Item
              name={eachItem.name}
              onDelete={() => {
                this.props.onDeleteHandler(eachItem.id);
              }}
            />
          );
        })
      
    }));

    return (
      <div className="items-section">
        <div className="TaskDay">
          <h2>Today</h2>
        </div>
        {itemsList}
        <div className="TaskDay">
          <h2>Tomorrow</h2>
        </div>
        <div className="TaskDay">
          <h2>Upcoming</h2>
        </div>
        <div className="TaskDay">
          <h2>Someday</h2>
        </div>
        <Toolbar 
          // onAddHandler={this.addItemHandler}
          addButtonHandler={this.props.addButtonHandler}
         />
        
      </div>
    );
  }
}

export default ItemList;
