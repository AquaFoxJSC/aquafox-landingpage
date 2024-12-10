/* eslint-disable react/jsx-key */
import Image from "next/image";
import * as React from "react";

export default function Partners() {
  const partners = Array(5).fill(null);

  return (
    <div className="flex flex-col justify-center items-center py-16">
      <div className="flex flex-col max-w-full">
        <div className="text-4xl font-medium tracking-tighter leading-loose text-center text-[#0836A1] pb-[30px]">
          Partners
        </div>
        <div className="overflow-auto">
          <div className="lg:block flex items-center w-max pb-[20px]">
            <div className="flex gap-[50px] items-center justify-center ">
              <Image
                alt="uniswap"
                src="/images/partners/uniswap.png"
                width={200}
                height={50}
              />
              <Image
                alt="holdstation"
                src="/images/partners/holdstation.png"
                width={115}
                height={50}
              />
              <Image
                alt="syncswap"
                src="/images/partners/syncswap.png"
                width={170}
                height={50}
              />
              <Image
                alt="mexc"
                src="/images/partners/mexc.png"
                width={277}
                height={32}
              />
            </div>
            <div className="flex gap-[50px] lg:mt-[30px] items-center justify-center">
              <Image
                alt="partners"
                src="/images/partners/quicknode.png"
                width={197}
                height={50}
              />
              <Image
                alt="kyberswap"
                src="/images/partners/kyberswap.png"
                width={151}
                height={50}
              />
              <Image
                alt="mirailab"
                src="/images/partners/mirailab.png"
                width={170}
                height={36}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
