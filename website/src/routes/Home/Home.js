import React from 'react'
import './Home.css'

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <div class="bg-img"> </div>
        <div className="container">
          <figure className="logo animated fadeInDown delay-03s">
            <img src="img/logoETA.png" alt="" />
          </figure>
          <h1 className="animated fadeInDown delay-07s">Phi Sigma Kappa</h1>
          <ul className="subtit animated fadeInUp delay-1s">
              <li className="sans bold">Brotherhood. Scholarship. Character.</li><br />
              <li className="red"><b> University of Maryland </b></li>
          </ul>
        </div>
      </div>
    )
  }
}
