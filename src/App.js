import React, { Component } from 'react';
// Load in other views here
import OrderForm from './views/OrderForm'
import Specials from './views/Specials'
import Accounts from './views/Accounts'
import Deals from './views/deals'
import Orders from './views/Orders'
import Signin from './views/signin'
import ItemDetail from './views/ItemDetail'
import './App.css'

// Very simple layout for now; Eventually need to set up navigation
class App extends Component {

  constructor(props) {
    super(props)

    this.state = { viewShowing: "specials"}

    this.handleChoice = this.handleChoice.bind(this)

  }

  handleChoice(choice) {
    console.log("choice clicked: ", choice)
    this.setState({ viewShowing: choice })
  }

  render() { 

    // See https://stackoverflow.com/questions/37782776/using-for-loops-and-switch-cases-in-react-to-dynamically-render-different-compon
    // for questions regarding the use of an object enumeration as a cheap "switch" statement
  return (
    <div className="App"  style={{backgroundColor: "#345eb5"}}>
    {{
      "specials": (<Specials clickFunc={this.handleChoice.bind(this,"itemDetail")}/>),
      "orders": (<Orders />),
      "orderForm": (<OrderForm />),
      "deals": (<Deals />),
      "account": (<Accounts />),
      "signin": (<Signin />),
      "itemDetail": (<ItemDetail />),
    }[this.state.viewShowing]
    }
      <div style={{height: 50, minWidth: "100vw"}}>
      <button onClick={this.handleChoice.bind(this, "specials")}>Specials</button>
      <button onClick={this.handleChoice.bind(this, "orders")}>Orders</button>
      <button onClick={this.handleChoice.bind(this, "deals")}>Deals</button>
      <button onClick={this.handleChoice.bind(this, "account")}>Account</button>
      </div>
    </div>
  );
  }
}

export default App;
