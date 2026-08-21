import { metrics } from "../data/portfolio";

export default function Metrics() {
  return (
    <section className="metrics-band" aria-label="Portfolio metrics" data-reveal>
      <div className="metrics-grid">
        {metrics.map((metric) => (
          <div className="metric-item" key={metric.label}>
            <strong>{metric.value}</strong>
            <span>{metric.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
