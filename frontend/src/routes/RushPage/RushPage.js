import React from 'react'
import { Container } from 'reactstrap'
import App from '../../components/App'
import Event from '../../components/Event'
import './RushPage.css'

const RushPage = () => (
  <App>
    <Container fluid>
      <h1 className='pageTitle' data-aos='fade-down'> Rush Events </h1>
      <h2 className='pageSubtitle' data-aos='fade-down' data-aos-delay='100'> Fall 2017 </h2>

      <Event date={'26'} month={'Aug'} eventName={'Move in Day'} />
      <Event date={'6'} month={'Sep'} eventName={'Meet the Greeks'} location={'McKeldin Mall'} alt />
      <Event date={'7'} month={'Sep'} time={'6:00 PM - 8:00 PM'} eventName={'Chapter Open House'} location={'2 Fraternity Row'}>
        <p> See our house on the row and meet our brothers. Chipotle will be catered. </p>
      </Event>
      <Event date={'9'} month={'Sep'} time={'12:00 PM - 4:00 PM'} eventName={'Burgers and Ballin\''} location={'2 Fraternity Row'} alt>
        <p> Come out and ball out with our brothers in the court next to Phi Sigma Kappa's house. We will be grilling burgers as well. </p>
      </Event>
      <Event date={'11'} month={'Sep'} time={'6:00 PM - 9:00 PM'} eventName={'Fifa Tournament'} location={'Invite Only'} />
      <Event date={'13'} month={'Sep'} time={'6:00 PM - 8:00 PM'} eventName={'Cornerstone Wing Night'} location={'Invite Only'} alt />
    </Container>
  </App>
);

export default RushPage;
