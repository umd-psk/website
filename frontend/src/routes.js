import React from 'react';
import {
  Route,
  IndexRedirect
} from 'react-router-dom'
import { Route, IndexRoute, IndexRedirect } from 'react-router';
import HomePage from './routes/HomePage';

const routes = (
  <Route path="/" component={HomePage} />
);

export default routes;
