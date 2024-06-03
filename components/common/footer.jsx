import React from "react";
import { emailIcon, tgIcon, xIcon } from "../../constant/svg/index";
import Link from "next/link";

function Footer() {
  return (
    <footer>
      <div className="container footer">
        <div>
          Copyright ©{new Date().getFullYear()} Flex AquaFox, JSC. All rights
          reserved.
        </div>
        <div className="social-group">
          <div className="social-item">
            <Link
              href="https://t.me/bmkelvin"
              target="_blank"
              rel="noopener noreferrer"
            >
              {tgIcon}
            </Link>
          </div>
          <div className="social-item">
            <Link
              href="mailto:connect@aquafox.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              {emailIcon}
            </Link>
          </div>
          <div className="social-item">
            <Link
              href="https://twitter.com/AquaFoxJsc"
              target="_blank"
              rel="noopener noreferrer"
            >
              {xIcon}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
