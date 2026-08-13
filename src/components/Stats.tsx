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
    const match = value.match(/^(\d[\d,]*)(.*)$/);
    if (!match) { setDisplayValue(value); return; }
    const target = Number(match[1].replace(/,/g, ''));
    const suffix = match[2];
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || hasAnimated.current) return;
      hasAnimated.current = true;
      const duration = 1800;
      const startTime = performance.now();
      const animate = (currentTime: number) => {
        const progress = Math.min((currentTime - startTime) / duration, 1);
        const easedProgress = 1 - Math.pow(1 - progress, 4);
        setDisplayValue(`${Math.floor(target * easedProgress).toLocaleString('en-IN')}${suffix}`);
        if (progress < 1) requestAnimationFrame(animate);
        else setDisplayValue(`${target.toLocaleString('en-IN')}${suffix}`);
      };
      requestAnimationFrame(animate);
    }, { threshold: 0.35 });
    observer.observe(element);
    return () => observer.disconnect();
  }, [value]);

  return <span ref={ref}>{displayValue}</span>;
}

export default function Stats() {
  return (
    <section className="stats section-pad">
      <div className="container stats-grid stats-compact">
        {stats.map((s, i) => (
          <div className="stat" key={s.label} data-aos="fade-up" data-aos-delay={i * 80}>
            <strong><AnimatedNumber value={s.value} /></strong>
            <span>{s.label}</span>
          </div>
        ))}
      </div>
      <style jsx>{`
        .stats-compact {
          width: min(1080px, calc(100% - 28px));
          grid-template-columns: repeat(4, minmax(0, 1fr));
          overflow: visible;
        }
        .stats-compact .stat {
          min-width: 0;
          padding: 8px 8px;
          overflow: visible;
        }
        .stats-compact .stat strong {
          display: block;
          width: 100%;
          font-size: clamp(27px, 3vw, 44px);
          line-height: 1;
          white-space: nowrap;
          text-align: center;
          letter-spacing: -0.045em;
          overflow: visible;
        }
        .stats-compact .stat strong > span {
          display: inline;
          font-size: inherit;
          white-space: nowrap;
        }
        .stats-compact .stat > span {
          display: block;
          margin-top: 5px;
          font-size: 9px;
          line-height: 1.3;
          letter-spacing: .055em;
          text-align: center;
        }
        @media (max-width: 900px) {
          .stats-compact {
            width: calc(100% - 16px);
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
          .stats-compact .stat { padding: 8px 4px; }
          .stats-compact .stat strong { font-size: clamp(24px, 7vw, 34px); }
        }
        @media (max-width: 420px) {
          .stats-compact { width: calc(100% - 8px); }
          .stats-compact .stat { padding: 7px 2px; }
          .stats-compact .stat strong { font-size: clamp(21px, 6.5vw, 29px); letter-spacing: -.05em; }
          .stats-compact .stat > span { font-size: 8px; letter-spacing: .045em; }
        }
      `}</style>
    </section>
  );
}
