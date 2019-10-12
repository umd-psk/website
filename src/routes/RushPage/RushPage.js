import React from 'react'
import { Container } from 'reactstrap'
import App from '../../components/App'
// import Event from '../../components/Event'
import './RushPage.css'

const currentSemester = _ => {
  let now = new Date();

  return `${(now.getMonth() > 8 ? "Fall" : "Spring")} ${now.getFullYear()}`
}

const RushPage = () => (
  <App>
    <Container fluid>
      <h1 className='pageTitle' data-aos='fade-down'> Rush Events </h1>
      <h2 className='pageSubtitle' data-aos='fade-down' data-aos-delay='100'>{currentSemester()}</h2>

      <h3 className='text-center' data-aos='fade-down' data-aos-delay='200'> Thanks for coming out to rush. </h3>
    </Container>
  </App>
);

export default RushPage;
