import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import '../../../style/HomeSlider.css';

import HomePage2 from '../../../assets/image/HomePage2.jpg';
import HomePage3 from '../../../assets/image/HomePage3.jpg';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import CM from '../../../assets/image/CHOIR PICTURES/CM.jpg';
import ACM from '../../../assets/image/CHOIR PICTURES/ACM1.jpg';


// import required modules


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const HomeSlider = () => {
  return (
    <div>
    <Swiper
        slidesPerView={'auto'}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src={CM} />  
        </SwiperSlide>

        <SwiperSlide>
            <img src={ACM} />
        </SwiperSlide>
        
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
      
    </div>
  )
}

export default HomeSlider;
