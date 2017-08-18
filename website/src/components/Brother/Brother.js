import React from 'react'
import './Brother.css'

const brotherFolder = require.context('./brothers', false);

export default class Brother extends React.Component {
  render() {
    let src = 'blank.png'
    try {
      src = brotherFolder('./' + this.props._name + '.jpg', true);
    } catch(e) {
      src = brotherFolder('./blank.png', true);
    }

    return (
      <div className='brother'>
        <div className="crop">
          <img src={src} alt='' />
        </div>
        <h3>{this.props._name}</h3>
        <h5>{this.props.chair}</h5>
      </div>
    );
  }
}
