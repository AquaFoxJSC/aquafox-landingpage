import { arrowActionIcon } from "@/constant/svg";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";

export default function HighFrequencyTrading() {
  return (
    <div className="flex flex-col justify-center items-center py-16 bg-blue-50">
      <div className="text-4xl font-medium tracking-tighter leading-loose text-center text-[#0836A1]">
        High-Frequency Trading
      </div>
      <div className="flex gap-8 justify-center items-start mt-2.5 max-w-full">
        <div className="flex flex-col justify-center px-8 py-6 max-md:px-5">
          <Image
            src="/images/landingpage/high-frequency-trading5.png"
            alt="high-frequency-trading"
            className="object-contain"
            width={256}
            height={286}
            quality={100}
          />
        </div>
      </div>
      <Link href="/contact"
        className="cursor-pointer flex gap-2 justify-center items-center px-6 py-3.5 mt-2.5 text-base font-semibold tracking-tight text-blue-500 rounded-[10px] border-2 border-blue-500 border-solid min-h-[46px] max-md:px-5"
        tabIndex={0}
        aria-label="Get in touch"
      >
        <div className="self-stretch my-auto">Get in touch</div>
        {arrowActionIcon}
      </Link>
    </div>
  );
}
