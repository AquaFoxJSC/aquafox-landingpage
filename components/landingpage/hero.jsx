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
import { arrowRight } from "@/constant/svg";

function Hero() {
  return (
    <div id="home">
      <div className="hero-section">
        <div className="hero-info">
          <h1>
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
            <button className="btn-contact-us gap-[7px]">Contact Us {arrowRight}</button>
          </div>
        </div>

        <div className="hero-img">
          <Image
            src="/images/hero/hero-img-2.png"
            alt="Vercel Logo"
            width={1116}
            height={819}
            priority
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
