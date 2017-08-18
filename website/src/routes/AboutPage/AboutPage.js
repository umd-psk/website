import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import App from '../../components/App'
import './AboutPage.css'
import logo from './logo.svg'

export default class About extends React.Component {
  render() {
    return (
      <App>
        <Container>
          <h1 className="pageTitle animated fadeInDown"> About Us </h1>
          <Row className="align-items-center">
            <Col md='5'>
              <img src={logo} alt='' />
            </Col>

            <Col md={{ size: 5, offset: 2 }}>
              <h1> Mission Statement </h1>
              <p> <b className="red">Phi Sigma Kappa</b> is a lifelong brotherhood dedicated to the <em>betterment of the individual</em>, the university community, and our world, by giving its members opportunities to <b>develop leadership skills</b>, participate in service to others, achieve <b>academic excellence</b>, experience cultural diversity and practice <b>personal integrity</b>. </p>
            </Col>
          </Row>
        </Container>
        <Container fluid className="creed">
          <Row>
            <Col md={{ size: 8, offset: 2 }}>
              <h1> The Phi Sigma Kappa Creed </h1>
              <p> In the firm conviction that my Fraternity demands of me a life of <b>Faith</b> and <b>Purpose</b>. </p>
              <p> I hereby solemnly declare <b>My Faith</b> in the wisdom and love of God; in the dignity and worth of my fellowmen; in the strength and beauty of true <b>Fraternity</b>; in the history and future of my Country; and in the traditions and program of my Alma Mater. </p>
              <p> Henceforward, therefore, it shall be <b>My Purpose</b> to remain forever true to this, my fraternity's faith in me and in turn to preserve and promote courageously and unselfishly the chosen ideals of our mutual affection and common endeavor. </p>
              <p> To this end I dedicate <b>My Life</b> to the maintenance of this <b>Faith</b> and the pursuit of this <b>Purpose</b> so that the ideals of Phi Sigma Kappa, being embodied in me, may be fulfilled in my <b>Character</b> and <b>Conduct</b>, and be known and honored by all men. </p>
              <p> By these things <b>I</b> stand. </p>
            </Col>
          </Row>
        </Container>
        <Container className="principles">
          <Row>
            <Col md={{ size: 8, offset: 2 }}>
              <h1> Our Cardinal Principles </h1>
              <h3><b>To Promote Brotherhood</b> </h3>
              <p>Justice, harmony, and brotherly love are essential to the spirit of fraternity. We promise to set an example of true brotherhood not only in our relations with each other, but in our association with people everywhere.</p>
              <h3><b>To Stimulte Scholarship</b> </h3>
              <p>Wisdom comes with learning. Complementing the mission of higher education, we seek to help our members to combine formal and informal learning experience; to more fully appreciate the importance of both theoretical and practical knowledge; and, by broadening their understanding of human relationships, to produce men of wisdom who will be better prepared to make positive contributions to society and all mankind.</p>
              <h3><b>To Develop Character</b> </h3>
              <p>Honor is the basis of fraternal relationships. We resolve to instill in each member a devotion to those values which will guide him to ends that are noble and right, so that in all that he represents and in all that he does, he shall be known as a man of honor who inspires others by his example and thus wins admiration and respect for himself and for Phi Sigma Kappa.</p>
            </Col>
          </Row>
        </Container>
      </App>
    )
  }
}
