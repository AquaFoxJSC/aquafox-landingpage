import * as React from "react";
import BenefitCard from "./BenefitCard";

const benefitCards = [
  {
    id: 1,
    imageUrl: "/images/why-aquafox/i1.png",
    description: "Daily market reports are available to all trading counterparties",
    width: 50
  },
  {
    id: 2,
    imageUrl: "/images/why-aquafox/i2.png",
    description: "Our team has experience trading with established and nascent projects",
    width: 51
    
  },
  {
    id: 3,
    imageUrl: "/images/why-aquafox/i3.png",
    description: "Robust Liquidity – spread and order book KPIs",
    width: 51
  },
  {
    id: 4,
    imageUrl: "/images/why-aquafox/i4.png",
    description: "Our software measures performance on the most granular level, allowing for full visibility and flexibility",
    width: 50
  },
  {
    id: 5,
    imageUrl: "/images/why-aquafox/i5.png",
    description: "Deep liquidity provisioning across both centralized and decentralized venues",
    width: 51
  },
  {
    id: 6,
    imageUrl: "/images/why-aquafox/i6.png",
    description: "Through a thorough examination of your exchange and trading ecosystem we learn your needs and set achievable goals",
    width: 51
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
            width={card.width}
          />
        ))}
      </div>
      <div className="flex flex-wrap gap-8 mt-8 max-w-full w-[1250px]">
        {secondRow.map((card) => (
          <BenefitCard
            key={card.id}
            imageUrl={card.imageUrl}
            description={card.description}
            width={card.width}
          />
        ))}
      </div>
    </div>
  );
}