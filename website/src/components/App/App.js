import React from 'react'
import Navbar from '../UINav'
import './App.css'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <p> Lets get some content! </p>
      </div>
    );
  }
}
