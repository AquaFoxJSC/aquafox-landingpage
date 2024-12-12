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
    <div className="contact-cont">
      <div className="contact-section">
        <div className="contact-card">
          <div className="contact-title">
            <div>Partner with us to create</div>
            <div className="special-text">Superior Technological Solution</div>
          </div>
          <div className="div-btn-contact">
            <Link
              href="https://t.me/AquaFoxJSC"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn-contact-us">Contact Us</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="contact-img contact-img-left">
        <Image
          src="/images/landingpage/contact-left.png"
          alt="footer"
          width={588}
          height={600}
          quality={100}
        />
      </div>
      <div className="contact-img bottom-[-50%] contact-img-right ">
        <Image
          src="/images/landingpage/contact-right.png"
          alt="footer"
          width={551}
          height={551}
          quality={100}
        />
      </div>
    </div>
  );
}

export default Contact;
