import SimpleExpandableCard from './SimpleExpandableCards.jsx'

function Contact({ isExpanded, onToggle }) {
  return (
    <SimpleExpandableCard
      title="def getContact(self):"
      isExpanded={isExpanded}
      onToggle={onToggle}
    >
      <div className="contact-links">
        <a href="mailto:hanredelport@gmail.com" className="project-link">
          Email: hanredelport@gmail.com
        </a>
        
        <a
          href="https://www.linkedin.com/in/hanredelport/"
          target="_blank"
          rel="noopener noreferrer"
          className="project-link">
        
          LinkedIn →
        </a>
        
        <a
          href="https://github.com/HanreDelport"
          target="_blank"
          rel="noopener noreferrer"
          className="project-link">
        
          GitHub →
        </a>
      </div>

      <form
        action="https://formspree.io/f/mnjedppb"
        method="POST"
        className="contact-form"
      >
        <input type="text" name="name" placeholder="Your name" required />
        <input type="email" name="email" placeholder="Your email" required />
        <textarea name="message" placeholder="Your message" rows="4" required />
        <button type="submit">Send</button>
      </form>
    </SimpleExpandableCard>
  )
}

export default Contact