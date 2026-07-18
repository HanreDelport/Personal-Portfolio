import ExpandableCardRow from './ExpandableCardRow'
import TagList from './TagList'

const skillItems = [
  {
  title: 'Programming',
  content: <TagList tags={['Python', 'Java', 'C#', 'C++', 'SQL', 'JavaScript']} color="purple" />,
},
{
  title: 'Frameworks',
  content: <TagList tags={['FastAPI', '.NET MAUI', 'React Native']} color="purple" />,
},
{
  title: 'Databases',
  content: <TagList tags={['MySQL', 'SQLite', 'Firebase Realtime Database']} color="purple" />,
},
{
  title: 'Tools',
  content: <TagList tags={['Git', 'GitHub', 'Docker', 'Visual Studio', 'VS Code', 'PyCharm']} color="purple" />,
},
{
  title: 'Concepts',
  content: <TagList tags={['REST APIs', 'Object-Oriented Programming', 'Data Structures', 'Software Design', 'Networking Fundamentals']} color="purple" />,
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