import React, { Component } from 'react';
import {Row, Col} from 'antd';
import './Header.less';


class Header extends Component {
  render(){
    return (
      <Row>
      <Col span={4} >1212</Col>
      <Col span={16} className="top-header" >aaa</Col>
      <Col span={4} />
      </Row>
    );
  }
}

export default Header;
