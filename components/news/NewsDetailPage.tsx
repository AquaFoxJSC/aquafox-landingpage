import React from 'react';
import Link from "next/link";
import dayjs from "dayjs";
import {DAYJS_FORMAT_DATE} from "@/constant/constants";

interface NewsDetailPageProps {
    data: any
}

function NewsDetailPage(props: NewsDetailPageProps) {
    const {data} = props
    return (
        <div className='container pb-10'>
            <Link href="/news">
                <div className="news-text my-8 text-3xl font-semibold">Tin Tức</div>
            </Link>

            <div className="news-block">
                {data?.thumbnail && (
                    <img
                        className="thumnail-img w-full aspect-video mb-5 rounded-[20px] object-cover"
                        src={
                            data?.thumbnail ||
                            '/images/blogListPage/default-blog-thumbnail.svg'
                        }
                        alt="thumbnail"
                    />
                )}
                <div className="name-and-tags flex justify-between gap-5 my-8">
                    <div className="name-section flex items-center gap-3">
                        <img
                            src={
                                data?.created_user?.avatar_url ||
                                '/images/blogListPage/default-blog-thumbnail.svg'
                            }
                            alt="avatar"
                            className='w-12 h-12 rounded-full'
                        />
                        <div className="information flex flex-col">
                            <div className="name font-semibold">{data?.created_user?.full_name}</div>
                            <div className="published-date"> {data?.publish_at && (
                                <div className="published-date text-sm text-[#969696]" >
                                    Ngày đăng
                                    {` ${dayjs(data?.publish_at).format(DAYJS_FORMAT_DATE)}`}
                                </div>
                            )}</div>
                        </div>
                    </div>
                    {!!data?.tags?.length && (
                        <div className="tags-section flex justify-end gap-2 flex-1 flex-wrap">
                            {(data?.tags || []).map((tag: any, index: any) => (
                                <div key={index} className="tag-item bg-[#f6f6f6] text-[#585757] text-xl rounded-[40px] px-3 flex items-center">
                                    {tag}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                {data?.title && <h1 className='text-[40px] mb-2 font-bold'>{data?.title}</h1>}
                {data?.short_description && (
                    <p className='mb-5'>
                        <b>{data?.short_description}</b>
                    </p>
                )}
                <div
                    className="ck-content"
                    dangerouslySetInnerHTML={{ __html: data?.content }}
                />
            </div>
        </div>
    );
}

export default NewsDetailPage;
