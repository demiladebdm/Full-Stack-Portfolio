import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

// import logo from '../assets/img/logo.svg';
// import logo2 from '../assets/img/logo2.svg';
// import download from '../assets/img/download.svg';
import linkedin from '../assets/img/linkedin.svg';
import github from '../assets/img/github.svg';
import gmail from '../assets/img/gmail.svg';
import cv from '../assets/img/cv.png';

import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";

const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">            
            {/* <img className="imageLogo" src={logo2} alt="Logo" /> */}
            <h1 className="headerName">DaddyDof</h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link py-1' : 'navbar-link py-1'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link py-1' : 'navbar-link py-1'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#project" className={activeLink === 'project' ? 'active navbar-link py-1' : 'navbar-link py-1'} onClick={() => onUpdateActiveLink('project')}>Projects</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/demilade-folarin-01944016b"><img src={linkedin} alt="Linked In" /></a>
                <a href="http://github.com/demiladebdm"><img src={github} alt="Git Hub" /></a>
                <a href="mailto:demiladefolarin@gmail.com"><img src={gmail} alt="Gmail" /></a>
                <a href="/resume.pdf" download={true}><img src={cv} alt="CV" /></a>
              </div>
              <HashLink to='#connect'>
                <button className="vvd"><span>Let’s Connect</span></button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}

export default NavBar;
