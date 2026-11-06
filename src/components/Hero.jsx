import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import IntroParagraph from './IntroParagraph'
import './Hero.css'

const FULL_TEXT = 'Hanré Delport'
const NAME_START = 6 // "Hanré " (5 letters + space), so "Delport" gets the cyan

function Hero() {
  const [displayedText, setDisplayedText] = useState('')
  const root = useRef(null)

  // Typewriter
  useEffect(() => {
    if (displayedText.length < FULL_TEXT.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(FULL_TEXT.slice(0, displayedText.length + 1))
      }, 80)

      return () => clearTimeout(timeout)
    }
  }, [displayedText])

  // GSAP fade-in for the comment + subtitle
  useGSAP(() => {
    gsap.from('.hero-fade', {
      opacity: 0,
      y: 20,
      duration: 0.8,
      stagger: 0.2,
      delay: 0.3,
      ease: 'power3.out',
    })
  }, { scope: root })

  const firstName = displayedText.slice(0, NAME_START)
  const lastName = displayedText.slice(NAME_START)

  return (
    <section className="hero" ref={root}>
      <div className="hero-main">
        <p className="hero-fade hero-comment">// Hi, I'm</p>

        <h1 className="hero-text">
          <span className="hero-firstname">{firstName}</span>
          <span className="hero-name">{lastName}</span>
          <span className="cursor">|</span>
        </h1>

        <p className="hero-fade hero-sub">
          IT student building full-stack software and data-driven applications.
        </p>
      </div>

      <div className="hero-intro">
        <IntroParagraph />
      </div>
    </section>
  )
}

export default Hero