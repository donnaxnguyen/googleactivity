import React, { Component } from "react";
import logo from "./logo.svg";
import Jumbotron from "./components/Navbar"
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search"

import Saved from "./pages/Saved"
import Navbar from "./components/Navbar/index"

function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        <Switch>
            <Route exact path="/" component={Search} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/saved" component={Saved} />

          </Switch>
      </div>
    </Router>
  );
}


export default App;
