import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import Navbar from "./Navbar";
import Cart from "./Cart";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Cart" component={Cart} />
        </Switch>
      </div>
    </Router>
  );
}
function Home() {
  return (
    <div className="container">
      <h1 id="heading" className="heading text-center pt-4">
        Our Items
      </h1>
      <div className="row mt-4">
        <div className="col-md-4 text-center" id="cols">
          <div id="img-container" className="pt-2">
            <img
              src="https://cdn.shopify.com/s/files/1/1529/1475/products/mens-gildan-short-sleeve-heavy-cotton-tshirt-charcoal_grande.jpg?v=1575464160"
              alt="img-responsive"
              className="img-fluid img-thumbnail mx-auto"
            ></img>
            <h1>Cotton Shirt</h1>
            <p>
              This is a Brand New Cotton shirt.
              <br />
              Just came out & its
              <br />
              just Fantastic.
            </p>
            <h3 className="pricing">
              Price: Rs.250 <span className="discount">Rs.300</span>
            </h3>
            <button className="text-light">
              ADD TO CART
            </button>
          </div>
        </div>
        <div className="col-md-4 text-center" id="cols">
          <div id="img-container" className="pt-2">
            <img
              src="https://m.media-amazon.com/images/I/3138-cBixAL.jpg"
              alt="img-responsive"
              className="img-fluid img-thumbnail mx-auto"
            ></img>
            <h1>White TShirt</h1>
            <p>
              This is a Brand New Cotton shirt.
              <br />
              Just came out & its
              <br />
              just Fantastic.
            </p>
            <h3 className="pricing">
              Price: Rs.550 <span className="discount">Rs.600</span>
            </h3>
            <button className="text-light">ADD TO CART</button>
          </div>
        </div>
        <div className="col-md-4 text-center" id="cols">
          <div id="img-container" className="pt-2">
            <img
              src="https://m.media-amazon.com/images/I/31Qhfsuhn0L.jpg"
              alt="img-responsive"
              className="img-fluid img-thumbnail mx-auto"
            ></img>
            <h1>Full Sleeve TShirt</h1>
            <p>
              This is a Brand New Cotton shirt.
              <br />
              Just came out & its
              <br />
              just Fantastic.
            </p>
            <h3 className="pricing">
              Price: Rs.200 <span className="discount">Rs.250</span>
            </h3>
            <button className="text-light">ADD TO CART</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
