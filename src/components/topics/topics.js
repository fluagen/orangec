import React, { Component } from "react";
import { Row, Col } from "antd";
import About from "../aside/About";
import Fetch from 'fetch';
import "./topics.less";

class Topics extends Component {
  render() {
    return (
      <div className="topics-normal">
        <Row gutter="16">
          <Col span="18">
            <div className="list-group">
              <div className="list-group-item">aaa</div>
            </div>
          </Col>
          <Col span="6">
            <About />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Topics;
