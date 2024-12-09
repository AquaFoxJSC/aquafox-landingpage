"use client";
import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import Image from "next/image";
import { Button, Drawer } from "antd";
import { usePathname } from "next/navigation";
import { arrowDown } from "@/constant/svg";

export const ChevronDown = ({ fill, size, height, width, ...props }) => {
  return (
    <svg
      fill="none"
      height={size || height || 24}
      viewBox="0 0 24 24"
      width={size || width || 24}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="m19.92 8.95-6.52 6.52c-.77.77-2.03.77-2.8 0L4.08 8.95"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
      />
    </svg>
  );
};

const icons = {
  chevron: <ChevronDown fill="currentColor" size={16} />,
};

function Header() {
  const [open, setOpen] = useState(false);

  const onClose = () => {
    setOpen(false);
  };

  const pathname = usePathname();

  return (
    <Navbar className="py-[16px] bg-white" maxWidth="xl">
      <NavbarBrand>
        <Link href="/">
          <Image
            src="/images/logo_v3.png"
            alt="Vercel Logo"
            width={250}
            height={46}
            priority
          />
        </Link>
      </NavbarBrand>
      <NavbarContent
        className="hidden sm:flex"
        style={{ gap: "3rem", fontWeight: 500 }}
        justify="center"
      >
        <NavbarItem>
          <Link
            href="/"
            style={{
              color: pathname === "/" ? "#2684FF" : "#666666",
            }}
          >
            Home
          </Link>
        </NavbarItem>
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger >
              <div className="flex cursor-pointer items-center justify-center gap-1" style={{
              color: pathname === "/liquidity-provision" ? "#2684FF" : "#666666",
            }}>
                Service
                {arrowDown}
              </div>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu className="bg-white shadow-lg rounded">
            <DropdownItem
              key="autoscaling"
              className="hover:bg-gray-100 rounded-md text-sm"
              // startContent={icons.scale}
            >
              <Link
              href="/liquidity-provision"
              style={{
                color:
                  pathname === "/liquidity-provision" ? "#2684FF" : "#666666",
              }}
            >
              Liquidity Provision
            </Link>
            </DropdownItem>
            <DropdownItem
              key="autoscaling"
              className="hover:bg-gray-100 rounded-md text-sm"
              // startContent={icons.scale}
            >
              <Link href="/coming-soon" className="text-[#666666]">High-Frequency Trading</Link>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        {/* <Dropdown overlay={menuService} trigger={["hover"]}>
          <div
            className="flex"
            // style={{
            //   color: pathname === "/" ? "#2684FF" : "#666666",
            // }}
          >
            Service
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/1ac741283b4a88e84635b3b48c5758e7f5b484bba28aba1f9eaecacb2079bc3e?placeholderIfAbsent=true&apiKey=5f3d3068f7634759bee728f966e36875"
              alt=""
              className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
            />
          </div>
        </Dropdown> */}
        <NavbarItem>
          <Link
            href="/contact"
            style={{
              color: pathname === "/contact" ? "#2684FF" : "#666666",
            }}
          >
            Contact
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="/news"
            style={{
              color: pathname === "/news" ? "#2684FF" : "#666666",
            }}
          >
            News
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex" justify="end">
        <NavbarItem>
          <Link href="/contact">
            <button className="btn-contact-us">Get in touch</button>
          </Link>
        </NavbarItem>
      </NavbarContent>
      <Button
        onClick={() => setOpen(true)}
        className="block sm:hidden h-full"
        type="text"
      >
        <svg
          viewBox="0 0 12 12"
          enableBackground="new 0 0 12 12"
          version="1.1"
          xmlSpace="preserve"
          fill="black"
          width={30}
          height={30}
        >
          <g>
            <rect fill="#1D1D1B" height="1" width="11" x="0.5" y="5.5" />
            <rect fill="#1D1D1B" height="1" width="11" x="0.5" y="2.5" />
            <rect fill="#1D1D1B" height="1" width="11" x="0.5" y="8.5" />
          </g>
        </svg>
      </Button>

      <Drawer
        placement="right"
        className="text-xl"
        width={250}
        onClose={onClose}
        open={open}
      >
        <div className="flex flex-col gap-6 items-center">
          <NavbarItem>
            <Link
              color="foreground"
              href="/#home"
              onClick={() => setOpen(false)}
            >
              Home
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              href="/#services"
              aria-current="page"
              onClick={() => setOpen(false)}
            >
              Services
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              color="foreground"
              href="/#partner"
              onClick={() => setOpen(false)}
            >
              Partners
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="/news">
              News
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              href="https://t.me/AquaFoxJSC"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn-contact-us">Contact Us</button>
            </Link>
          </NavbarItem>
        </div>
      </Drawer>
    </Navbar>
  );
}

export default Header;
