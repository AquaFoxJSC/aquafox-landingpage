/* eslint-disable @next/next/no-img-element */
"use client";

import { arrowActionIcon, commitmentIcon, effectiveIcon, starIcon } from "@/constant/svg";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import LinkIndicator from "@/components/common/LinkIndicatior";

const liquiditySteps = [
  {
    id: 1,
    icon: starIcon,
    title: "Business Value",
    heading: "Improve",
    description: "Improving liquidity depth in the order books.",
    isActive: true,
    isCompleted: false,
  },
  {
    id: 2,
    icon: effectiveIcon,
    title: "Effectiveness",
    heading: "Lower",
    description: "Lower the spread between the Bid & Ask",
    isActive: true,
    isCompleted: true,
  },
  {
    id: 3,
    icon: commitmentIcon,
    title: "Commitment",
    heading: "Arbitrage",
    description: "Arbitrage between pairs, exchanges and liquidity pools.",
    isActive: true,
    isCompleted: true,
  },
];

const viewHeightPerItem = 100;

const LiquidityProvision = () => {
  const [activeItem, setActiveItem] = useState(0);
  const sectionRef = useRef(null);
  const [yTransform, setYTransform] = useState(0);
  const [currentStep, setCurrentStep] = useState(0); // Hiển thị nội dung
  const [fade, setFade] = useState("fade-in"); // Điều khiển animation

  useEffect(() => {
    // Khi `activeItem` thay đổi, thực hiện hiệu ứng fade-out trước
    setFade("fade-out");
    const timeout = setTimeout(() => {
      setCurrentStep(activeItem); // Cập nhật nội dung
      setFade("fade-in"); // Sau đó fade-in
    }, 300); // Thời gian animation (phải khớp với CSS)

    return () => clearTimeout(timeout);
  }, [activeItem]); // Lắng nghe thay đổi của activeItem

  const items = [
    {
      id: 1,
      title: "Liquidity Provision - Step 1",
      description: "This is the first step to provide liquidity.",
    },
    {
      id: 2,
      title: "Liquidity Provision - Step 2",
      description: "Here comes the second step.",
    },
    {
      id: 3,
      title: "Liquidity Provision - Step 3",
      description: "Finally, the last step in this section.",
    },
  ];
  const lastScrollPosition = useRef(0);

  const handleScroll = () => {
    const section = sectionRef.current;
    if (section) {
      const { top } = section.getBoundingClientRect(); // Khoảng cách từ section đến viewport
      const sectionHeight = section.offsetHeight; // Chiều cao toàn bộ section
      const itemHeight = 1 * window.innerHeight; // Chiều cao mỗi item
      const scrollPosition = -top; // Giá trị scroll trong section

      // Tính toán activeItem
      const newActiveItem = Math.floor(scrollPosition / itemHeight);
      setActiveItem(Math.max(0, Math.min(newActiveItem, items.length - 1))); // Đảm bảo nằm trong khoảng hợp lệ

      const viewportHeight = window.innerHeight;
      const scrollStart = 0.2 * viewportHeight;
      const scrollEnd = 2 * viewportHeight;

      if (scrollPosition >= scrollStart && scrollPosition <= scrollEnd) {
        const relativeScroll = scrollPosition - scrollStart;
        const maxScroll = scrollEnd - scrollStart;
        const scrollFraction = relativeScroll / maxScroll;
        const newYTransform = Math.min(40, Math.max(0, scrollFraction * 40)); // Giới hạn trong khoảng [0, 40]

        setYTransform(newYTransform);
      } else if (scrollPosition < scrollStart) {
        setYTransform(0);
      } else if (scrollPosition > scrollEnd) {
        setYTransform(40);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative">
      <div
        ref={sectionRef}
        style={{
          height: `${viewHeightPerItem * (liquiditySteps.length + 1)}vh`,
        }}
      >
        <div
          className={`sticky top-0 flex flex-col justify-center items-center bg-custom-3 lg:h-[100vh] `}
        >
          <div className="relative bg-white py-[20px] lg:px-[90px] px-3 lg:border-[20px] lg:border-solid border-[#EAF2FF]">
            <div
              className={`text-[#0836A1] text-center text-4xl not-italic font-medium leading-[60px] tracking-[-1.08px] lg:mb-[60px] lg:mt-0 mt-5`}
            >
              Liquidity Provision
            </div>

            <div className="flex lg:flex-row flex-col gap-[60px]">
              <div className="flex lg:translate-x-1 translate-x-[-10px lg:order-0 order-1 items-center">
                <div className="flex flex-col items-center gap-[5px] lg:w-auto w-[10%] lg:pr-0 pr-[10px]">
                  <div
                    className={`w-[10px] h-[10px] ${
                      activeItem >= 0 ? "bg-[#2684FF]" : "bg-[#B4C3D6]"
                    } rounded-full mb-[38px]`}
                  ></div>
                  {activeItem >= 1 ? (
                    <div className="w-[77px] h-[1px] rotate-90 bg-gradient-custom"></div>
                  ) : (
                    <div className="w-[77px] h-[1px] rotate-90 bg-[#B4C3D6]"></div>
                  )}

                  <div
                    className={`w-[10px] h-[10px] ${
                      activeItem >= 1 ? "bg-[#2684FF]" : "bg-[#B4C3D6]"
                    } rounded-full my-[38px]`}
                  ></div>
                  {activeItem >= 2 ? (
                    <div className="w-[77px] h-[1px] rotate-90 bg-gradient-custom"></div>
                  ) : (
                    <div className="w-[77px] h-[1px] rotate-90 bg-[#B4C3D6]"></div>
                  )}

                  <div
                    className={`w-[10px] h-[10px] ${
                      activeItem >= 2 ? "bg-[#2684FF]" : "bg-[#B4C3D6]"
                    } rounded-full mt-[38px]`}
                  ></div>
                </div>
                <div className="flex flex-col justify-center self-stretch my-auto min-w-[240px] max-md:max-w-full">
                  <div className="flex gap-2 items-center self-start text-base tracking-tight text-blue-500">
                    <div className={`flex items-center gap-2 ${fade}`}>
                      {liquiditySteps[currentStep].icon}

                      <div className="self-stretch my-auto">
                        {liquiditySteps[currentStep].title}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col px-8 pt-8 pb-14 mt-5 max-w-full bg-blue-50 rounded h-[160px] lg:w-[440px] max-md:px-5">
                    <div className="flex flex-col w-full">
                      <div className="self-start text-4xl font-medium tracking-tighter text-center bg-clip-text special-text">
                        {liquiditySteps[currentStep].heading}
                      </div>
                      {/* Fade hiệu ứng cho phần mô tả */}
                      <div
                        className={`mt-2.5 text-base tracking-tight text-gray-700 ${fade}`}
                      >
                        {liquiditySteps[currentStep].description}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative lg:order-1 order-0">
                <div className="absolute z-10 top-[-10px] flex overflow-hidden flex-1 shrink self-stretch my-auto basis-0 max-md:max-w-full">
                  <div className="px-3 pt-2.5 max-md:pr-5 max-md:pb-24">
                    <div className="flex gap-[15px]">
                      <div className="flex flex-col max-md:ml-0 max-md:w-full">
                        <div className="grow gap-2.5 self-stretch py-1 pr-3 pl-3.5 lg:text-base text-sm text-white whitespace-nowrap bg-[#FF0000] rounded-md max-md:mt-6">
                          Ask
                        </div>
                      </div>
                      <div className="flex flex-col max-md:ml-0 max-md:w-full">
                        <div className="grow gap-2.5 self-stretch py-1 pr-2 pl-2.5 lg:text-base text-sm text-white whitespace-nowrap bg-[#93C2FF] rounded-md max-md:mt-6">
                          Spread
                        </div>
                      </div>
                      <div className="flex flex-col max-md:ml-0 max-md:w-full">
                        <div className="grow gap-2.5 self-stretch px-3.5 py-1 lg:text-base text-sm text-white whitespace-nowrap bg-[#199600] rounded-md max-md:mt-6">
                          Bid
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-[-20px] flex overflow-hiddenflex-1 shrink self-stretch my-auto basis-0 w-full max-md:max-w-full">
                  <div className="flex gap-5 justify-between mt-3 lg:text-base text-sm whitespace-nowrap max-md:max-w-full w-full">
                    <div
                      className={`gap-2.5 self-stretch py-1.5 pr-2.5 pl-2.5 ${
                        activeItem === 2 ? "bg-[#D8EDFF] text-[#9BA5B9]" : "bg-[#E4F3FF] text-[#2684FF]"
                      }  rounded-md min-h-[29px]`}
                    >
                      BEFORE
                    </div>
                    <div
                      className={`gap-2.5 self-stretch px-4 py-1.5 ${
                        activeItem === 2 ? "bg-[#E4F3FF] text-[#2684FF]" : "bg-[#D8EDFF] text-[#9BA5B9]"
                      } rounded-md min-h-[29px]`}
                    >
                      AFTER
                    </div>
                  </div>
                </div>
                {svgMain(yTransform)}
              </div>
            </div>

            <div
              className={`lg:mt-[60px] mt-2 flex justify-center`}
              style={{ visibility: activeItem === 2 ? "visible" : "hidden" }}
            >
              <LinkIndicator href="/liquidity-provision"
                className="cursor-pointer flex gap-2 justify-center items-center px-6 py-3.5 mt-2.5 text-base font-semibold tracking-tight text-blue-500 rounded-[10px] border-2 border-blue-500 border-solid min-h-[46px] max-md:px-5"
                tabIndex={0}
                aria-label="Learn more"
              >
                <div className="self-stretch my-auto">Learn more</div>
                {arrowActionIcon}
              </LinkIndicator>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiquidityProvision;

const svgMain = (yTransform) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 350 280"
    preserveAspectRatio="xMidYMid meet"
    className="w-full"
    width={350}
    height={280}
  >
    <defs>
      <clipPath id="__lottie_element_172">
        <rect width={350} height={280} x={0} y={0} />
      </clipPath>
      <clipPath id="__lottie_element_198">
        <path d="M0,0 L400,0 L400,300 L0,300z" />
      </clipPath>
      <clipPath id="__lottie_element_199">
        <path
          fill="#ffffff"
          clipRule="nonzero"
          d=" M29.25,0 C29.25,0 29.25,300 29.25,300 C29.25,300 371,301 371,301 C371,301 371,1 371,1 C371,1 29.25,0 29.25,0"
          fillOpacity={1}
        />
      </clipPath>
    </defs>
    <g clipPath="url(#__lottie_element_172)">
      <g
        clipPath="url(#__lottie_element_198)"
        style={{ display: "block" }}
        transform="matrix(1,0,0,1,-25,-19)"
        opacity={1}
      >
        <g clipPath="url(#__lottie_element_199)">
          {/* all */}
          <g
            style={{ display: "block" }}
            transform="matrix(1,0,0,1,211,120)"
            opacity={1}
          >
            <g opacity={1} transform="matrix(1,0,0,1,0,0)">
              <path
                fill="rgb(38, 132, 255)"
                fillOpacity={0.2}
                d={` M-344.125,-143.25 C-344.125,-143.25 -268.5610046386719,${
                  -2.0578174591064453 + yTransform
                } -268.5610046386719,${
                  -2.0578174591064453 + yTransform
                } C-268.5610046386719,${
                  -2.0578174591064453 + yTransform
                } -167.78900146484375,${
                  -47.35481643676758 + yTransform
                } -167.78900146484375,${
                  -47.35481643676758 + yTransform
                } C-167.78900146484375,${
                  -47.35481643676758 + yTransform
                } -129.6820068359375,${
                  17.991182327270508 + yTransform
                } -129.6820068359375,${
                  17.991182327270508 + yTransform
                } C-129.6820068359375,${
                  17.991182327270508 + yTransform
                } -56.099998474121094,${
                  -47.184818267822266 + yTransform
                } -56.099998474121094,${
                  -47.184818267822266 + yTransform
                } C-56.099998474121094,${
                  -47.184818267822266 + yTransform
                } -6.303999900817871,${
                  7.168182849884033 + yTransform
                } -6.303999900817871,${
                  7.168182849884033 + yTransform
                } C-6.303999900817871,${
                  7.168182849884033 + yTransform
                } 64.35199737548828,${
                  -71.12681579589844 + yTransform
                } 64.35199737548828,${
                  -71.12681579589844 + yTransform
                } C64.35199737548828,${
                  -71.12681579589844 + yTransform
                } 141.43899536132812,${
                  -17.060001373291016 + yTransform
                } 141.43899536132812,${
                  -17.060001373291016 + yTransform
                } C141.43899536132812,${
                  -17.060001373291016 + yTransform
                } 211.43899536132812,${
                  -72.05781555175781 + yTransform
                } 211.43899536132812,${
                  -72.05781555175781 + yTransform
                } C211.43899536132812,${
                  -72.05781555175781 + yTransform
                } 286,-59.5 286,-59.5 C286,-59.5 344.125,-143.25 344.125,-143.25 C344.125,-143.25 344.125,-12.375 344.125,-12.375 C344.125,-12.375 286,69.68800354003906 286,69.68800354003906 C286,69.68800354003906 216.43899536132812,${
                  49.534366607666016 - yTransform
                } 216.43899536132812,${
                  49.534366607666016 - yTransform
                } C216.43899536132812,${
                  49.534366607666016 - yTransform
                } 141.43899536132812,${
                  109.03546142578125 - yTransform
                } 141.43899536132812,${
                  109.03546142578125 - yTransform
                } C141.43899536132812,${
                  109.03546142578125 - yTransform
                } 64.45800018310547,${
                  53.780460357666016 - yTransform
                } 64.45800018310547,${
                  53.780460357666016 - yTransform
                } C64.45800018310547,${
                  53.780460357666016 - yTransform
                } -6.303999900817871,${
                  135.13446044921875 - yTransform
                } -6.303999900817871,${
                  135.13446044921875 - yTransform
                } C-6.303999900817871,${
                  135.13446044921875 - yTransform
                } -56.099998474121094,${
                  77.61336517333984 - yTransform
                } -56.099998474121094,${
                  77.61336517333984 - yTransform
                } C-56.099998474121094,${
                  77.61336517333984 - yTransform
                } -129.6820068359375,${
                  141.1366424560547 - yTransform
                } -129.6820068359375,${
                  141.1366424560547 - yTransform
                } C-129.6820068359375,${
                  141.1366424560547 - yTransform
                } -167.78900146484375,${
                  77.3505630493164 - yTransform
                } -167.78900146484375,${
                  77.3505630493164 - yTransform
                } C-167.78900146484375,${
                  77.3505630493164 - yTransform
                } -235.54200744628906,${
                  110.28373718261719 - yTransform
                } -235.54200744628906,${
                  110.28373718261719 - yTransform
                } C-235.54200744628906,${
                  110.28373718261719 - yTransform
                } -344.125,-12.375 -344.125,-12.375 C-344.125,-12.375 -344.125,-143.25 -344.125,-143.25z`}
              />
            </g>
          </g>

          {/* bottom */}
          <g
            style={{ display: "block" }}
            transform="matrix(1,0,0,1,200,150)"
            opacity={1}
          >
            <g opacity={1} transform="matrix(1,0,0,1,0,0)">
              <path
                fill="rgb(123,183,176)"
                fillOpacity={1}
                d={` M-224.54200744628906,${
                  80.28373718261719 - yTransform
                } C-224.54200744628906,${
                  80.28373718261719 - yTransform
                } -156.78900146484375,${
                  47.350563049316406 - yTransform
                } -156.78900146484375,${47.350563049316406 - yTransform}`}
              />
              <path
                strokeLinecap="butt"
                strokeLinejoin="miter"
                fillOpacity={0}
                strokeMiterlimit={4}
                stroke="#199600"
                strokeOpacity={1}
                strokeWidth={4}
                d={` M-224.54200744628906,${
                  80.28373718261719 - yTransform
                } C-224.54200744628906,${
                  80.28373718261719 - yTransform
                } -156.78900146484375,${
                  47.350563049316406 - yTransform
                } -156.78900146484375,${47.350563049316406 - yTransform}`}
              />
            </g>
          </g>
          <g
            style={{ display: "block" }}
            transform="matrix(1,0,0,1,200,150)"
            opacity={1}
          >
            <g opacity={1} transform="matrix(1,0,0,1,0,0)">
              <path
                fill="rgb(123,183,176)"
                fillOpacity={1}
                d={` M-156.78900146484375,${
                  47.350563049316406 - yTransform
                } C-156.78900146484375,${
                  47.350563049316406 - yTransform
                } -118.68199920654297,${
                  111.13664245605469 - yTransform
                } -118.68199920654297,${111.13664245605469 - yTransform}`}
              />
              <path
                strokeLinecap="butt"
                strokeLinejoin="miter"
                fillOpacity={0}
                strokeMiterlimit={4}
                stroke="#199600"
                strokeOpacity={1}
                strokeWidth={4}
                d={` M-156.78900146484375,${
                  47.350563049316406 - yTransform
                } C-156.78900146484375,${
                  47.350563049316406 - yTransform
                } -118.68199920654297,${
                  111.13664245605469 - yTransform
                } -118.68199920654297,${111.13664245605469 - yTransform}`}
              />
            </g>
          </g>
          <g
            style={{ display: "block" }}
            transform="matrix(1,0,0,1,200,150)"
            opacity={1}
          >
            <g opacity={1} transform="matrix(1,0,0,1,0,0)">
              <path
                fill="rgb(123,183,176)"
                fillOpacity={1}
                d={` M-118.68199920654297,${
                  111.13664245605469 - yTransform
                } C-118.68199920654297,${
                  111.13664245605469 - yTransform
                } -45.099998474121094,${
                  47.61336898803711 - yTransform
                } -45.099998474121094,${47.61336898803711 - yTransform}`}
              />
              <path
                strokeLinecap="butt"
                strokeLinejoin="miter"
                fillOpacity={0}
                strokeMiterlimit={4}
                stroke="#199600"
                strokeOpacity={1}
                strokeWidth={4}
                d={` M-118.68199920654297,${
                  111.13664245605469 - yTransform
                } C-118.68199920654297,${
                  111.13664245605469 - yTransform
                } -45.099998474121094,${
                  47.61336898803711 - yTransform
                } -45.099998474121094,${47.61336898803711 - yTransform}`}
              />
            </g>
          </g>
          <g
            style={{ display: "block" }}
            transform="matrix(1,0,0,1,200,150)"
            opacity={1}
          >
            <g opacity={1} transform="matrix(1,0,0,1,0,0)">
              <path
                fill="rgb(123,183,176)"
                fillOpacity={1}
                d={` M-45.099998474121094,${
                  47.61336898803711 - yTransform
                } C-45.099998474121094,${
                  47.61336898803711 - yTransform
                } 4.696000099182129,${
                  105.13446044921875 - yTransform
                } 4.696000099182129,${105.13446044921875 - yTransform}`}
              />
              <path
                strokeLinecap="butt"
                strokeLinejoin="miter"
                fillOpacity={0}
                strokeMiterlimit={4}
                stroke="#199600"
                strokeOpacity={1}
                strokeWidth={4}
                d={` M-45.099998474121094,${
                  47.61336898803711 - yTransform
                } C-45.099998474121094,${
                  47.61336898803711 - yTransform
                } 4.696000099182129,${
                  105.13446044921875 - yTransform
                } 4.696000099182129,${105.13446044921875 - yTransform}`}
              />
            </g>
          </g>
          <g
            style={{ display: "block" }}
            transform="matrix(1,0,0,1,200,150)"
            opacity={1}
          >
            <g opacity={1} transform="matrix(1,0,0,1,0,0)">
              <path
                fill="rgb(123,183,176)"
                fillOpacity={1}
                d={` M4.696000099182129,${
                  105.13446044921875 - yTransform
                } C4.696000099182129,${
                  105.13446044921875 - yTransform
                } 75.45800018310547,${
                  23.780460357666016 - yTransform
                } 75.45800018310547,${23.780460357666016 - yTransform}`}
              />
              <path
                strokeLinecap="butt"
                strokeLinejoin="miter"
                fillOpacity={0}
                strokeMiterlimit={4}
                stroke="#199600"
                strokeOpacity={1}
                strokeWidth={4}
                d={` M4.696000099182129,${
                  105.13446044921875 - yTransform
                } C4.696000099182129,${
                  105.13446044921875 - yTransform
                } 75.45800018310547,${
                  23.780460357666016 - yTransform
                } 75.45800018310547,${23.780460357666016 - yTransform}`}
              />
            </g>
          </g>
          <g
            style={{ display: "block" }}
            transform="matrix(1,0,0,1,200,150)"
            opacity={1}
          >
            <g opacity={1} transform="matrix(1,0,0,1,0,0)">
              <path
                fill="rgb(123,183,176)"
                fillOpacity={1}
                d={` M75.45800018310547,${
                  23.780460357666016 - yTransform
                } C75.45800018310547,${
                  23.780460357666016 - yTransform
                } 152.43899536132812,${
                  79.03546142578125 - yTransform
                } 152.43899536132812,${79.03546142578125 - yTransform}`}
              />
              <path
                strokeLinecap="butt"
                strokeLinejoin="miter"
                fillOpacity={0}
                strokeMiterlimit={4}
                stroke="#199600"
                strokeOpacity={1}
                strokeWidth={4}
                d={` M75.45800018310547,${
                  23.780460357666016 - yTransform
                } C75.45800018310547,${
                  23.780460357666016 - yTransform
                } 152.43899536132812,${
                  79.03546142578125 - yTransform
                } 152.43899536132812,${79.03546142578125 - yTransform}`}
              />
            </g>
          </g>
          <g
            style={{ display: "block" }}
            transform="matrix(1,0,0,1,200,150)"
            opacity={1}
          >
            <g opacity={1} transform="matrix(1,0,0,1,0,0)">
              <path
                fill="rgb(123,183,176)"
                fillOpacity={1}
                d={` M152.43899536132812,${
                  79.03546142578125 - yTransform
                } C152.43899536132812,${
                  79.03546142578125 - yTransform
                } 227.43899536132812,${
                  19.53436851501465 - yTransform
                } 227.43899536132812,${19.53436851501465 - yTransform}`}
              />
              <path
                strokeLinecap="butt"
                strokeLinejoin="miter"
                fillOpacity={0}
                strokeMiterlimit={4}
                stroke="#199600"
                strokeOpacity={1}
                strokeWidth={4}
                d={` M152.43899536132812,${
                  79.03546142578125 - yTransform
                } C152.43899536132812,${
                  79.03546142578125 - yTransform
                } 227.43899536132812,${
                  19.53436851501465 - yTransform
                } 227.43899536132812,${19.53436851501465 - yTransform}`}
              />
            </g>
          </g>

          {/* top */}
          <g
            style={{ display: "block" }}
            transform="matrix(1,0,0,1,200,150)"
            opacity={1}
          >
            <g opacity={1} transform="matrix(1,0,0,1,0,0)">
              <path
                fill="rgb(123,183,176)"
                fillOpacity={1}
                d={` M152.43899536132812,${
                  -47.060001373291016 + yTransform
                } C152.43899536132812,${
                  -47.060001373291016 + yTransform
                } 222.43899536132812,${
                  -102.05781555175781 + yTransform
                } 222.43899536132812,${-102.05781555175781 + yTransform}`}
              />
              <path
                strokeLinecap="butt"
                strokeLinejoin="miter"
                fillOpacity={0}
                strokeMiterlimit={4}
                stroke="#F00000"
                strokeOpacity={1}
                strokeWidth={4}
                d={` M152.43899536132812,${
                  -47.060001373291016 + yTransform
                } C152.43899536132812,${
                  -47.060001373291016 + yTransform
                } 222.43899536132812,${
                  -102.05781555175781 + yTransform
                } 222.43899536132812,${-102.05781555175781 + yTransform}`}
              />
            </g>
          </g>
          <g
            style={{ display: "block" }}
            transform="matrix(1,0,0,1,200,150)"
            opacity={1}
          >
            <g opacity={1} transform="matrix(1,0,0,1,0,0)">
              <path
                fill="rgb(123,183,176)"
                fillOpacity={1}
                d={` M75.35199737548828,${
                  -101.12681579589844 + yTransform
                } C75.35199737548828,${
                  -101.12681579589844 + yTransform
                } 152.43899536132812,${
                  -47.060001373291016 + yTransform
                } 152.43899536132812,${-47.060001373291016 + yTransform}`}
              />
              <path
                strokeLinecap="butt"
                strokeLinejoin="miter"
                fillOpacity={0}
                strokeMiterlimit={4}
                stroke="#F00000"
                strokeOpacity={1}
                strokeWidth={4}
                d={` M75.35199737548828,${
                  -101.12681579589844 + yTransform
                } C75.35199737548828,${
                  -101.12681579589844 + yTransform
                } 152.43899536132812,${
                  -47.060001373291016 + yTransform
                } 152.43899536132812,${-47.060001373291016 + yTransform}`}
              />
            </g>
          </g>
          <g
            style={{ display: "block" }}
            transform="matrix(1,0,0,1,200,150)"
            opacity={1}
          >
            <g opacity={1} transform="matrix(1,0,0,1,0,0)">
              <path
                fill="rgb(123,183,176)"
                fillOpacity={1}
                d={` M4.696000099182129,${
                  -22.831817626953125 + yTransform
                } C4.696000099182129,${
                  -22.831817626953125 + yTransform
                } 75.35199737548828,${
                  -101.12681579589844 + yTransform
                } 75.35199737548828,${-101.12681579589844 + yTransform}`}
              />
              <path
                strokeLinecap="butt"
                strokeLinejoin="miter"
                fillOpacity={0}
                strokeMiterlimit={4}
                stroke="#F00000"
                strokeOpacity={1}
                strokeWidth={4}
                d={` M4.696000099182129,${
                  -22.831817626953125 + yTransform
                } C4.696000099182129,${
                  -22.831817626953125 + yTransform
                } 75.35199737548828,${
                  -101.12681579589844 + yTransform
                } 75.35199737548828,${-101.12681579589844 + yTransform}`}
              />
            </g>
          </g>
          <g
            style={{ display: "block" }}
            transform="matrix(1,0,0,1,200,150)"
            opacity={1}
          >
            <g opacity={1} transform="matrix(1,0,0,1,0,0)">
              <path
                fill="rgb(123,183,176)"
                fillOpacity={1}
                d={` M-45.099998474121094,${
                  -77.184814453125 + yTransform
                } C-45.099998474121094,${
                  -77.184814453125 + yTransform
                } 4.696000099182129,${
                  -22.831817626953125 + yTransform
                } 4.696000099182129,${-22.831817626953125 + yTransform}`}
              />
              <path
                strokeLinecap="butt"
                strokeLinejoin="miter"
                fillOpacity={0}
                strokeMiterlimit={4}
                stroke="#F00000"
                strokeOpacity={1}
                strokeWidth={4}
                d={` M-45.099998474121094,${
                  -77.184814453125 + yTransform
                } C-45.099998474121094,${
                  -77.184814453125 + yTransform
                } 4.696000099182129,${
                  -22.831817626953125 + yTransform
                } 4.696000099182129,${-22.831817626953125 + yTransform}`}
              />
            </g>
          </g>
          <g
            style={{ display: "block" }}
            transform="matrix(1,0,0,1,200,150)"
            opacity={1}
          >
            <g opacity={1} transform="matrix(1,0,0,1,0,0)">
              <path
                fill="rgb(123,183,176)"
                fillOpacity={1}
                d={` M-118.68199920654297,${
                  -12.008817672729492 + yTransform
                } C-118.68199920654297,${
                  -12.008817672729492 + yTransform
                } -45.099998474121094,${
                  -77.184814453125 + yTransform
                } -45.099998474121094,${-77.184814453125 + yTransform}`}
              />
              <path
                strokeLinecap="butt"
                strokeLinejoin="miter"
                fillOpacity={0}
                strokeMiterlimit={4}
                stroke="#F00000"
                strokeOpacity={1}
                strokeWidth={4}
                d={` M-118.68199920654297,${
                  -12.008817672729492 + yTransform
                } C-118.68199920654297,${
                  -12.008817672729492 + yTransform
                } -45.099998474121094,${
                  -77.184814453125 + yTransform
                } -45.099998474121094,${-77.184814453125 + yTransform}`}
              />
            </g>
          </g>
          <g
            style={{ display: "block" }}
            transform="matrix(1,0,0,1,200,150)"
            opacity={1}
          >
            <g opacity={1} transform="matrix(1,0,0,1,0,0)">
              <path
                fill="rgb(123,183,176)"
                fillOpacity={1}
                d={` M-156.78900146484375,${
                  -77.35482025146484 + yTransform
                } C-156.78900146484375,${
                  -77.35482025146484 + yTransform
                } -118.68199920654297,${
                  -12.008817672729492 + yTransform
                } -118.68199920654297,${-12.008817672729492 + yTransform}`}
              />
              <path
                strokeLinecap="butt"
                strokeLinejoin="miter"
                fillOpacity={0}
                strokeMiterlimit={4}
                stroke="#F00000"
                strokeOpacity={1}
                strokeWidth={4}
                d={` M-156.78900146484375,${
                  -77.35482025146484 + yTransform
                } C-156.78900146484375,${
                  -77.35482025146484 + yTransform
                } -118.68199920654297,${
                  -12.008817672729492 + yTransform
                } -118.68199920654297,${-12.008817672729492 + yTransform}`}
              />
            </g>
          </g>
          <g
            style={{ display: "block" }}
            transform="matrix(1,0,0,1,200,150)"
            opacity={1}
          >
            <g opacity={1} transform="matrix(1,0,0,1,0,0)">
              <path
                fill="rgb(123,183,176)"
                fillOpacity={1}
                d={` M-257.5610046386719,${
                  -32.05781555175781 + yTransform
                } C-257.5610046386719,${
                  -32.05781555175781 + yTransform
                } -156.78900146484375,${
                  -77.35482025146484 + yTransform
                } -156.78900146484375,${-77.35482025146484 + yTransform}`}
              />
              <path
                strokeLinecap="butt"
                strokeLinejoin="miter"
                fillOpacity={0}
                strokeMiterlimit={4}
                stroke="#F00000"
                strokeOpacity={1}
                strokeWidth={4}
                d={` M-257.5610046386719,${
                  -32.05781555175781 + yTransform
                } C-257.5610046386719,${
                  -32.05781555175781 + yTransform
                } -156.78900146484375,${
                  -77.35482025146484 + yTransform
                } -156.78900146484375,${-77.35482025146484 + yTransform}`}
              />
            </g>
          </g>

          {/* top dot */}
          <g
            style={{ display: "block" }}
            transform={`matrix(1,0,0,1,43.21099853515625,${
              72.64517974853516 + yTransform
            })`}
            opacity={1}
          >
            <g opacity={1} transform="matrix(1,0,0,1,0,0)">
              <path
                fill="#F00000"
                fillOpacity={1}
                d=" M0,-6 C0,-6 0,-6 0,-6 C3.313999891281128,-6 6,-3.313999891281128 6,0 C6,0 6,0 6,0 C6,3.313999891281128 3.313999891281128,6 0,6 C0,6 0,6 0,6 C-3.313999891281128,6 -6,3.313999891281128 -6,0 C-6,0 -6,0 -6,0 C-6,-3.313999891281128 -3.313999891281128,-6 0,-6z"
              />
            </g>
          </g>
          <g
            style={{ display: "block" }}
            transform={`matrix(1,0,0,1,81.31800079345703,${
              137.99118041992188 + yTransform
            })`}
            opacity={1}
          >
            <g opacity={1} transform="matrix(1,0,0,1,0,0)">
              <path
                fill="#F00000"
                fillOpacity={1}
                d=" M0,-6 C0,-6 0,-6 0,-6 C3.313999891281128,-6 6,-3.313999891281128 6,0 C6,0 6,0 6,0 C6,3.313999891281128 3.313999891281128,6 0,6 C0,6 0,6 0,6 C-3.313999891281128,6 -6,3.313999891281128 -6,0 C-6,0 -6,0 -6,0 C-6,-3.313999891281128 -3.313999891281128,-6 0,-6z"
              />
            </g>
          </g>
          <g
            style={{ display: "block" }}
            transform={`matrix(1,0,0,1,154.89999389648438,${
              72.815185546875 + yTransform
            })`}
            opacity={1}
          >
            <g opacity={1} transform="matrix(1,0,0,1,0,0)">
              <path
                fill="#F00000"
                fillOpacity={1}
                d=" M0,-6 C0,-6 0,-6 0,-6 C3.313999891281128,-6 6,-3.313999891281128 6,0 C6,0 6,0 6,0 C6,3.313999891281128 3.313999891281128,6 0,6 C0,6 0,6 0,6 C-3.313999891281128,6 -6,3.313999891281128 -6,0 C-6,0 -6,0 -6,0 C-6,-3.313999891281128 -3.313999891281128,-6 0,-6z"
              />
            </g>
          </g>
          <g
            style={{ display: "block" }}
            transform={`matrix(1,0,0,1,204.6959991455078,${
              127.16818237304688 + yTransform
            })`}
            opacity={1}
          >
            <g opacity={1} transform="matrix(1,0,0,1,0,0)">
              <path
                fill="#F00000"
                fillOpacity={1}
                d=" M0,-6 C0,-6 0,-6 0,-6 C3.313999891281128,-6 6,-3.313999891281128 6,0 C6,0 6,0 6,0 C6,3.313999891281128 3.313999891281128,6 0,6 C0,6 0,6 0,6 C-3.313999891281128,6 -6,3.313999891281128 -6,0 C-6,0 -6,0 -6,0 C-6,-3.313999891281128 -3.313999891281128,-6 0,-6z"
              />
            </g>
          </g>
          <g
            style={{ display: "block" }}
            transform={`matrix(1,0,0,1,275.35198974609375,${
              48.87318420410156 + yTransform
            })`}
            opacity={1}
          >
            <g opacity={1} transform="matrix(1,0,0,1,0,0)">
              <path
                fill="#F00000"
                fillOpacity={1}
                d=" M0,-6 C0,-6 0,-6 0,-6 C3.313999891281128,-6 6,-3.313999891281128 6,0 C6,0 6,0 6,0 C6,3.313999891281128 3.313999891281128,6 0,6 C0,6 0,6 0,6 C-3.313999891281128,6 -6,3.313999891281128 -6,0 C-6,0 -6,0 -6,0 C-6,-3.313999891281128 -3.313999891281128,-6 0,-6z"
              />
            </g>
          </g>
          <g
            style={{ display: "block" }}
            transform={`matrix(1,0,0,1,352.4389953613281,${
              102.94000244140625 + yTransform
            })`}
            opacity={1}
          >
            <g opacity={1} transform="matrix(1,0,0,1,0,0)">
              <path
                fill="#F00000"
                fillOpacity={1}
                d=" M0,-6 C0,-6 0,-6 0,-6 C3.313999891281128,-6 6,-3.313999891281128 6,0 C6,0 6,0 6,0 C6,3.313999891281128 3.313999891281128,6 0,6 C0,6 0,6 0,6 C-3.313999891281128,6 -6,3.313999891281128 -6,0 C-6,0 -6,0 -6,0 C-6,-3.313999891281128 -3.313999891281128,-6 0,-6z"
              />
            </g>
          </g>
          <g
            style={{ display: "block" }}
            transform={`matrix(1,0,0,1,422.4389953613281,${
              47.94218444824219 + yTransform
            })`}
            opacity={1}
          >
            <g opacity={1} transform="matrix(1,0,0,1,0,0)">
              <path
                fill="#F00000"
                fillOpacity={1}
                d=" M0,-6 C0,-6 0,-6 0,-6 C3.313999891281128,-6 6,-3.313999891281128 6,0 C6,0 6,0 6,0 C6,3.313999891281128 3.313999891281128,6 0,6 C0,6 0,6 0,6 C-3.313999891281128,6 -6,3.313999891281128 -6,0 C-6,0 -6,0 -6,0 C-6,-3.313999891281128 -3.313999891281128,-6 0,-6z"
              />
            </g>
          </g>
          <g
            style={{ display: "block" }}
            transform={`matrix(1,0,0,1,-57.56100082397461,${
              117.94218444824219 + yTransform
            })`}
            opacity={1}
          >
            <g opacity={1} transform="matrix(1,0,0,1,0,0)">
              <path
                fill="#F00000"
                fillOpacity={1}
                d=" M0,-6 C0,-6 0,-6 0,-6 C3.313999891281128,-6 6,-3.313999891281128 6,0 C6,0 6,0 6,0 C6,3.313999891281128 3.313999891281128,6 0,6 C0,6 0,6 0,6 C-3.313999891281128,6 -6,3.313999891281128 -6,0 C-6,0 -6,0 -6,0 C-6,-3.313999891281128 -3.313999891281128,-6 0,-6z"
              />
            </g>
          </g>

          {/* bototm dot */}
          <g
            style={{ display: "block" }}
            transform={`matrix(1,0,0,1,43.21099853515625,${
              197.35055541992188 - yTransform
            })`}
            opacity={1}
          >
            <g opacity={1} transform="matrix(1,0,0,1,0,0)">
              <path
                fill="#199600"
                fillOpacity={1}
                d=" M0,-6 C0,-6 0,-6 0,-6 C3.313999891281128,-6 6,-3.313999891281128 6,0 C6,0 6,0 6,0 C6,3.313999891281128 3.313999891281128,6 0,6 C0,6 0,6 0,6 C-3.313999891281128,6 -6,3.313999891281128 -6,0 C-6,0 -6,0 -6,0 C-6,-3.313999891281128 -3.313999891281128,-6 0,-6z"
              />
            </g>
          </g>
          <g
            style={{ display: "block" }}
            transform={`matrix(1,0,0,1,81.31800079345703,${
              261.13665771484375 - yTransform
            })`}
            opacity={1}
          >
            <g opacity={1} transform="matrix(1,0,0,1,0,0)">
              <path
                fill="#199600"
                fillOpacity={1}
                d=" M0,-6 C0,-6 0,-6 0,-6 C3.313999891281128,-6 6,-3.313999891281128 6,0 C6,0 6,0 6,0 C6,3.313999891281128 3.313999891281128,6 0,6 C0,6 0,6 0,6 C-3.313999891281128,6 -6,3.313999891281128 -6,0 C-6,0 -6,0 -6,0 C-6,-3.313999891281128 -3.313999891281128,-6 0,-6z"
              />
            </g>
          </g>
          <g
            style={{ display: "block" }}
            transform={`matrix(1,0,0,1,154.89999389648438,${
              197.61337280273438 - yTransform
            })`}
            opacity={1}
          >
            <g opacity={1} transform="matrix(1,0,0,1,0,0)">
              <path
                fill="#199600"
                fillOpacity={1}
                d=" M0,-6 C0,-6 0,-6 0,-6 C3.313999891281128,-6 6,-3.313999891281128 6,0 C6,0 6,0 6,0 C6,3.313999891281128 3.313999891281128,6 0,6 C0,6 0,6 0,6 C-3.313999891281128,6 -6,3.313999891281128 -6,0 C-6,0 -6,0 -6,0 C-6,-3.313999891281128 -3.313999891281128,-6 0,-6z"
              />
            </g>
          </g>
          <g
            style={{ display: "block" }}
            transform={`matrix(1,0,0,1,204.6959991455078,${
              255.13446044921875 - yTransform
            })`}
            opacity={1}
          >
            <g opacity={1} transform="matrix(1,0,0,1,0,0)">
              <path
                fill="#199600"
                fillOpacity={1}
                d=" M0,-6 C0,-6 0,-6 0,-6 C3.313999891281128,-6 6,-3.313999891281128 6,0 C6,0 6,0 6,0 C6,3.313999891281128 3.313999891281128,6 0,6 C0,6 0,6 0,6 C-3.313999891281128,6 -6,3.313999891281128 -6,0 C-6,0 -6,0 -6,0 C-6,-3.313999891281128 -3.313999891281128,-6 0,-6z"
              />
            </g>
          </g>
          <g
            style={{ display: "block" }}
            transform={`matrix(1,0,0,1,275.4580078125,${
              173.78045654296875 - yTransform
            })`}
            opacity={1}
          >
            <g opacity={1} transform="matrix(1,0,0,1,0,0)">
              <path
                fill="#199600"
                fillOpacity={1}
                d=" M0,-6 C0,-6 0,-6 0,-6 C3.313999891281128,-6 6,-3.313999891281128 6,0 C6,0 6,0 6,0 C6,3.313999891281128 3.313999891281128,6 0,6 C0,6 0,6 0,6 C-3.313999891281128,6 -6,3.313999891281128 -6,0 C-6,0 -6,0 -6,0 C-6,-3.313999891281128 -3.313999891281128,-6 0,-6z"
              />
            </g>
          </g>
          <g
            style={{ display: "block" }}
            transform={`matrix(1,0,0,1,352.4389953613281,${
              229.03546142578125 - yTransform
            })`}
            opacity={1}
          >
            <g opacity={1} transform="matrix(1,0,0,1,0,0)">
              <path
                fill="#199600"
                fillOpacity={1}
                d=" M0,-6 C0,-6 0,-6 0,-6 C3.313999891281128,-6 6,-3.313999891281128 6,0 C6,0 6,0 6,0 C6,3.313999891281128 3.313999891281128,6 0,6 C0,6 0,6 0,6 C-3.313999891281128,6 -6,3.313999891281128 -6,0 C-6,0 -6,0 -6,0 C-6,-3.313999891281128 -3.313999891281128,-6 0,-6z"
              />
            </g>
          </g>
          <g
            style={{ display: "block" }}
            transform={`matrix(1,0,0,1,-24.54199981689453,${
              230.2837371826172 - yTransform
            })`}
            opacity={1}
          >
            <g opacity={1} transform="matrix(1,0,0,1,0,0)">
              <path
                fill="#199600"
                fillOpacity={1}
                d=" M0,-6 C0,-6 0,-6 0,-6 C3.313999891281128,-6 6,-3.313999891281128 6,0 C6,0 6,0 6,0 C6,3.313999891281128 3.313999891281128,6 0,6 C0,6 0,6 0,6 C-3.313999891281128,6 -6,3.313999891281128 -6,0 C-6,0 -6,0 -6,0 C-6,-3.313999891281128 -3.313999891281128,-6 0,-6z"
              />
            </g>
          </g>
          <g
            style={{ display: "block" }}
            transform={`matrix(1,0,0,1,427.4389953613281,${
              169.53436279296875 - yTransform
            })`}
            opacity={1}
          >
            <g opacity={1} transform="matrix(1,0,0,1,0,0)">
              <path
                fill="#199600"
                fillOpacity={1}
                d=" M0,-6 C0,-6 0,-6 0,-6 C3.313999891281128,-6 6,-3.313999891281128 6,0 C6,0 6,0 6,0 C6,3.313999891281128 3.313999891281128,6 0,6 C0,6 0,6 0,6 C-3.313999891281128,6 -6,3.313999891281128 -6,0 C-6,0 -6,0 -6,0 C-6,-3.313999891281128 -3.313999891281128,-6 0,-6z"
              />
            </g>
          </g>
        </g>
      </g>
      <g
        style={{ display: "block" }}
        transform="matrix(1,0,0,1,4817.3828125,410.79400634765625)"
        opacity="0.3"
      >
        <g
          opacity={1}
          transform="matrix(1,0,0,1,-4813.3828125,-279.79400634765625)"
        >
          <path
            fill="#2684FF"
            fillOpacity={1}
            d=" M-0.5,-124 C-0.5,-124 0.5,-124 0.5,-124 C0.5,-124 0.5,124 0.5,124 C0.5,124 -0.5,124 -0.5,124 C-0.5,124 -0.5,-124 -0.5,-124z"
          />
        </g>
        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
          <g
            opacity={1}
            transform="matrix(1,0,0,1,-4794.3828125,-279.79400634765625)"
          >
            <path
              fill="#2684FF"
              fillOpacity={1}
              d=" M-0.5,-124 C-0.5,-124 0.5,-124 0.5,-124 C0.5,-124 0.5,124 0.5,124 C0.5,124 -0.5,124 -0.5,124 C-0.5,124 -0.5,-124 -0.5,-124z"
            />
          </g>
          <g
            opacity={1}
            transform="matrix(1,0,0,1,-4775.3828125,-279.79400634765625)"
          >
            <path
              fill="#2684FF"
              fillOpacity={1}
              d=" M-0.5,-124 C-0.5,-124 0.5,-124 0.5,-124 C0.5,-124 0.5,124 0.5,124 C0.5,124 -0.5,124 -0.5,124 C-0.5,124 -0.5,-124 -0.5,-124z"
            />
          </g>
          <g
            opacity={1}
            transform="matrix(1,0,0,1,-4756.3828125,-279.79400634765625)"
          >
            <path
              fill="#2684FF"
              fillOpacity={1}
              d=" M-0.5,-124 C-0.5,-124 0.5,-124 0.5,-124 C0.5,-124 0.5,124 0.5,124 C0.5,124 -0.5,124 -0.5,124 C-0.5,124 -0.5,-124 -0.5,-124z"
            />
          </g>
          <g
            opacity={1}
            transform="matrix(1,0,0,1,-4737.3828125,-279.79400634765625)"
          >
            <path
              fill="#2684FF"
              fillOpacity={1}
              d=" M-0.5,-124 C-0.5,-124 0.5,-124 0.5,-124 C0.5,-124 0.5,124 0.5,124 C0.5,124 -0.5,124 -0.5,124 C-0.5,124 -0.5,-124 -0.5,-124z"
            />
          </g>
          <g
            opacity={1}
            transform="matrix(1,0,0,1,-4718.3828125,-279.79400634765625)"
          >
            <path
              fill="#2684FF"
              fillOpacity={1}
              d=" M-0.5,-124 C-0.5,-124 0.5,-124 0.5,-124 C0.5,-124 0.5,124 0.5,124 C0.5,124 -0.5,124 -0.5,124 C-0.5,124 -0.5,-124 -0.5,-124z"
            />
          </g>
          <g
            opacity={1}
            transform="matrix(1,0,0,1,-4699.3828125,-279.79400634765625)"
          >
            <path
              fill="#2684FF"
              fillOpacity={1}
              d=" M-0.5,-124 C-0.5,-124 0.5,-124 0.5,-124 C0.5,-124 0.5,124 0.5,124 C0.5,124 -0.5,124 -0.5,124 C-0.5,124 -0.5,-124 -0.5,-124z"
            />
          </g>
          <g
            opacity={1}
            transform="matrix(1,0,0,1,-4680.3828125,-279.79400634765625)"
          >
            <path
              fill="#2684FF"
              fillOpacity={1}
              d=" M-0.5,-124 C-0.5,-124 0.5,-124 0.5,-124 C0.5,-124 0.5,124 0.5,124 C0.5,124 -0.5,124 -0.5,124 C-0.5,124 -0.5,-124 -0.5,-124z"
            />
          </g>
          <g
            opacity={1}
            transform="matrix(1,0,0,1,-4661.3828125,-279.79400634765625)"
          >
            <path
              fill="#2684FF"
              fillOpacity={1}
              d=" M-0.5,-124 C-0.5,-124 0.5,-124 0.5,-124 C0.5,-124 0.5,124 0.5,124 C0.5,124 -0.5,124 -0.5,124 C-0.5,124 -0.5,-124 -0.5,-124z"
            />
          </g>
          <g
            opacity={1}
            transform="matrix(1,0,0,1,-4642.3828125,-279.79400634765625)"
          >
            <path
              fill="#2684FF"
              fillOpacity={1}
              d=" M-0.5,-124 C-0.5,-124 0.5,-124 0.5,-124 C0.5,-124 0.5,124 0.5,124 C0.5,124 -0.5,124 -0.5,124 C-0.5,124 -0.5,-124 -0.5,-124z"
            />
          </g>
          <g
            opacity={1}
            transform="matrix(1,0,0,1,-4623.3828125,-279.79400634765625)"
          >
            <path
              fill="#2684FF"
              fillOpacity={1}
              d=" M-0.5,-124 C-0.5,-124 0.5,-124 0.5,-124 C0.5,-124 0.5,124 0.5,124 C0.5,124 -0.5,124 -0.5,124 C-0.5,124 -0.5,-124 -0.5,-124z"
            />
          </g>
          <g
            opacity={1}
            transform="matrix(1,0,0,1,-4604.3828125,-279.79400634765625)"
          >
            <path
              fill="#2684FF"
              fillOpacity={1}
              d=" M-0.5,-124 C-0.5,-124 0.5,-124 0.5,-124 C0.5,-124 0.5,124 0.5,124 C0.5,124 -0.5,124 -0.5,124 C-0.5,124 -0.5,-124 -0.5,-124z"
            />
          </g>
          <g
            opacity={1}
            transform="matrix(1,0,0,1,-4585.3828125,-279.79400634765625)"
          >
            <path
              fill="#2684FF"
              fillOpacity={1}
              d=" M-0.5,-124 C-0.5,-124 0.5,-124 0.5,-124 C0.5,-124 0.5,124 0.5,124 C0.5,124 -0.5,124 -0.5,124 C-0.5,124 -0.5,-124 -0.5,-124z"
            />
          </g>
          <g
            opacity={1}
            transform="matrix(1,0,0,1,-4566.3828125,-279.79400634765625)"
          >
            <path
              fill="#2684FF"
              fillOpacity={1}
              d=" M-0.5,-124 C-0.5,-124 0.5,-124 0.5,-124 C0.5,-124 0.5,124 0.5,124 C0.5,124 -0.5,124 -0.5,124 C-0.5,124 -0.5,-124 -0.5,-124z"
            />
          </g>
          <g
            opacity={1}
            transform="matrix(1,0,0,1,-4547.3828125,-279.79400634765625)"
          >
            <path
              fill="#2684FF"
              fillOpacity={1}
              d=" M-0.5,-124 C-0.5,-124 0.5,-124 0.5,-124 C0.5,-124 0.5,124 0.5,124 C0.5,124 -0.5,124 -0.5,124 C-0.5,124 -0.5,-124 -0.5,-124z"
            />
          </g>
          <g
            opacity={1}
            transform="matrix(1,0,0,1,-4528.3828125,-279.79400634765625)"
          >
            <path
              fill="#2684FF"
              fillOpacity={1}
              d=" M-0.5,-124 C-0.5,-124 0.5,-124 0.5,-124 C0.5,-124 0.5,124 0.5,124 C0.5,124 -0.5,124 -0.5,124 C-0.5,124 -0.5,-124 -0.5,-124z"
            />
          </g>
          <g
            opacity={1}
            transform="matrix(1,0,0,1,-4509.3828125,-279.79400634765625)"
          >
            <path
              fill="#2684FF"
              fillOpacity={1}
              d=" M-0.5,-124 C-0.5,-124 0.5,-124 0.5,-124 C0.5,-124 0.5,124 0.5,124 C0.5,124 -0.5,124 -0.5,124 C-0.5,124 -0.5,-124 -0.5,-124z"
            />
          </g>
          <g
            opacity={1}
            transform="matrix(1,0,0,1,-4490.3828125,-279.79400634765625)"
          >
            <path
              fill="#2684FF"
              fillOpacity={1}
              d=" M-0.5,-124 C-0.5,-124 0.5,-124 0.5,-124 C0.5,-124 0.5,124 0.5,124 C0.5,124 -0.5,124 -0.5,124 C-0.5,124 -0.5,-124 -0.5,-124z"
            />
          </g>
        </g>
        <g
          opacity={1}
          transform="matrix(1,0,0,1,-4471.3828125,-279.79400634765625)"
        >
          <path
            fill="#2684FF"
            fillOpacity={1}
            d=" M-0.5,-124 C-0.5,-124 0.5,-124 0.5,-124 C0.5,-124 0.5,124 0.5,124 C0.5,124 -0.5,124 -0.5,124 C-0.5,124 -0.5,-124 -0.5,-124z"
          />
        </g>
      </g>
    </g>
  </svg>
);
