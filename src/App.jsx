import './App.css'
import {
  profile,
  stats,
  experience,
  projects,
  skillTree,
  companyLinks,
  education,
  socialLinks,
} from './constants/portfolioData'
import { useTheme } from './hooks/useTheme'
import { useRevealOnScroll } from './hooks/useRevealOnScroll'
import {
  HeroSection,
  StatsSection,
  CompanySection,
  ExperienceSection,
  ProjectsSection,
  SkillsSection,
  AchievementsSection,
} from './components/sections'

function App() {
  const { isDarkTheme, toggleTheme } = useTheme('dark')

  useRevealOnScroll()

  return (
    <main className="game-shell px-1 sm:px-0">
      <HeroSection profile={profile} isDarkTheme={isDarkTheme} onToggleTheme={toggleTheme} />
      <StatsSection stats={stats} />
      <CompanySection companyLinks={companyLinks} />
      <ExperienceSection experience={experience} />
      <ProjectsSection projects={projects} />
      <SkillsSection skillTree={skillTree} />
      <AchievementsSection education={education} socialLinks={socialLinks} />
    </main>
  )
}

export default App
