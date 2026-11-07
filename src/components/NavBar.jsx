import { useState } from 'react'
import profilePic from '../assets/icons/HD.png'
import './NavBar.css'

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
    </nav>
  )
}

export default Navbar