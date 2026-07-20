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
        <TagList tags={['Python 3.11', 'FastAPI', 'SQLAlchemy', 'MySQL 8.0', 'React', 'Vite', 'Axios', 'CSS']} color="purple" />
        
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
    title: 'PotholeStroom',
    content: (
      <>
        <div className="project-thumbnail-placeholder">Image coming soon</div>
        <p>
          Community-driven mobile application that enables road users to report 
          potholes and allows community members to contribute towards funding their 
          repair. The platform connects drivers, road workers, and the community 
          to improve road conditions through collaborative reporting, transparent
          funding, and efficient repair tracking. The application provides
          real-time updates on pothole status, repair progress, and completed
          repairs. (Prototype Phase)
        </p>
        <TagList tags={['C#', 'XAML', 'SQLite', 'JSON', '.NET MAUI', 'Firebase Real-Time DB', 'Firebase Auth']} color="purple" />
        
        <a
          href="https://github.com/HanreDelport/PotholeStroom"
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
  {
    title: 'Locked-In',
    content: (
      <>
        <div className="project-thumbnail-placeholder">Image coming soon</div>
        <p>
          A Computerized system for the Tlokweng Correctional Facility to 
          automate and manage their community help initiative. Employers
          (town residents, NPO’s, and charities from the community) 
          can visit the prison when they have day work for the prisoners
          and advertise the job on the system.  Prisoners are encouraged 
          to log onto the system and apply for jobs based on their 
          previously earned skills.        
        </p>
        <TagList tags={['C#', '.NET', 'Git', 'SQL', 'SQL Server Management Studio']} color="purple" />
        
        <a
          href="https://github.com/CMPG223-Group-45/LockedIn"
          target="_blank"
          rel="noopener noreferrer"
          className="project-link">

          View on GitHub →
        </a>
      </>
    ),
  },
  {
    title: 'Dijkstra Pathfinding Visualizer',
    content: (
      <>
        <div className="project-thumbnail-placeholder">Image coming soon</div>
        <p>
          An interactive web application that demonstrates how Dijkstra's 
          shortest-path algorithm explores a grid and calculates the optimal
          route between a start and end point. The project includes 
          recursive maze generation, dynamic wall drawing, and animated
          visualization of both visited nodes and the final shortest path.        
        </p>
        <TagList tags={['HTML5', 'CSS', 'JavaScript']} color="purple" />
        
        <a
          href="https://github.com/HanreDelport/dijkstra-visualizer"
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