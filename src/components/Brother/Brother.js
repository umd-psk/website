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
          <div class="grid-item"><h5>Hometown: {this.props.location} <hr></hr></h5></div>
          <div class="grid-item"><h5>Major(s):<br></br> {this.props.major}</h5></div>
          <div class="grid-item"><h5>Minor(s): <br></br>{this.props.minors}</h5></div>
          <div class="grid-item"><h5>Year: <br></br>{this.props.year}</h5></div>
          <div class="grid-item"><h5>Expected Graduation: <br></br>{this.props.grad}</h5></div>
          <div class="grid-item"><h5>E-mail: <br></br><a href ={"mailto:" + this.props.email}> {this.props.email}</a></h5></div>
          
        </div>
      </div>
    
      
      
      
      
      {/*{this.props.brotherName}</h3> <br></br>
        <h5>{this.props.chair}</h5> 
        <h5>{this.props.location}</h5>
        <h5>{this.props.major}</h5>
        <h5>{this.props.minors}</h5>
        <h5>{this.props.year}</h5>
        <h5>{this.props.grad}</h5>
        <h5>{this.props.email}</h5>*/} 
    
    </span>
  </Popup>
        
      </div>
    );
  }
}
