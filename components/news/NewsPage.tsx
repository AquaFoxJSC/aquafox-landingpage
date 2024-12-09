"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import useWindowWidth from "@/hooks/useInnerWidth";
import Link from "next/link";
import dayjs from "dayjs";
import NewsListGrid from "@/components/news/NewsListGrid";
import { Pagination } from "antd";
import { useRouter } from "next/navigation";
import { DAYJS_FORMAT_DATE_VN } from "@/constant/constants";
import BreadcrumbComponent from "../common/BreadcrumbComponent";
import TopNewsCard from "./TopNewsCard";
import { NewsCard } from "./NewsCard";

interface NewsPageProps {
  newsList: any[];
  topNews: any[];
  totalItems: number;
}

const newsBreadcrumbs = [
  {
    title: "Landing Page",
    link: "/",
  },
  {
    title: "News",
  },
];

function NewsPage(props: NewsPageProps) {
  const { newsList, topNews } = props;
  const [blog1, blog2, blog3, ...rest] = newsList;
  const params = useSearchParams();
  const innerWidth = useWindowWidth();
  const router = useRouter();
  const handlePageChange = (page: number) => {
    router.push(`/news?page=${page}`);
  };

  return (
    <div className="w-full">
      <div className="max-w-[1280px] mx-auto px-6 pb-[150px]">
        <div className="flex flex-col">
          <div className="flex flex-col w-full font-medium max-md:max-w-full">
            <div className="flex gap-2 items-center self-start text-base tracking-tight whitespace-nowrap">
            <Link href="/" className="self-stretch my-auto text-stone-500">Home</Link>
            <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/117707eb37e9de2c11a722bda7723924cdfe7b33c35266b31e44df5f21855841?placeholderIfAbsent=true&apiKey=5f3d3068f7634759bee728f966e36875"
                alt=""
                className="object-contain shrink-0 self-stretch my-auto w-2.5 aspect-square"
              />
              <div className="self-stretch my-auto text-blue-500">News</div>
            </div>
            <div className="flex-1 shrink mt-2.5 w-full text-3xl tracking-tighter text-gray-700 max-md:max-w-full">
              Aquafox News
            </div>
          </div>
          <div className="flex flex-wrap gap-8 mt-8 w-full max-md:max-w-full">
            <div className="flex flex-col self-start p-5 bg-white rounded-lg border border-solid border-slate-200 min-w-[240px] w-[790px] max-md:max-w-full">
              <div className="flex overflow-hidden flex-col max-w-full rounded-lg bg-neutral-100 w-[748px]">
                <img
                  loading="lazy"
                  src={topNews?.[0]?.thumbnail}
                  className="object-cover h-[421px] w-[748px] max-md:max-w-full"
                />
              </div>
              <div className="flex flex-col mt-5 w-full max-md:max-w-full">
                <div className="flex flex-col w-full max-md:max-w-full">
                  <div className="text-2xl font-semibold tracking-tight text-gray-700">
                    {topNews?.[0]?.title}
                  </div>
                  <div className="mt-5 text-base tracking-tight text-zinc-500 max-md:max-w-full">
                    {topNews?.[0]?.short_description}
                  </div>
                </div>
                <div className="flex flex-wrap gap-10 justify-between items-start mt-5 w-full text-sm tracking-tight max-md:max-w-full">
                  <div className="text-zinc-500">
                    {dayjs(topNews?.[0]?.created_at).format(
                      DAYJS_FORMAT_DATE_VN
                    )}
                  </div>
                  <button className="flex gap-2 items-start font-semibold text-[#2684FF] items-center">
                    <span>
                      <Link href={`/news/${topNews?.[0]?.slug}`}></Link>Read
                      more
                    </span>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/61cceb81e7f5a1d38cb0fb0bdc1f820de43c777e10a0fdc4590feef2017640c7?placeholderIfAbsent=true&apiKey=5f3d3068f7634759bee728f966e36875"
                      alt=""
                      className="object-contain shrink-0 w-4 aspect-square"
                    />
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col flex-1 shrink basis-10 min-w-[240px]">
              <div className="text-xl font-semibold tracking-tight text-gray-700">
                Top News
              </div>
              <div className="flex flex-col flex-1 mt-2.5 w-full">
                {topNews.slice(1, topNews.length).map((news, index) => (
                  <div key={news.id} className={index > 0 ? "mt-5" : ""}>
                    <TopNewsCard item={news} />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-[40px]">
            <div className="flex">
              <div className="text-[#0F162F] text-xl not-italic font-medium leading-[normal] tracking-[-0.6px]">
                More
              </div>
            </div>
            <div className="flex flex-wrap gap-8 items-start mt-8 w-full">
              {newsList.map((article) => (
                <NewsCard key={article.id} item={article} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsPage;
