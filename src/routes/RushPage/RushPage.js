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

         <h4 className='secondaryText' data-aos='fade-down'><b>Rush Begins Towards the Beginning of the Spring Semester. <br></br> <a href="https://forms.gle/v8p4aJF5o6r3EZbFA">Fill out our interest form to begin the rush process!</a></b></h4>
         <h5>If you have Any questions feel free to reach out to one of our rush chairs: <br></br>
              Parker Homann -> 267 - 216 - 5865<br></br>
              Jackson LaFever ->  240 - 786 - 8784<br></br>
              George Baldwin ->  301 - 281 - 7640</h5>

    {/*<div className='video' data-aos='fade-down'>
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSd7hoD-FxwgfFzD9xdmRmpDCPurMWrEISIOn-inPXoFZUB6Ng/viewform?embedded=true" width="640" height="640" max-width="100%" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
    </div> */}
<p>.</p>
        {/* <h2 className='pageSubtitle' data-aos='fade-down' data-aos-delay='100'>Chapter House Tour</h2> */}

        
    {/*}
    <h4 className='secondaryText' data-aos='fade-down'><b>Check out our Instagram @psk_umd.</b></h4>
    <div className='insta-embed' data-aos='fade-down'>
    <iframe width="560" height="500" src="https://www.instagram.com/psk_umd/?utm_source=ig_embed&amp;utm_campaign=loading" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>*/}
    
    

         <h2 className='pageSubtitle' data-aos='fade-down' data-aos-delay='100'>Schedule Coming Soon</h2>

      {/*<Event date={'27'} month={'Aug'} eventName={'Meet the Greeks'} location={'La Plata Beach'}>
        <p><b> Time: 1-5 </b></p>
        <p> Come meet the brothers at Meet the Greeks! </p>
      </Event>

        <Event date={'29'} month={'Aug'} eventName={'Bonfire'} location={'7507 Rhode Island Avenue'} alt>
        <p><b> Time: 6pm </b></p>
        <p>  </p>
      </Event>

        <Event date={'4/5'} month={'Sep'} eventName={'Interviews'} location={'Invite Only'}>
        <p><b> </b></p>
        <p>  </p>
</Event>*/}

        {/*<Event date={'10'} month={'Feb'} eventName={'Games Night'} location={'Zoom'} alt>
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

    <h2 className='pageSubtitle' data-aos='fade-down' data-aos-delay='100'>House Tour</h2>
    <div className='video' data-aos='fade-down'>
        <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/HsIWBLwIQU0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    <p>.</p>
  </App>
);

export default RushPage;
