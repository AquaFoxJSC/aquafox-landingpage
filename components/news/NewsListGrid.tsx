import React from "react";
import Image from "next/image";
import dayjs from "dayjs";
import Link from "next/link";
import { DAYJS_FORMAT_DATE_VN } from "@/constant/constants";

interface NewsListGridProps {
  data: any[];
}



function NewsListGrid(props: NewsListGridProps) {
  const { data } = props;

  return (
    <>
      {data?.length ? (
        <div className="blog-list-grid grid lg:grid-cols-3 grid-cols-1 gap-7">
          {(data || []).map((item: any) => (
            <Link
              href={`/news/${item?.slug}`}
              className="blog-item"
              key={item.id}
            >
              <div className="blog-item-thumb w-full h-[344px]">
                <img
                  className="w-full h-full object-cover"
                  alt={"blog-thumb"}
                  src={item?.thumbnail}
                />
              </div>

              <div className="blog-info mt-5 px-4 pt-4 pb-10 bg-[#fdfdfd]">
                <p className="blog-item-title line-clamp-3 text-xl font-bold text-black mb-4">
                  {item.title}
                </p>
                <p className="blog-item-author text-xs mb-2 text-[#676767] flex items-center gap-2">
                  <span>
                    {dayjs(item.created_at).format(DAYJS_FORMAT_DATE_VN)}
                  </span>
                </p>
                <div className="separate-horizontal border border-[#f1f0f0] mb-4"></div>
                <div className="blog-item-description line-clamp-4 text-[#04594d] leading-[18px] h-[72px]">
                  {item.short_description}
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center min-h-[50vh]">
          <div>No posts yet.</div>
        </div>
      )}
    </>
  );
}

export default NewsListGrid;
