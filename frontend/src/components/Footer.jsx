import { faVideo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { faFacebook, faInstagram, faWhatsapp, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
      <Container className='mt-5'>
        <Row>
          <Col md={4}>
            <FontAwesomeIcon icon={faVideo} beat className='me-3 text-warning' />
            <span className='text-warning fs-5'>Media Player</span>
            <p style={{ textAlign: 'justify' }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, officia!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi incidunt eaque vero eum adipisci earum! Quis quidem distinctio nobis delectus!</p>
          </Col>
          <Col md={2}>
            <h5>Links</h5>
            <Link to={'/'}><p>Landing Page</p></Link>
            <Link to={'/home'}><p>Home Page</p></Link>
            <Link to={'/watchhistory'}><p>Watch History</p></Link>

          </Col>
          <Col md={2}>
            <h5>Guides</h5>
            <p>React</p>
            <p>React Bootstrap</p>
            <p>Bootswatch</p>
          </Col>
          <Col md={4}>
            <h5>Contact Us</h5>
            <div className='d-flex'><input type="text" placeholder=' Email id' className='rounded w-90 me-3 mt-2 form-control' /><button className='btn btn-warning'>Subscribe</button></div>
            <div className='mt-4'>
              <span className='p-3 fs-4'><FontAwesomeIcon icon={faInstagram} /></span>
              <span className='p-3 fs-4'><FontAwesomeIcon icon={faXTwitter} /></span>
              <span className='p-3 fs-4'><FontAwesomeIcon icon={faFacebook} /></span>
              <span className='p-3 fs-4'><FontAwesomeIcon icon={faWhatsapp} /></span>
              <span className='p-3 fs-4'><FontAwesomeIcon icon={faLinkedin} /></span>
            </div>

          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Footer