import React from 'react'
import './Brother.css'
import Popup from 'reactjs-popup'
import rPhiSig from './red-logo.svg'

const brotherFolder = require.context('./brothers', false);

export default class Brother extends React.Component {
  render() {
    let src = 'blank.png'
    let notFound = false;
    try {
      src = brotherFolder('./' + this.props.brotherName + '.jpg', true);
    } catch(e) {
      src = brotherFolder('./blank.png', true);
      notFound = true;
    }

    return (
      <div className='brother'>
        <Popup trigger={<button className="button-popup"> <div className={(notFound) ? 'crop blank' : 'crop'}>
          <img src={src} alt='' />
        </div>
        <h3>{this.props.brotherName}</h3>
        <h5>{this.props.chair}</h5> </button>} modal>
    <span> {/*Content of Popup */}
      <div class = "popup">
        <div class = 'banner'>
        <img src= {rPhiSig} alt='My Phi Sig' class='logo' />
          <div class = 'lower-banner'>
          &nbsp;
          </div>
        </div>
        <h1>{this.props.brotherName}</h1>
          <h4>{this.props.chair}</h4> 
          <img src={src} alt='' class="pop-img" />
        <div className='content'>
          <div class="grid-item"><h5><strong>Hometown:</strong><br></br> {this.props.location}</h5></div>
          <div class="grid-item"><h5><strong>Major(s):</strong><br></br> {this.props.major}</h5></div>
          <div class="grid-item"><h5><strong>Minor(s):</strong><br></br>{this.props.minors}</h5></div>
          <div class="grid-item"><h5><strong>Year:</strong><br></br>{this.props.year}</h5></div>
          <div class="grid-item"><h5><strong>Expected Graduation:</strong><br></br>{this.props.grad}</h5></div>
          <div class="grid-item"><h5><strong>E-mail:</strong><br></br><a href ={"mailto:" + this.props.email}> {this.props.email}</a></h5></div>
          <div class="grid-item"><h5><strong>Phone Number:</strong><br></br>{this.props.phone}</h5></div>
          <div class="grid-item"><h5><strong>Previous Chairs:</strong><br></br>{this.props.prev_chair}</h5></div>
          <div class="grid-item"><h5><strong>Current Occupation:</strong><br></br>{this.props.curr_job}</h5></div>
          <div class="grid-item"><h5><strong>Favorite Quote:</strong><br></br>{this.props.quote}</h5></div>
          <div class="grid-item"><h5><strong>Favorite Part of the Fraternity:</strong><br></br>{this.props.fav_part}</h5></div>
          <div class="grid-item"><h5><strong>Why Rushes Should Join the Fraternity:</strong><br></br>{this.props.new_mem}</h5></div>

          
        </div>
      </div>
    
      
      
      
      
      {/*{this.props.brotherName}</h3> <br></br>
        <h5><strong>{this.props.chair}</h5> 
        <h5><strong>{this.props.location}</h5>
        <h5><strong>{this.props.major}</h5>
        <h5><strong>{this.props.minors}</h5>
        <h5><strong>{this.props.year}</h5>
        <h5><strong>{this.props.grad}</h5>
        <h5><strong>{this.props.email}</h5>*/} 
    
    </span>
  </Popup>
        
      </div>
    );
  }
}
