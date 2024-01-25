import React from "react";
import '../Footer/footer.css';

import { FaTwitter, FaInstagram, FaFacebook, FaLinkedin, FaGoogle, FaAddressBook, FaPhoneAlt  } from 'react-icons/fa';
import logo from '../../assets/image/cac-logo.png';

import { Container, Row, Col } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {

    

    const years = new Date().getFullYear();
    return(

        <footer className="footer">
            <section>            
            <Container>
                <Row>
                    <Col lg="3" md="4">
                        <div className="logo">
                            <div>                         
                                <div className="logoBac">
                                    <img src={logo}/>
                                </div>                          
                            </div>
                        </div>
                    </Col>

                    <Col lg="3" md="4">
                        <div className="logo">
                            <div>                         
                                <p id="text-footer">Contact</p>
                                <FaPhoneAlt size={15}  className="media"/>
                                <p className="media" style={{ color: '#FFF', textDecoration: 'none' }}> +234 906 146 9294</p> 

                                <FaGoogle size={15}  className="media"/>
                                <p style={{ color: '#FFF', textDecoration: 'none' }}> caclifeassemby777@gmail.com</p>                         
                            </div>

                            <div>
                                    
                            </div>

                        </div>
                    </Col>

                    <Col lg="3" md="4">
                        <div className="logo">
                            
                                <div>
                                    <ul className="list" >
                                    <p id="text-footer">Links</p>
                                    
                                    
                                        <li>
                                            <Link to='/home' style={{ color: '#FFF', textDecoration: 'none' }}>Home</Link>
                                        </li>                                                    
                    
                                        <li>
                                            <Link to='/aboutUs' style={{ color: '#FFF', textDecoration: 'none' }}>AboutUs</Link> 
                                        </li> 

                                        <li>
                                            <Link to='/currentLeader' style={{ color: '#FFF', textDecoration: 'none' }}>Current Leader</Link>
                                        </li>

                                        <li>
                                            <Link to='/department' style={{ color: '#FFF', textDecoration: 'none'  }}>Department</Link>
                                        </li>

                                        <li>
                                            <Link to='/gallery' style={{ color: '#FFF', textDecoration: 'none'  }}>Gallery</Link>
                                        </li>
                                    </ul>
                                </div>
                        </div>

                    
                    </Col>

                    <Col lg="3" md="4">
                        <div className="logo">
                            
                                <div>
                                <ul className="list" >
                                    <p id="text-footer">Social Media</p>
                                    
                                    
                                        <li>
                                            <Link to='#' style={{ color: '#FFF', textDecoration: 'none' }}>Facebook</Link>
                                        </li>                                                    
                    
                                        <li>
                                            <Link to='#' style={{ color: '#FFF', textDecoration: 'none' }}>Instagram</Link> 
                                        </li> 

                                        <li>
                                            <Link to='#' style={{ color: '#FFF', textDecoration: 'none' }}>Twitter</Link>
                                        </li>

                               
                                    </ul>
                                </div>
                        </div>

                    
                    </Col>



                </Row>
            </Container>
            </section>
        </footer>
    )
}

export default Footer;