import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Hackathons from './components/Hackathons'
import Achievements from './components/Achievements'
import Skills from './components/Skills'
import Contact from './components/Contact'
import CustomCursor from './components/CustomCursor'
import VisitorCounter from './components/VisitorCounter'

export default function App() {
  return (
    <div className="bg-bg min-h-screen text-ink selection:bg-lime selection:text-[#0a0a0a] transition-colors duration-300">
      {/* ambient background layers (theme-aware via index.css) */}
      <div className="aurora" aria-hidden="true">
        <div className="aurora-sweep" />
        <div className="aurora-orb aurora-orb-1" />
        <div className="aurora-orb aurora-orb-2" />
        <div className="aurora-orb aurora-orb-3" />
        <div className="aurora-orb aurora-orb-4" />
        <div className="aurora-mask" />
      </div>
      <div className="bg-grid-fixed" aria-hidden="true" />
      <div className="grain" aria-hidden="true" />

      <CustomCursor />

      {/* content sits above the background layers */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Projects />
        <Experience />
        <Hackathons />
        <Achievements />
        <Skills />
        <Contact />
      </div>

      <VisitorCounter />
    </div>
  )
}