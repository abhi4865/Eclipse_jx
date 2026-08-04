import { useEffect, useState } from 'react'
import { nav } from '../data'

function getInitialTheme() {
  if (typeof window === 'undefined') return 'dark'
  const saved = window.localStorage.getItem('theme')
  if (saved === 'light' || saved === 'dark') return saved
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
}

export default function Navbar() {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle('light', theme === 'light')
    window.localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/85 backdrop-blur">
      <div className="max-w-content mx-auto flex items-center justify-between px-6 py-4">
        <a href="#top" className="font-mono text-sm tracking-widest text-ink">
          AY<span className="text-lime">.DEV</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-widest text-muted">
          {nav.map((item) => (
            <a key={item.label} href={item.href} className="hover:text-lime transition-colors">
              {item.label}
            </a>
          ))}
        </nav>
        <button
          type="button"
          onClick={toggleTheme}
          aria-label="Toggle theme"
          aria-pressed={theme === 'light'}
          title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          className="h-8 w-8 flex items-center justify-center rounded-full border border-line text-muted hover:text-lime hover:border-lime transition-colors"
        >
          {theme === 'dark' ? '☀' : '🌙'}
        </button>
      </div>
    </header>
  )
}
