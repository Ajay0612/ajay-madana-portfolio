import { projects } from "../data/portfolio";

export default function Projects() {
  return (
    <section className="section-band projects-section" id="projects" aria-labelledby="projects-title" data-reveal>
      <div className="section-grid">
        <div className="section-heading">
          <p className="section-label">Selected Work</p>
          <h2 id="projects-title">Selected Work</h2>
        </div>
        <p className="section-subtitle">
          Projects spanning analytics, machine learning, healthcare, AI, and cloud systems.
        </p>
      </div>

      <div className="project-list">
        {projects.map((project, index) => (
          <article className={`project-card ${index % 2 === 1 ? "project-card--reverse" : ""}`} key={project.name}>
            <div className="project-number">{project.number}</div>
            <div className="project-intro">
              <p className="project-category">{project.category}</p>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
            </div>
            <div className="project-metrics" aria-label={`${project.name} metrics`}>
              {project.metrics.map((metric) => (
                <div className="project-metric" key={`${project.name}-${metric.label}`}>
                  <strong>{metric.value}</strong>
                  <span>{metric.label}</span>
                </div>
              ))}
            </div>
            <div className="project-outcome">
              <div>
                <span className="mini-label">Scale</span>
                <p>{project.scale}</p>
              </div>
              <div>
                <span className="mini-label">Key result</span>
                <p>{project.result}</p>
              </div>
            </div>
            <ul className="detail-list">
              {project.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
            <div className="tech-row" aria-label={`${project.name} technologies`}>
              {project.technologies.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
