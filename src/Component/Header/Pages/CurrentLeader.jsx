import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import DSPIX from "../../../assets/image/DSpicture.jpg";
import Curate from "../../../assets/image/Pastor Ogunbiyi.jpg"
import "../../../style/CurrentLeader.css";
import PrincipalOfficer from './principalOfficer';

const CurrentLeader = () => {
  return (
    <div className='generalDiv'>

    
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
              <Row className='officer'>
                <PrincipalOfficer />
              </Row>

            <h2>CURRENT LEADER</h2>

              <Row className='pastorInfo'>
                  <Col lg="5" md="12">
                      <div className='pix'>
                        <img src={DSPIX} alt='' />

                        
                      </div>
                  </Col>

                  <Col lg="7" md="12">
                    <p>Good day everyone, I want to welcome you to our presence <b>CHRIST APOSTOLIC CHURCH (Mount of Life), Mushin Life District Headquarters.</b> 
                      This is a lively chruch where we wxperience His presence as we worship Him through our pure heart
                      praise & worship, indepth teaching, preaching of the word, prevailing prayers and evangelism in line with the general 
                      Christ Apostolic Church mission and vision, according to Acts of Apostle Chapter 6 verse 4 (Acts 6:4).
                      <br/>
                      Dear friends, are you born again if yes Congratulations but if No, it is dangerous to live your life without Christ because the Bible Say 
                      "What shall it profit a main if he gains the whole World but loses his own Soul" Mark 8:36.
                      <br/>
                      You need to come to Christ today because tomorrow may be too late. 
                      <br/>
                      Moreso, you are cordially invited to fellowship with us in our weekly, monthly, quaterly and annual programmes either
                      Virtually or Physically and you will never remain the same, God bless you and I pray we shall all be 
                      rapturable in Jesus name Amen. 
                      <br/><br></br>
                      Shalom! Shalom!!.
                      Yours In Christ
                    </p>

                    <div className='pastorName'>
                        <h4 >PASTOR A.O. OLUWADUNMOLA <p>District Superintendent - Pastor In Charge</p></h4>
                        
                    </div>
                    
                  </Col>
                </Row>

                <Row className='Jpastor'>
                  <Col lg="7" md="12">
                    <p>PASTOR JOSEPH IDOWU OGUNBIYI is the curate pastor at CAC Life District, Mushin, Lagos State.  
                     Pastor Ogunbiyi is also the District Youths Coordinator, District Revivalists 
                      and assembly evangelical coordinator. Our church enjoys the full presence of God and we are 
                      glad to have you worshipped  with us to see more of the work of God in your life. 
                      Our God still works miracles and you are the next to testify. Thank you for joining us!
                    </p>

                    <div className='pastorName'>
                        <h4 >PASTOR J.I. OGUNBIYI <p>Curate Pastor</p></h4>
                        
                    </div>
                    
                  </Col>

                  <Col lg="5" md="12" >
                      <div className='pix'>
                        <img src={Curate} alt='' />

                        
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
