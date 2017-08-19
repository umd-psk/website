import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import './Award.css'

export default class Award extends React.Component {
  render() {
    let classes = 'award z-depth-2 '
    classes += (this.props.alt) ? 'alt' : '';

    return (
      <Col md="4" className={classes}>
        <div className="awardWrapper">
          <h1> 2017 </h1>
          <h2> Chapter of the Year </h2>
          <p> Information about the award might go here. </p>
        </div>
      </Col>
    );
  }
}
