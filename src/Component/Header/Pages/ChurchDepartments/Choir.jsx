import React from 'react';

import "../../../../style/choir.css";

import cm1 from "../../../../assets/image/CHOIR PICTURES/CM1.jpg"
import ChoirSlider from './ChoirSlider';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import HomeSlider from '../HomeSlider';
import president from '../../../../assets/image/Pastor-S.-O.-Oladele.jpg';
import secretary from '../../../../assets/image/cac-GENERALSECRETARY.JPG';
import mission from '../../../../assets/image/FASUYI.jpg';
import finance from '../../../../assets/image/FINANCEDIRECTOR.JPG';
import evangelist from '../../../../assets/image/evangelist.jpg';
import superintendent from '../../../../assets/image/GeneralSupritendent.JPG';

const Choir = () => {
  return (
    <div>

      
    <div className='hero__section5'>
        <section>
          <Container>
            <Row>
              <div className='img'>
              <h2>CHOIR DEPARTMENT</h2>
              </div>
            </Row>
            <Row>
                
            </Row>
          </Container>
        </section>
        
    </div>

    <div>
      <section>
        <Container>
          <Row>
            <ChoirSlider />
          </Row>

          <div className='hero__section7'>
          <section>
            <Container>


            

              <Row className='pastorInfo'>
                  <Col lg="5" md="12">
                      <div className='pix'>
                        <img src={cm1} alt='' />

                        
                      </div>
                  </Col>

                  <Col lg="7" md="12">
                  <h2>WELCOME ADDRESS</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, delectus quam! Mollitia, corrupti natus recusandae dolor, ea vero explicabo in, fugiat quas laudantium accusamus architecto quia neque quis eligendi exercitationem!
                    Facere consequuntur, tenetur illum at voluptates natus nulla! Sapiente voluptates molestias minus sequi fugit doloremque quam voluptatem, aut error! Veniam nostrum libero inventore, similique dolorem ab voluptatem expedita a voluptatibus.</p>

                    <div className='pastorName'>
                        <h4> Elder Shola Taiwo <p>Choir Master</p></h4>
                        
                    </div>
                    
                  </Col>
              </Row>

              <Row>
                <Col>
                    <div>
                      <h3>Meet Our Excos</h3>
                    </div>

                    <div>
                        <Container>
                           <HomeSlider />
                        </Container>
                        </div>
                      
                </Col>
              </Row>

            </Container>
          </section>
          
        </div>


        </Container>

      </section>
      
    </div>


</div>
  )
}

export default Choir;
