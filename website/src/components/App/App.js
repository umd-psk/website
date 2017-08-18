import React from 'react'
import Navbar from '../UINav'
import './App.css'

export default class App extends React.Component {
  render(props) {
    return (
      <div>
        <Navbar />
        {this.props.children}
      </div>
    );
  }
}
