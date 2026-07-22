import { useState } from 'react'
import Hero from './components/Hero'
import IntroParagraph from './components/IntroParagraph'
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

  return (
    <div className="app">
      <div className="hero-scroll-wrapper">
        <Hero />
        <IntroParagraph />
      </div>

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