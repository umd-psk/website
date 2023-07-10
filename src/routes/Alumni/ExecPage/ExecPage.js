import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import App from '../../../Alumnicomp/App'
import Brother from '../../../Alumnicomp/Alumn'
import allBrothers from './brothers.json'
import './BrothersPage.css'

export default class BrothersPage extends React.Component {
  constructor() {
    super();

    this.state = {
      exec: [],
      brothers: []
    };
  }

  componentWillMount() {
    let exec = [];
    let brothers = Object.keys(allBrothers).map(function(name, id) {
      let chair = allBrothers[name];
      let content = (
        <Col md='4' sm='6' xs='12' key={id}>
          <Brother chair={chair} brotherName={name} />
        </Col>
      );

      if (chair === 'Vice President') {
        exec[0] = content;
      } else if (chair === 'President') {
        exec[1] = content;
      } else if (chair === 'Secretary') {
        exec[2] = content;
      } else if (chair === 'Treasurer') {
        exec[3] = content;
      } else if (chair === 'Sentinel') {
        exec[4] = content;
      } else if (chair === 'Inductor') {
        exec[5] = content;
      } else {
        return content;
      }

      return '';
    });

    this.setState({
      exec: exec,
      brothers: brothers
    });
  }

  currentSemester() {
    let now = new Date();

    return `${(now.getMonth() > 8 ? "Fall" : "Spring")} ${now.getFullYear()}`
  }

  render() {
    return (
      <App>
        <Container fluid>
          <h1 className='pageTitle' data-aos='fade-down'> Brothers </h1>
          <h2 className='pageSubtitle' data-aos='fade-down' data-aos-delay='100'>{this.currentSemester()}</h2>
          <Row className='brothers text-center justify-content-start'>
            {this.state.exec}
            {this.state.brothers}
          </Row>
        </Container>
      </App>
    );
  }
}
