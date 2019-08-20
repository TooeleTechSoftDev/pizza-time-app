import React, { Component } from "react";
//import "./Accounts.css";

export default class Specials extends Component {
  render() {
    return (
      <div>
        <header className="Accounts-header">Your account</header>

        <div>Street name</div>

        <div className="Accounts-previousorders">
          Previous orders <br />
          <img
            src="https://www.qsrmagazine.com/sites/default/files/styles/story_page/public/phut_0.jpg?itok=Bzo3z1cD"
            width="80"
            alt="something was here"
          />
          <h4>Pepperoni pizza</h4>
        </div>

        <div>Change password</div>
      </div>
    );
  }
}
