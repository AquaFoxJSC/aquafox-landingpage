"use client";

import { useRouter } from "next/navigation";
import { useEffect, Suspense } from "react";
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
  }, [pathname, searchParams]);

  return <></>;
};

// Wrapper để bao quanh component
const SuspenseWrapper = () => {
  return (
    <Suspense fallback={<div></div>}>
      <LoadingIndicator />
    </Suspense>
  );
};

export default SuspenseWrapper;
