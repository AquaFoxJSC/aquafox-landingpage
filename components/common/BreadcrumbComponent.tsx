import React from "react";
import { Breadcrumb } from "antd";
import Link from "next/link";
import LinkIndicator from "@/components/common/LinkIndicatior";

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
            <LinkIndicator href={item?.LinkIndicator}>{item?.title}</LinkIndicator>
          ) : (
            item?.title
          ),
        }))}
      />
    </div>
  );
};

export default BreadcrumbComponent;
