import React from 'react'
import { Container } from 'reactstrap'
import App from '../../components/App'

export default class LoginPage extends React.Component {
  render() {
    return (
      <App>
        <Container fluid>
          <h1 className='pageTitle' data-aos='fade-down'> Login </h1>
          <h3 className='pageSubtitle' data-aos='fade-down' data-aos-delay='100'> Work-in-progress </h3>
        </Container>
      </App>
    )
  }
}
