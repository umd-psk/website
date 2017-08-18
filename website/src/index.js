import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomePage from './routes/HomePage';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap-css';

const routes = (
  <Route path="/" component={HomePage} />
);

ReactDOM.render(
  <Router>{routes}</Router>, document.getElementById('root')
);
registerServiceWorker();
