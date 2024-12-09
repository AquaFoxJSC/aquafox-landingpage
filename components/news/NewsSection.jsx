import * as React from "react";
import { NewsCard } from "./NewsCard";


export default function NewsSection({newsList}) {
  return (
    <div className="flex flex-col justify-center items-center py-20">
      <div className="flex flex-col items-center max-w-full w-[1200px]">
        <div className="flex flex-wrap gap-10 justify-between items-center self-stretch w-full max-md:max-w-full">
          <div className="self-stretch my-auto text-4xl font-medium tracking-tighter leading-loose text-center text-[#0836A1]">
            News
          </div>
          <button className="flex gap-2 justify-center items-center self-stretch px-6 py-3.5 my-auto text-base font-semibold tracking-tight text-blue-500 rounded border-2 border-blue-500 border-solid min-h-[46px] max-md:px-5" tabIndex="0">
            <span className="self-stretch my-auto">See All News</span>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/5a224c165a0ba368763c8ea53f4069a551edd70c2233147e3ae6f8f660f14636?placeholderIfAbsent=true&apiKey=5f3d3068f7634759bee728f966e36875"
              alt=""
              className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
            />
          </button>
        </div>
        <div className="flex flex-wrap gap-8 items-start mt-8 w-full">
          {newsList.map((article) => (
            <NewsCard key={article.id} item={article} />
          ))}
        </div>
      </div>
    </div>
  );
}