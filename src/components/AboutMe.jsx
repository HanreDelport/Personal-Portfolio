import ExpandableCardRow from './ExpandableCardRow'
import TagList from './TagList'

import rolesIcon from '../assets/icons/role.png'
import interestsIcon from '../assets/icons/interests.png'
import dreamsIcon from '../assets/icons/dreams.png'
import goalsIcon from '../assets/icons/goals.png'
import aspirationsIcon from '../assets/icons/aspirations.png'
import dislikesIcon from '../assets/icons/dislikes.png'

const aboutMeItems = [
  {
    title: 'Hobbies',
    icon: interestsIcon,
    content: <TagList tags={['Theatre Plays', 'Golf', 'Gym', 'Padel', 'Gaming', 'Programming']} color="purple" />,
  },
  {
    title: 'Career Aspirations',
    icon: goalsIcon,
    content: <TagList tags={['Join a leading multinational technology company','Lead multidisciplinary software teams', 'Become a Technical Project Manager',
  'Build scalable software systems for corporate clients', 'Complete Honours and an MBA',
  'Launch a successful technology company']} color="purple" />,
  },
  {
  title: 'Desired Roles',
  icon: rolesIcon,
  content: 
    <TagList
      tags={[
        'Software Engineer', 'Full-Stack Developer', 'Technical Project Manager', 'Solutions Architect',
        'IT Consultant', 'Intelligent Systems Engineer']} color="purple"/>, 
  },
  {
    title: 'Dislikes',
    icon: dislikesIcon,
    content: <TagList tags={['Slow Internet', 'Tangled Wires', 'Pessimists','Wet socks']} color="purple" />,
  },
]

function AboutMe({ isExpanded, onToggle }) {
  return (
    <ExpandableCardRow
      title="def getAboutMe(self):"
      items={aboutMeItems}
      isExpanded={isExpanded}
      onToggle={onToggle}
    />
  )
}

export default AboutMe