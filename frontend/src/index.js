import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap-css';

import HomePage from './routes/HomePage';
import AboutPage from './routes/AboutPage';
import BrothersPage from './routes/BrothersPage';
import RushPage from './routes/RushPage';
import AwardsPage from './routes/AwardsPage';
import LoginPage from './routes/LoginPage';
import NotFound from './routes/NotFound';

const routes = (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="/about" component={AboutPage} />
    <Route path="/brothers" component={BrothersPage} />
    <Route path="/rush" component={RushPage} />
    <Route path="/awards" component={AwardsPage} />
    <Route path="/login" component={LoginPage} />
    <Route component={NotFound} />
  </Switch>
);

ReactDOM.render(
  <Router>{routes}</Router>, document.getElementById('root')
);
registerServiceWorker();