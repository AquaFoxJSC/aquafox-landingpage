import * as React from "react";
import { dotIcon } from "@/constant/svg";
import Link from "next/link";
import LinkIndicator from "@/components/common/LinkIndicatior";

function NavItem({ text, showDot = true, href }) {
  return (
    <LinkIndicator href={href} className="flex">
      <div className="self-stretch my-auto">{text}</div>
      {showDot && dotIcon}
    </LinkIndicator>
  );
}

export default NavItem;
