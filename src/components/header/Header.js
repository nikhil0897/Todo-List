import React, { Component } from "react";
import "./Header.css";
import NavigationBarContent from '../navigation-bar/navigation-content/NavigationBarContent'
import Dashboard from "../dashboard/Dashboard";

export class Header extends Component {  
    render() {
    return (
        <div>
        <header className="HeaderContent">
          <div className="HeaderAdd">
            <i className="NavigationButton" class="fas fa-bars fa-2x" onClick={this.props.toggleNavigation} />
            <button className="HeaderAddNewTodo">+ New</button>
          </div>
          <div className="HeaderSettings">
            <div className="search">
              <input
                type="text"
                class="searchTerm"
                placeholder="What are you looking for?"
              />
              <button type="submit" class="searchButton">
                <i class="fa fa-search" />
              </button>
            </div>
                <i class="fas fa-cog fa-2x" style={{marginLeft: '6%'}}></i>
                <i class="fas fa-sync-alt fa-2x" style={{ marginLeft: '3%'}}></i>
            <i class="fas fa-shopping-cart fa-2x" style={{ marginLeft: '3%' }}></i>
            <i class="fas fa-comments fa-2x" style={{ marginLeft: '3%' }}></i>
          </div>
        </header>
        
        </div>
    );
  }
}

export default Header;
