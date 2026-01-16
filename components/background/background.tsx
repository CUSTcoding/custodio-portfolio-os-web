"use client"


import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; 
import React from "react";



export default function Background(){
const slides = [
    "/assets/img/pexels-markusspiske-6190327.jpg",
    "/assets/img/pexels-godiatima-4976712.jpg",
  ];
    return(
         <Swiper
            loop={true} 
            autoplay={{
                delay: 2,
                disableOnInteraction: false,
            }}
            slidesPerView={1}
            spaceBetween={0}
            className="w-full h-screen"
            >
            {slides.map((src, index) => (
                <SwiperSlide key={index}>
                    <img src={src} className="w-full h-full object-cover" alt={`Slide ${index + 1}`} />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}