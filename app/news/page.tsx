import React from 'react';
import NewsPage from "@/components/news/NewsPage";
import newsApis from "@/apis/newsApis";
import { notFound } from "next/navigation";
import { PAGESIZE_NEWS } from '@/constant/constants';

async function Home({ params, searchParams }: any) {
    try {
        let isSortAsc = searchParams?.sort === "asc"
        if (!searchParams?.sort) {
            isSortAsc = false
        }
        const tag = searchParams?.tag ? searchParams?.tag.replaceAll("-", " ") : null
        const topNewsRs = await newsApis.getAllNews({
            page: 1,
            limit: 6,
            is_hot: true,
            order_by: "created_at",
            sort_by: 'desc',
        });
        const apiRs = await newsApis.getAllNews({
            page: searchParams?.page || 1,
            limit: PAGESIZE_NEWS,
            order_by: "created_at",
            sort_by: isSortAsc ? 'asc' : 'desc',
            tags: tag
        });

        return (
            <>
                <NewsPage params={searchParams} totalItems={apiRs?.data?.data?.meta?.total} newsList={apiRs?.data?.data?.items || []} topNews={topNewsRs?.data?.data?.items || []} />
            </>
        );
    } catch (error) {
        return notFound()
    }
}

export default Home;
