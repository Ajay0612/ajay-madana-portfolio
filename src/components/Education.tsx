import { certifications, education } from "../data/portfolio";

export default function Education() {
  return (
    <section className="section-band" id="education" aria-labelledby="education-title" data-reveal>
      <div className="section-grid">
        <div className="section-heading">
          <p className="section-label">Education</p>
          <h2 id="education-title">Education</h2>
        </div>
        <p className="section-subtitle">
          Graduate study, computer science foundation, and selected certifications.
        </p>
      </div>

      <div className="education-list">
        {education.map((item) => (
          <article className="education-row" key={item.school}>
            <div>
              <h3>{item.school}</h3>
              <p>{item.degree}</p>
            </div>
            <div className="education-meta">
              <span>{item.period}</span>
              <span>GPA: {item.gpa}</span>
            </div>
            <ul>
              {item.details.map((detail) => (
                <li key={`${item.school}-${detail}`}>{detail}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="certifications">
        <p className="section-label">Certifications</p>
        <ul>
          {certifications.map((certification) => (
            <li key={certification}>{certification}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
