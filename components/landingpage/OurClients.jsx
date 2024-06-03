"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function OurClients() {
  return (
    <div className="container mx-auto our-clients-block mt-[136px]">
      <div className="our-clients-header text-center">
        <h2 className="our-clients-title">Hear from Our Satisfied Clients</h2>
        <p className="our-clients-description mt-[24px]">
          Read firsthand experiences from clients who have experienced the
          transformative power of our marketing services.
        </p>
      </div>
      <Swiper className="swiper-our-clients" slidesPerView={3} spaceBetween={32}>
        <SwiperSlide className="swiper-our-clients-item">Slide 1</SwiperSlide>
        <SwiperSlide className="swiper-our-clients-item">Slide 2</SwiperSlide>
        <SwiperSlide className="swiper-our-clients-item">Slide 3</SwiperSlide>
        <SwiperSlide className="swiper-our-clients-item">Slide 4</SwiperSlide>
        <SwiperSlide className="swiper-our-clients-item">Slide 5</SwiperSlide>
        <SwiperSlide className="swiper-our-clients-item">Slide 6</SwiperSlide>
      </Swiper>
      <div className="our-clients-pagination text-center">pagination</div>
    </div>
  );
}

export default OurClients;
