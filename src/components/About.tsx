import { capabilities } from "../data/portfolio";

export default function About() {
  return (
    <section className="section-band" id="about" aria-labelledby="about-title" data-reveal>
      <div className="section-grid">
        <div className="section-heading">
          <p className="section-label">About</p>
          <h2 id="about-title">Data, technology, and business - connected.</h2>
        </div>
        <div className="section-copy">
          <p>
            I am an MS Data Science student at the University of Maryland, College Park with a
            computer science background and experience across analytics, machine learning, AI
            systems, SQL, cloud technologies, and business problem-solving.
          </p>
          <p>
            I enjoy turning large or complex datasets into clear decisions - whether that means
            identifying growth opportunities, improving operational workflows, evaluating AI systems,
            or building predictive models.
          </p>
        </div>
      </div>

      <div className="capability-grid">
        {capabilities.map((item) => (
          <article className="capability-card" key={item.title}>
            <span>{item.number}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
