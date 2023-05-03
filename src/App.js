import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import About from './components/About';
import HomePage from './pages/HomePage';
import PageNotFound from './pages/PageNotFound';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ HomePage } />
          <Route path="/about" component={ About } />
          <Route exact path="*" component={ PageNotFound } />
        </Switch>
      </BrowserRouter>
    );
  }
}
