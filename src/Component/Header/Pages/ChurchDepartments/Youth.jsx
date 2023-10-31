import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import YouthPresident from '../../../../assets/image/Mr sunday.jpg';
import { FaTwitter, FaInstagram, FaFacebook, FaLinkedin, FaGoogle } from 'react-icons/fa';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import "../../../../style/Youth.css";

const Youth = () => {
  return (
    <div>

      
    <div className='hero__section5'>
        <section>
          <Container>
            <Row>
              <div className='img'>
              <h2>YOUTH DEPARTMENT</h2>
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
              <img className='Leader' src={YouthPresident}  rounded />
              <p>This is CACYOF LIFE ASSEMBLY (a.k.a OKE-IYE youth fellowship), a subset of CACYOF Nigeria & Overseas. 
                We are a vibrant and dynamic community of young believers dedicated to growing in faith, love, and service. 
                At our fellowship, we come together to strengthen our connection with God and with one another. 
                We believe solely on the apostolic teachings for we are the children of the apostles:
              </p>
                <p className='bibleVerse'>Acts 2:42 NIV:
                    They devoted themselves to the apostles’ teaching and to 
                    fellowship, to the breaking of bread and to prayer.
                </p>
              <p>
                We invite you to explore our website, where you'll find resources, updates, 
                and information about our events and activities. Whether you're a member of our congregation 
                or a visitor seeking spiritual nourishment, we hope this online space becomes a source of 
                inspiration and connection. Join us in our journey of faith, and may you find God's 
                love and purpose here.
              </p>

              <p>
                In case you have any challenge, a question, a reason to reach out to us for, do not hesitate 
                because our single focus is Jesus and we believe in Him as the answer to all your needs. 
                He cares, He loves, He saves. Just come to Him with that need and I am confident that our 
                fellowship with Him will produce that result as expected. It has been grace and grace alone 
                in His kingdom. Our confession is based on His ability. We believe we can do all things through 
                Christ who strengthens us and share the same faith with our Apostolic fathers and patriarchs 
                like Joshua and Caleb, Num. 13:30.
              </p>

              <p>
                We are persuaded of a better thing and all that accomplish salvation in the journey of faith. 
                We grow daily in grace as we are charged by the scriptures 2 Pet. 3:18. We aspire always to 
                know more of Jesus, Phil. 3:10. We share together in love as we fulfill the law of Christ, 
                Gal. 6:2.

                Join us today and you will never regret you do. Know this for sure, God is closer to you than you think!
              </p>

              <div className='pres'>
                <h5>Bro. Sunday Oluwaseun OLADIRAN </h5>
                  <p>The Youth Leader/President </p>   
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