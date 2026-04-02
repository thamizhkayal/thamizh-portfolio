export function ExperienceSection({ experience }) {
  return (
    <section className="card section-block quests-panel reveal-on-scroll">
      <div className="section-head">
        <p className="eyebrow">Active Quests</p>
        <h2>Career Timeline</h2>
      </div>
      <div className="timeline">
        {experience.map((job) => (
          <article className="quest-item" key={`${job.company}-${job.period}`}>
            <header>
              <h3>{job.title}</h3>
              <div className="quest-meta">
                <a href={job.companyUrl} target="_blank" rel="noreferrer">
                  {job.company}
                </a>
                <p>{job.period}</p>
              </div>
            </header>
            <ul>
              {job.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
