import Hero from "./Hero";
import Stats from "./Stats";
import IntroSection from "./IntroSection";
import ChairmanSection from "./ChairmanSection";
import Divisions from "./Divisions";
import Values from "./Values";
import CTA from "./CTA";
import { expertise, mission, whyChoose } from "@/data/site-data";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <IntroSection />
      <ChairmanSection />
      <section className="section-pad about-details">
        <div className="container">
          <div className="section-head" data-aos="fade-up">
            <div>
              <p className="kicker">ABOUT SIGMA HOMES INDIA</p>
              <h2>
                About <i>Sigma Homes India</i>
              </h2>
            </div>
            <p>
              Sigma Homes India, a flagship company of Sigma Group, is one of
              North India’s leading Real Estate Builders, Developers,
              Consultants and Investment Advisors.
            </p>
          </div>
          <div className="split about-detail-grid">
            <div data-aos="fade-right">
              <p className="large-copy">
                With more than twenty-five years of market expertise, Sigma
                Homes has developed an integrated real estate ecosystem covering
                every stage of property ownership.
              </p>
            </div>
            <div data-aos="fade-left">
              <p className="body-copy">
                Whether you are purchasing your first home or building a
                diversified investment portfolio, Sigma Homes delivers
                end-to-end solutions with complete transparency.
              </p>
              <p className="body-copy">Our expertise includes:</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section-pad services-list">
        <div className="container">
          <div className="service-list-grid">
            {expertise.map((x, i) => (
              <div key={x} data-aos="fade-up" data-aos-delay={(i % 5) * 45}>
                <span>{String(i + 1).padStart(2, "0")}</span>
                {x}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section-pad vision-mission">
        <div className="container split">
          <div data-aos="fade-right">
            <p className="kicker">OUR VISION</p>
            <h2>
              Our <i>Vision</i>
            </h2>
            <p className="body-copy">
              To become India’s most trusted, technology-driven and
              customer-centric real estate company by creating sustainable
              developments, intelligent investment opportunities and lifelong
              customer relationships.
            </p>
          </div>
          <div data-aos="fade-left">
            <p className="kicker">OUR MISSION</p>
            <h2>
              Our <i>Mission</i>
            </h2>
            <ul className="feature-list">
              {mission.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="section-pad philosophy">
        <div className="container" data-aos="zoom-in">
          <p className="kicker">BRAND PHILOSOPHY</p>
          <h2>“Sigma Hai Toh  Sambhav Hai”</h2>
          <p>“Sigma Hai Toh Sambhav Hai” is more than our tagline.</p>
          <p>
            It represents our commitment that every customer’s dream can become
            reality through trust, expertise and dedication.
          </p>
        </div>
      </section>
      <Divisions />
      <Values />
      <section className="section-pad why-choose">
        <div className="container">
          <div className="section-head" data-aos="fade-up">
            <div>
              <p className="kicker">WHY CHOOSE SIGMA HOMES</p>
              <h2>
                Why Choose <i>Sigma Homes</i>
              </h2>
            </div>
          </div>
          <div className="why-grid">
            {whyChoose.map((x, i) => (
              <div key={x} data-aos="fade-up" data-aos-delay={i * 55}>
                <span>{String(i + 1).padStart(2, "0")}</span>
                <b>{x}</b>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
