"use client";
import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";
import Image from "next/image";
import { Button, Drawer } from "antd";
import { usePathname } from "next/navigation";

function Header() {
  const [open, setOpen] = useState(false);


  const onClose = () => {
    setOpen(false);
  };

  const pathname = usePathname()

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
      <NavbarItem>
        <Link
          href="/liquidity-provision"
          style={{
            color: pathname === "/liquidity-provision" ? "#2684FF" : "#666666",
          }}
        >
          Liquidity Provision
        </Link>
      </NavbarItem>
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
          <Link
            href="/contact"
          >
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
