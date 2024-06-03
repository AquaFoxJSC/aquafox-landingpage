"use client";
import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";

function OurClients() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  useEffect(() => {
    const handleNavigation = (swiper) => {
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
      swiper.navigation.init();
      swiper.navigation.update();
    };

    const swiper = document.querySelector(".swiper-our-clients")?.swiper;
    if (swiper) {
      handleNavigation(swiper);
    }
  }, []);
  return (
    <div className="expertise-section mx-auto our-clients-block mt-[96px]">
      <div className="expertise-div container">
        <div className="our-clients-header text-center">
          <h2 className="our-clients-title">OUR SATISFIED CUSTOMERS</h2>
          <p className="our-clients-description mt-[24px]">
            Read firsthand experiences from clients who have experienced the
            transformative power of our marketing services.
          </p>
        </div>
        <Swiper
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          breakpoints={{
            768: {
              slidesPerView: 3,
              spaceBetween: 32,
            },
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          centeredSlides={true}
          loop={true}
          modules={[Navigation, Autoplay]}
          className="swiper-our-clients  mt-[64px]"
          slidesPerView={1.2}
          spaceBetween={12}
        >
          <SwiperSlide className="swiper-our-clients-item">
            <div className="client-answer">
              &quot;Using AQUAFOX’s robust tools has elevated my token to the
              premier spot repeatedly, doubling my profits and enhancing
              operational efficiency.&quot;
            </div>
            <div className="client-information">
              <div className="client-avatar">
                <Image
                  src="/images/avatar/avatar_1.png"
                  alt="avatar"
                  width={48}
                  height={48}
                  priority
                />
              </div>
              <div className="client-detail">
                <div className="client-name">Mr. Henry Thompson</div>
                <div className="client-position">Esteemed Client</div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-our-clients-item">
            <div className="client-answer">
              &quot;Our experience with AquaFox Solution has been exceptional.
              Their team’s dedication is unparalleled, and their world-class
              expertise has significantly elevated our project’s
              standards.&quot;
            </div>
            <div className="client-information">
              <div className="client-avatar">
                <Image
                  src="/images/avatar/avatar_2.png"
                  alt="avatar"
                  width={48}
                  height={48}
                  priority
                />
              </div>
              <div className="client-detail">
                <div className="client-name">Ms. Ava Lee</div>
                <div className="client-position">Valued Client</div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-our-clients-item">
            <div className="client-answer">
              &quot;The founder’s dedication and passion for solving real-world
              problems are evident in every strategy and solution offered. It’s
              inspiring to invest in a company that not only promises innovation
              but also delivers tangible results with such commitment.&quot;
            </div>
            <div className="client-information">
              <div className="client-avatar">
                <Image
                  src="/images/avatar/avatar_3.png"
                  alt="avatar"
                  width={48}
                  height={48}
                  priority
                />
              </div>
              <div className="client-detail">
                <div className="client-name">Mr. Michael Foster</div>
                <div className="client-position">Strategic Investor</div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-our-clients-item">
            <div className="client-answer">
              &quot;Using AQUAFOX’s robust tools has elevated my token to the
              premier spot repeatedly, doubling my profits and enhancing
              operational efficiency.&quot;
            </div>
            <div className="client-information">
              <div className="client-avatar">
                <Image
                  src="/images/avatar/avatar_1.png"
                  alt="avatar"
                  width={48}
                  height={48}
                  priority
                />
              </div>
              <div className="client-detail">
                <div className="client-name">Mr. Henry Thompson</div>
                <div className="client-position">Esteemed Client</div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-our-clients-item">
            <div className="client-answer">
              &quot;Our experience with AquaFox Solution has been exceptional.
              Their team’s dedication is unparalleled, and their world-class
              expertise has significantly elevated our project’s
              standards.&quot;
            </div>
            <div className="client-information">
              <div className="client-avatar">
                <Image
                  src="/images/avatar/avatar_2.png"
                  alt="avatar"
                  width={48}
                  height={48}
                  priority
                />
              </div>
              <div className="client-detail">
                <div className="client-name">Ms. Ava Lee</div>
                <div className="client-position">Valued Client</div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-our-clients-item">
            <div className="client-answer">
              &quot;The founder’s dedication and passion for solving real-world
              problems are evident in every strategy and solution offered. It’s
              inspiring to invest in a company that not only promises innovation
              but also delivers tangible results with such commitment.&quot;
            </div>
            <div className="client-information">
              <div className="client-avatar">
                <Image
                  src="/images/avatar/avatar_3.png"
                  alt="avatar"
                  width={48}
                  height={48}
                  priority
                />
              </div>
              <div className="client-detail">
                <div className="client-name">Mr. Michael Foster</div>
                <div className="client-position">Strategic Investor</div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="our-clients-pagination mt-[64px] text-center">
          <button ref={prevRef} className="custom-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M17.4995 10.0003C17.4995 10.1661 17.4337 10.3251 17.3165 10.4423C17.1992 10.5595 17.0403 10.6253 16.8745 10.6253H4.63311L9.1917 15.1832C9.24977 15.2412 9.29584 15.3102 9.32726 15.386C9.35869 15.4619 9.37486 15.5432 9.37486 15.6253C9.37486 15.7075 9.35869 15.7888 9.32726 15.8647C9.29584 15.9405 9.24977 16.0095 9.1917 16.0675C9.13363 16.1256 9.0647 16.1717 8.98883 16.2031C8.91296 16.2345 8.83164 16.2507 8.74952 16.2507C8.66739 16.2507 8.58608 16.2345 8.51021 16.2031C8.43433 16.1717 8.3654 16.1256 8.30733 16.0675L2.68233 10.4425C2.62422 10.3845 2.57812 10.3156 2.54667 10.2397C2.51521 10.1638 2.49902 10.0825 2.49902 10.0003C2.49902 9.91821 2.51521 9.83688 2.54667 9.76101C2.57812 9.68514 2.62422 9.61621 2.68233 9.55816L8.30733 3.93316C8.4246 3.81588 8.58366 3.75 8.74952 3.75C8.91537 3.75 9.07443 3.81588 9.1917 3.93316C9.30898 4.05044 9.37486 4.2095 9.37486 4.37535C9.37486 4.5412 9.30898 4.70026 9.1917 4.81753L4.63311 9.37535H16.8745C17.0403 9.37535 17.1992 9.4412 17.3165 9.55841C17.4337 9.67562 17.4995 9.83459 17.4995 10.0003Z"
                fill="#1D2939"
              />
            </svg>
          </button>
          <button ref={nextRef} className="custom-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M17.3172 10.4425L11.6922 16.0675C11.5749 16.1848 11.4159 16.2507 11.25 16.2507C11.0841 16.2507 10.9251 16.1848 10.8078 16.0675C10.6905 15.9503 10.6247 15.7912 10.6247 15.6253C10.6247 15.4595 10.6905 15.3004 10.8078 15.1832L15.3664 10.6253H3.125C2.95924 10.6253 2.80027 10.5595 2.68306 10.4423C2.56585 10.3251 2.5 10.1661 2.5 10.0003C2.5 9.83459 2.56585 9.67562 2.68306 9.55841C2.80027 9.4412 2.95924 9.37535 3.125 9.37535H15.3664L10.8078 4.81753C10.6905 4.70026 10.6247 4.5412 10.6247 4.37535C10.6247 4.2095 10.6905 4.05044 10.8078 3.93316C10.9251 3.81588 11.0841 3.75 11.25 3.75C11.4159 3.75 11.5749 3.81588 11.6922 3.93316L17.3172 9.55816C17.3753 9.61621 17.4214 9.68514 17.4529 9.76101C17.4843 9.83688 17.5005 9.91821 17.5005 10.0003C17.5005 10.0825 17.4843 10.1638 17.4529 10.2397C17.4214 10.3156 17.3753 10.3845 17.3172 10.4425Z"
                fill="#1D2939"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default OurClients;
