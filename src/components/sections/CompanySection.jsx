export function CompanySection({ companyLinks }) {
  return (
    <section className="card section-block company-panel reveal-on-scroll">
      <div className="section-head">
        <p className="eyebrow">Guild Links</p>
        <h2>Company Portals</h2>
      </div>
      <div className="company-grid">
        {companyLinks.map((company) => (
          <a
            className="company-link"
            key={company.name}
            href={company.url}
            target="_blank"
            rel="noreferrer"
          >
            <p>{company.label}</p>
            <h3>{company.name}</h3>
            <span>Visit Website</span>
          </a>
        ))}
      </div>
    </section>
  )
}
