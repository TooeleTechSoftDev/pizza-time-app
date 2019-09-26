import "whatwg-fetch";

const serverURL = "http://localhost:8088";

class PizzaTimeServer {
  // Page call
  fetchPage(pageNum, cb) {
    fetch(serverURL + "/pg/" + pageNum)
      .then(response => response.json()) // get the json out of the response
      .then(json => cb(json.returned)) // parse the json and return it
      .catch(error => {
        console.log("Error: ", error);
      }); // handle the error
  }

  // Product call
  fetchProduct(productNum, cb) {
    fetch(serverURL + "/prod/" + productNum)
      .then(response => response.json()) // get the json out of the response
      .then(json => cb(json.returned)) // parse the json and return it
      .catch(error => {
        console.log("Error: ", error);
      }); // handle the error
  }

  // Account calls
  fetchAccount(accountNum, cb) {
    fetch(serverURL + "/acct/" + accountNum)
      .then(response => response.json()) // get the json out of the response
      .then(json => cb(json.returned)) // parse the json and return it
      .catch(error => {
        console.log("Error: ", error);
      }); // handle the error
  }

  updateAccount(accountObject, cb) {
    fetch(serverURL + "/acct/change/" + accountObject.accountNum, {
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
    fetch(serverURL + "/acct/newaccount", {
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
    fetch(serverURL + "/ord/" + orderNum)
      .then(response => response.json()) // get the json out of the response
      .then(json => cb(json.returned)) // parse the json and return it
      .catch(error => {
        console.log("Error: ", error);
      }); // handle the error
  }

  submitOrder(orderObject, cb) {
    fetch(serverURL + "/ord/new", {
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
    fetch(serverURL + "/ord/change/" + orderObject.orderNum, {
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
