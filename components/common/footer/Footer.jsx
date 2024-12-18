'use client'
import * as React from "react";
import NavItem from "./NavItem";
import Link from "next/link";
import {
  aquafoxFooter,
  emailIcon,
  linkedinIcon,
  phoneIcon,
  tgIcon,
  xIcon,
} from "@/constant/svg";
import LinkIndicator from "@/components/common/LinkIndicatior";

function Footer() {
  const [hideFixed, setHideFixed] = React.useState(false);

  React.useEffect(() => {
    const footerElement = document.querySelector("footer");
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setHideFixed(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (footerElement) {
      observer.observe(footerElement);
    }

    return () => {
      if (footerElement) {
        observer.unobserve(footerElement);
      }
    };
  }, []);

  const navItems = [
    { text: "Home", href: "/" },
    { text: "Contact", href: "/contact" },
    { text: "News", href: "/news" },
  ];

  const twitter = (
    <LinkIndicator
      href="https://twitter.com/AquaFoxJsc"
      target="_blank"
      rel="noopener noreferrer"
    >
      {xIcon}
    </LinkIndicator>
  );

  const mail = (
    <LinkIndicator
      href="mailto:connect@aquafox.io"
      target="_blank"
      rel="noopener noreferrer"
    >
      {emailIcon}
    </LinkIndicator>
  );

  const telegram = (
    <LinkIndicator
      href="https://t.me/AquaFoxJSC"
      target="_blank"
      rel="noopener noreferrer"
    >
      {tgIcon}
    </LinkIndicator>
  );

  const phone = (
    <LinkIndicator href="tel:0856599797" target="_blank" rel="noopener noreferrer">
      {phoneIcon}
    </LinkIndicator>
  );

  const linkedin = (
    <LinkIndicator href="https://www.linkedin.com/company/aquafoxjsc/" target="_blank" rel="noopener noreferrer">
      {linkedinIcon}
    </LinkIndicator>
  );

  return (
    <footer>
      {/* {!hideFixed && (
        <>
          <div className="fixed bottom-[15px] md:bottom-[50px] right-4 md:right-[55px] z-50">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-full shadow-lg w-[60px] flex justify-center">
              {twitter}
            </button>
          </div>
          <div className="fixed bottom-[70px] md:bottom-[115px] right-4 md:right-[55px] z-50">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-full shadow-lg w-[60px] flex justify-center">
              {mail}
            </button>
          </div>
          <div className="fixed bottom-[125px] md:bottom-[180px] right-4 md:right-[55px] z-50">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-full shadow-lg w-[60px] flex justify-center">
              {telegram}
            </button>
          </div>
          <div className="fixed bottom-[180px] md:bottom-[245px] right-4 md:right-[55px] z-50">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-full shadow-lg w-[60px] flex justify-center">
              {phone}
            </button>
          </div>
        </>
      )} */}
      <div className="flex flex-wrap gap-10 justify-between lg:px-24 px-6 py-[40px] lg:py-16 bg-[#2D5486] max-md:px-5">
        <div className="flex flex-col my-auto">
          {aquafoxFooter}
          <div className="flex gap-5 items-center mt-8 text-white">
            <div className="flex gap-2.5 items-center self-stretch p-2.5 my-auto w-10 h-10 rounded-3xl bg-blue-400 bg-opacity-20">
              {mail}  
            </div>
            <div className="flex gap-2.5 items-center self-stretch p-2.5 my-auto w-10 h-10 rounded-3xl bg-blue-400 bg-opacity-20">
              {linkedin}
            </div>
            <div className="flex gap-2.5 items-center self-stretch p-2.5 my-auto w-10 h-10 rounded-3xl bg-blue-400 bg-opacity-20">
              {twitter}
            </div>
            <div className="flex gap-2.5 items-center self-stretch p-2.5 my-auto w-10 h-10 rounded-3xl bg-blue-400 bg-opacity-20">
              {telegram}
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between lg:items-end items-start font-medium min-w-[240px]">
          <div className="flex gap-2.5 items-center text-base tracking-tight text-white whitespace-nowrap">
            {navItems.map((item, index) => (
              <NavItem
                key={index}
                text={item.text}
                href={item.href}
                showDot={index !== navItems.length - 1}
              />
            ))}
          </div>
          <div className="mt-16 text-sm tracking-tight text-[#9EB6DD] max-md:mt-10">
            Copyright ©{new Date().getFullYear()} AquaFox JSC. All rights
            reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
