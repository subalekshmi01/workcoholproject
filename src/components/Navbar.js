import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Button } from 'react-bootstrap';
import mobiletitle from '../images/mobiletitleimg.png';
import mobilehandburg from '../images/mobilehandburgimg.png';
import webtitle from '../images/webtitleimg.png';
import './Navbar.css'; 

const NavBar = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar  expand="lg" expanded={expanded} className="custom-navbar">
      <Navbar.Brand href="/">
        <img
          src={webtitle}
          alt="Title Image"
          className="d-none d-lg-block"
        />
        <img
          src={mobiletitle}
          alt="Title Image Mobile"
          className="d-lg-none"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")}>
        <img src={mobilehandburg} alt="Toggle" />
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav" className="custom-collapse">
        <Nav className="mx-auto custom-nav">
          <Nav.Link href="#" className="custom-nav-link">Programs</Nav.Link>
          <Nav.Link href="#" className="custom-nav-link">About Us</Nav.Link>
          <Nav.Link href="#" className="custom-nav-link">Careers</Nav.Link>
          <Nav.Link href="#" className="custom-nav-link">Resources</Nav.Link>
        </Nav>
        <Nav>
        <div className="mt-4">
          <Button variant="outline-primary" className="mb-2 ms-2">Login</Button>
          <Button variant="outline-primary" className="mb-2 ms-2">Sign Up</Button>
        </div>
          
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
