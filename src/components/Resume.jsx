import Section from './Section'
import './Resume.css'
import resumeThumbnail from '../assets/CV/CVTNail.png'
import resumePDF from '../assets/CV/CV.pdf'

function Resume() {
  return (
    <Section id="resume" label="// 04" title="Resume">
      <a
        href={resumePDF}
        target="_blank"
        rel="noopener noreferrer"
        className="resume-thumbnail-link"
      >
        <img
          src={resumeThumbnail}
          alt="Resume Preview"
          className="resume-thumbnail"
        />
      </a>
      <p className="resume-caption">Click to open PDF</p>
    </Section>
  )
}

export default Resume