import React from "react";
import { Breadcrumb } from "antd";
import Link from "next/link";

interface BreadcrumbComponentProps {
  items: any;
}

const BreadcrumbComponent: React.FC<BreadcrumbComponentProps> = ({ items }) => {
  return (
    <div>
      <Breadcrumb
        className="breadcrumb-block"
        separator=">"
        items={(items || []).map((item: any) => ({
          title: item?.link ? (
            <Link href={item?.link}>{item?.title}</Link>
          ) : (
            item?.title
          ),
        }))}
      />
    </div>
  );
};

export default BreadcrumbComponent;
