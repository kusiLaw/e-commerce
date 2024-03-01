'use client'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Navigation } from 'swiper/modules';

import ProductCard from '../product/product_card';

// const swiper = new Swiper('.swiper-container', {
//     // ... other parameters
//     navigation: {
//       nextEl: '.custom-next-button',
//       prevEl: '.custom-prev-button',
//     },
//   });

const Carousel = ({products}) => {



  return (
    <Swiper
    slidesPerView={1}
    spaceBetween={10}
    pagination={{
      clickable: true,
    }}
    breakpoints={{
      340:{
        slidesPerView: 2,
        spaceBetween: 20,
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 6,
        spaceBetween: 50,
      },
    }}
    navigation={true}
    modules={[Navigation]}
    className="mySwiper"
  >

   {
    products.map(data =>(
        <SwiperSlide key={data.id}>
            <ProductCard {...data}/>
        </SwiperSlide>
        ))
    }
  </Swiper>
  )
}

export default Carousel