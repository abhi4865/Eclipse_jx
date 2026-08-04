import { projects } from '../data'
import SectionHeading from './SectionHeading'

export default function Projects() {
  return (
    <section id="projects" className="border-b border-line py-24">
      <div className="max-w-content mx-auto px-6">
        <SectionHeading label="selected work" title="Projects" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {projects.map((p) => (
            <div
              key={p.id}
              className="bg-panel border border-line p-6 flex flex-col justify-between hover:border-lime/60 transition-colors group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs text-dim">{p.id}</span>
                  <span className="font-mono text-[10px] uppercase tracking-widest bg-lime text-[#0a0a0a] px-2 py-1">
                    {p.tag}
                  </span>
                </div>
                <h3 className="text-xl font-display font-semibold text-ink mb-2 group-hover:text-lime transition-colors">
                  {p.title}
                </h3>
                <p className="font-mono text-[11px] text-dim mb-4">{p.stack}</p>
                <p className="text-sm text-muted leading-relaxed mb-6">{p.description}</p>
              </div>
              <div className="flex gap-4 font-mono text-xs">
                {p.links.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-lime hover:underline"
                  >
                    {l.label} ↗
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
