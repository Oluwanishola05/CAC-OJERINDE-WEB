import React from 'react'
import { Container, Row } from 'react-bootstrap';
import "../../../style/Gallery.css";
import MiniGallery from '../../Activities/MiniGallery';

const Gallery = () => {
  return (
    <div className='hero__section4'>
      <Container>
        <Row>
          <h3>OLD AND RECENT MEMORIES</h3>
        <MiniGallery />

        
        </Row>
      </Container>
      
    </div>
  )
}

export default Gallery;
