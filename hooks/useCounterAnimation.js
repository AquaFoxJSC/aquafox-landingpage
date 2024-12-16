'use client'
import { useEffect, useState } from "react";

const useCounterAnimation = (target, options) => {
  console.log("ok")
  return target
  // const { duration = 1000, step = 1 } = options || {};
  // const [count, setCount] = useState(0);

  // useEffect(() => {
  //   const totalSteps = Math.ceil(duration / (1000 / 60)); // 60fps
  //   const increment = target / totalSteps;

  //   let current = 0;
  //   const interval = setInterval(() => {
  //     current += increment;
  //     if (current >= target) {
  //       clearInterval(interval);
  //       setCount(target);
  //     } else {
  //       setCount(Math.min(Math.floor(current), target));
  //     }
  //   }, 1000 / 60);

  //   return () => clearInterval(interval);
  // }, [target, duration]);

  // return count;
};

export default useCounterAnimation;
