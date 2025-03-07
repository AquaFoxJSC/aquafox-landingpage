import Hero from "../components/landingpage/hero";
import Expertise from "../components/landingpage/expertise";
import OurWorks from "../components/landingpage/OurWorks";
import OurClients from "../components/landingpage/OurClients";
import Contact from "../components/landingpage/contact";
import IntroFeature from "../components/landingpage/IntroFeature";
import LiquidityProvision from "../components/landingpage/LiquidityProvision";
import HighFrequencyTrading from "../components/landingpage/HighFrequencyTrading";
import StatsSection from "../components/landingpage/StatsSection";
import Partners from "../components/landingpage/Partners";
import NewsSection from "../components/news/NewsSection";
import newsApis from "@/apis/newsApis";
import 'antd/dist/reset.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AquaFox',
  description: 'AquaFox - Your trusted partner in liquidity provision and high frequency trading',
  openGraph: {
    title: 'AquaFox',
    description: 'AquaFox - Your trusted partner in liquidity provision and high frequency trading',
    locale: 'en_US',
    siteName: 'aquafox.io',
    url: 'https://aquafox.io',
    type: 'website'
  },
  twitter: {
    card: 'summary',
    title: 'AquaFox',
    description: 'AquaFox - Your trusted partner in liquidity provision and high frequency trading',
    site: '@Aquafoxjsc'
  }
};

export default async function Home() {
  const apiRs = await newsApis.getAllNews({
    page: 1,
    limit: 6
  });

  return (
    <div className="landing-page">
      <Hero />
      <IntroFeature />
      <LiquidityProvision />
      <HighFrequencyTrading />
      <StatsSection />
      <Partners />
      <NewsSection newsList={apiRs?.data?.data?.items || []}/>
      <Contact />
    </div>
  );
}
