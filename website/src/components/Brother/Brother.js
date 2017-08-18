import React from 'react'
import './Brother.css'

export default class Brother {
  render() {
    return (
      <div>
        <img src={"./brothers/${this.props.name}.jpg"} />
        <h3>{this.props.name}</h3>
        <h4>{this.props.position}</h4>
      </div>
    );
  }
}
