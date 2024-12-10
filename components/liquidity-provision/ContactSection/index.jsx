/* eslint-disable react/no-unescaped-entities */
import * as React from "react";
import ContactForm from "./ContactForm";

function ContactSection() {
  return (
    <div className="flex flex-wrap gap-10 justify-center items-start bg-custom-2 pb-[80px] pt-[80px] xs:px-0 px-3">
      <div className="flex flex-col justify-center min-w-[240px] w-[612px] max-md:max-w-full">
        <div className="self-start text-4xl font-medium tracking-tighter text-center bg-clip-text special-text max-md:max-w-full">
          Connect with our team
        </div>
        <div className="mt-5 text-base tracking-tight leading-8 text-gray-700 max-md:max-w-full">
        AquaFox provides institutional-grade liquidity solutions and quantitative trading strategies powered by our proprietary software. Customised liquidity provisioning and financial support strategy, combining a data-driven approach with your needs.
        </div>
      </div>
      
      <div className="flex overflow-hidden relative flex-col justify-center items-start p-10 bg-[#EEF7FF] rounded min-w-[240px] w-[600px] max-md:px-5 max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/3812a74f09c579b6c099e5c31a502170d4b902953cc64079b18fb8d8aa5527c3?placeholderIfAbsent=true&apiKey=5f3d3068f7634759bee728f966e36875"
          alt=""
          className="object-contain absolute bottom-0 z-0 max-w-full aspect-[1.28] h-[529px] right-[-145px] w-[512px]"
        />
        <div className="z-0 text-2xl font-medium tracking-tighter text-center text-slate-900">
          Let's get in touch
        </div>
        <ContactForm />
      </div>
    </div>
  );
}

export default ContactSection;