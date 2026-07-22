import Github from '../assets/icons/github.png'
import LinkedIn from '../assets/icons/linkedin.png'
import Mail from '../assets/icons/email.png'
import profilePic from '../assets/icons/HD.png'
import { useState, useEffect } from 'react'
import './Hero.css'

const FULL_TEXT = 'class HanreDelport:'
const NAME_START = 6   // index where "HanreDelport" begins
const NAME_END = 18    // index where "HanreDelport" ends (colon starts here)

function Hero({ onContactClick }){
  const [displayedText, setDisplayedText] = useState('')

  useEffect(() => {
    if (displayedText.length < FULL_TEXT.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(FULL_TEXT.slice(0, displayedText.length + 1))
      }, 80)

      return () => clearTimeout(timeout)
    }
  }, [displayedText])

  const keyword = displayedText.slice(0, Math.min(displayedText.length, NAME_START))
  const name = displayedText.slice(NAME_START, Math.min(displayedText.length, NAME_END))
  const colon = displayedText.slice(NAME_END)

  return (
    <section className="hero">
      <div className="hero-main">
        <h1 className="hero-text">
          <span className="hero-class">{keyword}</span>
          <span className="hero-name">{name}</span>
          <span className="hero-keyword">{colon}</span>
          <span className="cursor">|</span>
        </h1>
      </div>

      <div className="hero-social">
        <a
          href="https://github.com/HanreDelport"
          target="_blank"
          rel="noopener noreferrer"
          className="hero-icon-link"
          aria-label="GitHub"
        >
           <img src={Github} alt="GitHub" className="hero-icon" />
        </a>

        <a
          href="https://www.linkedin.com/in/hanredelport/"
          target="_blank"
          rel="noopener noreferrer"
          className="hero-icon-link"
          aria-label="LinkedIn"
        >
           <img src={LinkedIn} alt="LinkedIn" className="hero-icon" />
        </a>

        <button
          onClick={onContactClick}
          className="hero-icon-link hero-icon-button"
          aria-label="Contact"
        >
           <img src={Mail} alt="eMail" className="hero-icon" />
        </button>
        
        <img src={profilePic} alt="Hanré Delport" className="hero-profile-pic" />
      </div>
    </section>
  )
}

export default Hero