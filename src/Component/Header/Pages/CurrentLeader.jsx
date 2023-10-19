import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import DSPIX from "../../../assets/image/DSpicture.jpg";
import "../../../style/CurrentLeader.css";
import PrincipalOfficers from './PrincipalOfficers';

const CurrentLeader = () => {
  return (
    <div>

    
        <div className='hero__section5'>
              <section>
                <Container>
                  <Row>
                    <div className='img'>
                    <h2>OUR LEADERS</h2>
                    </div>
                  </Row>
                  <Row>
                      
                  </Row>
                </Container>
              </section>
        </div>

        <div className='hero__section7'>
          <section>
            <Container>

            <h2>CAC PRINCIPAL OFFICERS</h2>
              <Row>
                <PrincipalOfficers />
              </Row>

            <h2>CURRENT LEADERS</h2>

              <Row className='pastorInfo'>
                  <Col lg="5" md="12">
                      <div className='pix'>
                        <img src={DSPIX} alt='' />

                        
                      </div>
                  </Col>

                  <Col lg="7" md="12">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, delectus quam! Mollitia, corrupti natus recusandae dolor, ea vero explicabo in, fugiat quas laudantium accusamus architecto quia neque quis eligendi exercitationem!
                    Facere consequuntur, tenetur illum at voluptates natus nulla! Sapiente voluptates molestias minus sequi fugit doloremque quam voluptatem, aut error! Veniam nostrum libero inventore, similique dolorem ab voluptatem expedita a voluptatibus.</p>

                    <div className='pastorName'>
                        <h4 >PASTOR A.O. OLUWADUNMOLA <p>District Superintendent</p></h4>
                        
                    </div>
                    
                  </Col>
              </Row>

              <hr />

              <Row className=''>

              <Col lg="7" md="12">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, delectus quam! Mollitia, corrupti natus recusandae dolor, ea vero explicabo in, fugiat quas laudantium accusamus architecto quia neque quis eligendi exercitationem!
                    Facere consequuntur, tenetur illum at voluptates natus nulla! Sapiente voluptates molestias minus sequi fugit doloremque quam voluptatem, aut error! Veniam nostrum libero inventore, similique dolorem ab voluptatem expedita a voluptatibus.</p>

                    <div className='pastorName'>
                        <h4 >PASTOR J.I. OGUNBIYI <p>Curate Pastor</p></h4>
                        
                    </div>
                    
                  </Col>

                  <Col lg="5" md="12">
                      <div className='pix'>
                        <img src={DSPIX} alt='' />

                        
                      </div>
                  </Col>

                  
              </Row>
            </Container>
          </section>
          
        </div>
    </div>
  )
}

export default CurrentLeader;
