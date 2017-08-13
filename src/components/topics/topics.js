import React, { Component } from "react";
import { Row, Col } from "antd";
import About from "../aside/About";
import "./topics.less";

class Topics extends Component {
  render() {
    return (
      <div className="topics-normal">
        <Row gutter="16">
          <Col span="18">addaa</Col>
          <Col span="6">
            <About />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Topics;
