import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
     
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand >My Form</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" >Home</Nav.Link>
            <Nav.Link as={Link} to="/data">Data</Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>
     
    </>
  )
}

export default Header
