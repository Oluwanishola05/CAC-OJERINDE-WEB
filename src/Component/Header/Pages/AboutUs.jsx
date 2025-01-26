import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import "../../../style/AboutUs.css";
import logo from "../../../assets/image/cac-logo.png";
import { Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Video from './video';

const AboutUs = () => {

 const nav =  useNavigate();
  

  return (
    <div>

    
    <div className='hero__section5'>
      <section>
        <Container>
          <Row>
            <div className='img'>
             <h2>THE HISTORY</h2>
            </div>
          </Row>
          <Row>
              
          </Row>
        </Container>
      </section>
      
    </div>


    <div className='hero__section6'>
      <section>
        <Container>
          <Row>
            <div className='type'>
             {/* <p className='typewriter2'>Foundation </p> */}

             <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur asperiores incidunt recusandae nostrum voluptatum quis, omnis nulla repellat a quas consequuntur corrupti accusamus explicabo? Rerum molestias maiores laborum tempora aperiam.
             Eligendi officiis harum eos accusantium, rerum ipsam eveniet hic veritatis atque fugiat temporibus ullam maiores molestiae praesentium tempore sit repudiandae ea velit inventore minus laudantium? Velit nihil amet iusto adipisci.
             Magnam nisi quae, quibusdam facere provident ut suscipit delectus ad quisquam minus nam tempora. Quaerat porro quia perspiciatis totam aliquid reprehenderit, obcaecati iure, pariatur cum nulla, itaque vel vitae consectetur.
             Quaerat pariatur cupiditate dolorum voluptatibus et ad explicabo sit iure cum error dignissimos doloribus inventore, temporibus distinctio quasi impedit consequatur dicta, rerum officiis veritatis architecto dolorem nisi rem. Provident, aut.
             Porro optio, veritatis dignissimos eligendi modi nulla hic ipsum mollitia, repellendus ipsam id cupiditate. Iure molestiae ipsum, magnam minus possimus ut dolorum, eum suscipit ratione ab dolorem dicta cum mollitia.
             Totam necessitatibus nesciunt debitis, earum ipsa saepe dignissimos. </p>

            </div>
          </Row>

             <hr />
          <Row>
            <Col lg="6" md="12">
             <div className='type'>
             {/* <p className='typewriter3'>About Us </p> */}

             <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur asperiores incidunt recusandae nostrum voluptatum quis, omnis nulla repellat a quas consequuntur corrupti accusamus explicabo? Rerum molestias maiores laborum tempora aperiam.
             Eligendi officiis harum eos accusantium, rerum ipsam eveniet hic veritatis atque fugiat temporibus ullam maiores molestiae praesentium tempore sit repudiandae ea velit inventore minus laudantium? Velit nihil amet iusto adipisci.
             Magnam nisi quae, quibusdam facere provident ut suscipit delectus ad quisquam minus nam tempora. Quaerat porro quia perspiciatis totam aliquid reprehenderit, obcaecati iure, pariatur cum nulla, itaque vel vitae consectetur.
             Quaerat pariatur cupiditate dolorum voluptatibus et ad explicabo sit iure cum error dignissimos doloribus inventore, temporibus distinctio quasi impedit consequatur dicta, rerum officiis veritatis architecto dolorem nisi rem. Provident, aut.
             Porro optio, veritatis dignissimo. </p>
             
            </div>
            </Col>

            <Col lg="6" md="12">
              <div className='video' >
                <Video control />
              </div>
            </Col>
          </Row>

          <br/>
          <hr/>
          
          
        </Container>
      </section>
      
    </div>

    </div>
  )
}

export default AboutUs;
