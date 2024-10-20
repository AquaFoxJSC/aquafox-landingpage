"use client"
import React from 'react';
import {useSearchParams} from "next/navigation";
import useWindowWidth from "@/hooks/useInnerWidth";
import Link from "next/link";
import dayjs from "dayjs";
import NewsListGrid from "@/components/news/NewsListGrid";
import {Pagination} from "antd";
import {useRouter} from "next/navigation";

interface NewsPageProps {
    newsList: any[]
    totalItems: number
}

function NewsPage(props: NewsPageProps) {


    const {newsList} = props
    const [blog1, blog2, blog3, ...rest] = newsList
    const params = useSearchParams()
    const innerWidth = useWindowWidth()
    const router = useRouter()
    const handlePageChange = (page: number) => {
        router.push(`/news?page=${page}`,)
    }

    return (
        <div className='bg-[#f8f8fc] w-full'>
            <div className='container mx-auto lg:text-left'>
                <div className="my-8 text-3xl font-semibold">Tin Tức</div>
                <div className="blog-list-content">
                    {
                        (newsList.length > 3 && Number(params.get('page')) === 1 && Number(innerWidth) > 990) ? (
                            <>
                                <div className="blog-list-highlight flex gap-6 bg-[#fdfdfd] pt-6 pb-6">
                                    <div className="blog-highlight-left flex-1 flex-shrink-0 pl-2">
                                        <Link className="blog-first-item"
                                           href={`/news/${blog1?.slug}`}
                                        >
                                            <div className="blog-item-thumb relative">
                                                <img className='w-full object-cover'
                                                     src={blog1?.thumbnail}
                                                     alt=""/>
                                                <p className="blog-item-title absolute bottom-[20%] w-[90%] ml-[5%] text-[#fff] font-bold [text-shadow:_2px_2px_4px_rgba(0_0_0_/_0.5)] ">Người{blog1?.title}</p>
                                                <p className="blog-item-author absolute text-white  bottom-[10%] w-[90%] ml-[5%] text-[10px]  [text-shadow:_2px_2px_4px_rgba(0_0_0_/_0.5)]">
                                                    By {blog1?.created_user?.full_name}
                                                    <span>{dayjs(blog1.created_at).format('D MMMM, YYYY')}</span>
                                                </p>
                                            </div>
                                            <div className="blog-item-description mt-6 text-[10px] text-left text-[#04594d]">
                                                {blog1?.short_description}
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="blog-highlight-right flex-1 flex-shink-0 flex flex-col pr-8 gap-6">
                                        <Link className="blog-second-item flex-shink-0"
                                              href={`/news/${blog2?.slug}`}
                                        >
                                            <div className="blog-item-thumb relative bg-[#1a1a1a] w-full h-60">
                                                <img className='w-1/2 absolute left-[40%] object-cover h-full'
                                                     src={blog2.thumbnail}
                                                     alt=""/>
                                                <p className="blog-item-description absolute top-[5%] left-[5%] max-w-[150px] text-[#d5d5d5]  [text-shadow:_2px_2px_4px_rgba(0_0_0_/_0.5)] line-clamp-[8]">
                                                    {blog2.short_description}
                                                </p>
                                                <p className="blog-item-title line-clamp-3 absolute left-[45%] bottom-[10%] max-w-[300px] font-bold text-xl text-[#f7f7f4] [text-shadow:_2px_2px_4px_rgba(0_0_0_/_0.5)]">
                                                    {blog2.title}
                                                </p>
                                            </div>
                                        </Link>
                                        <Link className="blog-third-item flex-shink-0 flex gap-6 pr-4"
                                              href={`/news/${blog3?.slug}`}
                                        >
                                            <div className="blog-item-thumb">
                                                <img className='object-cover w-[172px] h-[185px]'
                                                     src={blog3?.thumbnail}
                                                     alt=""/>
                                            </div>
                                            <div
                                                className="separate-vertical h-[80%] top-[10%] relative border-[#f1f0f0] border"></div>
                                            <div className='flex-1'>
                                                <p className="blog-item-title text-lg mb-4 line-clamp-2">{blog3?.title}</p>
                                                <p className="blog-item-author text-[10px] mb-2 text-[#676767]">
                                                    By {blog3?.created_user?.full_name}
                                                    <span>{dayjs(blog3.created_at).format('D MMMM, YYYY')}</span>
                                                </p>
                                                <div className="separate-horizontal border border-[#f1f0f0] mb-4"></div>
                                                <p className="blog-item-description line-clamp-4 text-sm text-[#04594d] mb-0">
                                                    {blog3?.short_description}
                                                </p>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <NewsListGrid data={rest} />
                            </>
                        ) : (
                        <NewsListGrid data={newsList} />
                        )
                    }

                    <Pagination
                        className='mt-4'
                        current={Number(params.get('page')) || 1}
                        defaultPageSize={9}
                        onChange={handlePageChange}
                        total={props?.totalItems}
                        showSizeChanger={false}
                        hideOnSinglePage
                    />
                </div>
            </div>
        </div>
    );
}

export default NewsPage;
