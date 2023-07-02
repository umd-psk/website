import React from 'react'
import App from '../../../Alumnicomp/App'
import './HomePage.css'
import logo from './ETA-logo.svg'

export default class HomePage extends React.Component {
  render() {
    return (
      <App HomePage>
        <div className='bg-img'></div>
        <div className='titlePage'>
            <img src={logo} alt='' data-aos='fade-down' data-aos-delay='100'/>
            <h1 data-aos='fade-down' data-aos-delay='400'>Phi Sigma Kappa Alumni Association</h1>
          <h3 data-aos='fade-up' data-aos-delay='400'> Est. 2010 </h3>
          <h4 data-aos='fade-up' data-aos-delay='650'> University of Maryland </h4>
        </div>
      </App>
    )
  }
}
