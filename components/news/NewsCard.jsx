import * as React from "react";
import dayjs from "dayjs";
import { DAYJS_FORMAT_DATE_VN } from "@/constant/constants";
import { arrowActionIcon } from "@/constant/svg";
import Image from "next/image";
import Link from "next/link";
import LinkIndicator from "@/components/common/LinkIndicatior";

export function NewsCard({ item }) {
  const { slug, title, short_description, created_at, thumbnail } = item;
  return (
    <div className="flex flex-col flex-grow p-5 bg-white rounded border border-solid border-slate-200 basis-[calc(33.33%-22px)] lg:max-w-[calc(33.33%-22px)] min-w-[300px]">
      <div className="flex overflow-hidden flex-col w-full rounded bg-neutral-100">
        <Image
          src={thumbnail}
          alt={title}
          className="object-cover w-[100%] h-[191px]"
          width={258}
          height={191}
        />
      </div>
      <div className="flex flex-col mt-5 w-full">
        <div className="text-base font-medium tracking-tight text-gray-700">
          {title}
        </div>
        <div className="mt-2.5 text-sm tracking-tight text-[#666974] line-clamp-3">
          {short_description}
        </div>
      </div>
      <div className="flex gap-10 justify-between items-start mt-5 w-full text-sm tracking-tight">
        <div className="text-[#666974]">
          {dayjs(created_at).format(DAYJS_FORMAT_DATE_VN)}
        </div>
        <LinkIndicator href={`/news/${slug}`}
          className="flex gap-1 items-center font-semibold text-[#2684FF]"
          tabIndex="0"
        >
            <span>Read more</span>
            {arrowActionIcon}
        </LinkIndicator>
      </div>
    </div>
  );
}
