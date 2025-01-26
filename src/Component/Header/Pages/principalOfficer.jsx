import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { motion } from 'framer-motion';
import "../../../style/PrincipalOfficers.css";
import president from '../../../assets/image/Pastor-S.-O.-Oladele.jpg';
import secretary from '../../../assets/image/cac-GENERALSECRETARY.JPG';
import mission from '../../../assets/image/FASUYI.jpg';
import finance from '../../../assets/image/FINANCEDIRECTOR.JPG';
import evangelist from '../../../assets/image/evangelist.jpg';
import superintendent from '../../../assets/image/GeneralSupritendent.JPG';

const officers = [
  { img: superintendent, name: 'Pastor E.O. Odejobi', title: 'General Superintendent' },
  { img: president, name: 'Pastor S.O. Oladele', title: 'President' },
  { img: evangelist, name: 'Prophet/Evang. Hezekiah O Oladeji', title: 'General Evangelist' },
  { img: secretary, name: 'Pastor Emmanuel Mapur', title: 'General Secretary' },
  { img: finance, name: 'Pastor J.F. Omitinde', title: 'Finance Director' },
  { img: mission, name: 'Pastor C.S. Fasuyi', title: 'Mission Director' },
];

// Container animation for staggering the children
const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Delay between animations
    },
  },
};

// Individual item animation
const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const PrincipalOfficer = () => {
  return (
    <Container className="principalOfficers-container">
      <motion.div
        className="principalOfficers"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Row>
          {officers.map((officer, index) => (
            <Col xs={12} sm={6} md={4} key={index} className="officer-col">
              <motion.div className="officer-card" variants={itemVariants}>
                <motion.img
                  src={officer.img}
                  alt={officer.name}
                  className="officer-image"
                />
                <center>
                  <h5>{officer.name}</h5>
                  <p>{officer.title}</p>
                </center>
              </motion.div>
            </Col>
          ))}
        </Row>
      </motion.div>
    </Container>
  );
};

export default PrincipalOfficer;
