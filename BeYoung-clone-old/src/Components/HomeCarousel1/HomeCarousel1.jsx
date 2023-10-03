import React, { useRef, useState } from "react";
import "./HomeCarousel1.css";
import image1 from "../../assets/homepage-1.jpg";
import image2 from "../../assets/homepage-2.jpg";
import image3 from "../../assets/homepage-3.jpg";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

// import required modules
import { EffectFade, Autoplay, Pagination, Navigation } from 'swiper/modules';


const HomeCarousel1 = () => {
  return (
    <>
      <div className="homepage">
      <Swiper
        spaceBetween={0}
        loop={true}
        effect={'fade'}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Autoplay, Pagination, Navigation]}
        className="mySwiperHome"
      >
        <SwiperSlide className="home-page-carousel">
            <img src={image1} alt="" />
        </SwiperSlide>
        <SwiperSlide className="home-page-carousel">
            <img src={image2} alt="" />            
        </SwiperSlide>
        <SwiperSlide className="home-page-carousel">
            <img src={image3} alt="" />                        
        </SwiperSlide>
      </Swiper>
      </div>
    </>
  );
};

export default HomeCarousel1;
