"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
// import 'swiper/css/pagination'
// import 'swiper/css/navigation'
// Pagination
import { Grid, Autoplay } from "swiper/modules";
import Image from "next/image";

function OurWorks() {
  return (
    // mt-[80px]
    <div className="expertise-section our-works-block mx-auto">
      <div className="expertise-div container">
        <div className="our-works-header text-center">
          <h2 className="our-works-title">Our Works</h2>
          <p className="our-works-description mt-[24px]">
            We’ve thought of everything you need so you don’t have to.
          </p>
        </div>
        <Swiper
          className="swiper-our-works"
          slidesPerView={1.2}
          loop={true}
          grid={{
            rows: 1,
            fill: "row",
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          centeredSlides={true}
          spaceBetween={12}
          modules={[Grid, Autoplay]}
          breakpoints={{
            768: {
              slidesPerView: 3,
              spaceBetween: 32,
              grid: {
                rows: 2,
                fill: "row",
              },
              autoplay: false,
              centeredSlides: false,
              loop: false,
            },
          }}
        >
          <SwiperSlide className="swiper-our-works-item">
            <div className="work-image">
              <Image
                src="/images/our-works/our-works_1.png"
                alt="our-works"
                width={400}
                height={312}
                priority
              />
            </div>
            <div className="work-title">
              Decentralized Exchange & Aggregator - Auto Trading Bot with best
              token prices.
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-our-works-item">
            <div className="work-image">
              <Image
                src="/images/our-works/our-works_2.png"
                alt="our-works"
                width={400}
                height={312}
                priority
              />
            </div>
            <div className="work-title">Game Fi - Earn-fi Platform</div>
          </SwiperSlide>
          <SwiperSlide className="swiper-our-works-item">
            <div className="work-image">
              <Image
                src="/images/our-works/our-works_3.png"
                alt="our-works"
                width={400}
                height={312}
                priority
              />
            </div>
            <div className="work-title">
              Crypto Wallet - A convenient and secure wallet
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-our-works-item">
            <div className="work-image">
              <Image
                src="/images/our-works/our-works_4.png"
                alt="our-works"
                width={400}
                height={312}
                priority
              />
            </div>
            <div className="work-title">
              Centralized Exchange - A global crypto exchange platform with 0%
              transaction fee for major pairs
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-our-works-item">
            <div className="work-image">
              <Image
                src="/images/our-works/our-works_5.png"
                alt="our-works"
                width={400}
                height={312}
                priority
              />
            </div>
            <div className="work-title">
              Insurance - A permissioned blockchain for AIA Insurance using
              Hyperledger Fabric
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-our-works-item">
            <div className="work-image">
              <Image
                src="/images/our-works/our-works_6.png"
                alt="our-works"
                width={400}
                height={312}
                priority
              />
            </div>
            <div className="work-title">
              HolaMate - Donate KOL and wallet NFT
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default OurWorks;
