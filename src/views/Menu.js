import React, { Component } from "react";
//import './deals.css';

import { pizzaTimeServer } from "../helpers/pizzaapi";

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = { page: { title: "", description: "" } };
    pizzaTimeServer.fetchPage(1, pageJSON => this.setState({ page: pageJSON }));
  }

  render() {
    return (
      <div>
        <div>{this.state.page.description}</div>
        <div className="special">
          <h2 className="SpecialName">LARGE 18" SUPREME</h2>
          <h3 className="SpecialCost">ONLY $7.98</h3>
          <img className="SpecialIMG" src="image/special.jpg" alt="Special" />
        </div>
        <div className="nav">
          <h4 className="PIZZA">PIZZA</h4>
          <h4 className="SIDES">SIDES</h4>
          <h4 className="DESSERTS">DESSERTS</h4>
          <h4 className="DRINKS">DRINKS</h4>
          <h4 className="EXTRA">EXTRA</h4>
        </div>
        <div>
          <center>
            <h2 className="POP"> Popular Pizza</h2>
          </center>
        </div>
        <div className="PizzaList">
          <img className="PizzaIMG" src="image/CHZ.jpg" alt="PIZZA" />
          <h3 className="PizzaNAME">Cheese</h3>
        </div>
        <div className="PizzaList">
          <img className="PizzaIMG" src="image/PEP.jpg" alt="PIZZA" />
          <h3 className="PizzaNAME">Pepperoni</h3>
        </div>
        <div className="PizzaList">
          <img className="PizzaIMG" src="image/SUP.jpg" alt="PIZZA" />
          <h3 className="PizzaNAME">Vegetarian</h3>
        </div>
        <div className="PizzaList">
          <img className="PizzaIMG" src="image/EH.jpg" alt="PIZZA" />
          <h3 className="PizzaNAME">Hawaiian</h3>
        </div>
      </div>
    );
  }
}
