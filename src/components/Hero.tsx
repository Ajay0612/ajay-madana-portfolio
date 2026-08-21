import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { basePath, heroSnapshot, profile } from "../data/portfolio";

export default function Hero() {
  return (
    <section className="hero section-band" aria-labelledby="hero-title">
      <div className="hero-layout">
        <div className="hero-copy" data-reveal>
          <p className="section-label">Ajay Madana / Balaji Ajay Kumar Madana</p>
          <h1 id="hero-title">
            <span>Turning Data</span>
            <span>Into Better</span>
            <span>Decisions.</span>
          </h1>
          <p className="hero-summary">
            MS Data Science student at the University of Maryland working across analytics, machine
            learning, product metrics, experimentation, and AI systems.
          </p>

          <ul className="hero-meta" aria-label="Profile highlights">
            {profile.heroMeta.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <div className="hero-actions">
            <a className="button button--primary" href="#projects">
              Explore Work
              <ArrowDown size={18} aria-hidden="true" />
            </a>
            <a className="button button--secondary" href={basePath(profile.resume)} target="_blank" rel="noreferrer">
              Resume
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </div>

          <div className="social-links" aria-label="Professional links">
            <a href={profile.links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
              <Linkedin size={18} aria-hidden="true" />
            </a>
            <a href={profile.links.github} target="_blank" rel="noreferrer" aria-label="GitHub profile">
              <Github size={18} aria-hidden="true" />
            </a>
            <a href={profile.links.email} aria-label="Email Ajay">
              <Mail size={18} aria-hidden="true" />
            </a>
          </div>
        </div>

        <aside className="hero-snapshot" data-reveal aria-label="Portfolio work snapshot">
          <div className="hero-snapshot__card">
            <div className="hero-snapshot__header">
              <span>{heroSnapshot.label}</span>
              <span>{heroSnapshot.timeframe}</span>
            </div>
            <div className="hero-snapshot__metrics">
              {heroSnapshot.metrics.map((metric) => (
                <div key={metric.label}>
                  <strong>{metric.value}</strong>
                  <span>{metric.label}</span>
                </div>
              ))}
            </div>
            <p>{heroSnapshot.summary}</p>
          </div>
          <div className="hero-snapshot__dark">
            <span>Focus Areas</span>
            <ul>
              {heroSnapshot.focus.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}
