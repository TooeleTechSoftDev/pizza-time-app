import React, { Component } from "react";
//import './css/main.css';

class Signup extends Component {
  render() {
    return (
      <div id="loginPage" className="page-wrap active">
        {/* <div id="i">
            <div>i</div>
                <span>The password is secret</span>
            </div> */}
        <div id="login-wrapper">
          <form action="blank" method="post" target="remember" id="fields">
            <label for="username">Username:</label>
            <input
              name="username"
              type="text"
              autofocus="autofocus"
              id="username"
              placeholder="Username"
            />
            <label for="password">Password:</label>
            <input
              name="password"
              type="password"
              id="password"
              placeholder="**********"
            />
            <input name="login" type="button" id="loginBtn" value="Login" />
            <span id="errMessage" />
            <button type="submit" id="fake_submit" className="hidden" />
            <label className="extra-info">
              <a href="" id="create">
                Create Account
              </a>
              <a href="" id="forgot-password">
                Forgot Password?
              </a>
            </label>
          </form>
        </div>
      </div>
    );
  }
}

export default Signup;
