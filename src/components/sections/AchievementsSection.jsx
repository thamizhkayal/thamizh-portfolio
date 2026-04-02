export function AchievementsSection({ education, socialLinks }) {
  return (
    <section className="card section-block achievement-panel reveal-on-scroll">
      <div>
        <p className="eyebrow">Achievements</p>
        <h2>Education and Certifications</h2>
        <ul>
          {education.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <div>
        <p className="eyebrow">Social Portals</p>
        <h3>Find Me Online</h3>
        <div className="social-list">
          {socialLinks.map((link) => (
            <a key={link.label} href={link.url} target="_blank" rel="noreferrer">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
