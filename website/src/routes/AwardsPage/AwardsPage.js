import React from 'react'
import { Container, Row } from 'reactstrap'
import App from '../../components/App'
import Award from '../../components/Award'
import './AwardsPage.css'

export default class AwardsPage extends React.Component {
  render() {
    return (
      <App>
        <Container fluid>
          <h1 className='pageTitle' data-aos='fade-down'> Awards </h1>
          <Row className='awards'>
            <Award year={'2017'} awardName={'Chapter of the Year'} alt />
            <Award year={'2017'} awardName={'Technology Award'} />
            <Award year={'2016'} awardName={'Chapter of the Year'} alt />
            <Award year={'2015'} awardName={'Most Improved Chapter'} />
            <Award year={'2013'} awardName={'Chapter of the Year'} alt />
            <Award year={'2012'} awardName={'Chapter of the Year'} alt />
            <Award year={'2012'} awardName={'Technology Award'} />
            <Award year={'2012'} awardName={'Athletics Award'} />
          </Row>
        </Container>
      </App>
    )
  }
}
