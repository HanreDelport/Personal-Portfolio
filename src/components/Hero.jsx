import { useState, useEffect } from 'react'
import './Hero.css'

const FULL_TEXT = 'class HanreDelport:'
const NAME_START = 6   // index where "HanreDelport" begins
const NAME_END = 18    // index where "HanreDelport" ends (colon starts here)

function Hero() {
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
      <h1 className="hero-text">
        <span className="hero-keyword">{keyword}</span>
        <span className="hero-name">{name}</span>
        <span className="hero-keyword">{colon}</span>
        <span className="cursor">|</span>
      </h1>
    </section>
  )
}

export default Hero