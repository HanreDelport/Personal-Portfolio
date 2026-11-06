import { useState } from 'react'
import Github from '../assets/icons/github.png'
import LinkedIn from '../assets/icons/linkedin.png'
import profilePic from '../assets/icons/HD.png'
import './Navbar.css'

const NAV_ITEMS = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact' },
]

function Navbar({ activeCard, onNavigate, onHome }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleNavigate = (id) => {
    onNavigate(id)
    setMenuOpen(false)
  }

  const handleHome = () => {
    onHome()
    setMenuOpen(false)
  }

  return (
    <nav className="navbar">
      <button className="nav-brand" onClick={handleHome} aria-label="Home">
        <img src={profilePic} alt="Hanré Delport" className="nav-avatar" />
      </button>

      <ul className={`nav-links ${menuOpen ? 'nav-links-open' : ''}`}>
        {NAV_ITEMS.map((item) => (
          <li key={item.id}>
            <button
              className={`nav-link ${activeCard === item.id ? 'nav-link-active' : ''}`}
              onClick={() => handleNavigate(item.id)}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>

      <div className="nav-social">
        <a
          href="https://github.com/HanreDelport"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-icon-link"
          aria-label="GitHub"
        >
          <img src={Github} alt="GitHub" className="nav-icon" />
        </a>

        <a
          href="https://www.linkedin.com/in/hanredelport/"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-icon-link"
          aria-label="LinkedIn"
        >
          <img src={LinkedIn} alt="LinkedIn" className="nav-icon" />
        </a>

        <button
          className="nav-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  )
}

export default Navbar