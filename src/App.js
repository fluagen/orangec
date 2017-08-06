import React, { Component } from 'react';
import { Row,Col } from 'antd';
import Header from './components/Layout/Header';
import Login from './components/Login';
import './App.less';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Login />
      </div>
    );
  }
}

export default App;
