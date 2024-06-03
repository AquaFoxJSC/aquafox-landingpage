"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/grid';
// import 'swiper/css/pagination'
// import 'swiper/css/navigation'
// Pagination
import { Grid } from 'swiper/modules';

function OurWorks() {
  return (
    <div className="container our-works-block mx-auto mt-[80px]">
      <div className="our-works-header text-center">
        <h2 className="our-works-title">Our Works</h2>
        <p className="our-works-description mt-[24px]">
          We’ve thought of everything you need so you don’t have to.
        </p>
      </div>
      <Swiper
        className="swiper-our-works"
        slidesPerView={3}
        grid={{
          rows: 2,
          fill: "row",
        }}
        spaceBetween={32}
        modules={[Grid]}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
      </Swiper>
    </div>
  );
}

export default OurWorks;
