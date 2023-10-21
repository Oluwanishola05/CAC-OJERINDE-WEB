import React from 'react'
//import { Col, Container, Row } from 'react-bootstrap';
import "../../../style/PrincipalOfficers.css";
import "bootstrap/dist/css/bootstrap.css";
import president from '../../../assets/image/Pastor-S.-O.-Oladele.jpg';
import secretary from '../../../assets/image/cac-GENERALSECRETARY.JPG';
import mission from '../../../assets/image/FASUYI.jpg';
import finance from '../../../assets/image/FINANCEDIRECTOR.JPG';
import evangelist from '../../../assets/image/evangelist.jpg';
import superintendent from '../../../assets/image/GeneralSupritendent.JPG';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';


const PrincipalOfficers = () => {
  return (

    <div className='hero__section4'>
        <section>
            <Container>
                <Row>
                    <Col lg="4" md="3">

                                <div className='supriToEvan'>
                                    <img
                                    src={superintendent}
                                    alt="Mountains in the Clouds"
                                    />

                                     <h4>Pastor E.O. Odejobi</h4>
                                     <p>General Superintendent</p>
                                </div>
                                
                    </Col>

                    <Col lg="4" md="3">
                                <div className='supriToEvan'>
                                    <img
                                    src={president}
                                    alt="Mountains in the Clouds"
                                    />

                                     <h4>Pastor S.O. Oladele</h4>
                                     <p>President</p>
                                </div>
                               
                    </Col>

                    <Col lg="4" md="3">
                                <div className='supriToEvan'>
                                    <img
                                    src={evangelist}
                                    alt="Wintry Mountain Landscape"
                                    />

                                    <h4>Prophet/Evang. Hezekiah O Oladeji</h4>
                                     <p>General Evangelist</p>
                                </div>
                                
                    </Col>

                    <Col lg="4" md="3">
                    <div>
                                    <img
                                    src={secretary}
                                    alt="Boat on Calm Water"
                                    />

                                    <h4>Pastor Emmanuel Mapur</h4>
                                     <p>General Secretary</p>

                                </div>
                    </Col>

                    <Col lg="4" md="3">
                                <div>
                                    <img
                                    src={finance}
                                    alt="Mountains in the Clouds"
                                    />

                                     <h4>Pastor J.F. Omitinde</h4>
                                     <p>Finance Director</p>
                                </div>
                    </Col>

                    <Col lg="4" md="3">
                                <div>
                                        <img
                                        src={mission}
                                        alt="Boat on Calm Water"
                                        />

                                        <h4>Pastor C.S. Fasuyi</h4>
                                        <p>Mission Director</p>

                                </div>
                    </Col>

                    

                </Row>
            </Container>

        <Container>
            <Row>
                <Col xs={6} md={4}>
                <Image src={president} rounded />
                </Col>
                <Col xs={6} md={4}>
                <Image src={president} roundedCircle />
                </Col>
                <Col xs={6} md={4}>
                <Image src={president} thumbnail />
                </Col>
            </Row>
    </Container>

        
        </section>
    </div>
    
  )
}

export default PrincipalOfficers;
