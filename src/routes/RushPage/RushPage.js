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

      <Event date={'29'} month={'Jan'} eventName={'Fifa Tournament'} alt>
        <p><b> 9pm to 11pm </b></p>
        <p> Come get worked in FIFA. </p>
      </Event>
      <Event date={'2'} month={'Sept'} eventName={'Meet the IFC (Mandatory)'} location={'Jimenez Hall'}>
        <p><b> 12:30pm to 4pm </b></p>
        <p> Meet more of our brothers and enjoy some BBQ. </p>
      </Event>
      <Event date={'4'} month={'Sept'} eventName={'Burgers and Ball'} location={'2 Fraternity Row'} alt>
        <p><b> 5pm to 7pm </b></p>
        <p> Come out and ball with some brothers and eat some burgers. </p>
      </Event>
      <Event date={'5'} month={'Sept'} eventName={'House Tour'} location={'2 Fraternity Row'}>
        <p><b> 6pm to 8pm </b></p>
        <p> See our house on the row and eat some free pizza. </p>
      </Event>
      <Event date={'8'} month={'Sept'} eventName={'Interviews'} location={'Invite Only'} alt />
      <Event date={'4'} month={'Sept'} eventName={'Flag Football'} location={'Invite Only'} />
      <Event date={'11'} month={'Sept'} eventName={'Crab Feast'} location={'Invite Only'} alt />
      <Event date={'14'} month={'Sept'} eventName={'Bid Acceptance Deadline'} location={''} />
    </Container>
  </App>
);

export default RushPage;
