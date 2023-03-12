import React, { useState } from 'react'

import { Container, Row, Col } from 'react-bootstrap'

import contactImg from '../assets/img/contact-img.svg'


const Contact = () => {

  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }

  const [formDetails, setFormDetails ] = useState(formInitialDetails);

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    })
  }


  return (
    <section className='contact' id='connect'>
      <Container>
        <Row className='align-items-center'>
          <Col md={6}>
            <img src={contactImg} alt="Contact Us" />
          </Col>
          <Col md={6}>
            <h2>Get In Touch</h2>
            <form action="https://getform.io/f/ff64c9d1-b01b-4dbe-8d2a-a66ba59aaf60" method='POST'>
              <Row>
                <Col sm={6} className='px-1'>
                  <input type="text" name='firstName' value={formDetails.firstName} placeholder='First Name' onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                </Col>
                <Col sm={6} className='px-1'>
                  <input type="text" name='lastName' value={formDetails.lastName} placeholder='Last Name' onChange={(e) => onFormUpdate('lastName', e.target.value)} />
                </Col>
                <Col sm={6} className='px-1'>
                  <input type="email" name='email' value={formDetails.email} placeholder='Email Address' onChange={(e) => onFormUpdate('email', e.target.value)} />
                </Col>
                <Col sm={6} className='px-1'>
                  <input type="tel" name='tel' value={formDetails.phone} placeholder='Phone No.' onChange={(e) => onFormUpdate('phone', e.target.value)} />
                </Col>
                <Col  className='px-1'>
                  <textarea row='6' name='message' value={formDetails.message} placeholder='Message' onChange={(e) => onFormUpdate('message', e.target.value)} />
                  <button type='submit'><span>Let's talk</span></button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Contact
