import React from 'react';
import "../../../../style/choir.css";
import cm1 from "../../../../assets/image/CHOIR PICTURES/CM1.jpg";
import ChoirSlider from './ChoirSlider';
import HomeSlider from '../HomeSlider';


// Bootstrap components
import { Container, Row, Col } from 'react-bootstrap';

const Choir = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="hero__section5">
        <section>
          <Container>
            <Row>
              <div className="img">
                <h2>CHOIR DEPARTMENT</h2>
              </div>
            </Row>
          </Container>
        </section>
      </div>

      

      {/* Welcome Address and Excos Section */}
      <div className="hero__section7">
        <section>
          <Container>
            {/* Welcome Address */}
            <Row className="pastorInfo">
              <Col lg="5" md="12">
                <div className="pix">
                  <img src={cm1} alt="Choir Master" />
                </div>
              </Col>

              <Col lg="7" md="12">
                <h2>WELCOME ADDRESS</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officia, delectus quam! Mollitia, corrupti natus recusandae dolor, 
                  ea vero explicabo in, fugiat quas laudantium accusamus architecto 
                  quia neque quis eligendi exercitationem! Facere consequuntur, 
                  tenetur illum at voluptates natus nulla! Sapiente voluptates 
                  molestias minus sequi fugit doloremque quam voluptatem, aut error! 
                  Veniam nostrum libero inventore, similique dolorem ab voluptatem 
                  expedita a voluptatibus.
                </p>
                <div className="pastorName">
                  <h4>
                    Elder Shola Taiwo <p>Choir Master</p>
                  </h4>
                </div>
              </Col>
            </Row>

            {/* Choir Slider Section */}
      <div>
        <section>
          <Container>
            <Row>
              <ChoirSlider />
            </Row>
          </Container>
        </section>
      </div>

            {/* Excos Section */}
            <Row>
              <Col>
                <div>
                  <h3>Meet Our Excos</h3>
                </div>
                <Container>
                  <HomeSlider />
                </Container>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    </div>
  );
};

export default Choir;
