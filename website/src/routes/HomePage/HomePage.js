import React from 'react'
import 'animate.css'
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
              <img src={logo} alt='' className='animated fadeInDown delay-03s'/>
              <h1 className='animated fadeInDown delay-04s'>Phi Sigma Kappa</h1>
            <h3 className='animated fadeInUp delay-05s'> <b>Brotherhood.</b> Scholarship. <b>Character.</b> </h3>
            <h4 className='animated fadeInUp delay-06s'> University of Maryland </h4>
          </div>
        </App>
      </div>
    )
  }
}
