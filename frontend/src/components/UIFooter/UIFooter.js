import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import logo from './white-logo.svg'
import './UIFooter.css'

const UIFooter = () => (
  <Container fluid className="footer">
    <Container className="social">
      <Row>
        <Col md="4">
          <a href="https://twitter.com/PSK_UMD" target="_blank" rel="noopener noreferrer">
            <span className="fa fa-3x fa-twitter"></span>
          </a>
        </Col>
        <Col md="4">
          <a href="https://www.instagram.com/psk_umd/" target="_blank" rel="noopener noreferrer">
            <span className="fa fa-3x fa-instagram"></span>
          </a>
        </Col>
        <Col md="4">
          <a href="https://www.facebook.com/umd.psk/" target="_blank" rel="noopener noreferrer">
            <span className="fa fa-3x fa-facebook"></span>
          </a>
        </Col>
      </Row>
    </Container>
    <Container fluid className="contact">
      <span className="fa fa-2x fa-map-marker" />
      <h5><b>2 Fraternity Row</b></h5>
      <h5>College Park, MD 20742</h5>
      <br />
      <a href="mailto:umdpsk.president@gmail.com" target="_top">
        <span className="fa fa-2x fa-envelope"></span>
        <h5>Contact Us</h5>
      </a>
    </Container>
    <Container fluid className="footerFoot">
      <a href="https://phisigmakappa.org/"><img src={logo} alt='Nationals' /></a>
      <h6> Website made by <br />
        <b className="text-uppercase">James Corley</b>
      </h6>
      <h5> © 2017 <b>PHI SIGMA KAPPA</b></h5>
    </Container>
  </Container>
);

export default UIFooter;
