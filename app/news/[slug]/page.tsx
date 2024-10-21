import React from 'react';
import NewsDetailPage from "@/components/news/NewsDetailPage";
import newsApis from "@/apis/newsApis";
import {notFound} from "next/navigation";

async function Home({params, searchParams}: any) {
    try {
        const apiRs = await newsApis.getDetailNews(params.slug);
        return (
            <NewsDetailPage data={apiRs?.data?.data} />
        );
    } catch (error) {
        console.error('Failed to fetch news details:', error);
        return notFound();
    }
}

export default Home;
