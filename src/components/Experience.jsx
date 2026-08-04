import { experience } from '../data'
import SectionHeading from './SectionHeading'

export default function Experience() {
  return (
    <section id="experience" className="border-b border-line py-24">
      <div className="max-w-content mx-auto px-6">
        <SectionHeading label="work history" title="Experience" />

        <div className="divide-y divide-line border-t border-line">
          {experience.map((e) => (
            <div key={e.title} className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-3 md:gap-10 py-8">
              <p className="font-mono text-xs text-dim">{e.date}</p>
              <div>
                <h3 className="text-xl font-display font-semibold text-ink">{e.title}</h3>
                <p className="font-mono text-xs text-lime mt-1 mb-3">{e.org}</p>
                <p className="text-sm text-muted leading-relaxed max-w-2xl">{e.desc}</p>
                <p className="font-mono text-[11px] text-dim mt-3">
                  <span className="text-muted">Tech:</span> {e.tech}
                </p>
                {e.links?.length > 0 && (
                  <div className="flex gap-4 mt-4">
                    {e.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-xs text-lime hover:underline underline-offset-4"
                      >
                        {link.label} →
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}