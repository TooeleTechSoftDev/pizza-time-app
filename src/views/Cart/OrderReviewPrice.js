import React, { Component } from "react";

class OrderReviewPrice extends Component {
  render() {
    return (
      <div className="order-review-price">
        <div className="left-review-title">
          <span style={{ fontSize: "35px" }}>Coupon code:</span>
          <span>Subtotal:</span>
          <span>Delivery Fee:</span>
          <span>Tax:</span>
          <span>Your Total:</span>
        </div>
        <div className="right-review-price">
          <form>
            <input type="text" style={{ fontSize: "35px" }}></input>
            <span>${this.props.subtotal}</span>
            <span>${this.props.delivery}</span>
            <span>${this.props.tax}</span>
            <span>${this.props.total}</span>
          </form>
        </div>
      </div>
    );
  }
}

export default OrderReviewPrice;
