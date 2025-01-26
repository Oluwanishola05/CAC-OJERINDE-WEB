import React from "react";
import '../Footer/footer.css';

import { FaTwitter, FaInstagram, FaFacebook, FaLinkedin, FaGoogle, FaPhoneAlt  } from 'react-icons/fa';
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
    const years = new Date().getFullYear();
    return (
        <footer className="footer">
            <section>            
            <Container>
                <Row>
                    <Col lg="3" md="4">
                        <div className="slogan">
                            <div>                         
                                <p style={{ color: '#FFF', fontSize: '18px', fontWeight: 'bold', textAlign: 'center' }}>
                                    Empowering Lives Through Christ's Love
                                </p>
                            </div>                          
                        </div>
                    </Col>

                    <Col lg="3" md="4">
                        <div className="links">
                            <ul className="list">
                                <p id="text-footer">Useful Links</p>
                                <li>
                                    <Link to='/home' style={{ color: '#FFF', textDecoration: 'none' }}>Back to Home</Link>
                                </li>                                                    
                                <li>
                                    <Link to='/aboutUs' style={{ color: '#FFF', textDecoration: 'none' }}>Learn About Us</Link> 
                                </li> 
                                <li>
                                    <Link to='/currentLeader' style={{ color: '#FFF', textDecoration: 'none' }}>Meet Our Leader</Link>
                                </li>
                                <li>
                                    <Link to='/department' style={{ color: '#FFF', textDecoration: 'none' }}>Our Departments</Link>
                                </li>
                                <li>
                                    <Link to='/gallery' style={{ color: '#FFF', textDecoration: 'none' }}>See Our Gallery</Link>
                                </li>
                            </ul>
                        </div>
                    </Col>

                    <Col lg="3" md="4">
                        <div className="contact">
                            <p id="text-footer">Get in Touch</p>
                            <FaPhoneAlt size={15}  className="media"/>
                            <p className="media" style={{ color: '#FFF', textDecoration: 'none' }}> Call Us: +234 906 146 9294</p> 

                            <FaGoogle size={15}  className="media"/>
                            <p style={{ color: '#FFF', textDecoration: 'none' }}> Email Us: caclifeassemby777@gmail.com</p>                         
                        </div>
                    </Col>

                    <Col lg="3" md="4">
                        <div className="social-media">
                            <ul className="list">
                                <p id="text-footer">Stay Connected</p>
                                <li>
                                    <Link to='#' style={{ color: '#FFF', textDecoration: 'none' }}>Follow us on Facebook</Link>
                                </li>                                                    
                                <li>
                                    <Link to='#' style={{ color: '#FFF', textDecoration: 'none' }}>Join us on Instagram</Link> 
                                </li> 
                                <li>
                                    <Link to='#' style={{ color: '#FFF', textDecoration: 'none' }}>Tweet with us on Twitter</Link>
                                </li>
                                <li>
                                    <Link to='#' style={{ color: '#FFF', textDecoration: 'none' }}>LinkedIn</Link>
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
            </section>

            <section className="footer-bottom">
                <Container>
                    <Row>
                        <Col>
                            <p style={{ color: '#FFF', textAlign: 'center', paddingTop: '20px' }}>
                                © {years} Christ Apostolic Church - Empowering Generations
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>
        </footer>
    );
}

export default Footer;
