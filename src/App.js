import React, { Component } from "react";
import { Router, Route, IndexRedirect } from "react-router";
import Header from "./components/Layout/Header";
import Main from "./components/Layout/Main";
import Footer from "./components/Layout/Footer";
import "./App.less";

class App extends Component {
  render() {
    return (
      <div className="app-layout">
        <div className="app-home">
          <Header />
        </div>
        <div className="app-main">
          {this.props.children}
        </div>
        <div className="app-footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
