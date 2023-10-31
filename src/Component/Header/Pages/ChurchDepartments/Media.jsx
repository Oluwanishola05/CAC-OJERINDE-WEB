import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import MediaDirector from '../../../../assets/image/Mr Sunday2.jpg';
import { FaTwitter, FaInstagram, FaFacebook, FaLinkedin, FaGoogle } from 'react-icons/fa';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import "../../../../style/Media.css";

const Youth = () => {
  return (
    <div>

      
    <div className='hero__section5'>
        <section>
          <Container>
            <Row>
              <div className='img'>
              <h2>MEDIA DEPARTMENT</h2>
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
          <Row >
            <Col>
              <h3 className='welcome'>Welcome Address</h3>
              <img className='Leader' src={MediaDirector}  rounded />
              <p>Welcome to CACYOF LIFE, Mushin, Lagos, Nigeria. Dear friends and visitors, men and brethren,
                It is with immense joy and gratitude that I welcome you to the online home of CACYOF LIFE (a.k.a CAC OKE-IYE, OJERINDE) Church in Mushin, Lagos, Nigeria. 
                As the Media Director, I am privileged to share with you this space that represents our faith, 
                community, and commitment to serving the greater purpose of life.

              </p>
                <p>CAC LIFE OJERINDE, is more than just a church; 
                  it is a family that believes in the apostolic faith and doctrines, 
                  power of love, faith, and service. We gathered not only to worship, but to uplift, 
                  support, and inspire one another. We believe that every individual is a vital part of God's 
                  magnificent plan, and through our shared journey, we find purpose and strength.
                </p>
              <p>
                On this website, you will discover a wealth of resources, 
                including information about our services, events, and ministries. 
                We encourage you to explore, engage, and find your place within our community. 
                Whether you are a long-time member or someone seeking spiritual connection, 
                you are always welcome here.

                In a world where we often seek answers to life's questions, we find solace in our faith. 
                Together, we are on a path of discovery and growth, as we strive to live out God's 
                love in our lives.

              </p>

              <p>
                  Thank you for joining us in this digital space, where we hope you will find inspiration, 
                  guidance, and a sense of belonging. Please reach out to us with any questions, or better yet, 
                  join us in person for one of our services to experience the warmth of our community.

                  Once again, welcome to CACYOF LIFE, where love abounds, faith is strengthened, 
                  and hope is ignited. Together, we journey toward a life filled with God's grace.

                  Blessings to you all.

              </p>

            

              <div className='pres'>
                <h5>Bro. Sunday Oluwaseun OLADIRAN </h5>
                  <p>Media Director, CACLIFE (CAC OKE-IYE, OJERINDE)  </p>   
              </div>
            

                        <div className="icon2">
                     
                        
                            <FaFacebook size={25}  className="media" onClick={() => window.open('http://www.facebook.com')}/>
                            
                            <FaLinkedin size={25}  className="media" onClick={() => window.open('http://www.linkedin.com')}/>
                            <FaTwitter size={25} className="media" onClick={() => window.open('http://www.twitter.com')}/>
                            <FaGoogle size={25} className="media" onClick={() => window.open('http://www.google.com')}/>
                            

                        </div>
              </Col>
          </Row>
        </Container>
      </section>
      
    </div>
</div>
  )
}

export default Youth;