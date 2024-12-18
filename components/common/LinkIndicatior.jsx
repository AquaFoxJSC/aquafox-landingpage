"use client";
import { useRouter } from "next/router";
import Link from "next/link";
import { useEffect } from "react";
import { show, hide } from "./topbar";

const LinkIndicator = ({
  href,
  children,
  target = '',
  rel = '',
  className = '',
  style = null,
}) => {
  const handleShow = () => {
    if (!target) {
      show()
    }
  }
  return (
    <Link
      href={href}
      onClick={handleShow}
      target={target}
      rel={rel}
      className={className}
      style={style}
    >
      {children}
    </Link>
  );
};

export default LinkIndicator;
