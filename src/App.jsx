import { useState } from 'react'
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

  return (
    <div className="app">
      <div className="hero-scroll-wrapper">
        <Hero />
        <section className="intro-paragraph">
          <p>
            Hey, I'm Hanré 👋 <br/><br/>
            Welcome to my little corner of the internet. 
            I'm a BSc Information Technology student at North-West University (NWU) with a passion for 
            building software that solves real-world problems. I enjoy working across the full stack 
            and have a particular interest in database systems, data analytics, business intelligence, 
            and designing applications that are both practical and scalable. <br/> <br/>
            I'm always looking for opportunities to learn, take on new challenges, and create projects 
            that make a meaningful impact. Feel free to explore my work, and thanks for stopping by!<br/><br/>
            "The people who are crazy enough to think they can change the world are the ones who do." ~ Steve Jobs

          </p>
        </section>
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