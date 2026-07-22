import ExpandableCardRow from './ExpandableCardRow'
import TagList from './TagList'

import conceptIcon from '../assets/icons/concepts.png'
import databaseIcon from '../assets/icons/database.png'
import frameworkIcon from '../assets/icons/framework.png'
import inventoryIcon from '../assets/icons/inventory.png'
import programmingIcon from '../assets/icons/programming.png'
import toolsIcon from '../assets/icons/tools.png'

const skillItems = [
  {
  title: 'Programming',
  icon: programmingIcon,
  content: <TagList tags={['Python', 'Java', 'C#', 'C++', 'SQL', 'JavaScript']} color="purple" />,
},
{
  title: 'Frameworks',
  icon: frameworkIcon,
  content: <TagList tags={['FastAPI', '.NET MAUI', 'React Native']} color="purple" />,
},
{
  title: 'Databases',
  icon: databaseIcon,
  content: <TagList tags={['MySQL', 'SQLite', 'Firebase Realtime Database']} color="purple" />,
},
{
  title: 'Tools',
  icon: toolsIcon,
  content: <TagList tags={['Git', 'GitHub', 'Docker', 'Visual Studio', 'VS Code', 'PyCharm']} color="purple" />,
},
{
  title: 'Concepts',
  icon: conceptIcon,
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