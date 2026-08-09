import { projects } from '../data'
import SectionHeading from './SectionHeading'

export default function Projects() {
  return (
    <section id="projects" className="border-b border-line py-24">
      <div className="max-w-content mx-auto px-6">
        <SectionHeading label="selected work" title="Projects" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {projects.map((p) => {
            const liveLink = p.links.find((l) => l.label.toLowerCase() === 'live')
            const githubLink = p.links.find((l) => l.label.toLowerCase() === 'github')

            return (
              <div
                key={p.id}
                className="card-industrial flex flex-col overflow-hidden group"
              >
                <div className="flex items-center justify-between px-6 pt-6 pb-4">
                  <span className="flex items-center gap-2 font-mono text-xs text-dim">
                    <span className="status-dot" />
                    {p.id}
                  </span>

                  <div className="flex items-center gap-2 flex-wrap justify-end">
                    {githubLink && (
                      <a
                        href={githubLink.href}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wide text-ink bg-panel2 border border-line rounded-full px-3.5 py-1.5 hover:border-lime/50 hover:text-lime transition-colors"
                      >
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                        </svg>
                        GitHub
                      </a>
                    )}
                    {liveLink && (
                      <a
                        href={liveLink.href}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wide text-lime border border-lime/50 rounded-full px-3.5 py-1.5 hover:bg-lime hover:text-[#0a0a0a] transition-colors"
                      >
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                          <polyline points="15 3 21 3 21 9" />
                          <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                        Live
                      </a>
                    )}
                  </div>
                </div>

                {p.image && (
                  <div className="mx-6 mb-5 border border-line overflow-hidden bg-panel2">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full aspect-[4/3] object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                )}

                <div className="px-6 pb-7 flex-1 flex flex-col">
                  {liveLink ? (
                    <a href={liveLink.href} target="_blank" rel="noreferrer">
                      <h3 className="text-xl font-display font-semibold text-ink mb-1 group-hover:text-lime transition-colors">
                        {p.title}
                      </h3>
                    </a>
                  ) : (
                    <h3 className="text-xl font-display font-semibold text-ink mb-1">{p.title}</h3>
                  )}

                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {p.stack.split('·').map((tech) => (
                      <span key={tech.trim()} className="pill-tag">
                        {tech.trim()}
                      </span>
                    ))}
                  </div>

                  <p className="text-sm text-muted leading-relaxed">{p.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}