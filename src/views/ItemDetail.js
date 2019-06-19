import React, { Component } from 'react';

export default class ItemDetail extends Component {

    constructor(props) {
        super(props)
    }

    render() {

        return (
    <div style={{display:"block",backgroundColor: "#345eb5", margin:"auto"}}>
      <header className="App-header" style={{color:"red", margin:"auto", width:"200px",  background:"white"}} >
          <h1>Cheese Pizza</h1>
      </header>
       
      
      <div>
        <a id="cheesePizzaImg">
        <img src="./images/Cheese Pizza.jpg" alt="  " style={{display:"block", marginLeft:"auto", marginRight:"auto"}} />
        </a>
      </div>

      <div>
        <h3 style={{display:"block",background:"white", width:"200px", margin:"auto"}}>Our classic cheese pizza contains Mozzarella cheese as well as our well known tomato and basil.</h3>
      </div>

      <div>
      <button type="button" style={{background:"red", float:"right", color:"white", border:"none", padding:"15px 32px", textAlign:"center",
      textDecoration:"none", display:"inline-block",
      fontSize:"16px", margin:"4px 2px", cursor:"pointer"}}>Add to Order
      </button>
      <button type="button" style={{background:"red", float:"right", color:"white", border:"none", padding:"15px 32px", textAlign:"center",
      textDecoration:"none", display:"inline-block",
      fontSize:"16px", margin:"4px 2px", cursor:"pointer"}}>$19.99
      </button>
      </div>
      
    </div>
    )
    }
}
