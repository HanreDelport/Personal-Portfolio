import ExpandableCardRow from './ExpandableCardRow'
import TagList from './TagList'

import interestsIcon from '../assets/icons/interests.png'
import hobbiesIcon from '../assets/icons/hobbies.png'
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
    title: 'Dreams',
    icon: dreamsIcon,
    content: <TagList tags={['Tech Start-up CEO', 'Porsche 911 GT3 RS', 'Sea-view apartment']} color="purple" />,
  },
  {
    title: 'Goals',
    icon: goalsIcon,
    content: <TagList tags={['Acquire honours and MBA', ' Complete first project as a project manager', 'Buy my first company']} color="purple" />,
  },
  {
    title: 'Aspirations',
    icon: aspirationsIcon,
    content: <TagList tags={['Escape Comfort Zone', 'Raise a Family', 'Leave Lasting Legacy']} color="purple" />,
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