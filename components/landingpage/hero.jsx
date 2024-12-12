import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import Image from "next/image";
import { arrowActionIcon, arrowRight } from "@/constant/svg";

function Hero() {
  return (
    <div id="home">
      <div className="hero-section">
        <div className="hero-info">
          <h1 className="max-sm:text-3xl">
            Reliable for Businesses
            <br></br>
            <span className="special-text">Accessible for Everyone.</span>
          </h1>
          <div className="sub-title">
            Empower your business with cutting-edge blockchain technology.
            <br></br>
            Experience the ease and delight of cryptocurrency with AquaFox.
          </div>
          <div className="flex justify-center mt-[24px]">
            <Link
              href="/contact"
              className="cursor-pointer flex gap-2 justify-center items-center px-6 py-3.5 mt-2.5 text-base font-semibold tracking-tight text-blue-500 rounded-[10px] border-2 border-blue-500 border-solid min-h-[46px] max-md:px-5"
              tabIndex={0}
            >
              <div className="self-stretch my-auto">Contact Us </div>
              {arrowActionIcon}
            </Link>
          </div>
        </div>

        <div className="hero-img">
          <Image
            src="/images/landingpage/hero3.png"
            alt="Hero Logo"
            width={1751}
            height={703}
            priority
            quality={100}
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
