import React from 'react'
import '../../../style/Home.css'
import Container from 'react-bootstrap/Container'
import { Row, Col } from "react-bootstrap";
import Video from './video';
import logo from '../../../assets/image/cac-logo.png'
import WeeklyActivities from '../../Activities/weeklyActivities';
import SundayService from '../../Activities/SundayService';
import MemberRegistration from '../../Activities/MemberRegistration';
import Carousel from 'react-bootstrap/Carousel';
import HomePage from '../../../assets/image/HomePage.jpg';
import HomePage2 from '../../../assets/image/HomePage2.jpg';
import HomePage3 from '../../../assets/image/HomePage3.jpg';
import HomeSlider from './HomeSlider';
import GoogleDirection from './GoogleDirection';


const Home = () => {
  return (

    <>
    
    <div className="hero__section">
      <Row>
      <Carousel data-bs-theme="dark" fade autoPlay interval={1800}>
      <Carousel.Item>
        <div className="carouselImgWrapper">
          <img
            className="carouselImg"
            src={HomePage}
            alt="First slide"
          />
          <div className="imageOverlay"></div>
        </div>
        <Carousel.Caption>
          <h3 className="carouselName">WE WELCOME YOU TO</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carouselImgWrapper">
          <img
            className="carouselImg"
            src={HomePage2}
            alt="Second slide"
          />
          <div className="imageOverlay"></div>
        </div>
        <Carousel.Caption>
          <h3 className="carouselName">CAC OKE-IYE (LIFE DISTRICT HQ)</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carouselImgWrapper">
          <img
            className="carouselImg"
            src={HomePage3}
            alt="Third slide"
          />
          <div className="imageOverlay"></div>
        </div>
        <Carousel.Caption>
          <h3 className="carouselName">6/8, CHURCH CLOSE, OFF OJERINDE STREET IDI-ARABA MUSHIN, LAGOS.</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      </Row>  
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
