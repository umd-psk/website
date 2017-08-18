import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap-css';

import HomePage from './routes/HomePage';
import AboutPage from './routes/AboutPage';
import BrothersPage from './routes/BrothersPage';

const routes = (
  <div>
    <Route exact path="/" component={HomePage} />
    <Route path="/about" component={AboutPage} />
    <Route path="/brothers" component={BrothersPage} />
  </div>
);

ReactDOM.render(
  <Router>{routes}</Router>, document.getElementById('root')
);
registerServiceWorker();
