import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [theme, setTheme] = useState('dark')
  const isDarkTheme = theme === 'dark'

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  useEffect(() => {
    const revealNodes = document.querySelectorAll('.reveal-on-scroll')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -32px 0px' },
    )

    revealNodes.forEach((node) => observer.observe(node))

    return () => observer.disconnect()
  }, [])

  const stats = [
    { label: 'Years Building', value: '6+' },
    { label: 'Core Stack', value: 'MERN + Flutter' },
    { label: 'Production Roles', value: '4' },
    { label: 'Current Rank', value: 'SDE @ Yitro Tech' },
  ]

  const experience = [
    {
      title: 'Software Development Engineer',
      company: 'Yitro Tech',
      companyUrl: 'https://yitro.tech/',
      period: 'Dec 2025 - Present',
      points: [
        'Building modern web apps using React, Next.js, and Tailwind CSS.',
        'Creating reusable UI systems and SEO-friendly, high-performance front-end flows.',
        'Integrating backend APIs and supporting Python FastAPI services when needed.',
      ],
    },
    {
      title: 'Full Stack Developer',
      company: 'Contus Tech',
      companyUrl: 'https://www.contus.com/',
      period: 'Nov 2024 - Oct 2025',
      points: [
        'Built scalable applications with React and Node.js.',
        'Developed and maintained front-end and back-end modules.',
        'Integrated REST APIs and optimized runtime performance.',
      ],
    },
    {
      title: 'Full Stack Developer',
      company: 'Nibav Lifts',
      companyUrl: 'https://www.nibavlifts.in/',
      period: 'Mar 2024 - Oct 2024',
      points: [
        'Developed systems using Next.js, Node.js, and SQL.',
        'Used Docker for reliable deployments across environments.',
        'Delivered backend improvements, API integrations, and issue resolution.',
      ],
    },
    {
      title: 'Full Stack Developer',
      company: 'Ocean Academy',
      companyUrl: 'https://oceanacademy.in/',
      period: 'Apr 2020 - Mar 2024',
      points: [
        'Built web and mobile apps with React, Flutter, Node.js, Python, and MongoDB.',
        'Improved backend performance and implemented product-ready UX features.',
        'Debugged critical flows and maintained high code quality.',
      ],
    },
  ]

  const projects = [
    {
      name: 'Masdr',
      stack: 'React.js, Java, Node.js, WebSockets',
      summary:
        'Customer service platform with live call tracking, transfer flows, and real-time dashboards for agents and supervisors.',
    },
    {
      name: 'Nibav Lifts - Customer Login',
      stack: 'Next.js, Node.js, SQL',
      summary:
        'Customer portal for authentication, lift ordering, and real-time order status visibility.',
    },
    {
      name: 'Smoke-Free Mind',
      stack: 'Flutter, React.js, Firebase, Node.js',
      summary:
        'Smoking cessation app with authentication, live data sync, and behavior-focused user support.',
    },
    {
      name: 'OA Live',
      stack: 'React.js, Node.js, Express.js, MongoDB',
      summary:
        'Online learning platform for admin and trainers, focused on scalable remote education.',
    },
    {
      name: 'Green Puducherry',
      stack: 'Flutter, Firebase, Node.js',
      summary:
        'Community sustainability app designed to increase environmental awareness and participation.',
    },
  ]

  const skillTree = [
    {
      branch: 'Frontend',
      skills: ['React', 'Next.js', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS'],
    },
    {
      branch: 'Backend',
      skills: ['Node.js', 'Express.js', 'Python', 'MongoDB', 'SQL', 'Redis', 'Kafka'],
    },
    {
      branch: 'Mobile + DevOps',
      skills: ['Flutter', 'Dart', 'Firebase', 'Docker'],
    },
    {
      branch: 'Design + Creative',
      skills: ['Figma', 'Photoshop', 'Illustrator', 'After Effects', 'Premiere Pro'],
    },
  ]

  const companyLinks = [
    { name: 'Ocean Academy', url: 'https://oceanacademy.in/', label: 'Learning Platform' },
    { name: 'Yitro Tech', url: 'https://yitro.tech/', label: 'Current Role' },
    { name: 'Contus', url: 'https://www.contus.com/', label: 'Product Engineering' },
    { name: 'Nibav Lifts', url: 'https://www.nibavlifts.in/', label: 'Customer Platform' },
  ]

  return (
    <main className="game-shell">
      <section className="hero-panel card reveal-on-scroll">
        <div className="hero-copy">
          <p className="eyebrow">Player Profile</p>
          <h1>THAMIZHARASAN K</h1>
          <p className="tagline">
            Full-Stack Developer on a mission to ship high-impact web and mobile
            products with MERN + Flutter.
          </p>
          <div className="contact-grid">
            <span>Pondicherry, India</span>
            <a href="mailto:thamizharasan2373@gmail.com">
              thamizharasan2373@gmail.com
            </a>
            <a href="tel:+918015122373">+91 80151 22373</a>
            <a
              href="https://www.linkedin.com/in/thamizharasan-kumaresan-abb23a243/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn Profile
            </a>
          </div>
          <div className="hero-actions">
            <a className="btn-primary" href="/Jan_2026_Thamizh_CV.docx" download>
              Download CV
            </a>
            <a
              className="btn-secondary"
              href="https://github.com/thamizhkayal"
              target="_blank"
              rel="noreferrer"
            >
              View GitHub
            </a>
            <button
              type="button"
              className="btn-secondary theme-toggle-btn"
              onClick={() => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))}
            >
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
          <img
            className="profile-avatar"
            src="/profile_image.jpg"
            alt="Thamizharasan profile"
          />
          <div className="xp-bar" role="presentation">
            <div className="xp-fill" />
          </div>
          <p className="xp-text">Level 26 Builder - XP bar animation placeholder</p>
        </div>
      </section>

      <section className="stats-grid reveal-on-scroll">
        {stats.map((item) => (
          <article className="card stat-card" key={item.label}>
            <p>{item.label}</p>
            <h2>{item.value}</h2>
          </article>
        ))}
      </section>

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

      <section className="card section-block achievement-panel reveal-on-scroll">
        <div>
          <p className="eyebrow">Achievements</p>
          <h2>Education and Certifications</h2>
          <ul>
            <li>B.Sc Computer Science - Deccan Educational and Research Foundation (May 2019)</li>
            <li>High School Diploma - Government Higher Secondary School, Nonankuppam (Mar 2015)</li>
            <li>Node.js Certification - Udemy</li>
          </ul>
        </div>
        <div>
          <p className="eyebrow">Social Portals</p>
          <h3>Find Me Online</h3>
          <div className="social-list">
            <a href="https://github.com/thamizhkayal" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a
              href="https://leetcode.com/thamizharasan2373"
              target="_blank"
              rel="noreferrer"
            >
              LeetCode
            </a>
            <a
              href="https://www.codingame.com/certification/b_J41ZFJBVTnCcpy4k1Jzw"
              target="_blank"
              rel="noreferrer"
            >
              Codingame
            </a>
            <a
              href="https://www.udemy.com/certificate/UC-15aa8352-acc8-406d-a553-edf9ca98dc62/"
              target="_blank"
              rel="noreferrer"
            >
              Udemy Certificate
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
