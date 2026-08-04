import { profile } from '../data'

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-content mx-auto px-6">
        <p className="section-label mb-3">// get in touch</p>
        <h2 className="text-5xl md:text-6xl font-display font-bold text-ink leading-[0.95]">
          Let's build
          <br />
          <span className="italic text-lime">something.</span>
        </h2>

        <p className="mt-6 max-w-md text-sm text-muted leading-relaxed">
          Open to internships, collaborations and interesting problems. Fastest way to reach me is email or LinkedIn.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="px-5 py-3 bg-lime text-[#0a0a0a] font-mono text-xs uppercase tracking-widest font-semibold hover:brightness-110 transition"
          >
            ✉ {profile.email}
          </a>
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
    </section>
  )
}
