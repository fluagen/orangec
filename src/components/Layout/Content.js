import React, { Component } from "react";
import { Row, Col } from "antd";
import "./Content.less";

class Content extends Component {
  render() {
    return (
      <div className="content-normal">
        <Row gutter="16">
          <Col span="18">
            <div className="content-left">contet</div>
          </Col>
          <Col span="6">
            <div className="content-right">about</div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Content;
