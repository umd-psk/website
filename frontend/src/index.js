import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap-css';

import HomePage from './routes/HomePage';
import AboutPage from './routes/AboutPage';
import BrothersPage from './routes/BrothersPage';
import RushPage from './routes/RushPage';
import AwardsPage from './routes/AwardsPage';
import LoginPage from './routes/LoginPage';

const routes = (
  <div>
    <Route exact path="/" component={HomePage} />
    <Route path="/about" component={AboutPage} />
    <Route path="/brothers" component={BrothersPage} />
    <Route path="/rush" component={RushPage} />
    <Route path="/awards" component={AwardsPage} />
    <Route path="/login" component={LoginPage} />
  </div>
);

ReactDOM.render(
  <Router>{routes}</Router>, document.getElementById('root')
);
registerServiceWorker();

var navLogoText = '';
function initNavText() {
  let oldInner = document.querySelector(".abs.navbar-brand").innerHTML;

  let start = oldInner.indexOf("<img");
  let end = oldInner.indexOf("alt=\"ETA Chapter\">") + ("alt=\"ETA Chapter\">").length;
  navLogoText = oldInner.substring(start, end);

  responsiveNavText();
}

function responsiveNavText() {
  let newInner = '';
  if (window.innerWidth > 420 && !(window.innerWidth > 767 && window.innerWidth < 845)) {
    newInner = "Phi Sig UMD " + navLogoText + " Eta Chapter";
  } else {
    newInner = "Phi Sig " + navLogoText + " Eta";
  }

  document.querySelector(".abs.navbar-brand").innerHTML = newInner;
}

window.addEventListener('resize', () => responsiveNavText());
window.onload = initNavText();
