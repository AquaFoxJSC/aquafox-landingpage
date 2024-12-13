import { arrowActionIcon } from "@/constant/svg";
import Image from "next/image";
import * as React from "react";

const statsData = [
  {
    number: "100+",
    description: "Projects in portfolio"
  },
  {
    number: "80%",
    description: "Projects top 10 trending"
  },
  {
    number: "100%",
    description: "MM plan execution success"
  }
];

function StatCard({ number, description }) {
  return (
    <div className="flex flex-col flex-1 shrink basis-0 lg:min-w-[240px]">
      <div className="text-5xl font-semibold tracking-tighter bg-clip-text special-text max-md:text-4xl">
        {number}
      </div>
      <div className="mt-5 text-sm tracking-tight text-white">
        {description}
      </div>
    </div>
  );
}

export default function StatsSection() {
  return (
    <div className="flex flex-col justify-center items-center py-20 px-4 bg-[#2D3F64]">
      <div className="flex flex-wrap sm:flex-row flex-col gap-8 items-start max-w-full w-[1000px]">
        {statsData.map((stat, index) => (
          <StatCard
            key={index}
            number={stat.number}
            description={stat.description}
          />
        ))}
      </div>
    </div>
  );
}