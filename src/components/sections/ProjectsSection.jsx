export function ProjectsSection({ projects }) {
  return (
    <section className="section-block">
      <div className="section-head reveal-on-scroll">
        <p className="eyebrow">Completed Missions</p>
        <h2>Project Highlights</h2>
      </div>
      <div className="mission-grid">
        {projects.map((project) => (
          <article className="card mission-card reveal-on-scroll" key={project.name}>
            <div className="mission-banner">Project Visual Placeholder</div>
            <h3>{project.name}</h3>
            <p className="stack">{project.stack}</p>
            <p>{project.summary}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
