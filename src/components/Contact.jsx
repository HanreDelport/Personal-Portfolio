import { useState } from 'react'
import Section from './Section'
import Github from '../assets/icons/github.png'
import LinkedIn from '../assets/icons/linkedin.png'
import './Contact.css'

const FORM_URL = 'https://formspree.io/f/mnjedppb'

function Contact() {
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.currentTarget
    setStatus('sending')

    try {
      const res = await fetch(FORM_URL, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        form.reset()
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <Section id="contact" label="// 05" title="Contact">
      <div className="contact-layout">
        <div className="contact-info">
          <p className="contact-intro">
            Have a project, an opportunity or just want to say hi? Send me a
            message and I'll get back to you.
          </p>

          <a href="mailto:hanredelport@gmail.com" className="contact-email">
            hanredelport@gmail.com
          </a>

          <div className="contact-socials">
            <a
              href="https://github.com/HanreDelport"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-social"
            >
              <img src={Github} alt="" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/hanredelport/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-social"
            >
              <img src={LinkedIn} alt="" />
              LinkedIn
            </a>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-field">
            <label htmlFor="name">// name</label>
            <input id="name" type="text" name="name" placeholder="Your name" required />
          </div>
          <div className="contact-field">
            <label htmlFor="email">// email</label>
            <input id="email" type="email" name="email" placeholder="you@example.com" required />
          </div>
          <div className="contact-field">
            <label htmlFor="message">// message</label>
            <textarea id="message" name="message" placeholder="What's on your mind?" rows="5" required />
          </div>

          <button type="submit" className="contact-submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending…' : 'Send message'}
          </button>

          {status === 'success' && (
            <p className="contact-status contact-status-success">
              Thanks, your message is on its way.
            </p>
          )}
          {status === 'error' && (
            <p className="contact-status contact-status-error">
              Something went wrong. Please try again or email me directly.
            </p>
          )}
        </form>
      </div>
    </Section>
  )
}

export default Contact