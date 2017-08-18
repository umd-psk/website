import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap-css';

import HomePage from './routes/HomePage';
import AboutPage from './routes/AboutPage';



const routes = (
  <Route path="/" component={HomePage} />
  <Route path="/about" component={About} />
);

ReactDOM.render(
  <Router>{routes}</Router>, document.getElementById('root')
);
registerServiceWorker();
