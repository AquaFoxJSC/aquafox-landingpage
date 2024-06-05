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

function Header() {
  return (
    <Navbar className="py-[16px] bg-white" maxWidth="xl">
      <NavbarBrand>
        <Image
          src="/images/logo_v3.png"
          alt="Vercel Logo"
          width={250}
          height={46}
          priority
        />
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#home">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#services" aria-current="page">
            Services
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#partner">
            Partners
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Link
            href="https://t.me/AquaFoxJSC"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn-contact-us">Contact Us</button>
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}

export default Header;
