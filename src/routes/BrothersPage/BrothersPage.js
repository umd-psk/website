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
      let brother = Brothers[name]
      let chair = brother.Chairs
      {/*
  
    "Previous_Chairs": "",
    "Current_Job": "",
    "Fav_Part_Frat": "",
    "New_Mem_Join":"",
    "Fav_Quote":""},*/}

      let content = (
        <Col md='4' sm='6' xs='12' key={id}>
          <Brother chair={brother.Chairs} brotherName={name} location = {brother.Hometown} major = {brother.Major} year = {brother.Year}
          grad={brother.Graduation_Year} minors={brother.Minors} email = {brother.Emails} phone={brother.PhoneNumber} prev_chair={brother.Previous_Chairs}
          curr_job={brother.Current_Job} fav_part={brother.Fav_Part_Frat} new_mem={brother.New_Mem_Join} quote={brother.Fav_Quote} />
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
