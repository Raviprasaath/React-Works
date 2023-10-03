import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import image from "../../assets/homepage-3.jpg"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination, Navigation } from 'swiper/modules';
import './HompageSection4.css'

const HompageSection3 = () => {
    

    return (
        <>
        <div className='home-section-4'>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            navigation={true}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}
            modules={[Pagination, Navigation]}
            className="mySwiper-homesection-4"
          >
            <SwiperSlide>
              <div>
                <img src={image} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src={image} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src={image} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src={image} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src={image} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src={image} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src={image} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src={image} alt="" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </>
    )
}

export default HompageSection3;