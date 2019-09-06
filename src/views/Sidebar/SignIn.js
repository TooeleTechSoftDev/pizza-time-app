import React, { Component } from "react";
import "../../css/SignIn.scss";
import "../../css/checkbox.scss";

class SignIn extends Component {
  render() {
    return (
      <div id="outer">
        <form className="formwrap">
          <div className="emailbox">
            <div className="iconback">
              <i className="fa fa-envelope"></i>
            </div>
            <input
              type="email"
              className="email"
              placeholder="Enter your Email"
              style={{ fontSize: "40px" }}
            />
          </div>
          <div className="passbox">
            <div className="iconback">
              <i className="fa fa-key"></i>
            </div>
            <input
              type="password"
              className="password"
              placeholder="Enter your Password"
              style={{ fontSize: "40px" }}
            />
          </div>
          <div className="smlbuttons">
            <div className="page__toggle">
              <label className="toggle">
                <input className="toggle__input" type="checkbox" />
                <span className="toggle__label">
                  <span className="toggle__text">Keep me logged in</span>
                </span>
              </label>
            </div>
            <div>
              <span
                onClick={this.props.handleChoice.bind(this, "createaccount")}
                className="toggle__text"
                id="toggletext2"
              >
                Create a new account
              </span>
            </div>
          </div>
        </form>
        <div id="redbutton">
          <button className="redbutton" type="button">
            Sign in
          </button>
        </div>
      </div>
    );
  }
}

export default SignIn;
