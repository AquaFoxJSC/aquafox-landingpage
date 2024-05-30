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

function Hero() {
  return (
    <div className="mt-[50px]">
      <div  >
        <h1>
          Reliable for Businesses
          <br></br>
          <span className="special-text">Accessible for Everyone.</span>
        </h1>
        <div className="sub-title">Empower your business with cutting-edge blockchain technology.
        <br></br>
        Experience the eáe and delight of cryptocurrency with AquaFox.</div>
      </div>
    </div>
  );
}

export default Hero;
