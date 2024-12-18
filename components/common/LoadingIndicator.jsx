"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { hide, show } from "./topbar";
import { usePathname, useSearchParams } from "next/navigation";

const LoadingIndicator = () => {

  const handleStart = (url) => {
    show();
  };

  const handleComplete = () => {
    hide();
  };

  let pathname = usePathname();
  let searchParams = useSearchParams();

  useEffect(() => {
    handleComplete();

    return () => {
      handleStart();
    };
  }, [pathname, searchParams]);

  return <></>;
};

export default LoadingIndicator;
