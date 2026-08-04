import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Achievements from './components/Achievements'
import Resume from './components/Resume'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="bg-bg min-h-screen text-ink selection:bg-lime selection:text-[#0a0a0a] transition-colors duration-300">
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Experience />
      <Achievements />
      <Resume />
      <Contact />
    </div>
  )
}
