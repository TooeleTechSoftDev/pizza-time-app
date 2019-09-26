import React, { Component } from "react";
import "../css/PizzaItem.scss";
import ItemDetail from "./ItemDetail";

class PizzaItem extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="PizzaList" onClick={this.props.onClick}>
        <img className="PizzaIMG" src={this.props.imgUrl} alt="PIZZA" />
        <h3 className="PizzaNAME">{this.props.title}</h3>
        {this.props.expanded ? (
          <>
            <ItemDetail />
          </>
        ) : (
          <></>
        )}
      </div>
    );
  }
}

export default PizzaItem;
