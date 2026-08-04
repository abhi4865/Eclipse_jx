import { achievements } from '../data'
import SectionHeading from './SectionHeading'

export default function Achievements() {
  return (
    <section className="border-b border-line py-24">
      <div className="max-w-content mx-auto px-6">
        <SectionHeading label="highlights" title="Achievements" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {achievements.map((a) => (
            <a
              key={a.title}
              href={a.href}
              target="_blank"
              rel="noreferrer"
              className="flex items-start justify-between gap-4 bg-panel border border-line p-6 hover:border-lime/60 transition-colors group"
            >
              <div>
                <h3 className="text-lg font-display font-semibold text-ink group-hover:text-lime transition-colors">
                  {a.title}
                </h3>
                <p className="text-sm text-muted mt-2 leading-relaxed">{a.desc}</p>
              </div>
              <span className="font-mono text-dim group-hover:text-lime transition-colors shrink-0">↗</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
