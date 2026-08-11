
'use client';

import { useEffect, useRef, useState } from 'react';
import { stats } from '@/data/site-data';

function AnimatedNumber({ value }: { value: string }) {
  const [displayValue, setDisplayValue] = useState('0');
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const match = value.match(/^([\d,]+)(.*)$/);

    // If the value isn't numeric, display it normally
    if (!match) {
      setDisplayValue(value);
      return;
    }

    const target = Number(match[1].replace(/,/g, ''));
    const suffix = match[2];

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasAnimated.current) return;

        hasAnimated.current = true;

        const duration = 1800;
        const startTime = performance.now();

        const animate = (currentTime: number) => {
          const progress = Math.min(
            (currentTime - startTime) / duration,
            1
          );

          // Smooth ease-out animation
          const easedProgress = 1 - Math.pow(1 - progress, 4);
          const currentValue = Math.floor(target * easedProgress);

          setDisplayValue(
            `${currentValue.toLocaleString('en-IN')}${suffix}`
          );

          if (progress < 1) {
            requestAnimationFrame(animate);
          } else {
            setDisplayValue(
              `${target.toLocaleString('en-IN')}${suffix}`
            );
          }
        };

        requestAnimationFrame(animate);
      },
      {
        threshold: 0.35,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [value]);

  return <span ref={ref}>{displayValue}</span>;
}

export default function Stats() {
  return (
    <section className="stats section-pad">
      <div className="container stats-grid">
        {stats.map((s, i) => (
          <div
            className="stat"
            key={s.label}
            data-aos="fade-up"
            data-aos-delay={i * 80}
          >
            <strong>
              <AnimatedNumber value={s.value} />
            </strong>

            <span>{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

