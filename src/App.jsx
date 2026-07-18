import { useState } from 'react'
import Hero from './components/Hero'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'

function App() {
  const [expandedCard, setExpandedCard] = useState(null)

  const toggleCard = (cardId) => {
    setExpandedCard(expandedCard === cardId ? null : cardId)
  }

  return (
    <div className="app">
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
      </div>
    </div>
  )
}

export default App