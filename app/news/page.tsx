import React from 'react';
import NewsPage from "@/components/news/NewsPage";
import newsApis from "@/apis/newsApis";

async function Home({params, searchParams}: any) {

    const apiRs = await newsApis.getAllNews({
        page: searchParams?.page || 1,
        limit: 9
    })

    return (
            <NewsPage totalItems={apiRs?.data?.meta?.total} newsList={apiRs?.data?.data?.items || []} />
    );
}

export default Home;
