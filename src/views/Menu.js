import React, { Component } from "react";
import { Tabs, TabList, TabPanel, Tab } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { pizzaTimeServer } from "../helpers/pizzaapi";
import PizzaItem from "./PizzaItem";

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = { page: { title: "", description: "" }, tabIndex: 0 };
    pizzaTimeServer.fetchPage(1, pageJSON => this.setState({ page: pageJSON }));
    this.handleChoice = this.props.handleChoice.bind(this);
  }

  render() {
    return (
      <div>
        {/* <div>{this.state.page.description}</div> */}
        <div className="special">
          <h2 className="SpecialName">LARGE 18" SUPREME</h2>
          <h3 className="SpecialCost">ONLY $7.98</h3>
          <img className="SpecialIMG" src="image/special.jpg" alt="Special" />
        </div>
        <div>
          <Tabs
            selectedIndex={this.state.tabIndex}
            onSelect={tabIndex => this.setState({ tabIndex })}
          >
            <TabList className="nav">
              <Tab className="PIZZA">PIZZA</Tab>
              <Tab className="PIZZA">SIDES</Tab>
              <Tab className="PIZZA">DESSERTS</Tab>
              <Tab className="PIZZA">DRINKS</Tab>
              <Tab className="PIZZA">EXTRA</Tab>
            </TabList>
            <TabPanel>
              <div className="wrapdiv">
                <h2 className="PopularTitle">Popular Pizza</h2>
                <PizzaItem
                  imgUrl="image/CHZ.jpg"
                  title="Cheese"
                  id="1"
                  onClick={() => {
                    this.handleChoice("itemDetail", {
                      itemId: 789
                    });
                  }}
                />
                <PizzaItem
                  imgUrl="image/SUP.jpg"
                  title="Veggie"
                  id="2"
                  onClick={() => {
                    this.handleChoice("itemDetail", {
                      itemId: 123
                    });
                  }}
                />
                <PizzaItem
                  imgUrl="image/CHZ.jpg"
                  title="Cheese"
                  id="3"
                  onClick={() => {
                    this.handleChoice("itemDetail", {
                      itemId: 1024
                    });
                  }}
                />
                <PizzaItem
                  imgUrl="image/SUP.jpg"
                  title="Veggie"
                  id="4"
                  onClick={() => {
                    this.handleChoice("itemDetail", {
                      itemId: 154
                    });
                  }}
                />
                <PizzaItem
                  imgUrl="image/CHZ.jpg"
                  title="Cheese"
                  id="5"
                  onClick={() => {
                    this.handleChoice("itemDetail", {
                      itemId: 132
                    });
                  }}
                />
              </div>
            </TabPanel>
            <TabPanel>
              {" "}
              <PizzaItem imgUrl="image/CHZ.jpg" title="Cheese" />
              <PizzaItem imgUrl="image/PEP.jpg" title="Veggie" />
            </TabPanel>
            <TabPanel>
              {" "}
              <PizzaItem imgUrl="image/CHZ.jpg" title="Cheese" />
              <PizzaItem imgUrl="image/SUP.jpg" title="Veggie" />
            </TabPanel>
            <TabPanel>
              {" "}
              <PizzaItem imgUrl="image/CHZ.jpg" title="Cheese" />
              <PizzaItem imgUrl="image/PEP.jpg" title="Veggie" />
            </TabPanel>
            <TabPanel>
              {" "}
              <PizzaItem imgUrl="image/CHZ.jpg" title="Cheese" />
              <PizzaItem imgUrl="image/SUP.jpg" title="Veggie" />
            </TabPanel>
          </Tabs>
        </div>
      </div>
    );
  }
}
