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
    // <div className="w-full">
    //   <div className="max-w-[1280px] mx-auto px-6 pb-[150px]">
    //     {/* <div className="pt-8 mb-8 text-3xl font-semibold">News</div> */}
    //     <BreadcrumbComponent items={newsBreadcrumbs} />

    //     <div className="blog-list-content">
    //       {newsList.length > 3 &&
    //       Number(params.get("page")) === 1 &&
    //       Number(innerWidth) > 990 ? (
    //         <>
    //           <div className="blog-list-highlight flex gap-6 bg-[#fdfdfd] pt-6 pb-6">
    //             <div className="blog-highlight-left flex-1 flex-shrink-0 pl-2">
    //               <Link
    //                 className="blog-first-item"
    //                 href={`/news/${blog1?.slug}`}
    //               >
    //                 <div className="blog-item-thumb relative">
    //                   <img
    //                     className="w-full object-cover"
    //                     src={blog1?.thumbnail}
    //                     alt=""
    //                   />
    //                   <p className="blog-item-title absolute bottom-[20%] w-[90%] ml-[5%] text-[#fff] font-bold [text-shadow:_2px_2px_4px_rgba(0_0_0_/_0.5)] ">
    //                     Người{blog1?.title}
    //                   </p>
    //                   <p className="blog-item-author absolute text-white  bottom-[10%] w-[90%] ml-[5%] text-[10px]  [text-shadow:_2px_2px_4px_rgba(0_0_0_/_0.5)]  flex items-center gap-2">
    //                     By {blog1?.created_user?.full_name}
    //                     <span>
    //                       {dayjs(blog1.created_at).format(DAYJS_FORMAT_DATE_VN)}
    //                     </span>
    //                   </p>
    //                 </div>
    //                 <div className="blog-item-description mt-6 text-[10px] text-left text-[#04594d]">
    //                   {blog1?.short_description}
    //                 </div>
    //               </Link>
    //             </div>
    //             <div className="blog-highlight-right flex-1 flex-shink-0 flex flex-col pr-8 gap-6">
    //               <Link
    //                 className="blog-second-item flex-shink-0"
    //                 href={`/news/${blog2?.slug}`}
    //               >
    //                 <div className="blog-item-thumb relative bg-[#1a1a1a] w-full h-60">
    //                   <img
    //                     className="w-1/2 absolute left-[40%] object-cover h-full"
    //                     src={blog2.thumbnail}
    //                     alt=""
    //                   />
    //                   <p className="blog-item-description absolute top-[5%] left-[5%] max-w-[150px] text-[#d5d5d5]  [text-shadow:_2px_2px_4px_rgba(0_0_0_/_0.5)] line-clamp-[8]">
    //                     {blog2.short_description}
    //                   </p>
    //                   <p className="blog-item-title line-clamp-3 absolute left-[45%] bottom-[10%] max-w-[300px] font-bold text-xl text-[#f7f7f4] [text-shadow:_2px_2px_4px_rgba(0_0_0_/_0.5)]">
    //                     {blog2.title}
    //                   </p>
    //                 </div>
    //               </Link>
    //               <Link
    //                 className="blog-third-item flex-shink-0 flex gap-6 pr-4"
    //                 href={`/news/${blog3?.slug}`}
    //               >
    //                 <div className="blog-item-thumb">
    //                   <img
    //                     className="object-cover w-[172px] h-[185px]"
    //                     src={blog3?.thumbnail}
    //                     alt=""
    //                   />
    //                 </div>
    //                 <div className="separate-vertical h-[80%] top-[10%] relative border-[#f1f0f0] border"></div>
    //                 <div className="flex-1">
    //                   <p className="blog-item-title text-lg mb-4 line-clamp-2">
    //                     {blog3?.title}
    //                   </p>
    //                   <p className="blog-item-author text-[10px] mb-2 text-[#676767]  flex items-center gap-2">
    //                     By {blog3?.created_user?.full_name}
    //                     <span>
    //                       {dayjs(blog3.created_at).format(DAYJS_FORMAT_DATE_VN)}
    //                     </span>
    //                   </p>
    //                   <div className="separate-horizontal border border-[#f1f0f0] mb-4"></div>
    //                   <p className="blog-item-description line-clamp-4 text-sm text-[#04594d] mb-0">
    //                     {blog3?.short_description}
    //                   </p>
    //                 </div>
    //               </Link>
    //             </div>
    //           </div>
    //           <NewsListGrid data={rest} />
    //         </>
    //       ) : (
    //         <NewsListGrid data={newsList} />
    //       )}

    //       <Pagination
    //         className="mt-4"
    //         current={Number(params.get("page")) || 1}
    //         defaultPageSize={9}
    //         onChange={handlePageChange}
    //         total={props?.totalItems}
    //         showSizeChanger={false}
    //         hideOnSinglePage
    //       />
    //     </div>
    //   </div>
    // </div>
    <div className="w-full">
      <div className="max-w-[1280px] mx-auto px-6 pb-[150px]">
        <div className="flex flex-col">
          <div className="flex flex-col w-full font-medium max-md:max-w-full">
            <div className="flex gap-2 items-center self-start text-base tracking-tight whitespace-nowrap">
              <div className="self-stretch my-auto text-stone-500">Home</div>
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
                  <div className="text-zinc-500">{dayjs(topNews?.[0]?.created_at).format(DAYJS_FORMAT_DATE_VN)}</div>
                  <button className="flex gap-2 items-start font-semibold text-blue-500">
                    <span><Link href={`/news/${topNews?.[0]?.slug}`}></Link>Read more</span>
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
                    <TopNewsCard
                      item={news}
                    />
                  </div>
                ))}
              </div>
            </div>
 
          </div>
          <div className="flex">
              <div className="text-[#0F162F] text-xl not-italic font-medium leading-[normal] tracking-[-0.6px]">More</div>
              {/* <div className="flex flex-wrap gap-8 items-start mt-8 w-full">
                {newsArticles.slice(0, 3).map((article) => (
                  <NewsCard key={article.id} {...article} />
                ))}
              </div> */}
            </div>
        </div>
      </div>
    </div>
  );
}

export default NewsPage;
