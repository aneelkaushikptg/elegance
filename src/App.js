import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Home from "./components/Home";
import Collections from "./components/Collections";
import Product from "./components/Product";
import { About } from "./components/About";
//import { Wishlist } from "./components/Wishlist";
import { Sale } from "./components/Sale";
import { Contact } from "./components/Contact";
import { Dashboard } from "./components/admin/Dashboard";
import Login from "./components/Login";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <main className="container-fluid wrapper">
          <div className="row">
            <Header />
            <Switch>
              <Route path="/home" component={Home} />
              <Route path="/collections" component={Collections} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/product" component={Product} />
              <Route path="/dashboard" component={Dashboard} />
              {/* <Route path="/wishlist" component={Wishlist} /> */}
              <Route path="/sale" component={Sale} />
              <Route path="/login" component={Login} />
              <Redirect from="/" exact to="/home" />
              <Redirect from="/product:id" exact to="/home" />
            </Switch>
            <Footer />
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
