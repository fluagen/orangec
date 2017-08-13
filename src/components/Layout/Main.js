import React, { Component } from "react";
import { Row, Col } from "antd";
import "./Main.less";

class Main extends Component {
  render() {
    return (
      <div className="main-normal" >
        {this.props.children}
      </div>
    );
  }
}

export default Main;
