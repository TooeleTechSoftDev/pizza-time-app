import React, { Component } from "react";

class ReviewComponents extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clicks: 1,
      show: true,
      size: 1,
      PepPrice: 10.99
    };
  }
  //Increase or decrease both counters at the same time
  IncrementOrder = () => {
    this.IncrementItem();
    this.IncrementPep();
  };

  DecreaseOrder = () => {
    this.DecreaseItem();
    this.DecreasePep();
  };

  IncreaseQP = () => {
    let QtyPrice = 10.99;

    return QtyPrice;
  };

  DecreaseQP = () => {
    let QtyPrice = 10.99;

    return QtyPrice;
  };

  // Changes the pizza price
  IncrementPep = () => {
    this.setState({
      PepPrice: this.state.PepPrice + this.IncreaseQP()
    });
  };

  DecreasePep = () => {
    this.setState(prevState => ({
      PepPrice: Math.max(prevState.PepPrice - 10.99, 0)
    }));
  };
  // Changes Qty Counter
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
      <div className="maindiv">
        {/* This indicates where you are in the purchasing process */}
        <div className="Review-container">
          <div className="Review-box">
            <div className="left-review">
              <span className="title">Your Order:</span>
              <div>
                <img src={this.props.img} alt="Pep pizza" />
                <span className="item-name">
                  {this.props.prodname} <br />
                  Pizza
                </span>
              </div>
            </div>
            <div className="right-review">
              <div className="Qty">
                <span>Qty</span>
                {this.state.show ? <button>{this.state.clicks}</button> : ""}
              </div>
              <div className="btn">
                <button id="btn1" onClick={this.IncrementOrder}>
                  <i className="fa fa-caret-right"></i>
                </button>
                <button id="btn2" onClick={this.DecreaseOrder}>
                  <i className="fa fa-caret-right"></i>
                </button>
              </div>
              <span id="price">${this.state.PepPrice.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ReviewComponents;
