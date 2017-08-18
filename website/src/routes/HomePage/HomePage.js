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
            <img src={logo} alt='' />
            <h1 className='animated fadeInDown delay-07s'>Phi Sigma Kappa</h1>
                <h3> <b>Brotherhood.</b> Scholarship. <b>Character.</b> </h3>
                <h4> University of Maryland </h4>
          </div>
        </App>
      </div>
    )
  }
}
