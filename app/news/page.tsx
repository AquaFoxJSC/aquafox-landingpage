import React from 'react';
import NewsPage from "@/components/news/NewsPage";
import newsApis from "@/apis/newsApis";
import {notFound} from "next/navigation";

async function Home({params, searchParams}: any) {
    try {
        const topNewsRs = await newsApis.getAllNews({
            page: searchParams?.page || 1,
            limit: 6
        });
        const apiRs = await newsApis.getAllNews({
            page: searchParams?.page || 1,
            limit: 6
        });

        return (
            <NewsPage totalItems={apiRs?.data?.meta?.total} newsList={apiRs?.data?.data?.items || []} topNews={topNewsRs?.data?.data?.items || []} />
        );
    } catch (error) {
        return  notFound()
    }
}

export default Home;
