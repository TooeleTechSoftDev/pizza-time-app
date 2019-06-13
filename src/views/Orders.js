import React, { Component } from 'react';
import './Orders.css';

export default class Specials extends Component {

    constructor(props) {
        super(props)
    }

    render() {

        return (
        <div >
      <header className="App-header">
        <t1>Order</t1>
      </header>
       
      <div class="ListItem">
        <img class="itemimg" src="../../image/chzpizza.jpg" alt="chzpizza.jgp" width="160"/>
        <t3>Cheese Pizza</t3>
        <t4 class="ItemCount">x2</t4>
        <t4 class="ItemCost">$19.99</t4>
        <p>The best cheese pizza to ever exist 
          ever in the history of ever!</p>
        <t7 class="cancelItem">X</t7>
      </div>

      <div>
      <t3>Breadsticks</t3>
      <t4>$6.99</t4>
      <t4>x2</t4>
      <p>Its bread! And it's a stick! the breadiest stick ever!</p>
      <t5>X</t5>
      </div>

      <div>
      <t3>20oz. Coke</t3>
      <t4>$5.07</t4>
      <t4>x5</t4>
      <p>More Coke!</p>
      <t5>X</t5>
      </div>

      <div>
        <t2>Proceed to checkout---</t2>
        <t2>Total: 80.76</t2>
      </div>

    </div>
    )
    }
}


