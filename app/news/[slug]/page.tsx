import React from "react";
import NewsDetailPage from "@/components/news/NewsDetailPage";
import newsApis from "@/apis/newsApis";
import { notFound } from "next/navigation";
import { Metadata } from "next";

// Hàm để fetch dữ liệu tin tức
async function fetchNewsData(slug: string) {
  try {
    const apiRs = await newsApis.getDetailNews(slug);
    return apiRs?.data?.data;
  } catch (error) {
    console.error("Failed to fetch news details:", error);
    return null;
  }
}

// Hàm generateMetadata đặt ở cấp độ page
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const data = await fetchNewsData((await params).slug);
  if (!data) {
    return {
      title: "News Not Found",
      description: "The requested news article could not be found.",
    };
  }

  return {
    title: data.title,
    description: data.short_description,
    openGraph: {
      title: data.title,
      description: data.short_description,
      images: [data.thumbnail],
      locale: "en_US",
      siteName: "aquafox.io",
      url: `https://aquafox.io/news/${data.slug}`,
      type: "article",
    },
    twitter: {
      card: "summary",
      title: data.title,
      description: data.short_description,
      images: [data.thumbnail],
      site: "@Aquafoxjsc",
    },
    keywords: data.tags.join(", "),
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
    alternates: {
      canonical: `https://aquafox.io/news/${data.slug}`,
    },
  };
}

async function NewsDetail({ params }: any) {
  try {
    const data = await fetchNewsData(params.slug);

    if (!data) {
      return notFound();
    }

    return <NewsDetailPage data={data} />;
  } catch (error) {
    console.error("Failed to fetch news details:", error);
    return notFound();
  }
}

export default NewsDetail;
