import { profile, skills, experience, achievements } from '../data'
import SectionHeading from './SectionHeading'

export default function Resume() {
  const handleDownload = () => window.print()

  return (
    <section id="resume" className="border-b border-line py-24 print:py-0 print:border-0">
      <div className="max-w-content mx-auto px-6">
        <SectionHeading
          label="curriculum vitae"
          title="Résumé"
          action={
            <button
              onClick={handleDownload}
              className="print:hidden px-5 py-3 border border-line text-ink font-mono text-xs uppercase tracking-widest hover:border-lime hover:text-lime transition"
            >
              ⬇ Download PDF
            </button>
          }
        />

        <div className="border border-line divide-y divide-line">
          <Row label="Profile">
            <p className="text-sm text-muted leading-relaxed max-w-2xl">{profile.blurb}</p>
          </Row>

          <Row label="Skills">
            <dl className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-x-4 gap-y-2 text-sm">
              {skills.map((s) => (
                <div key={s.group} className="contents">
                  <dt className="font-mono text-xs text-lime uppercase tracking-widest">{s.group}</dt>
                  <dd className="text-muted">{s.items.join(', ')}</dd>
                </div>
              ))}
            </dl>
          </Row>

          <Row label="Experience">
            <div className="space-y-6">
              {experience.map((e) => (
                <div key={e.title}>
                  <p className="font-mono text-xs text-dim">{e.date}</p>
                  <h4 className="text-ink font-display font-semibold">{e.title}</h4>
                  <p className="font-mono text-xs text-lime mb-1">{e.org}</p>
                  <p className="text-sm text-muted leading-relaxed max-w-2xl">{e.desc}</p>
                </div>
              ))}
            </div>
          </Row>

          <Row label="Certifications">
            <ul className="text-sm text-muted space-y-1">
              {achievements
                .filter((a) => a.title.includes('Certification') || a.title.includes('Star'))
                .map((a) => (
                  <li key={a.title}>
                    {a.title} —{' '}
                    <a href={a.href} target="_blank" rel="noreferrer" className="text-lime hover:underline">
                      Link ↗
                    </a>
                  </li>
                ))}
            </ul>
          </Row>
        </div>
      </div>
    </section>
  )
}

function Row({ label, children }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-3 md:gap-10 p-6">
      <p className="section-label">{label}</p>
      {children}
    </div>
  )
}
