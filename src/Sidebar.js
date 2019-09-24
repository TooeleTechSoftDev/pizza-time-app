import React, { Component } from "react";
import "./Sidebar.css";

class Sidebar extends Component {
  render() {
    return (
      <div className="options">
        <span onClick={this.props.handleChoice.bind(this, "signin")}>
          Sign In
        </span>
        <span onClick={this.props.handleChoice.bind(this, "createaccount")}>
          Create Account
        </span>
        <span onClick={this.props.handleChoice.bind(this, "accountinfo")}>
          Account Info
        </span>
        <span onClick={this.props.handleChoice.bind(this, "changestore")}>
          Change Store
        </span>
        <span onClick={this.props.handleChoice.bind(this, "orderreview")}>
          Order Review
        </span>
        <div className="line">
          <hr></hr>
        </div>
        <div className="extra">
          <span onClick={this.props.handleChoice.bind(this, "about")}>
            About
          </span>
          <span onClick={this.props.handleChoice.bind(this, "contactus")}>
            Contact Us
          </span>
        </div>
      </div>
    );
  }
}

export default Sidebar;
