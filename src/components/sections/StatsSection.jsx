export function StatsSection({ stats }) {
  return (
    <section className="stats-grid reveal-on-scroll">
      {stats.map((item) => (
        <article className="card stat-card" key={item.label}>
          <p>{item.label}</p>
          <h2>{item.value}</h2>
        </article>
      ))}
    </section>
  )
}
