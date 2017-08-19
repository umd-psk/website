import React from 'react'
import Navbar from '../UINav'
import AOS from 'aos'
import 'aos/dist/aos.css';
import 'font-awesome/css/font-awesome.css'
import './App.css'

export default class App extends React.Component {
  componentWillMount() {
    AOS.init();
  }

  render(props) {
    return (
      <div>
        <Navbar fixed={this.props.HomePage} />
        {this.props.children}
      </div>
    );
  }
}
