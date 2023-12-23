import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import App from '../../components/App'
import Brother from '../../components/Brother'
import allBrothers from './brothers.json'
import Brothers from './brothers copy.json'
import { media } from 'bootstrap-css'

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
    
    let brothers = Object.keys(Brothers).map(function(name, id) {
      let chair = Brothers[name][0];
      let loc = Brothers[name][1];
      let major = Brothers[name][2];
      let year = (3 < Brothers[name].length) ? Brothers[name][3] : '';
      let grad = (4 < Brothers[name].length) ? Brothers[name][4] : '';
      let minors = (5 < Brothers[name].length) ? Brothers[name][5] : '';
      let email = (6 < Brothers[name].length) ? Brothers[name][6] : '';

      let content = (
        <Col md='4' sm='6' xs='12' key={id}>
          <Brother chair={chair} brotherName={name} location = {loc} major = {major} year = {year}
          grad={grad} minors={minors} email = {email}/>
        </Col>
      );
      if (window.innerWidth <= 768){ //Mobile
        if (chair === 'Vice President') {
          exec[1] = content;
        } else if (chair === 'President') {
          exec[0] = content;
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
      }else {
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
