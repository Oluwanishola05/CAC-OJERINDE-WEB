import React from 'react'
import '../../../style/Home.css'
import Container from 'react-bootstrap/Container'
import { Row, Col } from "react-bootstrap";
import Video from './video';
import logo from '../../../assets/image/cac-logo.png'
import WeeklyActivities from '../../Activities/weeklyActivities';
import SundayService from '../../Activities/SundayService';
import MemberRegistration from '../../Activities/MemberRegistration';



const Home = () => {
  return (

    <>
    
    <div className="hero__section">
      <section>
        <Container>
          <Row>
            <Col lg='6' md='6'>

              <div className="typewriter">
                <p>Welcome to CAC OKE-IYE (LIFE DISTRICT HQ) OJERINDE. </p>
              </div>

              <div className='video' >
                <Video control />
              </div>
            </Col>

          </Row>


        </Container>
      </section>


    </div>
    
    <div className="hero__section1">
      <section>
        <Container>
          <Row>
              <div className='verse'>
                  <h4>JOHN 10:16</h4>
                  <p>And other sheep I have, which are not of this fold: 
                    them also i must bring, and they shall hear my voice; 
                    and there shall be one fold, and one shephard.</p>
              </div>

            <div>
               <WeeklyActivities />
            </div>
              
          </Row>

          <Row>
            
            

          </Row>
        </Container>

      </section>

      <SundayService />
      <MemberRegistration />

      
      



    </div>
      
  </>
    
  )
}

export default Home
