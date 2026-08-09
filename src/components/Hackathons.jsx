import { hackathons } from '../data'
import SectionHeading from './SectionHeading'

export default function Hackathons() {
  return (
    <section id="hackathons" className="border-b border-line py-24">
      <div className="max-w-content mx-auto px-6">
        <SectionHeading label="on the ground" title="Hackathons" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {hackathons.map((h) => (
            <div
              key={h.id}
              className="card-industrial flex flex-col overflow-hidden group"
            >
              <div className="flex items-center justify-between px-6 pt-6 pb-4">
                <span className="flex items-center gap-2 font-mono text-xs text-dim">
                  <span className="status-dot" />
                  {h.id}
                </span>

                <div className="flex items-center gap-1.5 flex-wrap justify-end">
                  {h.link && (
                    <a
                      href={h.link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="font-mono text-[10px] uppercase tracking-wide text-lime border border-lime/40 px-2.5 py-1 hover:bg-lime hover:text-[#0a0a0a] hover:border-lime transition-colors"
                    >
                      {h.link.label} ↗
                    </a>
                  )}
                </div>
              </div>

              {h.image && (
                <div className="mx-6 mb-5 border border-line overflow-hidden bg-panel2">
                  <img
                    src={h.image}
                    alt={h.title}
                    className="w-full aspect-[4/3] object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                    loading="lazy"
                  />
                </div>
              )}

              <div className="px-6 pb-7 flex-1 flex flex-col">
                <h3 className="text-xl font-display font-semibold text-ink mb-1 group-hover:text-lime transition-colors">
                  {h.title}
                </h3>
                {h.meta && (
                  <p className="font-mono text-[11px] text-dim mb-3">{h.meta}</p>
                )}
                <p className="text-sm text-muted leading-relaxed">{h.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}