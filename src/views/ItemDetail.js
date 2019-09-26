import React, { Component } from "react";
import "../css/details.scss";
import Item from "./DetailPages/Item";

export default class ItemDetail extends Component {
  render() {
    return (
      <Item
        pizzaTitle="Supreme"
        pizzaDetail="$13.50 320 cal / slice, 8 slices"
        itemId={this.props.data.itemId}
      />
    );
  }
}
