import { profile } from '../data'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-line">
      <span className="giant-word top-24 left-0 md:left-10">BUILD</span>

      <div className="max-w-content mx-auto px-6 pt-20 pb-28 relative">
        <p className="eyebrow fade-up">{profile.tagline}</p>

        <h1 className="mt-6 font-display font-bold leading-[0.95] text-ink fade-up" style={{ animationDelay: '0.05s' }}>
          <span className="block text-6xl md:text-8xl">Abhishek</span>
          <span className="block text-6xl md:text-8xl italic text-lime">Yadav</span>
        </h1>

        <p className="mt-6 max-w-md text-sm md:text-base text-muted leading-relaxed fade-up" style={{ animationDelay: '0.1s' }}>
          {profile.blurb}
        </p>

        <div className="mt-8 flex flex-wrap gap-3 fade-up" style={{ animationDelay: '0.15s' }}>
          <a
            href="#projects"
            className="px-5 py-3 bg-lime text-[#0a0a0a] font-mono text-xs uppercase tracking-widest font-semibold hover:brightness-110 transition"
          >
            View Projects
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
            href={profile.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="px-5 py-3 border border-line text-ink font-mono text-xs uppercase tracking-widest hover:border-lime hover:text-lime transition"
          >
            LinkedIn ↗
          </a>
        </div>

        <div className="mt-16 flex flex-wrap gap-x-10 gap-y-3 font-mono text-xs text-dim fade-up" style={{ animationDelay: '0.2s' }}>
          <span className="flex items-center gap-2">
            <span className="text-lime">✳</span> Open to opportunities
          </span>
          <span className="flex items-center gap-2">
            <span className="text-lime">◎</span> {profile.location}
          </span>
          <span className="flex items-center gap-2">
            <span className="text-lime">◈</span> {profile.education}
          </span>
          <span>{profile.stack}</span>
        </div>
      </div>

      <div className="hidden md:block absolute right-6 bottom-10 rotate-90 origin-bottom-right font-mono text-[10px] tracking-[0.3em] text-dim">
        SCROLL
      </div>
    </section>
  )
}
