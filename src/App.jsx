import { useState } from 'react'
import Navbar from './components/NavBar'
import Hero from './components/Hero'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Resume from './components/Resume'
import Contact from './components/Contact'

function App() {
  const [expandedCard, setExpandedCard] = useState(null)

  const toggleCard = (cardId) => {
    setExpandedCard(expandedCard === cardId ? null : cardId)
  }

  const openCard = (cardId) => setExpandedCard(cardId)

  const goHome = () => {
    setExpandedCard(null)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="app">
      <Navbar activeCard={expandedCard} onNavigate={openCard} onHome={goHome} />
      <Hero />

      {expandedCard && (
        <div className="backdrop" onClick={() => setExpandedCard(null)} />
      )}

      <div className="cards-viewport">
        <AboutMe
          isExpanded={expandedCard === 'about'}
          onToggle={() => toggleCard('about')}
        />
        <Projects
          isExpanded={expandedCard === 'projects'}
          onToggle={() => toggleCard('projects')}
        />
        <Skills
          isExpanded={expandedCard === 'skills'}
          onToggle={() => toggleCard('skills')}
        />
        <Resume
          isExpanded={expandedCard === 'resume'}
          onToggle={() => toggleCard('resume')}
        />
        <Contact
          isExpanded={expandedCard === 'contact'}
          onToggle={() => toggleCard('contact')}
        />
      </div>
    </div>
  )
}

export default App