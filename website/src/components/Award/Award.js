import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import './Award.css'

export default class Award extends React.Component {
  render() {
    let classes = 'event z-depth-2 '
    classes += (this.props.alt) ? 'alt' : '';

    return (
      <Container fluid className={classes}>
        <Row>
          <Col md="4" className="eventDate">
            <div className="dateWrapper">
              <h1> {this.props.date} </h1>
              <h2> {this.props.month} </h2>
              <h5> {this.props.time} </h5>
            </div>
          </Col>

          <Col md="8" className="eventDetails">
            <h2> {this.props.eventName} </h2>
            {this.props.location &&
                <h4>
                  <i className="fa fa-map-marker"></i>
                  {this.props.location}
                </h4>
            }
            {this.props.children}
          </Col>
        </Row>
      </Container>
    );
  }
}
