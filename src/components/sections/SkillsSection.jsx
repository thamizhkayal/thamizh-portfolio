export function SkillsSection({ skillTree }) {
  return (
    <section className="skill-layout section-block">
      {skillTree.map((tree) => (
        <article className="card skill-card reveal-on-scroll" key={tree.branch}>
          <h3>{tree.branch}</h3>
          <div className="chip-wrap">
            {tree.skills.map((skill) => (
              <span className="chip" key={skill}>
                {skill}
              </span>
            ))}
          </div>
        </article>
      ))}
    </section>
  )
}
