import * as React from "react";
import BenefitCard from "./BenefitCard";

const benefitCards = [
  {
    id: 1,
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/716ba42e81ca8a8bfccef7ee4242a030468d4454fcf2f3c885d29ece5bee2939?placeholderIfAbsent=true&apiKey=5f3d3068f7634759bee728f966e36875",
    description: "Daily market reports are available to all trading counterparties"
  },
  {
    id: 2,
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/439de37d32777bd944a8a99b4311ac29a17757da03c4b71964bec4c05120ab87?placeholderIfAbsent=true&apiKey=5f3d3068f7634759bee728f966e36875",
    description: "Our team has experience trading with established and nascent projects"
  },
  {
    id: 3,
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/a0a2b8647720d25ff1e3b5ded2bd4ec5a0fa6eb162b7d9bfcc887e03aa299763?placeholderIfAbsent=true&apiKey=5f3d3068f7634759bee728f966e36875",
    description: "Robust Liquidity – spread and order book KPIs"
  },
  {
    id: 4,
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/b1b852202b119577620d06d8a45dca7e7949ee85341664f0a2687ada17025986?placeholderIfAbsent=true&apiKey=5f3d3068f7634759bee728f966e36875",
    description: "Our software measures performance on the most granular level, allowing for full visibility and flexibility"
  },
  {
    id: 5,
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/0bc242ee68f98e759f244281c9f195b2e838f328e942b28b81986aba4ae7303c?placeholderIfAbsent=true&apiKey=5f3d3068f7634759bee728f966e36875",
    description: "Deep liquidity provisioning across both centralized and decentralized venues"
  },
  {
    id: 6,
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/b0023c251abe0e70a146cb1c40411d96ae5da9e9dbd06c1eb94f6734a958ae49?placeholderIfAbsent=true&apiKey=5f3d3068f7634759bee728f966e36875",
    description: "Through a thorough examination of your exchange and trading ecosystem we learn your needs and set achievable goals"
  }
];

export default function WhyWorkWithAquaFox() {
  const firstRow = benefitCards.slice(0, 3);
  const secondRow = benefitCards.slice(3);

  return (
    <div className="flex flex-col justify-center items-center py-20 text-base tracking-tight text-gray-700 bg-custom-1 lg:px-0 px-3">
      <h2 className="text-3xl font-medium tracking-tighter">
        Why work with AquaFox?
      </h2>
      <div className="flex flex-wrap gap-8 mt-8 max-w-full w-[1250px]">
        {firstRow.map((card) => (
          <BenefitCard
            key={card.id}
            imageUrl={card.imageUrl}
            description={card.description}
          />
        ))}
      </div>
      <div className="flex flex-wrap gap-8 mt-8 max-w-full w-[1250px]">
        {secondRow.map((card) => (
          <BenefitCard
            key={card.id}
            imageUrl={card.imageUrl}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
}