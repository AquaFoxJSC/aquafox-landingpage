import * as React from "react";
import { NewsCard } from "./NewsCard";
import { arrowActionIcon } from "@/constant/svg";
import Link from "next/link";


export default function NewsSection({newsList}) {
  return (
    <div className="flex flex-col justify-center items-center py-20">
      <div className="flex flex-col items-center max-w-full xl:w-[1200px] xl:px-0 px-3">
        <div className="flex flex-wrap gap-10 justify-between items-center self-stretch w-full max-md:max-w-full">
          <div className="self-stretch my-auto text-4xl font-medium tracking-tighter leading-loose text-center text-[#0836A1]">
            News
          </div>
          <Link href="/news" className="flex gap-2 justify-center items-center self-stretch px-6 py-3.5 my-auto text-base font-semibold tracking-tight text-blue-500 rounded-[10px] border-2 border-blue-500 border-solid min-h-[46px] max-md:px-5" tabIndex="0">
            <span className="self-stretch my-auto">See All News</span>
            {arrowActionIcon}
          </Link>
        </div>
        <div className="flex lg:flex-wrap flex-nowrap overflow-auto gap-8 items-start mt-8 w-full">
          {newsList.map((article) => (
            <NewsCard key={article.id} item={article} />
          ))}
        </div>
      </div>
    </div>
  );
}