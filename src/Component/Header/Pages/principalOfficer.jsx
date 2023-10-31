import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import  "../../../style/PrincipalOfficers.css";
import president from '../../../assets/image/Pastor-S.-O.-Oladele.jpg';
import secretary from '../../../assets/image/cac-GENERALSECRETARY.JPG';
import mission from '../../../assets/image/FASUYI.jpg';
import finance from '../../../assets/image/FINANCEDIRECTOR.JPG';
import evangelist from '../../../assets/image/evangelist.jpg';
import superintendent from '../../../assets/image/GeneralSupritendent.JPG';

const PrincipalOfficer = () => {
  return (
    <div>
        <Container>
      <Row className='principalOfficers'>
        <Col xs={6} md={4}>
          <Image src={superintendent}width="171" height="280" roundedCircle />
          <center>
            <h5>Pastor E.O. Odejobi</h5>
            <p>General Superintendent</p>
          </center>
            
        </Col>
        <Col xs={6} md={4}>
          <Image src={president} width="171" height="380" roundedCircle />
          <center>
            <h5>Pastor S.O. Oladele</h5>
            <p>President</p>
          </center>
        </Col>
        <Col xs={6} md={4}>
          <Image src={evangelist} width="171" height="280" roundedCircle />
          <center>
            <h5>Prophet/Evang. Hezekiah O Oladeji</h5>
            <p>General Evangelist</p>
          </center>
        </Col>
        <Col xs={6} md={4}>
          <Image src={secretary} width="171" height="280" roundedCircle />
          <center>
            <h5>Pastor Emmanuel Mapur</h5>
            <p>General Secretary</p>
          </center>
        </Col>
        <Col xs={6} md={4}>
          <Image src={finance} width="171" height="280" roundedCircle />
          <center>
            <h5>Pastor J.F. Omitinde</h5>
            <p>Finance Director</p>
          </center>
        </Col>
        <Col xs={6} md={4}>
          <Image src= {mission} width="171" height="280" roundedCircle />
          <center>
            <h5>Pastor C.S. Fasuyi</h5>
            <p>Mission Director</p>
          </center>
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default PrincipalOfficer;
