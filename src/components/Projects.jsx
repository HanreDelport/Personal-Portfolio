import ExpandableCardRow from './ExpandableCardRow'
import TagList from './TagList'

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
        <TagList tags={['Python 3.11', 'FastAPI', 'SQLAlchemy', 'MySQL 8.0', 'React', 'Vite', 'Axios']} color="purple" />
        
        <a
          href="https://github.com/HanreDelport/Inventory-Manager"
          target="_blank"
          rel="noopener noreferrer"
          className="project-link">

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
        <TagList tags={['Python 3.10+', 'PyQt6', 'SQLite3', 'Qt Designer', 'PyInstaller']} color="purple" />
        
        <a
          href="https://github.com/HanreDelport/Time-Tracker"
          target="_blank"
          rel="noopener noreferrer"
          className="project-link">

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