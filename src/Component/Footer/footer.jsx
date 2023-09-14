import React from "react";
import '../Footer/footer.css';

import { FaTwitter, FaInstagram, FaFacebook, FaLinkedin, FaGoogle } from 'react-icons/fa';
import logo from '../../assets/image/cac-logo.png';

import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {

    

    const years = new Date().getFullYear();
    return(

        <footer className="footer">
            <section>            
            <Container>
                <Row>
                    <Col lg="3" md="4">
                        <div className="logo">
                            <img src={logo} alt="" />
                                <div>
                                    <p id="text-footer">OKE-IYE</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                        Amet at illum est ad aut omnis culpa enim ipsam nam, 
                                        quis voluptatem aliquid recusandae asperiores veniam 
                                        quod earum error quibusdam a?</p>
                                </div>
                        </div>

                    
                    </Col>

                    <Col lg="3" md="4">
                        <div className="logo">
                            <img src={logo} alt="" />
                                <div>
                                    <p id="text-footer">Contact</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                        Quia molestias ea nemo nihil reiciendis voluptas repellat 
                                        perferendis nisi officia asperiores voluptate tenetur, 
                                        aperiam sequi quasi assumenda rem quam adipisci amet!</p>
                                </div>
                        </div>

                    
                    </Col>

                    <Col lg="3" md="4">
                        <div className="logo">
                            
                                <div>
                                    <p id="text-footer">Links</p>
                                    
                            <ul className="list" >
                                <li>
                                    <Link to='/home' style={{ color: '#FFF', textDecoration: 'none' }}>Home</Link>
                                </li>                                                    
            
                                <li>
                                    <Link to='/AboutUs' style={{ color: '#FFF', textDecoration: 'none' }}>AboutUs</Link> 
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
                            <img src={logo} alt="" />
                                <div>
                                    <p id="text-footer">Social Media</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                        Quia molestias ea nemo nihil reiciendis voluptas repellat 
                                        perferendis nisi officia asperiores voluptate tenetur, 
                                        aperiam sequi quasi assumenda rem quam adipisci amet!</p>
                                </div>
                        </div>

                    
                    </Col>

                 
                    

                    <Col lg='12' md="12">
                        <div className="social-icon">
                     
                           { /*
                            <FaTwitter size={25} className="media" onClick={() => window.open( 'http://www.twitter.com')}/>
                            <FaInstagram size={25} className="media" onClick={() => window.open( 'http://www.instagram.com')}/>
                            <FaFacebook size={25} className="media" onClick={() => window.open( 'http://www.facebook.com')}/>
                            <FaLinkedin size={25} className="media" onClick={() => window.open( 'http://www.linkedin.com')}/>
                            <FaGoogle size={25} className="media" onClick={() => window.open( 'http://www.google.com')}/>
    */}
                            <FaFacebook size={25}  className="media" onClick={() => window.open('http://www.facebook.com')}/>
                            <FaInstagram size={25} className="media" onClick={() => window.open('http://www.instagram.com')}/>
                            <FaLinkedin size={25}  className="media" onClick={() => window.open('http://www.linkedin.com')}/>
                            <FaTwitter size={25} className="media" onClick={() => window.open('http://www.twitter.com')}/>
                            <FaGoogle size={25} className="media" onClick={() => window.open('http://www.google.com')}/>
                            

                        </div>
                        <p className="footer__copyright">Copyright {years} CAC OKE-IYE OJERINDE MEDIA DEPARTMENT. All rights reserved.</p>
                    </Col>
                </Row>
            </Container>
            </section>
        </footer>
    )
}

export default Footer;