import { useState, useEffect, useRef } from 'react'
import './IntroParagraph.css'

function IntroParagraph() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect() // only animate once
        }
      },
      { threshold: 0.2 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="intro-paragraph" ref={ref}>
      <p className={`intro-text ${isVisible ? 'intro-visible' : ''}`}>
        <span className="intro-docstring">"""</span><br />
        Hey, I'm Hanré 👋 <br /><br />
        Welcome to my little corner of the internet.
        I'm a BSc Information Technology student at North-West University (NWU) with a passion for
        building software that solves real-world problems. I enjoy working across the full stack
        and have a particular interest in database systems, data analytics, business intelligence,
        and designing applications that are both practical and scalable. <br /><br />
        I'm always looking for opportunities to learn, take on new challenges, and create projects
        that make a meaningful impact. Feel free to explore my work, and thanks for stopping by!<br /><br />
        "The people who are crazy enough to think they can change the world are the ones who do." ~ Steve Jobs
        <br />
        <span className="intro-docstring">"""</span>
      </p>
    </section>
  )
}

export default IntroParagraph