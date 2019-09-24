import React, { Component } from "react";
// Load in other views here
import OrderForm from "./views/OrderForm";
import Specials from "./views/Specials";
import Accounts from "./views/Accounts";
import Menu from "./views/Menu";
import Favorites from "./views/Favorites";
import Orders from "./views/Orders";
import ItemDetail from "./views/ItemDetail";
import SideBar from "./Sidebar";
import SignIn from "./views/Sidebar/SignIn";
import CreateAccount from "./views/Sidebar/CreateAccount";
import ChangeStore from "./views/Sidebar/ChangeStore";
import AccountInfo from "./views/Sidebar/AccountInfo";
import About from "./views/Sidebar/About";
import ContactUs from "./views/Sidebar/ContactUs";
import OrderReview from "./views/Cart/OrderReview";
import "../src/css/App.scss";

// Very simple layout for now; Eventually need to set up navigation
class App extends Component {
  constructor(props) {
    super(props);

    this.state = { viewShowing: "menu", itemId: "1000" };

    this.handleChoice = this.handleChoice.bind(this);
    //this.handleMenuItem = this.handleMenuItem.bind(this);
  }

  handleChoice(choice) {
    console.log("choice clicked: ", choice);
    this.setState({ viewShowing: choice });
  }

  handleMenuItem(itemId) {
    console.log("item chosen: ", itemId);
    this.setState({ viewShowing: "itemDetail", itemId });
  }
  render() {
    // See https://stackoverflow.com/questions/37782776/using-for-loops-and-switch-cases-in-react-to-dynamically-render-different-compon
    // for questions regarding the use of an object enumeration as a cheap "switch" statement
    return (
      <div className="Maindiv">
        <header>
          <img src="image/logo.jpg" alt="Logo" width="200px" height="70px" />
        </header>

        <div className="App">
          {
            {
              specials: (
                <Specials
                  clickFunc={this.handleChoice.bind(this, "itemDetail")}
                />
              ),
              orders: <Orders />,
              orderForm: <OrderForm />,
              menu: <Menu />,
              favorites: <Favorites />,
              account: <Accounts />,
              itemDetail: <ItemDetail />,
              sidebar: <SideBar handleChoice={this.handleChoice} />,
              signin: <SignIn handleChoice={this.handleChoice} />,
              createaccount: <CreateAccount handleChoice={this.handleChoice} />,
              accountinfo: <AccountInfo handleChoice={this.handleChoice} />,
              changestore: <ChangeStore handleChoice={this.handleChoice} />,
              about: <About handleChoice={this.handleChoice} />,
              contactus: <ContactUs handleChoice={this.handleChoice} />,
              orderreview: <OrderReview handleChoice={this.handleChoice} />
            }[this.state.viewShowing]
          }
        </div>
        <footer>
          <div
            onClick={this.handleChoice.bind(this, "menu")}
            className="navbar"
          >
            <i className="fa fa-home">
              <br />
              <p>Home</p>
            </i>
          </div>
          <div
            onClick={this.handleChoice.bind(this, "specials")}
            className="navbar"
          >
            <i className="fa fa-usd">
              <br />
              <p>Specials</p>
            </i>
          </div>
          <div
            onClick={this.handleChoice.bind(this, "orderreview")}
            className="navbar"
          >
            <i className="fa fa-star">
              <br />
              <p>Favorites</p>
            </i>
          </div>
          <div
            onClick={this.handleChoice.bind(this, "sidebar")}
            className="navbar"
          >
            <i className="fa fa-bars" id="Hamburger" />
          </div>
        </footer>
      </div>
    );
  }
}

// This should be available from the account page
//       <button onClick={this.handleChoice.bind(this, "orders")}>Orders</button>

export default App;
