import Section from './Section'

function Contact() {
  return (
    <Section id="contact" label="// 05" title="Contact">
      <div className="contact-links">
        <a href="mailto:hanredelport@gmail.com" className="project-link">
          Email: hanredelport@gmail.com
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
    </Section>
  )
}

export default Contact