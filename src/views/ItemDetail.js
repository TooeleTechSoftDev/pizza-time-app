import React, { Component } from "react";
import "../css/details.scss";
import Pizza from "../images/PizzaDetail.jpg";

export default class ItemDetail extends Component {
  constructor(props) {
    super(props);
    this.sizeArray = ["Small", "Medium", "Large", "Extra Large"];
    this.state = {
      clicks: 0,
      show: true,
      size: 1
    };
  }

  IncrementSize = () => {
    let size = this.state.size + 1;
    size = size < this.sizeArray.length ? size : this.sizeArray.length - 1;
    this.setState({ size });
  };
  DecreaseSize = () => {
    let size = this.state.size - 1;
    size = size >= 0 ? size : 0;
    this.setState({ size });
  };

  IncrementItem = () => {
    this.setState({ clicks: this.state.clicks + 1 });
  };
  DecreaseItem = () => {
    this.setState(prevState => ({
      clicks: prevState.clicks ? prevState.clicks - 1 : 0
    }));
  };

  ToggleClick = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    return (
      <div className="ItemContainer">
        <div className="header">
          <img className="PizzaPic" src={Pizza} alt="Supreme Pizza" />
          <div className="bottom-left">Supreme</div>
          <div className="bottom-left-lower">
            $13.50 320 cal / slice, 8 slices
          </div>
        </div>
        <div className="Detailcontainer">
          <div>
            <button onClick={this.ToggleClick}>
              {this.state.show ? "Hide number" : "Show number"}
            </button>
          </div>
          <div className="Detailtitle">Item Detail</div>
          <div className="Detailtext">
            Pepperoni, real cheese made from mozzarella, onion, mushroom, green
            bell pepper, sausage and black olive
          </div>
          <div className="pizzaSize">Pizza Size</div>
          <div className="ChoiceBar">
            <input
              onClick={this.DecreaseSize}
              type="button"
              value="-"
              className="minus"
            />
            {this.state.show ? (
              <span>{this.sizeArray[this.state.size]}</span>
            ) : (
              ""
            )}
            <input
              onClick={this.IncrementSize}
              type="button"
              value="+"
              className="plus"
            />
          </div>

          <div className="pizzaQuantity">Quantity</div>
          <div className="ChoiceBar">
            <input
              onClick={this.DecreaseItem}
              type="button"
              value="-"
              className="minus"
            />
            {this.state.show ? <span>{this.state.clicks}</span> : ""}
            <input
              onClick={this.IncrementItem}
              type="button"
              value="+"
              className="plus"
            />
          </div>
          <input type="button" value="Add to cart" className="addCart" />
        </div>
        <div className="cartcontainer">
          <p className="price">$26.99</p>
          <input type="button" value="View Your Order" className="ViewCart" />
          <div className="storeLoc">Store Location:</div>
          <div className="storeLoc2">3245 N 50 West</div>
        </div>
      </div>
    );
  }
}
