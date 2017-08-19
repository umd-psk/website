import React from 'react'
import { Container } from 'reactstrap';
import logo from './white-logo.svg'
import './UIFooter.css'

const UIFooter = () => (
  <Container fluid className="footer">
    <Container className="social">
      <a href="https://twitter.com/PSK_UMD">
        <span class="fa fa-2x fa-twitter"></span>
      </a>
      <a href="https://www.instagram.com/psk_umd/">
        <span class="fa fa-2x fa-instagram"></span>
      </a>
      <a href="https://www.facebook.com/umd.psk/">
        <span class="fa fa-2x fa-facebook"></span>
      </a>
    </Container>
    <hr style={{width: 80%}} />
    <Row>
      <Col md="3">
        <p><b>2 Fraternity Row</b></p>
        <p>College Park, MD 20742</p>
      </Col>
      <Col md={{offset: 2, size: 3}}>
      umdpsk.president@gmail.com
      </Col>
    </Row>
    <hr style={{width: 80%}} />
    Our <a href="https://phisigmakappa.org/">Nationals</a>
    © 2017 PHI SIGMA KAPPA
    Website made by James Corley, Jacob Chavez
  </Container>
);
