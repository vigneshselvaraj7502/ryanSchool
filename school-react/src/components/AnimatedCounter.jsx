import React, { useState, useEffect, useRef } from 'react';

export default function AnimatedCounter({ target, prefix = '', suffix = '', duration = 1600 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const startTime = performance.now();

          const update = (now) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(easeOut * target);
            setCount(current);

            if (progress < 1) {
              requestAnimationFrame(update);
            } else {
              setCount(target);
            }
          };

          requestAnimationFrame(update);
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.2 });

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  );
}
