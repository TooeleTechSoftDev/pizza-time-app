import React, { Component } from "react";
//import './deals.css';

export default class Favorites extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <h1
            style={{
              color: "black",
              border: "red 13px ridge",
              padding: "15px 25px",
              textAlign: "center"
            }}
          >
            {" "}
            Deals{" "}
          </h1>
        </header>

        <div>
          <h3
            style={{
              textAlign: "left",
              border: "ridge 20px",
              borderColor: "red",
              padding: "15px",
              margin: "40px"
            }}
          >
            Deal 1
          </h3>
          <p style={{ textAlign: "left", borderBottom: "solid 5px" }}>
            This is the first deal
          </p>
        </div>

        <div>
          <h3
            style={{
              textAlign: "left",
              border: "ridge 20px",
              borderColor: "red",
              padding: "15px",
              margin: "40px"
            }}
          >
            Deal 2
          </h3>
          <p style={{ textAlign: "left", borderBottom: "solid 5px" }}>
            This is the second deal
          </p>
        </div>

        <div>
          <h3
            style={{
              textAlign: "left",
              border: "ridge 20px",
              borderColor: "red",
              padding: "15px",
              margin: "40px"
            }}
          >
            Deal 3
          </h3>
          <p style={{ textAlign: "left", borderBottom: "solid 5px" }}>
            This is the third deal
          </p>
        </div>
      </div>
    );
  }
}
