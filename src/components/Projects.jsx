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
                className="card-industrial p-6 pb-8 flex flex-col justify-between group overflow-hidden"
              >
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-5">
                    <span className="flex items-center gap-2 font-mono text-xs text-dim">
                      <span className="status-dot" />
                      {p.id}
                    </span>

                    <div className="flex items-center gap-1.5 flex-wrap justify-end">
                      {liveLink && (
                        <a
                          href={liveLink.href}
                          target="_blank"
                          rel="noreferrer"
                          className="font-mono text-[10px] uppercase tracking-wide text-lime border border-lime/40 px-2.5 py-1 hover:bg-lime hover:text-[#0a0a0a] hover:border-lime transition-colors"
                        >
                          Live ↗
                        </a>
                      )}
                      {githubLink && (
                        <a
                          href={githubLink.href}
                          target="_blank"
                          rel="noreferrer"
                          className="font-mono text-[10px] uppercase tracking-wide text-muted border border-line px-2.5 py-1 hover:text-lime hover:border-lime/50 transition-colors"
                        >
                          GitHub ↗
                        </a>
                      )}
                    </div>
                  </div>

                  {liveLink ? (
                    <a href={liveLink.href} target="_blank" rel="noreferrer">
                      <h3 className="text-xl font-display font-semibold text-ink mb-3 group-hover:text-lime transition-colors">
                        {p.title}
                      </h3>
                    </a>
                  ) : (
                    <h3 className="text-xl font-display font-semibold text-ink mb-3">{p.title}</h3>
                  )}

                  <div className="flex flex-wrap gap-1.5 mb-4">
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