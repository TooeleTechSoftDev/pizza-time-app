import React, { Component } from "react";
import PWStrength from "./PasswordStrengthMeter";
import "../../css/CreateAccount.scss";

class CreateAccount extends Component {
  constructor(props) {
    super(props);

    this.state = {
      password: "",
      hidden: true,
      confirmPassword: ""
    };
    this.toggleShow = this.toggleShow.bind(this);
  }

  checkpassword(confirmPassword, password) {
    if (confirmPassword === password) {
      console.log("password is right");
    } else if (confirmPassword !== password) {
      console.log("passwords dont match");
    }
  }

  toggleShow(e) {
    e.preventDefault();
    this.setState({ hidden: !this.state.hidden });
  }

  render() {
    const { password } = this.state;
    return (
      <div id="Main">
        <div className="part1">
          <span>Personal Information</span>
          <input
            id="account"
            type="button"
            value="Have an account? Login."
            onClick={this.props.handleChoice.bind(this, "signin")}
          ></input>
          <form id="Form1">
            <input
              className="perinfo"
              type="text"
              placeholder="First Name"
            ></input>
            <input
              className="perinfo"
              type="text"
              placeholder="Last Name"
            ></input>
            <input className="perinfo" type="email" placeholder="Email"></input>
            <input
              className="perinfo"
              type="number"
              placeholder="Phone Numnber"
            ></input>
          </form>

          <div className="part2">
            <span>Create your Password</span>
            <form>
              <div>
                <input
                  autoComplete="off"
                  type={this.state.hidden ? "password" : "text"}
                  className="perinfo"
                  placeholder="Enter your password"
                  onChange={e => this.setState({ password: e.target.value })}
                ></input>
                <div className="meter">
                  <PWStrength password={password} />
                </div>
                <button className="ShowBtn" onClick={this.toggleShow}>
                  Show / Hide Password
                </button>
              </div>
              <input
                autoComplete="off"
                type={this.state.hidden ? "password" : "text"}
                className="perinfo"
                placeholder="Re-enter your password"
                onChange={this.checkpassword}
              ></input>
            </form>
          </div>
        </div>
        <div id="redbutton">
          <button className="redbutton" type="button">
            Create Account
          </button>
        </div>
      </div>
    );
  }
}

export default CreateAccount;
