"use client";
import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";
import Image from "next/image";
import { Button, Drawer, Dropdown, Menu } from "antd";
import { usePathname } from "next/navigation";
import { DownOutlined, MenuOutlined } from "@ant-design/icons";
import LinkIndicator from "@/components/common/LinkIndicatior";

const ChevronDown = ({ fill, size, height, width, ...props }) => {
  return (
    <svg
      fill="none"
      height={size || height || 24}
      viewBox="0 0 24 24"
      width={size || width || 24}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="m19.92 8.95-6.52 6.52c-.77.77-2.03.77-2.8 0L4.08 8.95"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
      />
    </svg>
  );
};

const icons = {
  chevron: <ChevronDown fill="currentColor" size={16} />,
};

function Header() {
  const [open, setOpen] = useState(false);

  const onClose = () => {
    setOpen(false);
  };

  const pathname = usePathname();

  const menuItems = (
    <Menu
      items={[
        {
          key: "1",
          label: (
            <LinkIndicator
              href="/liquidity-provision"
              style={{
                color:
                  pathname === "/liquidity-provision" ? "#2684FF" : "#666666",
              }}
            >
              Liquidity Provision
            </LinkIndicator>
          ),
        },
        {
          key: "2",
          label: (
            <LinkIndicator
              href="/coming-soon"
              style={{
                color: pathname === "/coming-soon" ? "#2684FF" : "#666666",
              }}
            >
              High-Frequency Trading
            </LinkIndicator>
          ),
        },
      ]}
    />
  );

  return (
    <header>
      <Navbar className="py-[4px] bg-white" maxWidth="xl">
        <NavbarBrand>
          <LinkIndicator href="/">
            <Image
              src="/images/logo_v4.png"
              alt="Logo"
              width={218}
              height={40}
              priority
              quality={100}
              className="max-md:w-[163.5px]"
            />
          </LinkIndicator>
        </NavbarBrand>
        <NavbarContent
          className="hidden sm:flex"
          style={{ gap: "3rem", fontWeight: 500, marginBottom: 0 }}
          justify="center"
        >
          <NavbarItem>
            <LinkIndicator
              href="/"
              style={{
                color: pathname === "/" ? "#2684FF" : "#666666",
              }}
            >
              Home
            </LinkIndicator>
          </NavbarItem>
          <NavbarItem>
            <Dropdown overlay={menuItems} trigger={["hover"]} align={{ offset: [-60, 0] }}>
              <div
                className="flex cursor-pointer items-center justify-center gap-1"
                style={{
                  color:
                    pathname === "/liquidity-provision" ? "#2684FF" : "#666666",
                }}
              >
                Services
                <ChevronDown fill="currentColor" size={16} />
              </div>
            </Dropdown>
          </NavbarItem>
          <NavbarItem>
            <LinkIndicator
              href="/news"
              style={{
                color: pathname === "/news" ? "#2684FF" : "#666666",
              }}
            >
              News
            </LinkIndicator>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent
          className="hidden sm:flex"
          justify="end"
          style={{ marginBottom: 0 }}
        >
          <NavbarItem>
            <LinkIndicator href="/contact">
              <button className="btn-contact-us">Get in touch</button>
            </LinkIndicator>
          </NavbarItem>
        </NavbarContent>
        <button
          onClick={() => setOpen(true)}
          className="sm:hidden w-[40px] h-[40px] flex justify-center items-center bg-[#F2F4F7] rounded-[12px]"
          type="text"
        >
          <MenuOutlined />
        </button>

        <Drawer
          placement="right"
          className="text-xl"
          width={250}
          onClose={onClose}
          open={open}
        >
          <div className="flex flex-col gap-6 items-center">
            <NavbarItem>
              <LinkIndicator color="foreground" href="/" onClick={() => setOpen(false)}>
                Home
              </LinkIndicator>
            </NavbarItem>
            <NavbarItem>
              <LinkIndicator
                href="/liquidity-provision"
                aria-current="page"
                onClick={() => setOpen(false)}
              >
                Liquidity Provision
              </LinkIndicator>
            </NavbarItem>
            <NavbarItem>
              <LinkIndicator color="foreground" href="/news">
                News
              </LinkIndicator>
            </NavbarItem>
            <NavbarItem>
              <LinkIndicator href="/contact">
                <button className="btn-contact-us">Get in touch</button>
              </LinkIndicator>
            </NavbarItem>
          </div>
        </Drawer>
      </Navbar>
    </header>
  );
}

export default Header;
