import React, { Component } from "react";
import Pizza from "../../images/PizzaDetail.jpg";
import { pizzaTimeServer } from "../../helpers/pizzaapi";

class Item extends Component {
  constructor(props) {
    super(props);
    this.sizeArray = ["Small", "Medium", "Large", "Extra Large"];
    this.pizzaArray = [
      "Meat Lovers",
      "Supreme",
      "Cheese",
      "Pepperoni",
      "Sausage",
      "BBQ Chicken",
      "BubbleGum",
      "Hawaiian"
    ];
    this.state = {
      clicks: 0,
      show: true,
      size: 1,
      current: 0,
      prodData: { name: "", size: "", description: "", price: 0, imgUrl: ""}
    };
  }

  componentDidMount() {
    pizzaTimeServer.fetchProduct(this.props.itemId, (prodData) => {
        this.setState({prodData})
    })
  }

  NextPizza = () => {
    let current = this.state.current + 1;
    current =
      current < this.sizeArray.length ? current : this.pizzaArray.length - 1;
    this.setState({ current });
  };

  PrevPizza = () => {
    let current = this.state.current - 1;
    current = current >= 0 ? current : 0;
    this.setState({ current });
  };

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

    let prodData = this.state.prodData

    return (
      <div className="ItemContainer" onClick={this.props.onClick}>
        <div className="header">
          <img className="PizzaPic" src={Pizza} alt="Supreme Pizza" />
          <div className="bottom-left">{prodData.name}</div>
          <div className="bottom-left-lower">{prodData.description}</div>
        </div>
        <div className="Detailcontainer">
          <div>
            <button onClick={this.ToggleClick}>
              {this.state.show ? "Hide number" : "Show number"}
            </button>
          </div>
          <div className="Detailtitle">{prodData.name}</div>
          
          <div className="Detailtext">
          {prodData.description}
          </div>
          {/* This changes the type of pizza that you are ordering with an array based on pizza clicked. */}
          <div className="pizzaSize">Pizza Size</div>
          <div className="ChoiceBar">
            <input
              onClick={this.PrevPizza}
              type="button"
              value="<"
              className="minus"
            />
            {this.state.show ? (
              <span>{this.pizzaArray[this.state.current]}</span>
            ) : (
              ""
            )}
            <input
              onClick={this.NextPizza}
              type="button"
              value=">"
              className="plus"
            />
          </div>
          {/* This changes the pizza Size and uses an array to slide through size. */}
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
          {/* This changes how many pizzas you are ordering. */}
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

export default Item;
