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

function Contact() {
  return (
    <div className="contact-section">
      <div className="contact-card">
        <div className="contact-title">
          <div>Partner with us to create</div>
          <div className="special-text">Superior Technological Solution</div>
        </div>
        <div className="div-btn-contact">
          <button className="btn-contact-us">Contact Us</button>
        </div>
      </div>
    </div>
  );
}

export default Contact;