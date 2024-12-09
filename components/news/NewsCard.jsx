import * as React from "react";
import dayjs from "dayjs";
import { DAYJS_FORMAT_DATE_VN } from "@/constant/constants";

export function NewsCard({ item }) {
  const { slug, title, short_description, created_at, thumbnail } = item;
  return (
    <div className="flex flex-col flex-grow p-5 bg-white rounded border border-solid border-slate-200 basis-[calc(33.33%-22px)] max-w-[calc(33.33%-22px)] min-w-[240px]">
      <div className="flex overflow-hidden flex-col w-full rounded bg-neutral-100">
        <img
          loading="lazy"
          src={thumbnail}
          alt={title}
          className="object-cover w-[100%] h-[191px]"
        />
      </div>
      <div className="flex flex-col mt-5 w-full">
        <div className="text-base font-medium tracking-tight text-gray-700">
          {title}
        </div>
        <div
          className="mt-2.5 text-sm tracking-tight text-[#666974] line-clamp-3"
          title={short_description}
        >
          {short_description}
        </div>
      </div>
      <div className="flex gap-10 justify-between items-start mt-5 w-full text-sm tracking-tight">
        <div className="text-[#666974]">
          {dayjs(created_at).format(DAYJS_FORMAT_DATE_VN)}
        </div>
        <button
          className="flex gap-1 items-center font-semibold text-[#2684FF]"
          tabIndex="0"
        >
          <span>Read more</span>
          <img
            loading="lazy"
            src={
              "https://cdn.builder.io/api/v1/image/assets/TEMP/327f3066a8e97a523e88fc4c03dd1192a8b355d4baea9f45bc26163630aaea78?placeholderIfAbsent=true&apiKey=5f3d3068f7634759bee728f966e36875"
            }
            alt=""
            className="object-contain shrink-0 w-4 aspect-square"
          />
        </button>
      </div>
    </div>
  );
}

