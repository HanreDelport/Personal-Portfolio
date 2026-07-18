import SimpleExpandableCard from './SimpleExpandableCards'

function Resume({ isExpanded, onToggle }) {
  return (
    <SimpleExpandableCard
      title="def getResume(self):"
      isExpanded={isExpanded}
      onToggle={onToggle}
    >
      <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="project-link">

        Download Resume (PDF) →
      </a>

      <ul className="highlight-list">
        <li>3rd-year IT student — CMPG214, North-West University (Potchefstroom)</li>
        <li>Built a full-stack Inventory Management system (FastAPI + React)</li>
        <li>Developed a desktop time-tracking application in PyQt6</li>
        <li>Comfortable across Python, Java, C#, C++, and JavaScript</li>
      </ul>
    </SimpleExpandableCard>
  )
}

export default Resume