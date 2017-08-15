import React from 'react';
import ReactDOM from 'react-dom';
import MainNavbar from './components/MainNavbar';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap-css';

ReactDOM.render(<MainNavbar />, document.getElementById('root'));
registerServiceWorker();
