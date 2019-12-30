import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Repos from "./components/Repos";
import noMatch from './components/noMatch';
import * as serviceWorker from "./serviceWorker";
import { HashRouter, Switch, Route } from "react-router-dom";

ReactDOM.render(
  <HashRouter basename="/CB-github">
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/result" component={Repos} />
      <Route component={noMatch} />
    </Switch>
  </HashRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
