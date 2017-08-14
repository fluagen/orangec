import React, { Component } from "react";
import { Router, Route, browserHistory } from "react-router";

import App from "./App";
import Topics from "./components/topics/Topics";

const routes = <Route path="/" components={App} />;

class Page extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <Router path="topics" component={Topics} />
        </Route>
      </Router>
    );
  }
}

export default Page;
