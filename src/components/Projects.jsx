import ExpandableCardRow from './ExpandableCardRow'

const projectItems = [
  {
    title: 'Inventory Manager',
    content: (
      <>
        <div className="project-thumbnail-placeholder">Image coming soon</div>
        <p>
          A production-ready web application for managing stock, production,
          and orders — with support for multi-level Bill of Materials (BOMs),
          inventory tracking, and procurement management.
        </p>
        <div className="tech-tags">
          <span className="tech-tag">Python 3.11</span>
          <span className="tech-tag">FastAPI</span>
          <span className="tech-tag">SQLAlchemy</span>
          <span className="tech-tag">MySQL 8.0</span>
          <span className="tech-tag">React</span>
          <span className="tech-tag">Vite</span>
          <span className="tech-tag">Axios</span>
        </div>
        
          href="https://github.com/HanreDelport/Inventory-Manager"
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
        <a>
          View on GitHub →
        </a>
      </>
    ),
  },
  {
    title: 'Time-Tracker',
    content: (
      <>
        <div className="project-thumbnail-placeholder">Image coming soon</div>
        <p>
          A desktop application for tracking work hours across projects and
          tasks. Built with Python and PyQt6, this lightweight tool helps you
          monitor time spent on different activities with a clean, intuitive
          interface.
        </p>
        <div className="tech-tags">
          <span className="tech-tag">Python 3.10+</span>
          <span className="tech-tag">PyQt6</span>
          <span className="tech-tag">SQLite3</span>
          <span className="tech-tag">Qt Designer</span>
          <span className="tech-tag">PyInstaller</span>
        </div>
        
          href="https://github.com/HanreDelport/Time-Tracker"
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
        <a>
          View on GitHub →
        </a>
      </>
    ),
  },
]

function Projects({ isExpanded, onToggle }) {
  return (
    <ExpandableCardRow
      title="def getProjects(self):"
      items={projectItems}
      isExpanded={isExpanded}
      onToggle={onToggle}
    />
  )
}

export default Projects