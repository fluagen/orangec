import React, { Component } from "react";
import { Row, Col, Menu } from "antd";
import styles from "./Header.less";

class Header extends Component {
  render() {
    return (
      <div className="header-normal">
        <div className="header-container">
          <Row>
            <Col>aaaa</Col>
            <Col></Col>
          </Row>

          <Menu mode="horizontal">
            <Menu.Item key="/users">User</Menu.Item>
            <Menu.Item key="/app">User</Menu.Item>
            <Menu.Item key="/topic">User</Menu.Item>
          </Menu>
        </div>
      </div>
    );
  }
}

export default Header;
