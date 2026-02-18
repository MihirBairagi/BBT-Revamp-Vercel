import { useEffect, useRef, useState } from "react";

const Counter = ({
  end,
  duration = 2000,
  suffix = "",
  startOnView = true,
  once = false,
}) => {
  const [count, setCount] = useState(0);
  const [hasRun, setHasRun] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!startOnView) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (once && hasRun) return;

          animateCounter();
          setHasRun(true);
        } else if (!once) {
          setCount(0); // reset when leaving viewport
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [end, duration, once, hasRun]);

  const animateCounter = () => {
    let start = 0;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
  };

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

export default Counter;
