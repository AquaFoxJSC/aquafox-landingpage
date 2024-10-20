import React from 'react';
import NewsDetailPage from "@/components/news/NewsDetailPage";
import newsApis from "@/apis/newsApis";

async function Home({params, searchParams}: any) {
    const apiRs = await newsApis.getDetailNews(params.slug)

    return(
        <NewsDetailPage data={apiRs?.data?.data} />
    )
}

export default Home;
