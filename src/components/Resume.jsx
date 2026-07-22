import SimpleExpandableCard from './SimpleExpandableCards'
import './Resume.css'
import resumeThumbnail from '../assets/CV/CVTNail.png' 
import resumePDF from '../assets/CV/CV.pdf'

function Resume({ isExpanded, onToggle }) {
  return (
    <SimpleExpandableCard
      title="def getResume(self):"
      isExpanded={isExpanded}
      onToggle={onToggle}
    >
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
      <p className="resume-caption">
        Click to open PDF
      </p>
    </SimpleExpandableCard>
  )
}

export default Resume