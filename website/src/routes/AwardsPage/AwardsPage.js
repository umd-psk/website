import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import App from '../../components/App'
import Award from '../../components/Award'

export default class Awards extends React.Component {
  render() {
    return (
      <App>
        <Container>
          <h1 className='pageTitle' data-aos='fade-down'> Awards </h1>
          <Row className='text-center'>
            <Award />
          </Row>
        </Container>
      </App>
    )
  }
}
