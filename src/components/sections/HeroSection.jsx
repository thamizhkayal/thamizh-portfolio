export function HeroSection({ profile, isDarkTheme, onToggleTheme }) {
  return (
    <section className="hero-panel card reveal-on-scroll">
      <div className="hero-copy">
        <p className="eyebrow">Player Profile</p>
        <h1>{profile.name}</h1>
        <p className="tagline">{profile.tagline}</p>

        <div className="contact-grid">
          <span>{profile.location}</span>
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <a href={`tel:${profile.phone.replace(/\s+/g, '')}`}>{profile.phone}</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn Profile
          </a>
        </div>

        <div className="hero-actions">
          <a className="btn-primary" href={profile.cvPath} download>
            Download CV
          </a>
          <a className="btn-secondary" href={profile.github} target="_blank" rel="noreferrer">
            View GitHub
          </a>
          <button type="button" className="btn-secondary theme-toggle-btn" onClick={onToggleTheme}>
            <span className="theme-icon" aria-hidden="true">
              {isDarkTheme ? (
                <svg viewBox="0 0 24 24" role="presentation">
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2V5M12 19V22M2 12H5M19 12H22M4.9 4.9L7 7M17 17L19.1 19.1M4.9 19.1L7 17M17 7L19.1 4.9" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" role="presentation">
                  <path d="M20 14.5A8.5 8.5 0 1 1 9.5 4 7 7 0 0 0 20 14.5Z" />
                </svg>
              )}
            </span>
            Switch to {isDarkTheme ? 'Light' : 'Dark'} Theme
          </button>
        </div>
      </div>

      <div className="avatar-panel">
        <img className="profile-avatar" src={profile.avatar} alt="Thamizharasan profile" />
        <div className="xp-bar" role="presentation">
          <div className="xp-fill" />
        </div>
        <p className="xp-text">Level 26 Builder - XP bar animation placeholder</p>
      </div>
    </section>
  )
}
