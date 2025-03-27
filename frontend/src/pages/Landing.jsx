import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Landing() {
  return (
    <>
      <Container className='mt-5 d-flex justify-content-center align-items-center'>
        <Row className='mt-4 w-100'>
          <Col md={6}>
            <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
            <p className='mt-4' style={{ textAlign: 'justify' }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio esse eius doloribus eligendi eveniet repellendus doloremque sint, veniam nemo cupiditate porro quam obcaecati nisi quod quisquam quas ratione eaque accusamus? Corrupti aliquid provident quae tempora ea laboriosam laudantium, error reiciendis quia odit natus porro vel officiis deleniti! Enim, et sunt?</p>
           <Link to={'/home'}> <button className='btn btn-warning mt-4'>Get Started</button></Link>
          </Col>
          <Col md={6} className='d-flex justify-content-center'>
            <img src="https://i.pinimg.com/originals/33/a4/6f/33a46f727dbe790d436616a1f56fce9c.gif" alt="no image" className='w-50' />
          </Col>
        </Row>
      </Container>

      <Container className='d-flex justify-content-center align-items-center'>
        <Row className='w-100'>

          <Col md={1}></Col>

          <Col md={10} className='mt-5 d-flex justify-content-center align-items-center flex-column p-md-5 p-3'>
            <h2 className='mt-5'>Features</h2>
            <Row className='mt-5'>
            <Col md={4}>
              <Card style={{ width: '100%' }}>
            <img src="https://i.pinimg.com/originals/33/a4/6f/33a46f727dbe790d436616a1f56fce9c.gif" alt="no image" className='w-100' />
                <Card.Img variant="top" src="" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
            <Card style={{ width: '100%' }}>
            <img src="https://i.pinimg.com/originals/33/a4/6f/33a46f727dbe790d436616a1f56fce9c.gif" alt="no image" className='w-100' />
                <Card.Img variant="top" src="" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
            <Card style={{ width: '100%' }}>
            <img src="https://i.pinimg.com/originals/33/a4/6f/33a46f727dbe790d436616a1f56fce9c.gif" alt="no image" className='w-100' />
                <Card.Img variant="top" src="" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            </Row>
            


          </Col>
          <Col md={1}>
          </Col>
        </Row>
      </Container>

<Container className='mt-5 p-5 d-flex justify-content-center align-items-center border border-secondary rounded'>
  <Row>
    <Col md={6}>
    <h1 className='text-warning'>Simple fast and Powerful</h1>
    <p className='mt-4'  style={{textAlign:'justify'}}><span className='fs-4'>Play Everything</span>:Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas commodi, eos illum nobis dolores corporis placeat saepe pariatur quo esse!</p>
    <p className='mt-4'  style={{textAlign:'justify'}}><span className='fs-4'>Play Everything</span>:Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas commodi, eos illum nobis dolores corporis placeat saepe pariatur quo esse!</p>
    <p className='mt-4'  style={{textAlign:'justify'}}><span className='fs-4'>Play Everything</span>:Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas commodi, eos illum nobis dolores corporis placeat saepe pariatur quo esse!</p>
    </Col>
    <Col md={6}>
    <iframe width="100%" height="514" src="https://www.youtube.com/embed/CybWGS1M8C4?si=p7CNUHIpHN-p0V7a" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </Col>
  </Row>
</Container>

    </>
  )
}

export default Landing