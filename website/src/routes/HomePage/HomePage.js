import React from 'react'
import App from '../../components/App'
import './HomePage.css'
import logo from './ETA-logo.svg'

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <App HomePage>
          <div className='bg-img'></div>
          <div className='titlePage'>
              <img src={logo} alt='' data-aos='fade-down' data-aos-delay='100'/>
              <h1 data-aos='fade-down' data-aos-delay='400'>Phi Sigma Kappa</h1>
            <h3 data-aos='fade-up' data-aos-delay='400'> <b>Brotherhood.</b> Scholarship. <b>Character.</b> </h3>
            <h4 data-aos='fade-up' data-aos-delay='650'> University of Maryland </h4>
          </div>
        </App>
      </div>
    )
  }
}
