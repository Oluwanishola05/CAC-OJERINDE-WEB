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

            <h2 className="section-title">CAC PRINCIPAL OFFICERS</h2>
              <Row className='officer'>
                <PrincipalOfficer />
              </Row>

              <h2 className="section-title">CURRENT LEADERS</h2>

{/* Pastor A.O. Oluwadunmola Section */}
<Row className="pastor-info">
  <Col lg="5" md="12">
    <div className="pastor-image-container">
      <img src={DSPIX} alt="Pastor A.O. Oluwadunmola" className="pastor-image" />
    </div>
  </Col>
  <Col lg="7" md="12">
    <div className="pastor-content">
      <p>
        Good day everyone, I want to welcome you to our presence <b>CHRIST APOSTOLIC CHURCH (Mount of Life), Mushin Life District Headquarters.</b> 
        This is a lively church where we experience His presence as we worship Him through our pure heart praise & worship, 
        in-depth teaching, preaching of the Word, prevailing prayers, and evangelism in line with the general Christ Apostolic Church mission and vision, 
        according to Acts of Apostle Chapter 6 verse 4 (Acts 6:4).
      </p>
      <p>
        Dear friends, are you born again? If yes, congratulations! But if not, it is dangerous to live your life without Christ because the Bible says, 
        "What shall it profit a man if he gains the whole world but loses his own soul?" (Mark 8:36). 
        You need to come to Christ today because tomorrow may be too late.
      </p>
      <p>
        Moreover, you are cordially invited to fellowship with us in our weekly, monthly, quarterly, and annual programmes either virtually or physically, 
        and you will never remain the same. God bless you, and I pray we shall all be rapturable in Jesus' name. Amen.
      </p>
      <p>Shalom! Shalom!!</p>
      <p className="pastor-signature">Yours In Christ,</p>
      <div className="pastor-name">
        <h4>
          PASTOR A.O. OLUWADUNMOLA 
          <p className="pastor-title">District Superintendent - Pastor In Charge</p>
        </h4>
      </div>
    </div>
  </Col>
</Row>

{/* Pastor J.I. Ogunbiyi Section */}
<Row className="curate-pastor-info">
  <Col lg="7" md="12">
    <div className="pastor-content">
      <p>
        PASTOR JOSEPH IDOWU OGUNBIYI is the curate pastor at CAC Life District, Mushin, Lagos State.  
        Pastor Ogunbiyi is also the District Youths Coordinator, District Revivalist, 
        and Assembly Evangelical Coordinator. Our church enjoys the full presence of God, 
        and we are glad to have you worship with us to see more of the work of God in your life. 
        Our God still works miracles, and you are the next to testify. Thank you for joining us!
      </p>
      <div className="pastor-name">
        <h4>
          PASTOR J.I. OLUWABIYI 
          <p className="pastor-title">Curate Pastor</p>
        </h4>
      </div>
    </div>
  </Col>
  <Col lg="5" md="12">
    <div className="pastor-image-container">
      <img src={Curate} alt="Pastor J.I. Ogunbiyi" className="pastor-image" />
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
