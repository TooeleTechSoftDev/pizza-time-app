import React, { Component } from "react";
import "../../css/OrderReview.scss";
import ReviewComponents from "./ReviewComponents";
import ReviewPrice from "./OrderReviewPrice";

class OrderReview extends Component {
  addTotal(Total, subprice, tax, delivery) {
    Total = subprice + tax + delivery;
  }
  render() {
    return (
      <div>
        <div className="Order-box">
          <div className="Order-boxes" id="redbox">
            Order Review
          </div>
          <span className="icon-arrow">
            <i className="fa fa-caret-right"></i>
          </span>
          <div className="Order-boxes">Delivery</div>
          <span className="icon-arrow">
            <i className="fa fa-caret-right"></i>
          </span>
          <div className="Order-boxes">Payment</div>
        </div>
        <ReviewComponents
          img="../image/PEP.jpg"
          prodname="Pepperoni"
          price="0.00"
        />
        <ReviewComponents
          img="../image/CHZ.jpg"
          prodname="Cheeze"
          price="0.00"
        />
        <ReviewPrice
          subtotal={"122"}
          tax={"21"}
          delivery={"12"}
          total={"100"}
        />
      </div>
    );
  }
}

export default OrderReview;
