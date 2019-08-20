import React from "react";

class OrderForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      payOnPickup: false,
      cvv: "",
      cardNumber: "",
      expiryDate: "",
      name: "",
      addr1: "",
      addr2: "",
      zip: "",
      city: "",
      state: "",
      phone: ""
    };
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
    console.log(this.state);
  };

  handleSubmit = event => {
    event.preventDefault();
  };

  render() {
    return (
      <div className="orderForm">
        <form id="orderForm">
          <label htmlFor="orderName">
            name
            <input
              name="orderName"
              type="text"
              onChange={this.handleChange}
              value={this.state.name}
            />
          </label>

          <label htmlFor="orderPayOnPickup">
            pay at store
            <input
              name="orderPayOnPickup"
              type="radio"
              onChange={this.handleChange}
              value={this.state.payOnPickup}
            />
          </label>

          <label htmlFor="orderCard">
            card number
            <input
              name="orderCard"
              type="number"
              onChange={this.handleChange}
              value={this.state.cardNumber}
            />
          </label>

          <label htmlFor="orderCVV">
            security code
            <input
              name="orderCVV"
              type="number"
              onChange={this.handleChange}
              value={this.state.cvv}
            />
          </label>

          <label htmlFor="orderExpiryDate">
            expiration date
            <input
              name="orderExpiryDate"
              type="month"
              onChange={this.handleChange}
              value={this.state.expiryDate}
            />
          </label>

          <label htmlFor="orderAddrLn1">
            address line 1
            <input
              name="orderAddrLn1"
              type="text"
              onChange={this.handleChange}
              value={this.state.addr1}
            />
          </label>

          <label htmlFor="orderAddrLn2">
            address line 2
            <input
              name="orderAddrLn2"
              type="text"
              onChange={this.handleChange}
              value={this.state.addr2}
            />
          </label>

          <label htmlFor="orderCity">
            city
            <input
              name="orderCity"
              type="text"
              onChange={this.handleChange}
              value={this.state.city}
            />
          </label>

          <label htmlFor="orderState">
            state
            <input
              name="orderState"
              type="text"
              onChange={this.handleChange}
              value={this.state.state}
            />
          </label>

          <label htmlFor="orderZip">
            zip
            <input
              name="orderZip"
              type="number"
              onChange={this.handleChange}
              value={this.state.zip}
            />
          </label>

          <label htmlFor="orderPhone">
            phone
            <input
              name="orderPhone"
              type="tel"
              onChange={this.handleChange}
              value={this.state.phone}
            />
          </label>

          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}

// class OrderFinal extends React.Component{
//     render(){
//         return(
//             <div className="blue div">
//                 <div className="white div">
//                     <h2>Your order has been recieved. Thank you.</h2>
//                 </div>
//             </div>
//         )
//     }
// }

export default OrderForm;
