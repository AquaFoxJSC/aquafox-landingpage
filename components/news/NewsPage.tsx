/* eslint-disable react/jsx-no-undef */
"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import useWindowWidth from "@/hooks/useInnerWidth";
import Link from "next/link";
import dayjs from "dayjs";
import NewsListGrid from "@/components/news/NewsListGrid";
import { Dropdown, Menu, Pagination } from "antd";
import { useRouter } from "next/navigation";
import { DAYJS_FORMAT_DATE_VN, PAGESIZE_NEWS } from "@/constant/constants";
import BreadcrumbComponent from "../common/BreadcrumbComponent";
import TopNewsCard from "./TopNewsCard";
import { NewsCard } from "./NewsCard";
import { arrowActionIcon, arrowDown, breadcrumbIcon } from "@/constant/svg";
import Image from "next/image";
import newsApis from "@/apis/newsApis";

interface NewsPageProps {
  newsList: any[];
  topNews: any[];
  totalItems: number;
  page?: number;
  params: any
}

function NewsPage(props: NewsPageProps) {
  const { newsList: newsListProps, topNews, totalItems: totalItemsProps, params: paramsProp } = props;
  const params = useSearchParams();
  const page = params.get('page') || 1
  const isSortAsc = params.get('sort') === "asc"
  const tag = params.get('tag') ? (params.get('tag') || '').replaceAll("-", " ") : ""

  const [newsList, setNewsList] = useState(newsListProps || [])
  const [totalItems, setTotalItems] = useState(totalItemsProps || 0)

  const innerWidth = useWindowWidth();
  const router = useRouter();

  const handlePageChange = (page: number) => {
    router.push(`/news?page=${page}&sort=${isSortAsc}&tag=${tag.replaceAll(" ", "-")}`, { scroll: false });
  };

  const getNewsList = async () => {
    const apiRs = await newsApis.getAllNews({
      page,
      limit: PAGESIZE_NEWS,
      order_by: "created_at",
      sort_by: isSortAsc ? 'asc' : 'desc',
      tags: tag
    });
    setNewsList(apiRs?.data?.data?.items || [])
    setTotalItems(apiRs?.data?.data?.meta?.total || 0)
  }

  useEffect(() => {
    getNewsList()
  }, [page, isSortAsc, tag])

  const menuSort = (onChange: any) => (
    <Menu
      items={[
        { label: "Latest News", key: "desc" },
        { label: "Oldesrt News", key: "asc" },
      ]}
      onClick={(e) => onChange(e.key)} // Pass the selected key to the onChange function
    />
  );

  const handleChangeSort = (selectedKey: string) => {
    router.push(`/news?page=${page}&sort=${selectedKey}&tag=${tag.replaceAll(" ", "-")}`, { scroll: false });
  };

  const handleChangeTag = (value: string) => {
    router.push(`/news?page=${page}&sort=${isSortAsc}&tag=${value}`, { scroll: false });
  };

  return (
    <div className="w-full">
      <div className="max-w-[1280px] mx-auto px-6 pb-[150px]">
        <div className="flex flex-col">
          <div className="flex flex-col w-full font-medium max-md:max-w-full">
            <div className="flex gap-2 items-center self-start text-base tracking-tight whitespace-nowrap">
              <Link href="/" className="self-stretch my-auto text-stone-500">Home</Link>
              {breadcrumbIcon}
              {
                tag ?
                  <>
                    <Link href="/news" className="self-stretch my-auto text-stone-500">News</Link>
                    {breadcrumbIcon}
                    <div className="self-stretch my-auto text-blue-500">Tag: {tag}</div>
                  </>
                  :
                  <div className="self-stretch my-auto text-blue-500">News</div>
              }
            </div>
          </div>
          {
            !tag &&
            <>
              <div className="flex-1 shrink mt-2.5 w-full text-3xl tracking-tighter text-gray-700 max-md:max-w-full">
                Aquafox News
              </div>
              <div className="flex flex-wrap gap-8 mt-8 w-full max-md:max-w-full">
                <div className="flex flex-col self-start p-5 bg-white rounded-lg border border-solid border-slate-200 min-w-[240px] xl:w-[790px] max-md:max-w-full">
                  <div className="flex overflow-hidden flex-col max-w-full rounded-lg bg-neutral-100 xl:w-[748px]">
                    <Image
                      src={topNews?.[0]?.thumbnail}
                      alt={topNews?.[0]?.title}
                      height={421}
                      width={748}
                      quality={100}
                      className="object-cover lg:w-full lg:h-[421px] h-[220px]"
                    />

                  </div>
                  <div className="flex flex-col mt-5 w-full max-md:max-w-full">
                    <div className="flex flex-col w-full max-md:max-w-full">
                      <div className="text-2xl font-semibold tracking-tight text-gray-700">
                        {topNews?.[0]?.title}
                      </div>
                      <div className="mt-5 text-base tracking-tight text-zinc-500 max-md:max-w-full line-clamp-2">
                        {topNews?.[0]?.short_description}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-10 justify-between items-start mt-5 w-full text-sm tracking-tight max-md:max-w-full">
                      <div className="text-zinc-500">
                        {dayjs(topNews?.[0]?.created_at).format(
                          DAYJS_FORMAT_DATE_VN
                        )}
                      </div>
                      <Link href={`/news/${topNews?.[0]?.slug}`} className="flex gap-2 font-semibold text-[#2684FF] items-center">
                        <span>Read more</span>
                        {arrowActionIcon}
                      </Link>
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
            </>
          }

          <div style={{marginTop: tag ? 10 : 40}}>
            <div className="flex justify-between items-end">
              {
                tag ?
                  <div className="text-[#3B404F] text-4xl not-italic font-medium leading-[normal] tracking-[-0.6px]">
                    Tag: {tag}
                  </div> :
                  <div className="text-[#0F162F] text-xl not-italic font-medium leading-[normal] tracking-[-0.6px]">
                    More
                  </div>
              }


              <Dropdown overlay={menuSort(handleChangeSort)} trigger={["click"]}>
                <div className="flex cursor-pointer text-[#666666] items-center gap-2">
                  <div>
                    {isSortAsc ? "Oldest News" : "Latest News"}
                  </div>
                  {arrowDown}
                </div>
              </Dropdown>
            </div>
            <div className="flex flex-wrap xl:gap-8 lg:gap-4 gap-2 items-start mt-8 w-full">
              {newsList.map((article) => (
                <NewsCard key={article.id} item={article} />
              ))}
            </div>
            <div className="flex justify-center mt-[40px]">
              <Pagination
                current={Number(params.get("page")) || 1}
                defaultPageSize={PAGESIZE_NEWS}
                onChange={handlePageChange}
                total={totalItems}
                showSizeChanger={false}
                hideOnSinglePage
              />
            </div>


          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsPage;
