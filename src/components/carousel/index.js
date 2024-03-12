'use client'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade'

import './styles.css';

// import required modules
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import ProductCard from '../product/product_card';


export const WelcomeCarousel = ({ children }) => {
  return (
    <Swiper
    slidesPerView={1}
    spaceBetween={10}
    pagination={{
      clickable: true,
    }}
    
   autoplay={{
          delay: 5000,
          disableOnInteraction: true,
        }}
      
    navigation={true}
    modules={[Pagination, Navigation, Autoplay]}
    className="mySwiper"
  >

   {
       
        <>
          {children.map((child, index) => (
            <SwiperSlide key={index} >
               {child}
             </SwiperSlide>
          ))
         
          }
            
       
          
          </>
        
   
    }
  </Swiper>
  )
}


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