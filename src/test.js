



// javasript object
var foo =  { "key" : "value", 
            "Key2" : "value2" }


// If I want value2, I "index" into the object using its key

var foo2 = foo["Key2"]

// foo2 === "value2"

{
      "specials": (<Specials clickFunc={this.handleChoice.bind(this,"itemDetail")}/>),
      "orders": (<Orders />),
      "orderForm": (<OrderForm />),
      "deals": (<Deals />),
      "account": (<Accounts />),
      "signin": (<Signin />),
      "itemDetail": (<ItemDetail />),
    }[this.state.viewShowing]