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
import { arrowDown, burgerIcon } from "@/constant/svg";

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
    <header>
    <Navbar className="py-[4px] bg-white" maxWidth="xl">
      <NavbarBrand >
        <Link href="/">
          <Image
            src="/images/logo_v4.png"
            alt="Logo"
            width={218}
            height={40}
            priority
            quality={100}
            className="max-md:w-[163.5px]"
          />
        </Link>
      </NavbarBrand>
      <NavbarContent
        className="hidden sm:flex"
        style={{ gap: "3rem", fontWeight: 500, marginBottom: 0 }}
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
            <DropdownTrigger>
              <div
                className="flex cursor-pointer items-center justify-center gap-1 dropdown-click"
                style={{
                  color:
                    pathname === "/liquidity-provision" ? "#2684FF" : "#666666",
                }}
              >
                Services
                {arrowDown}
              </div>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu className="bg-white shadow-lg rounded dd-nav">
            <DropdownItem
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
              className="hover:bg-gray-100 rounded-md text-sm"
              // startContent={icons.scale}
            >
              <Link href="/coming-soon" className="text-[#666666]">
                High-Frequency Trading
              </Link>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        {/* <NavbarItem>
          <Link
            href="/contact"
            style={{
              color: pathname === "/contact" ? "#2684FF" : "#666666",
            }}
          >
            Contact
          </Link>
        </NavbarItem> */}
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
      <NavbarContent className="hidden sm:flex" justify="end" style={{ marginBottom: 0 }}>
        <NavbarItem>
          <Link href="/contact">
            <button className="btn-contact-us">Get in touch</button>
          </Link>
        </NavbarItem>
      </NavbarContent>
      <button
        onClick={() => setOpen(true)}
        className="sm:hidden w-[40px] h-[40px] flex justify-center items-center bg-[#F2F4F7] rounded-[12px]"
        type="text"
      >
        {burgerIcon}
      </button>

      <Drawer
        placement="right"
        className="text-xl"
        width={250}
        onClose={onClose}
        open={open}
      >
        <div className="flex flex-col gap-6 items-center">
          <NavbarItem>
            <Link color="foreground" href="/" onClick={() => setOpen(false)}>
              Home
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              href="/liquidity-provision"
              aria-current="page"
              onClick={() => setOpen(false)}
            >
              Liquidity Provision
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="/news">
              News
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="/contact">
              <button className="btn-contact-us">Get in touch</button>
            </Link>
          </NavbarItem>
        </div>
      </Drawer>
    </Navbar>
    </header>

  );
}

export default Header;
