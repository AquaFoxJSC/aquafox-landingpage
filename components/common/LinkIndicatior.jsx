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
  return (
    <Link
      href={href}
      onClick={show}
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
