import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "../Activities/MemberRegistration.css"
import PopRegistration from './PopRegistration';
import { FaTwitter, FaInstagram, FaFacebook, FaLinkedin, FaGoogle } from 'react-icons/fa'
import logo from '../../assets/image/cac-logo.png'


const MemberRegistration = () => {
  return (
    <div className='hero__section3'>
      <section>
        <Container>
            <Row>
            <Col lg="8" md="12">
                <div className='newcommer'>
                    <h4 className='join'>Want to Join our Assembly?  </h4>
                    <p>Cras ultricies ligula sed magna dictum porta. 
                      Sed porttitor lectus nibh. 
                     </p>
                    
                     <PopRegistration />


                     <div className="social-icon2">
               
                      <FaFacebook size={20}  className="media" onClick={() => window.open('http://www.facebook.com')}/>
                      <FaInstagram size={20} className="media" onClick={() => window.open('http://www.instagram.com')}/>
                      <FaLinkedin size={20}  className="media" onClick={() => window.open('http://www.linkedin.com')}/>
                      <FaTwitter size={20} className="media" onClick={() => window.open('http://www.twitter.com')}/>
                      <FaGoogle size={20} className="media" onClick={() => window.open('http://www.google.com')}/>
                      

              </div>
                </div>

                

               

                </Col>

                <Col lg="4" md="12">
                  <div className="logoBac">
                      <img src={logo} />
                  </div>
                </Col>

                    

                    
            </Row>
        </Container>
      </section>
    </div>
  )
}

export default MemberRegistration;
