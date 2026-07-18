import ExpandableCardRow from './ExpandableCardRow'

const skillItems = [
  {
    title: 'Programming',
    content: (
      <div className="skill-tags">
        <span className="tech-tag">Python</span>
        <span className="tech-tag">Java</span>
        <span className="tech-tag">C#</span>
        <span className="tech-tag">C++</span>
        <span className="tech-tag">SQL</span>
        <span className="tech-tag">JavaScript</span>
      </div>
    ),
  },
  {
    title: 'Frameworks',
    content: (
      <div className="skill-tags">
        <span className="tech-tag">FastAPI</span>
        <span className="tech-tag">.NET MAUI</span>
        <span className="tech-tag">React Native</span>
      </div>
    ),
  },
  {
    title: 'Databases',
    content: (
      <div className="skill-tags">
        <span className="tech-tag">MySQL</span>
        <span className="tech-tag">SQLite</span>
        <span className="tech-tag">Firebase Realtime Database</span>
      </div>
    ),
  },
  {
    title: 'Tools',
    content: (
      <div className="skill-tags">
        <span className="tech-tag">Git</span>
        <span className="tech-tag">GitHub</span>
        <span className="tech-tag">Docker</span>
        <span className="tech-tag">Visual Studio</span>
        <span className="tech-tag">VS Code</span>
        <span className="tech-tag">PyCharm</span>
      </div>
    ),
  },
  {
    title: 'Concepts',
    content: (
      <div className="skill-tags">
        <span className="tech-tag">REST APIs</span>
        <span className="tech-tag">Object-Oriented Programming</span>
        <span className="tech-tag">Data Structures</span>
        <span className="tech-tag">Software Design</span>
        <span className="tech-tag">Networking Fundamentals</span>
      </div>
    ),
  },
]

function Skills({ isExpanded, onToggle }) {
  return (
    <ExpandableCardRow
      title="def getSkills(self):"
      items={skillItems}
      isExpanded={isExpanded}
      onToggle={onToggle}
    />
  )
}

export default Skills