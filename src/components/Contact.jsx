import { useState } from 'react'
import { profile } from '../data'

function buildGmailComposeUrl({ senderEmail, subject, message }) {
  const to = profile.email
  const su = subject
  const body = `${message}\n\n— from: ${senderEmail}`

  const params = new URLSearchParams({
    view: 'cm',
    fs: '1',
    to,
    su,
    body,
  })

  return `https://mail.google.com/mail/?${params.toString()}`
}

function ContactModal({ onClose }) {
  const [form, setForm] = useState({ senderEmail: '', subject: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | redirecting

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.senderEmail || !form.subject || !form.message) return

    setStatus('redirecting')
    const url = buildGmailComposeUrl(form)
    window.open(url, '_blank', 'noopener,noreferrer')

    // small delay so the user sees the confirmation state before the modal disappears
    setTimeout(() => {
      onClose()
    }, 900)
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md bg-panel border border-line p-6 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute top-3 right-3 text-muted hover:text-lime font-mono text-sm"
        >
          ✕
        </button>

        <p className="section-label mb-1">// send a message</p>
        <h3 className="text-2xl font-display font-bold text-ink mb-5">
          Get in touch
        </h3>

        {status === 'redirecting' ? (
          <div className="py-6 text-center">
            <p className="text-lime font-mono text-sm mb-2">↗ Opening Gmail…</p>
            <p className="text-muted text-sm">Your message is ready to send from your inbox.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label className="block font-mono text-[11px] uppercase tracking-widest text-dim mb-1.5">
                Your email
              </label>
              <input
                type="email"
                name="senderEmail"
                required
                value={form.senderEmail}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full bg-panel2 border border-line px-3 py-2.5 text-sm text-ink placeholder:text-dim focus:outline-none focus:border-lime transition"
              />
            </div>

            <div>
              <label className="block font-mono text-[11px] uppercase tracking-widest text-dim mb-1.5">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                required
                value={form.subject}
                onChange={handleChange}
                placeholder="Let's collaborate on..."
                className="w-full bg-panel2 border border-line px-3 py-2.5 text-sm text-ink placeholder:text-dim focus:outline-none focus:border-lime transition"
              />
            </div>

            <div>
              <label className="block font-mono text-[11px] uppercase tracking-widest text-dim mb-1.5">
                Message
              </label>
              <textarea
                name="message"
                required
                rows={4}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me a bit about it..."
                className="w-full bg-panel2 border border-line px-3 py-2.5 text-sm text-ink placeholder:text-dim focus:outline-none focus:border-lime transition resize-none"
              />
            </div>

            <button
              type="submit"
              className="mt-1 px-5 py-3 bg-lime text-[#0a0a0a] font-mono text-xs uppercase tracking-widest font-semibold hover:brightness-110 transition"
            >
              Continue to Gmail ↗
            </button>
          </form>
        )}
      </div>
    </div>
  )
}

export default function Contact() {
  const [showModal, setShowModal] = useState(false)

  return (
    <section id="contact" className="py-24">
      <div className="max-w-content mx-auto px-6">
        <p className="section-label mb-3">// get in touch</p>
        <h2 className="text-5xl md:text-6xl font-display font-bold text-ink leading-[0.95]">
          Let&apos;s build
          <br />
          <span className="italic text-lime">something.</span>
        </h2>

        <p className="mt-6 max-w-md text-sm text-muted leading-relaxed">
          Open to internships, collaborations and interesting problems. Fastest way to reach me is email or LinkedIn.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => setShowModal(true)}
            className="px-5 py-3 bg-lime text-[#0a0a0a] font-mono text-xs uppercase tracking-widest font-semibold hover:brightness-110 transition normal-case"
          >
            ✉ {profile.email}
          </button>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="px-5 py-3 border border-line text-ink font-mono text-xs uppercase tracking-widest hover:border-lime hover:text-lime transition"
          >
            LinkedIn ↗
          </a>
          <a
            href={profile.links.github}
            target="_blank"
            rel="noreferrer"
            className="px-5 py-3 border border-line text-ink font-mono text-xs uppercase tracking-widest hover:border-lime hover:text-lime transition"
          >
            GitHub ↗
          </a>
          <a
            href={profile.links.leetcode}
            target="_blank"
            rel="noreferrer"
            className="px-5 py-3 border border-line text-ink font-mono text-xs uppercase tracking-widest hover:border-lime hover:text-lime transition"
          >
            LeetCode ↗
          </a>
        </div>
      </div>

      <div className="max-w-content mx-auto px-6 mt-20 pt-6 border-t border-line flex flex-col md:flex-row justify-between gap-2 font-mono text-[11px] text-dim">
        <p>© 2026 {profile.name} — Crafted with React &amp; Tailwind.</p>
        <p>
          {profile.phone} · {profile.location}
        </p>
      </div>

      {showModal && <ContactModal onClose={() => setShowModal(false)} />}
    </section>
  )
}