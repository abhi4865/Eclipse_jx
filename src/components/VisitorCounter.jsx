import { useEffect, useState } from 'react'

// CountAPI (countapi.mileshilliard.com) — free, no signup, no backend.
// KEY is your personal counter name. Change it only if you want to reset to 0.
const KEY = 'abhishekyadav-portfolio-ayd-visits'
const HIT_URL = `https://countapi.mileshilliard.com/api/v1/hit/${KEY}`

export default function VisitorCounter() {
  const [count, setCount] = useState(null)

  useEffect(() => {
    fetch(HIT_URL)
      .then((res) => res.json())
      .then((data) => setCount(Number(data.value)))
      .catch(() => setCount(null))
  }, [])

  return (
    <div className="flex items-center justify-center gap-2 py-8 font-mono text-[11px] uppercase tracking-widest text-dim">
      <span className="status-dot" />
      <span>
        {count !== null ? (
          <>
            <span className="text-lime font-semibold">{count.toLocaleString()}</span>{' '}
            visitors
          </>
        ) : (
          'Visitor count unavailable'
        )}
      </span>
    </div>
  )
}