import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from 'react-router-dom'
import  logo from '../../assests/logo.png'
import './Header.css'
function Header() {
  return (
    <>

      <Navbar className="bgcolor" data-bs-theme="dark">
        <Container fluid className='ps-5 pe-5'>
          <Navbar.Brand to="/">
            <img src={logo} className='img-fluid logo'></img>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Link to={"/"} className="nav-link text-light">Flight</Link>
            <Link to={"/a"} className="nav-link text-light">Hotel</Link>
            <Link to={"/b"} className="nav-link text-light">Car Hire</Link>
            <Link to={"/b"} className="nav-link text-light">Trip Finder</Link>
            <Link to={"/b"} className="nav-link text-light">inspiration</Link>
          </Nav>
          <Nav className="me-0 text-light" >
             <NavDropdown title="Language" id="collapsible-nav-dropdown">
              <Link to={"/"} className="dropdown-item text-light">English</Link>
              <Link to={"/"} className="dropdown-item text-light">हिंदी</Link>
              <Link to={"/"} className="dropdown-item text-light">أربي</Link>
              <Link to={"/"} className="dropdown-item text-light">русский</Link>
              <Link to={"/"} className="dropdown-item text-light">español</Link>
            </NavDropdown> 
            <Link to={"/b"} className="nav-link text-light">Login</Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Header