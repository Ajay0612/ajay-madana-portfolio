import { experiences } from "../data/portfolio";

export default function Experience() {
  return (
    <section className="section-band" id="experience" aria-labelledby="experience-title" data-reveal>
      <div className="section-grid">
        <div className="section-heading">
          <p className="section-label">Experience</p>
          <h2 id="experience-title">Experience</h2>
        </div>
        <p className="section-subtitle">Work across AI systems, analytics, and cloud-based products.</p>
      </div>

      <div className="experience-list">
        {experiences.map((experience, index) => (
          <article className="experience-row" key={experience.company}>
            <div className="experience-index">{String(index + 1).padStart(2, "0")}</div>
            <div className="experience-main">
              <div>
                <p className="company">{experience.company}</p>
                <h3>{experience.role}</h3>
              </div>
              <div className="experience-meta">
                <span>{experience.period}</span>
                <span>{experience.location}</span>
              </div>
            </div>
            <p className="experience-summary">{experience.summary}</p>
            <ul className="detail-list">
              {experience.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
            <div className="tech-row" aria-label={`${experience.company} technologies`}>
              {experience.technologies.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
