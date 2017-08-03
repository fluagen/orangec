import React, { Component } from 'react';
import { Row,Col } from 'antd';
import Header from './components/Layout/Header';
import './App.less';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default App;
