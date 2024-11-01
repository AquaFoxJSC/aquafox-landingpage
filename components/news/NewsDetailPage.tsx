import React from "react";
import Link from "next/link";
import dayjs from "dayjs";
import { DAYJS_FORMAT_DATE } from "@/constant/constants";
import BreadcrumbComponent from "../common/BreadcrumbComponent";

interface NewsDetailPageProps {
  data: {
    thumbnail: string;
    created_user: {
      avatar_url: string;
      full_name: string;
    };
    publish_at: string;
    tags: string[];
    title: string;
    short_description: string;
    content: string;
  };
}

function NewsDetailPage(props: NewsDetailPageProps) {
  const { data } = props;

  const newsBreadcrumbs = [
    {
      title: "Landing Page",
      link: "/",
    },
    {
      title: "News",
      link: "/news",
    },
    {
      title: data?.title,
    },
  ];

  return (
    <div className="max-w-[1280px] mx-auto px-6 pb-[150px]">
      <BreadcrumbComponent items={newsBreadcrumbs} />

      <div className="news-block">
        {data?.thumbnail && (
          <img
            className="thumnail-img w-full aspect-video mb-5 rounded-[10px] object-cover"
            src={
              data?.thumbnail ||
              "/images/blogListPage/default-blog-thumbnail.svg"
            }
            alt="thumbnail"
          />
        )}
        <div className="name-and-tags flex justify-between gap-5 my-8">
          <div className="name-section flex items-center gap-3">
            <div className="information flex flex-col">
              <div className="published-date">
                {data?.publish_at && (
                  <div className="published-date text-sm text-[#969696]">
                    Date posted
                    {` ${dayjs(data?.publish_at).format(DAYJS_FORMAT_DATE)}`}
                  </div>
                )}
              </div>
            </div>
          </div>
          {!!data?.tags?.length && (
            <div className="tags-section flex justify-end gap-2 flex-1 flex-wrap">
              {(data?.tags || []).map((tag: any, index: any) => (
                <div
                  key={index}
                  className="tag-item bg-[#f6f6f6] text-[#585757] text-xl rounded-[40px] px-3 flex items-center"
                >
                  {tag}
                </div>
              ))}
            </div>
          )}
        </div>
        {data?.title && (
          <h1 className="text-[40px] mb-2 font-bold">{data?.title}</h1>
        )}
        {data?.short_description && (
          <p className="mb-5">
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
