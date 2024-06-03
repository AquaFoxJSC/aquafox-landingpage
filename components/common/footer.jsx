import React from "react";
import { emailIcon, tgIcon, xIcon } from "../../constant/svg/index";
import Link from "next/link";

function Footer() {
  const twitter = (
    <Link
      href="https://twitter.com/AquaFoxJsc"
      target="_blank"
      rel="noopener noreferrer"
    >
      {xIcon}
    </Link>
  );

  const mail = (
    <Link
      href="mailto:connect@aquafox.io"
      target="_blank"
      rel="noopener noreferrer"
    >
      {emailIcon}
    </Link>
  );

  const telegram = (
    <Link
      href="https://t.me/AquaFoxJSC"
      target="_blank"
      rel="noopener noreferrer"
    >
      {tgIcon}
    </Link>
  );
  return (
    <footer>
      <div class="fixed bottom-[15px] md:bottom-[50px]  right-4 md:right-[55px] z-50">
        <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-full shadow-lg w-[60px] flex justify-center">
          {twitter}
        </button>
      </div>
      <div class="fixed bottom-[70px] md:bottom-[115px] right-4 md:right-[55px] z-50">
        <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-full shadow-lg w-[60px] flex justify-center">
          {mail}
        </button>
      </div>
      <div class="fixed bottom-[125px] md:bottom-[180px] right-4 md:right-[55px] z-50">
        <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-full shadow-lg w-[60px] flex justify-center">
          {telegram}
        </button>
      </div>
      <div className="container footer">
        <div>
          Copyright ©{new Date().getFullYear()} Flex AquaFox, JSC. All rights
          reserved.
        </div>
        <div className="social-group">
          <div className="social-item">{mail}</div>
          <div className="social-item">{twitter}</div>
          <div className="social-item"> {telegram}</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
