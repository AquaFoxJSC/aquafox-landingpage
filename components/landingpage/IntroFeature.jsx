import { highFrequencyTradingIcon, liquidityProvisionIcon } from "@/constant/svg";
import Image from "next/image";
import * as React from "react";

function InfoCard({ icon, title, description }) {
  return (
    <div className="flex flex-col flex-1 shrink justify-center self-stretch my-auto basis-0 min-w-[240px]">
      {icon}
      <div className="flex flex-col mt-5 w-full">
        <div className="self-start lg:text-4xl text-xl font-medium tracking-tighter text-center bg-clip-text special-text">
          {title}
        </div>
        <div className="mt-2.5 text-base tracking-tight text-gray-700">
          {description}
        </div>
      </div>
    </div>
  );
}


const featureData = [
  {
    icon: liquidityProvisionIcon,
    title: "Liquidity Provision",
    description: "Aquafox provides efficient and reliable liquidity solutions to ensure seamless trading experiences across markets. With our deep market expertise and advanced algorithms, we enhance market stability and minimize price fluctuations."
  },
  {
    icon: highFrequencyTradingIcon,
    title: "High-Frequency Trading",
    description: "Our high-frequency trading service leverages cutting-edge technology and optimized strategies to execute trades in milliseconds. Aquafox ensures speed, accuracy, and profitability for partners operating in fast market conditions."
  }
];

export default function IntroFeature() {
  return (
    <div className="flex overflow-hidden gap-10 justify-center items-center lg:py-24 py-[60px] px-[16px] bg-[#EEF7FF]">
      <div className="flex flex-wrap gap-10 self-stretch my-auto min-w-[240px] w-[1250px] items-center">
        <div className="flex-col px-9 min-w-[240px] w-[316px] max-md:px-5 xl:flex hidden">
          <Image
              src="/images/landingpage/liquidity-provision.png"
              alt="liquidity-provision"
              className="object-contain z-10 mt-0"
              width={236}
              height={218}
              quality={100}
            />
        </div>
        <div className="border-0 xl:border-l-[1px] border-l-0 xl:pl-[60px] pl-[0]  border-solid border-[#DCDCDC] lg:flex-row flex-col flex flex-wrap flex-1 shrink gap-10 items-center my-auto basis-[72px] min-w-[240px] max-md:max-w-full">
          {featureData.map((feature, index) => (
            <InfoCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}