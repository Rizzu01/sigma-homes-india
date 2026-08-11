
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="cta-premium">
      <div className="cta-premium-bg" />

      <div className="container cta-premium-inner">

        <div className="cta-premium-top" data-aos="fade-up">
          <span className="cta-number">25+</span>
          <span className="cta-meta">
            Years of Excellence
            <br />
            Jaipur · Noida · Gurgaon
          </span>
        </div>

        <div className="cta-premium-content">

          <div className="cta-premium-copy" data-aos="fade-up">
            <p className="kicker">SIGMA HAI TOH SAMBHAV HAI.</p>

            <h2>
              Building Dreams.
              <br />
              <em>Creating Wealth.</em>
              <br />
              Delivering Trust.
            </h2>

            <p className="cta-description">
              Your Trusted Real Estate Partner Since 2001
            </p>
          </div>

          <div
            className="cta-premium-action"
            data-aos="fade-left"
            data-aos-delay="150"
          >
            <Link href="/contact" className="cta-circle">
              <span>LET'S</span>
              <span>TALK</span>
              <ArrowUpRight size={28} strokeWidth={1.5} />
            </Link>
          </div>

        </div>

        <div className="cta-premium-bottom" data-aos="fade-up">
          <span>SIGMA HOMES INDIA</span>
          <span>(A Venture of Sigma Group)</span>
          <span>Sigma Builders & Developers</span>
        </div>

      </div>
    </section>
  );
}

