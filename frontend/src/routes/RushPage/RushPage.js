import React from 'react'
import { Container } from 'reactstrap'
import App from '../../components/App'
import Event from '../../components/Event'
import './RushPage.css'

const RushPage = () => (
  <App>
    <Container fluid>
      <h1 className='pageTitle' data-aos='fade-down'> Rush Events </h1>
      <h2 className='pageSubtitle' data-aos='fade-down' data-aos-delay='100'> Spring 2018 </h2>

      <Event date={'20'} month={'Jan'} eventName={'Move in Day'} />
      <Event date={'29'} month={'Jan'} eventName={'Meet the Greeks'} location={'Stamp Student Union'} alt>
        <p> Meet some of our brothers and get an idea of the events we have planned for the week. </p>
      </Event>
      <Event date={'30'} month={'Jan'} eventName={'Burgers with the Brothers'} location={'7507 Princeton Ave'}>
        <p> Meet more of our brothers and enjoy some burgers. </p>
      </Event>
      <Event date={'31'} month={'Jan'} eventName={'Open House'} location={'2 Fraternity Row'} alt>
        <p> See our house on the row and eat some free pizza. </p>
      </Event>
      <Event date={'2'} month={'Feb'} eventName={'Interviews'} location={'Invite Only'} alt />
      <Event date={'4'} month={'Feb'} eventName={'Super Bowl Watch Party'} location={'Invite Only'} alt />
      <Event date={'5'} month={'Feb'} eventName={'Poker Night'} location={'Invite Only'} alt />
    </Container>
  </App>
);

export default RushPage;
