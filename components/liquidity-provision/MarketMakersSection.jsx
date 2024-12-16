import { arrowDetail } from "@/constant/svg";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
const marketMakersContent = {
  title: "What are market makers?",
  description: `Market makers are firms or individuals that provide liquidity to the
      market by buying and selling cryptocurrencies to traders, investors
      and market participants around the world. They buy cryptocurrencies
      from sellers who are looking to part with them and sell them to
      buyers who are looking to acquire them. In this way, they help to
      facilitate trade and ensure that there is always someone on the
      other side of a trade.
      Market makers are important because they help to reduce the
      volatility of prices and provide a source of liquidity to the
      market.`,
  imageUrl:
    "https://cdn.builder.io/api/v1/image/assets/TEMP/4324aa259d4b19dcb13f6360e458ebc8656718a9c1b6a9517a2671b8701320f0?placeholderIfAbsent=true&apiKey=5f3d3068f7634759bee728f966e36875",
  detailIconUrl:
    "https://cdn.builder.io/api/v1/image/assets/TEMP/4ef9a3a4dd4a8ec3d8d7d28f958fb9ff860fc081c2ae961477f809a576ef5b46?placeholderIfAbsent=true&apiKey=5f3d3068f7634759bee728f966e36875",
};

export default function MarketMakersSection() {
  return (
    <div className="flex flex-col justify-center items-center py-20 bg-[#EEF7FF] xl:px-0 px-6">
      <div className="flex lg:flex-row flex-col flex-wrap gap-10 justify-center items-center max-w-full w-[1000px]">
        <div className="flex flex-colpx-10 min-w-[240px] w-[474px] max-md:px-5 max-md:max-w-full">
          <Image
            src={"/images/landingpage/market-maker2.png"}
            alt="Market makers illustration"
            width={395}
            height={344}
            className="object-contain z-10"
            quality={100}
          />
        </div>
        <div className="flex flex-col flex-1 shrink my-auto font-medium basis-[78px] min-w-[240px] max-md:max-w-full">
          <div className="text-3xl tracking-tighter bg-clip-text special-text">
            {marketMakersContent.title}
          </div>
          <div className="mt-5 text-sm leading-6 text-[#3B404F] max-md:max-w-full">
            <p>
              Market makers are firms or individuals that provide liquidity to
              the market by buying and selling cryptocurrencies to traders,
              investors and market participants around the world. They buy
              cryptocurrencies from sellers who are looking to part with them
              and sell them to buyers who are looking to acquire them. In this
              way, they help to facilitate trade and ensure that there is always
              someone on the other side of a trade.
            </p>
            <br />
            <p>
              Market makers are important because they help to reduce the
              volatility of prices and provide a source of liquidity to the
              market.
            </p>
          </div>
          <Link
            href="/news/what-is-market-maker-1729670092214"
            className="flex gap-2 items-center mt-5 w-full justify-end text-base whitespace-nowrap max-md:max-w-full"
            role="button"
            tabIndex={0}
          >
            <div className="self-stretch my-auto bg-clip-text special-text">
              Detail
            </div>
            {arrowDetail}
          </Link>
        </div>
      </div>
    </div>
  );
}
