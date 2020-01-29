import React from 'react'
import { Container } from 'reactstrap'
import App from '../../components/App'
import Event from '../../components/Event'
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

      <Event date={'2'} month={'Feb'} eventName={'Super Bowl Party'} location={'2 Fraternity Row'}>
        <p><b> 6:00 PM </b></p>
        // <p> Event Description </p>
      </Event>

      <Event date={'3'} month={'Feb'} eventName={'Meet the IFC (Mandatory)'} location={'Adele H. Stamp Ballroom'} alt>
        <p><b> 5:00 PM - 7:00 PM </b></p>
        // <p> Event Description </p>
      </Event>

      <Event date={'4'} month={'Feb'} eventName={'Hoagies and Stogies'} location={'7507 Princeton Ave'}>
        <p><b> 5:00 PM </b></p>
        // <p> Event Description </p>
      </Event>

      <Event date={'5'} month={'Feb'} eventName={'Open House'} location={'2 Fraternity Row'}>
        <p><b> 7:00 PM - 8:00 PM</b></p>
        // <p> Event Description </p>
      </Event>

      <Event date={'8'} month={'Feb'} eventName={'Interviews'} location={'Invite Only'}>
        // <p><b> 12:00 AM </b></p>
        // <p> Event Description </p>
      </Event>

      <Event date={'11'} month={'Feb'} eventName={'Dodgeball Tournament'} location={'Invite Only'}>
        // <p><b> 12:00 AM </b></p>
        // <p> Event Description </p>
      </Event>

    </Container>
  </App>
);

export default RushPage;
