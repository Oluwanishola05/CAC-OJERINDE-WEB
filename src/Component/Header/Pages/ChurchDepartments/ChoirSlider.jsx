import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import chorister5 from "../../../../assets/image/CHOIR PICTURES/Choristers5.jpg";
import chorister6 from "../../../../assets/image/CHOIR PICTURES/Choristers6.jpg";
import chorister7 from "../../../../assets/image/CHOIR PICTURES/Choristers7.jpg";
import chorister4 from "../../../../assets/image/CHOIR PICTURES/Choristers4.jpg";
import LadiesGroup3 from "../../../../assets/image/CHOIR PICTURES/LadiesGroup3.jpg";
import LadiesGroup2 from "../../../../assets/image/CHOIR PICTURES/LadiesGroup3.jpg";
import cm2 from "../../../../assets/image/CHOIR PICTURES/CM2.jpg";

const ChoirSlider = () => {
  return (
    <div>
         <Carousel fade
         autoPlay
         interval={10000}
         showStatus={false}
         showThumbs={false}
         infiniteLoop >
                <div>
                    <img src={chorister6} />
                    
                </div>
                <div>
                    <img src={chorister4} />
                    
                </div>
                <div>
                    <img src={chorister5} />
                    
                </div>
                <div>
                    <img src={chorister7} />
                   
                </div>
                <div>
                    <img src={LadiesGroup3} />
                   
                </div>
                <div>
                    <img src={LadiesGroup2} />
                   
                </div>
                <div>
                    <img src={cm2} />
                   
                </div>
            </Carousel>
      
    </div>
  )
}

export default ChoirSlider;
