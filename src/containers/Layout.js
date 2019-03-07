import React, { Component } from "react";
import Header from '../components/header/Header';
import NavigationBarContent from "../components/navigation-bar/navigation-content/NavigationBarContent";
import Dashboard from "../components/dashboard/Dashboard";

export class Layout extends Component {
  state = {
    showNavigationBar: false,
    currentCategory: "personal"
  };
  toggleNavigation = () => {
    this.setState({ showNavigationBar: !this.state.showNavigationBar });
  };

  updateCategory = (category) => {
    console.log(category);
    this.setState({currentCategory: category});
  }

  render() {
    return (
      <div>
        <Header toggleNavigation={this.toggleNavigation} />
        {this.state.showNavigationBar ? <NavigationBarContent 
          updateCategory={this.updateCategory}
        /> : null}
        <Dashboard category={this.state.currentCategory}/>
      </div>
    );
  }
}

export default Layout;