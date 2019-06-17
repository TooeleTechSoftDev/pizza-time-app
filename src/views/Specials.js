import React, { Component } from 'react';
import './Specials.css';

export default class Specials extends Component {

    constructor(props) {
        super(props)
    }

    render() {

        return (
        <div className="App" style={{backgroundColor: "#345eb5"}}>
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


