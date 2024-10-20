import axiosInstance from "@/apis/axiosInstance";

const newsApis = {
    getAllNews(params: any) {
        return axiosInstance.get('/v1/landing-news', { params });
    },
    getDetailNews(slug: string) {
        return axiosInstance.get(`/v1/landing-news/${slug}`);
    }
}

export default newsApis;
