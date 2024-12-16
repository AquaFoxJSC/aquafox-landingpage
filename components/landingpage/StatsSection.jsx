/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const useCounterAnimation = (target, options) => {
  const { duration = 1000, step = 1 } = options || {};
  const [count, setCount] = useState(0);

  useEffect(() => {
    const totalSteps = Math.ceil(duration / (1000 / 60)); // 60fps
    const increment = target / totalSteps;

    let current = 0;
    const interval = setInterval(() => {
      current += increment;
      if (current >= target) {
        clearInterval(interval);
        setCount(target);
      } else {
        setCount(Math.min(Math.floor(current), target));
      }
    }, 1000 / 60);

    return () => clearInterval(interval);
  }, [target, duration]);

  return count;
};


function StatCard({ number, description, tail, shouldAnimate }) {
  const animatedValue = shouldAnimate ? useCounterAnimation(number) : number;

  return (
    <div className="flex flex-col flex-1 shrink basis-0 lg:min-w-[240px] items-center">
      <div className="text-5xl font-semibold tracking-tighter bg-clip-text special-text max-md:text-4xl">
        {animatedValue}{tail}
      </div>
      <div className="mt-5 text-sm tracking-tight text-white">
        {description}
      </div>
    </div>
  );
}

export default function StatsSection() {
  const { ref, inView } = useInView({ threshold: 0.5 });

  const statsData = [
    {
      number: 100,
      tail: '+',
      description: "Projects in portfolio"
    },
    {
      number: 80,
      tail: '%',
      description: "Projects top 10 trending"
    },
    {
      number: 100,
      tail: '%',
      description: "MM plan execution success"
    }
  ];

  return (
    <div
      ref={ref}
      className="flex flex-col justify-center items-center py-20 px-4 bg-[#2D3F64]"
    >
      <div className="flex flex-wrap sm:flex-row flex-col gap-8 items-start max-w-full w-[1000px]">
        {statsData.map((stat, index) => (
          <StatCard
            key={index}
            number={stat.number}
            description={stat.description}
            tail={stat.tail}
            shouldAnimate={inView} // Bắt đầu animation khi phần tử vào viewport
          />
        ))}
      </div>
    </div>
  );
}
