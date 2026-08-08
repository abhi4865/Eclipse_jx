import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Achievements from './components/Achievements'
import Hackathons from './components/Hackathons'
import Skills from './components/Skills'
import Contact from './components/Contact'
import CustomCursor from './components/CustomCursor'

export default function App() {
  return (
    <div className="bg-bg min-h-screen text-ink selection:bg-lime selection:text-[#0a0a0a] transition-colors duration-300">
      <CustomCursor />
      <Navbar />
      <Hero />
      <Projects />
      <Experience />
      <Achievements />
      <Hackathons />
      <Skills />
      <Contact />
    </div>
  )
}