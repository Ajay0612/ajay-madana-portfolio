import { skillGroups } from "../data/portfolio";

export default function Skills() {
  return (
    <section className="section-band" id="skills" aria-labelledby="skills-title" data-reveal>
      <div className="section-grid">
        <div className="section-heading">
          <p className="section-label">Skills</p>
          <h2 id="skills-title">Skills</h2>
        </div>
        <p className="section-subtitle">
          A concise toolkit for analytics, machine learning, AI evaluation, and data systems.
        </p>
      </div>

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <article className="skill-group" key={group.name}>
            <h3>{group.name}</h3>
            <ul>
              {group.skills.map((skill) => (
                <li key={`${group.name}-${skill}`}>{skill}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
