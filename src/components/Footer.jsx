import React from 'react'

import { Container, Row, Col } from 'react-bootstrap'
import MailchimpForm from './MailchimpForm'

import logo from '../assets/img/logo.svg'
import linkedin from '../assets/img/linkedin.svg';
import github from '../assets/img/github.svg';
import gmail from '../assets/img/gmail.svg';
import cv from '../assets/img/cv.png';


const Footer = () => {
  return (
    <footer className='footer'>
        <Container>
            <Row className='align-items-center'>
                <MailchimpForm />
                <Col sm={6}>
                    <img src={logo} alt="" />
                </Col>
                <Col sm={6} className='text-center text-sm-end'>
                    <div className="social-icon">
                        <a href="https://www.linkedin.com/in/demilade-folarin-01944016b"><img src={linkedin} alt="Linked In" /></a>
                        <a href="http://github.com/demiladebdm"><img src={github} alt="Git Hub" /></a>
                        <a href="mailto:demiladefolarin@gmail.com"><img src={gmail} alt="Gmail" /></a>
                        <a href="/resume.pdf" download={true}><img src={cv} alt="CV" /></a>
                    </div>
                    <p>CopyRight 2022</p>
                </Col>
            </Row>
        </Container>
    </footer>
  )
}

export default Footer
