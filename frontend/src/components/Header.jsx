import { faVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
       <Navbar className="bg-transparent">
        <Container>
          <Link to={'/'} style={{textDecoration:'none'}}>
          <Navbar.Brand className='text-warning fs-3' >
          <FontAwesomeIcon icon={faVideo} beat className='me-3'/>
             Media Player
          </Navbar.Brand>
          </Link>
        </Container>
      </Navbar>
    </div>
   
  )
}

export default Header