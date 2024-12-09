import * as React from "react";
import { dotIcon } from "@/constant/svg";
import Link from "next/link";

function NavItem({ text, showDot = true, href }) {
  return (
    <Link href={href} className="flex">
      <div className="self-stretch my-auto">{text}</div>
      {showDot && dotIcon}
    </Link>
  );
}

export default NavItem;
