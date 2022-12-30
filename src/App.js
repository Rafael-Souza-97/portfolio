import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PageNotFound from './pages/PageNotFound';


export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ HomePage } />
          <Route exact path="*" component={ PageNotFound } />
        </Switch>
      </BrowserRouter>
    );
  }
}
