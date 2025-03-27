import { arrowActionIcon } from "@/constant/svg";
import Image from "next/image";
import Link from "next/link";
import LottieAnimation from "../common/LottieAnimation";
import LinkIndicator from "@/components/common/LinkIndicatior";

function NotFound() {
  return (
    <div className="flex flex-wrap gap-10 justify-center items-center max-lg:pb-[10vh] max-lg:gap-4">
      <LottieAnimation url="/images/404-lottie.json" height={550} width={400} />
      <div className="flex flex-col self-stretch my-auto min-w-[240px]">
        <div className="flex flex-col">
          <div className="text-4xl font-medium tracking-tighter text-slate-800">
            404
          </div>
          <div className="mt-5 text-xl tracking-tight text-gray-700">
            Page Not Found
          </div>
        </div>

        <LinkIndicator
          href="/"
          className="flex gap-2 justify-center items-center self-start px-6 py-3.5 mt-10 text-base font-semibold tracking-tight text-blue-500 rounded-xl border-2 border-blue-500 border-solid min-h-[46px] max-md:px-5"
        >
          <span className="self-stretch my-auto">Go to Homepage</span>
          {arrowActionIcon}
        </LinkIndicator>
      </div>
    </div>
  );
}

export default NotFound;
