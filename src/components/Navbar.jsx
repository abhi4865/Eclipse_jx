import { useEffect, useState } from 'react'
import { nav } from '../data'

function getInitialTheme() {
  if (typeof window === 'undefined') return 'light'
  const saved = window.localStorage.getItem('theme')
  if (saved === 'light' || saved === 'dark') return saved
  return 'light'
}

export default function Navbar() {
  const [theme, setTheme] = useState(getInitialTheme)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle('light', theme === 'light')
    window.localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))
  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/85 backdrop-blur">
      <div className="max-w-content mx-auto flex items-center justify-between px-6 py-4 relative">
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

        <div className="flex items-center gap-2">
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

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="h-8 w-8 flex flex-col items-center justify-center gap-1 rounded-full border border-line text-muted hover:text-lime hover:border-lime transition-colors md:hidden"
          >
            <span className="block h-0.5 w-4 bg-current" />
            <span className="block h-0.5 w-4 bg-current" />
            <span className="block h-0.5 w-4 bg-current" />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div id="mobile-menu" className="md:hidden border-t border-line bg-bg/95 backdrop-blur">
          <nav className="max-w-content mx-auto px-6 py-4 flex flex-col gap-4 font-mono text-xs uppercase tracking-widest text-muted">
            {nav.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={closeMenu}
                className="hover:text-lime transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}