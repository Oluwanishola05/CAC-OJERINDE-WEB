import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

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
      <Row>
        <Col xs={6} md={4}>
          <Image src={superintendent}width="171" height="280" roundedCircle />
            <h5>Pastor E.O. Odejobi</h5>
            <p>General Superintendent</p>
        </Col>
        <Col xs={6} md={4}>
          <Image src={president} width="171" height="380" roundedCircle />
            <h5>Pastor S.O. Oladele</h5>
            <p>President</p>
        </Col>
        <Col xs={6} md={4}>
          <Image src={evangelist} width="171" height="280" roundedCircle />
            <h5>Prophet/Evang. Hezekiah O Oladeji</h5>
            <p>General Evangelist</p>
        </Col>
        <Col xs={6} md={4}>
          <Image src={secretary} width="171" height="280" roundedCircle />
            <h5>Pastor Emmanuel Mapur</h5>
            <p>General Secretary</p>
        </Col>
        <Col xs={6} md={4}>
          <Image src={finance} width="171" height="280" roundedCircle />
            <h5>Pastor J.F. Omitinde</h5>
            <p>Finance Director</p>
        </Col>
        <Col xs={6} md={4}>
          <Image src= {mission} width="171" height="280" roundedCircle />
            <h5>Pastor C.S. Fasuyi</h5>
            <p>Mission Director</p>
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default PrincipalOfficer;
