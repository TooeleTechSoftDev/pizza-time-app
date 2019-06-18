import React, { Component } from 'react';
import '../css/main.css';

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
                    <div className="signup-info">
                    <label>Account Information:</label>
                    <input name="email" type="text" autofocus="autofocus" id="email" placeholder="Email"></input>
                    <input name="password" type="password" id="password" placeholder="Password"/>
                    <input name="password" type="password" id="password" placeholder="Re-enter Password"/>

                    <label>Personal Information:</label>
                    <input name="first name" type="text" autofocus="autofocus" className="fl-name" placeholder="First Name"/>
                    <input name="last name" type="text" autofocus="autofocus" className="fl-name" placeholder="Last Name" id="last-name"/>
                    <input name="phone number" type="text" autofocus="autofocus" className="fl-name" placeholder="(XXX-XXX-XXXX)"/>
                    <input name="last name" type="text" autofocus="autofocus" className="fl-name" placeholder="Zip Code" id="last-name"/>
                    <input name="address" type="text" autofocus="autofocus" className="fl-name" placeholder="Address"/>
                    <input name="State" type="text" autofocus="autofocus" className="fl-name" placeholder="State" id="last-name"/>

                    <input name="Creat Account" type="button" id="loginBtn" value="Create Account"/>
                        <span id="errMessage"></span>
                    <button type="submit" id="fake_submit" className="hidden"></button>
                    </div>
                    <label className="extra-info">
                        <a href="" id="create">Sign in </a>
                    </label>
                </form>
            </div>

        </div>
            
        
        )
    }
}


export default Signup;
