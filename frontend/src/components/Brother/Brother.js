import React from 'react'
import './Brother.css'

const brotherFolder = require.context('./brothers', false);

export default class Brother extends React.Component {
  render() {
    let src = 'blank.png'
    let notFound = 'crop';
    try {
      src = brotherFolder('./' + this.props._name + '.jpg', true);
    } catch(e) {
      src = brotherFolder('./blank.png', true);
      notFound = 'crop blank';
    }

    return (
      <div className='brother'>
        <div className={notFound}>
          <img src={src} alt='' />
        </div>
        <h3>{this.props._name}</h3>
        <h5>{this.props.chair}</h5>
      </div>
    );
  }
}
