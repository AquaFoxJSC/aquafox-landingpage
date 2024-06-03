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
import { emailIcon, tgIcon, xIcon } from "../../constant/svg/index";

function Footer() {
  return (
    <footer>
      <div className="container footer">
        <div>
          Copyright ©{new Date().getFullYear()} Flex AquaFox, JSC. All rights
          reserved.
        </div>
        <div className="social-group">
          <div className="social-item">{tgIcon}</div>
          <div className="social-item">{emailIcon}</div>
          <div className="social-item">{xIcon}</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
