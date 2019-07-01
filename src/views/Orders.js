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
        <t3 class="ItemName">Cheese Pizza</t3>
        <t4 class="ItemCost">$19.99</t4>
        <t4 class="ItemCount">x2</t4>
        <p>The best cheese pizza to ever exist 
          ever in the history of ever!</p>
        <t7 class="cancelItem">X</t7>
      </div>

      <div class="ListItem">
        <img class="itemimg" src="../../image/bread.jpeg" alt="breadstick" width="160"/>
        <t3 class="ItemName">Breadsticks</t3>
        <t4 class="ItemCost">$6.99</t4>
        <t4 class="ItemCount">x2</t4>
        <p>Its bread! And it's a stick! The breadiest stick ever!</p>
        <t7 class="cancelItem">X</t7>
      </div>

      <div class="ListItem">
        <img class="itemimg" src="../../image/coke.jpg" alt="coke" width="160"/>
        <t3 class="ItemName">20oz. Coke</t3>
        <t4 class="ItemCost">$5.07</t4>
        <t4 class="ItemCount">x5</t4>
        <p>More Coke! More Coke!More Coke! More Coke! More Coke! More Coke!</p>
        <t7 class="cancelItem">X</t7>
      </div>

      <div class="TotalBox">
        <t2 class="checkout">Proceed to checkout</t2>
        <t2 class="Total">Total: 80.76</t2>
      </div>

    </div>
    )
    }
}


