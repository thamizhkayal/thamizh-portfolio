import { useEffect, useState } from 'react'

export function useTheme(defaultTheme = 'dark') {
  const [theme, setTheme] = useState(defaultTheme)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'))
  }

  return {
    theme,
    isDarkTheme: theme === 'dark',
    toggleTheme,
  }
}
