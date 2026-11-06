import Navbar from './components/NavBar'
import Hero from './components/Hero'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Resume from './components/Resume'
import Contact from './components/Contact'

function App() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const goHome = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="app">
      <Navbar activeCard={null} onNavigate={scrollToSection} onHome={goHome} />
      <Hero />
      <AboutMe />
      <Projects />
      <Skills />
      <Resume />
      <Contact />
    </div>
  )
}

export default App