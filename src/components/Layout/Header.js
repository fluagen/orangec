import React, { Component } from "react";
import { Menu, Button } from "antd";
import "./Header.less";

class Header extends Component {
  render() {
    return (
      <div className="header-normal">
        <div className="header-navbar">
          <div className="brand">Orange C </div>
          <div className="header-navbar-menu">
            <Menu mode="horizontal">
              <Menu.Item>社区</Menu.Item>
              <Menu.Item>话题</Menu.Item>
              <Menu.Item>投票</Menu.Item>
            </Menu>
          </div>
          <div className="header-navbar-right">
            <Button size="large">注册</Button>
            <Button size="large">登录</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
