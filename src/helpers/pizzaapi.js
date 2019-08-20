import "whatwg-fetch";

const serverURL = "http://localhost:8088";

class PizzaTimeServer {
  // Page call
  fetchPage(pageNum, cb) {
    fetch(serverURL + "/pages/detail/" + pageNum)
      .then(response => response.json()) // get the json out of the response
      .then(json => cb(json.returned)) // parse the json and return it
      .catch(error => {
        console.log("Error: ", error);
      }); // handle the error
  }

  // Product call
  fetchProduct(productNum, cb) {
    fetch(serverURL + "/product/detail/" + productNum)
      .then(response => response.json()) // get the json out of the response
      .then(json => cb(json.returned)) // parse the json and return it
      .catch(error => {
        console.log("Error: ", error);
      }); // handle the error
  }

  // Account calls
  fetchAccount(accountNum, cb) {
    fetch(serverURL + "/account/detail/" + accountNum)
      .then(response => response.json()) // get the json out of the response
      .then(json => cb(json.returned)) // parse the json and return it
      .catch(error => {
        console.log("Error: ", error);
      }); // handle the error
  }

  updateAccount(accountObject, cb) {
    fetch(serverURL + "/account/change/" + accountObject.accountNum, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(accountObject)
    })
      .then(response => response.json())
      .then(json => cb(json))
      .catch(error => {
        console.log("Error updating account: ", error);
      });
  }

  submitAccount(accountObject, cb) {
    fetch(serverURL + "/account/newuser", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(accountObject)
    })
      .then(response => response.json())
      .then(json => cb(json))
      .catch(error => {
        console.log("Error creating account: ", error);
      });
  }

  // Order calls
  fetchOrder(orderNum, cb) {
    fetch(serverURL + "/order/detail/" + orderNum)
      .then(response => response.json()) // get the json out of the response
      .then(json => cb(json.returned)) // parse the json and return it
      .catch(error => {
        console.log("Error: ", error);
      }); // handle the error
  }

  submitOrder(orderObject, cb) {
    fetch(serverURL + "/order/newitem", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(orderObject)
    })
      .then(response => response.json())
      .then(json => cb(json))
      .catch(error => {
        console.log("Error submitting order: ", error);
      });
  }

  updateOrder(orderObject, cb) {
    fetch(serverURL + "/order/change/" + orderObject.orderNum, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(orderObject)
    })
      .then(response => response.json())
      .then(json => cb(json))
      .catch(error => {
        console.log("Error updating order: ", error);
      });
  }

  // To do: Authentication of customers
}

export let pizzaTimeServer = new PizzaTimeServer();
