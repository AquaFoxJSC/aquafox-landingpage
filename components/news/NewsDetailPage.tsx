import React from "react";
import Link from "next/link";
import dayjs from "dayjs";
import { DAYJS_FORMAT_DATE } from "@/constant/constants";
import { breadcrumbIcon, linkedinIcon, phoneIcon, tgIcon, xIcon } from "@/constant/svg";
import LinkIndicator from "@/components/common/LinkIndicatior";

const telegram = (
  <LinkIndicator
    href="https://t.me/AquaFoxJSC"
    target="_blank"
    rel="noopener noreferrer"
  >
    {tgIcon}
  </LinkIndicator>
);

const phone = (
  <LinkIndicator href="tel:0856599797" target="_blank" rel="noopener noreferrer">
    {phoneIcon}
  </LinkIndicator>
);

const linkedin = (
  <LinkIndicator href="https://www.linkedin.com/company/aquafoxjsc/" target="_blank" rel="noopener noreferrer">
    {linkedinIcon}
  </LinkIndicator>
);

const twitter = (
  <LinkIndicator
    href="https://twitter.com/AquaFoxJsc"
    target="_blank"
    rel="noopener noreferrer"
  >
    {xIcon}
  </LinkIndicator>
);


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
      {/* <BreadcrumbComponent items={newsBreadcrumbs} /> */}
      <div className="flex gap-2 items-center self-start text-base tracking-tight whitespace-nowrap">
        <LinkIndicator href="/" className="self-stretch my-auto text-stone-500">Home</LinkIndicator>
        {breadcrumbIcon}
        <LinkIndicator href="/news" className="self-stretch my-auto text-stone-500">News</LinkIndicator>
        {breadcrumbIcon}
        <div className="self-stretch my-auto text-blue-500">{data?.title}</div>
      </div>

      <div className="news-block">

        {data?.title && (
          <h1 className="text-[32px] my-[10px] font-medium">{data?.title}</h1>
        )}

        <div className="name-and-tags flex justify-between gap-5 mb-[20px]">
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

        </div>
        {data?.thumbnail && (
          <img
            className="thumnail-img w-full aspect-video mb-5 rounded-[10px] object-cover"
            src={
              data?.thumbnail
            }
            alt="thumbnail"
          />
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
      <div className="flex flex-wrap gap-10 justify-between items-center pt-9">
        <div className="flex flex-wrap gap-2.5 items-start self-stretch my-auto text-base font-medium tracking-tight text-[#2684FF] min-w-[240px]">
          {data?.tags.map((tag, index) => (
            <LinkIndicator href={`/news?tag=${tag.replaceAll(" ", "-")}`} key={tag} className="gap-2.5 self-stretch px-2.5 py-1.5 whitespace-nowrap bg-[#E9F5FF] rounded-3xl">
              {tag}
            </LinkIndicator>
          ))}
        </div>
        <div className="flex gap-5 items-center self-stretch my-auto text-white">
          <div className="flex gap-2.5 items-center self-stretch p-2.5 my-auto w-10 h-10 rounded-3xl bg-[#2684FF]">
            {linkedin}
          </div>
          <div className="flex gap-2.5 items-center self-stretch p-2.5 my-auto w-10 h-10 rounded-3xl bg-[#2684FF]">
            {twitter}
          </div>
          <div className="flex gap-2.5 items-center self-stretch p-2.5 my-auto w-10 h-10 rounded-3xl bg-[#2684FF]">
            {telegram}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsDetailPage;
