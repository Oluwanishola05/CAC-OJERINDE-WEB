import React from 'react'
import { Container, Row, Button } from 'react-bootstrap';
import '../Activities/SundayService.css'
import {   FaFacebook, FaYoutube } from 'react-icons/fa';



const SundayService = () => {
  return (
    <div className='hero_section'>
      <section>
        <Container>
            <Row>
                <div>
                    <p>WORSHIP WITH US THIS <br/>SUNDAY LIVE</p>
                    <h6><i>Connect to any of our Channel by clicking either of the Button</i></h6>

                </div>
                <div className='btns'>
                       
                       <button className='button1' onClick={() => window.open('https://www.facebook.com')}>
                            <FaFacebook size={20}/>
                        </button>
                        
                        <button className='buttonss' onClick={() => window.open('http://www.youtube.com')}>
                            <FaYoutube size={20}/> 
                        </button>
                         
                        
                </div>
            </Row>
        </Container>
      </section>
    </div>
  )
}

export default SundayService;
