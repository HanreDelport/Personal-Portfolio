import { initScrollReveals } from './lib/scrollReveals'
import { useState, useEffect } from 'react'
import { initSmoothScroll, scrollToTarget } from './lib/smoothScroll'
import Navbar from './components/NavBar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Resume from './components/Resume'
import Contact from './components/Contact'

const SECTION_IDS = ['about', 'projects', 'skills', 'resume', 'contact']

function App() {
  const [activeSection, setActiveSection] = useState(null)
  useEffect(() => initSmoothScroll(), [])
  useEffect(() => initScrollReveals(), [])
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id
          setActiveSection((prev) =>
            entry.isIntersecting ? id : prev === id ? null : prev
          )
        })
      },
      // thin band at the vertical middle of the viewport
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    )

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (id) => scrollToTarget(id)
  

  return (
    <div className="app">
      <Navbar activeCard={activeSection} onNavigate={scrollToSection} />
      <div className="home">
        <Hero onNavigate={scrollToSection} />
        <Marquee />
      </div>
      <AboutMe />
      <Projects />
      <Skills />
      <Resume />
      <Contact />
    </div>
  )
}

export default App