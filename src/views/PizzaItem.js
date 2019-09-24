import React from "react";
import "../css/PizzaItem.scss";

function PizzaItem(props) {
  function box(e) {
    console.log("THIS IS WORKING AS INTENDED");
    console.log(props.id);
  }
  return (
    <div className="PizzaList" onClick={box}>
      <img className="PizzaIMG" src={props.imgUrl} alt="PIZZA" />
      <h3 className="PizzaNAME">{props.title}</h3>
    </div>
  );
}

export default PizzaItem;
