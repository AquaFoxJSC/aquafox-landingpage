import { DAYJS_FORMAT_DATE_VN } from "@/constant/constants";
import dayjs from "dayjs";
import Link from "next/link";
import * as React from "react";

export default function TopNewsCard({ item }) {
  const { slug, title, short_description, created_at, thumbnail } = item;
  return (
    <Link href={`/news/${slug}`} className="flex flex-1 gap-5 p-4 bg-white rounded border border-solid border-slate-200 size-full">
      <img
        loading="lazy"
        src={thumbnail}
        alt={title}
        className="object-cover rounded h-[66px] w-[97px]"
      />
      <div className="flex flex-col flex-1 shrink justify-between basis-0">
        <div className="w-full text-base font-medium tracking-tight text-gray-700">
          {title}
        </div>
        <div className="mt -8 text-sm tracking-tight text-[#666974]">
          {dayjs(created_at).format(DAYJS_FORMAT_DATE_VN)}
        </div>
      </div>
    </Link>
  );
}
