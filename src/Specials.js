import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './css/main.css';

export default class Specials extends Component {

    constructor(props) {
        super(props)
    }

    render() {

        return (
        <div className="App" style={{backgroundColor: "#345eb5"}}>
          <span id="signin-link"><Link to= {"/signin"}>Sign in </Link></span>
      <header className="App-header">
        Today's Specials  
      </header>
       
      <div>
        Cheese
      </div>

      <div>
        Pepperoni
      </div>

      <div>
        Supreme
      </div>
      
    </div>
    )
    }
}


export {Link}