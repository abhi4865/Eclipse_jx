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
                <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-3">
                  <div>
                    <h3 className="text-xl font-display font-semibold text-ink">{e.title}</h3>
                    <p className="font-mono text-xs text-lime mt-1">{e.org}</p>
                  </div>

                  {e.links?.length > 0 && (
                    <div className="flex items-center gap-2 flex-wrap">
                      {e.links.map((link) => {
                        const isLive = link.label.toLowerCase() === 'live'
                        return (
                          <a
                            key={link.label}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={
                              isLive
                                ? 'flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wide text-lime border border-lime/50 rounded-full px-3.5 py-1.5 hover:bg-lime hover:text-[#0a0a0a] transition-colors'
                                : 'flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wide text-ink bg-panel2 border border-line rounded-full px-3.5 py-1.5 hover:border-lime/50 hover:text-lime transition-colors'
                            }
                          >
                            {isLive ? (
                              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                <polyline points="15 3 21 3 21 9" />
                                <line x1="10" y1="14" x2="21" y2="3" />
                              </svg>
                            ) : (
                              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                              </svg>
                            )}
                            {isLive ? 'Live' : link.label}
                          </a>
                        )
                      })}
                    </div>
                  )}
                </div>

                <p className="text-sm text-muted leading-relaxed max-w-2xl mt-3">{e.desc}</p>
                <p className="font-mono text-[11px] text-dim mt-3">
                  <span className="text-muted">Tech:</span> {e.tech}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}