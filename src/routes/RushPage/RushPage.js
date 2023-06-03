import React from 'react'
//import { Instagram } from 'reactjs-social-embed'
import { Container } from 'reactstrap'
import App from '../../components/App'
import Event from '../../components/Event'
import './RushPage.css'

const currentSemester = _ => {
  let now = new Date();

  return `${(now.getMonth() > 7 ? "Fall" : "Spring")} ${now.getFullYear()}`
}

const RushPage = () => (
  <App>
    <Container fluid>
      <h1 className='pageTitle' data-aos='fade-down'> Rush </h1>
      <h2 className='pageSubtitle' data-aos='fade-down' data-aos-delay='100'>{currentSemester()}</h2>

        <h4 className='secondaryText' data-aos='fade-down'><b>Rush will begin soon. For now, check out our chapter house tour.</b></h4>

    {/* <div className='video' data-aos='fade-down'>
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSd7hoD-FxwgfFzD9xdmRmpDCPurMWrEISIOn-inPXoFZUB6Ng/viewform?embedded=true" width="640" height="640" max-width="100%" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
    </div> */}
<p>.</p>
        {/* <h2 className='pageSubtitle' data-aos='fade-down' data-aos-delay='100'>Chapter House Tour</h2> */}

        <div className='video' data-aos='fade-down'>
        <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/HsIWBLwIQU0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    <p>.</p>

    <h4 className='secondaryText' data-aos='fade-down'><b>Check out our Instagram @psk_umd.</b></h4>
    {/*<div className='insta-embed' data-aos='fade-down'>
    <iframe width="560" height="500" src="https://www.instagram.com/psk_umd/?utm_source=ig_embed&amp;utm_campaign=loading" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    	</div>
    
    

         <h2 className='pageSubtitle' data-aos='fade-down' data-aos-delay='100'>Schedule</h2>

      <Event date={'8'} month={'Feb'} eventName={'Meet the Greeks'} location={'Zoom'}>
        <p><b> Time TBD </b></p>
        <p> Complete above Google Form for the Zoom Link </p>
      </Event>

        <Event date={'8'} month={'Feb'} eventName={'Meet the Brothers (Of PSK)'} location={'Zoom'} alt>
        <p><b> Time TBD </b></p>
        <p> Complete above Google Form for the Zoom Link </p>
      </Event>

        <Event date={'9'} month={'Feb'} eventName={'Brother Speed Dating'} location={'Zoom'}>
        <p><b> Time TBD </b></p>
        <p> Complete above Google Form for the Zoom Link </p>
      </Event>

        <Event date={'10'} month={'Feb'} eventName={'Games Night'} location={'Zoom'} alt>
        <p><b> Time TBD </b></p>
        <p> Complete above Google Form for the Zoom Link </p>
      </Event>

        <Event date={'11'} month={'Feb'} eventName={'Interviews (Invite Only)'} location={'Zoom'}>
        <p><b> Time TBD </b></p>
        <p> Complete above Google Form for the Zoom Link </p>
      </Event>

        <Event date={'13'} month={'Feb'} eventName={'Brothers AMA'} location={'Zoom'} alt>
        <p><b> Time TBD </b></p>
  <p> Complete above Google Form for the Zoom Link </p>
  </Event> */}

    </Container>
  </App>
);

export default RushPage;
