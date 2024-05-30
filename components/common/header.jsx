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
    <Navbar className="py-[16px]" maxWidth="xl">
      <NavbarBrand>
        <Image
          src="/images/logo.png"
          alt="Vercel Logo"
          className="dark:invert"
          width={250}
          height={46}
          priority
        />
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Service
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Partner
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <button className="btn-contact-us">
            Contact Us
          </button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}

export default Header
