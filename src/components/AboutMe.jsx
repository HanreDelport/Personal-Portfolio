import ExpandableCardRow from './ExpandableCardRow'

import interestsIcon from '../assets/icons/interests.png'
import hobbiesIcon from '../assets/icons/hobbies.png'
import dreamsIcon from '../assets/icons/dreams.png'
import goalsIcon from '../assets/icons/goals.png'
import aspirationsIcon from '../assets/icons/aspirations.png'
import dislikesIcon from '../assets/icons/dislikes.png'

const aboutMeItems = [
  {
    title: 'Interests',
    icon: interestsIcon,
    content: (
      <>
        <p><span className="detail-label">culture</span> = [Theatre, Musicals, Comedy Shows]</p>
        <p><span className="detail-label">sport</span> = [Golf, Gym, Padel]</p>
        <p><span className="detail-label">tech</span> = [Gaming, Coding, Cyber Security]</p>
      </>
    ),
  },
  {
    title: 'Hobbies',
    icon: hobbiesIcon,
    content: (
        <>
            <p><span className="detail-label">fitness</span> = Gym (Mon/Tues/Thurs)</p>
            <p><span className="detail-label">sport</span> = Padel (Fri/Sat)</p>
            <p><span className="detail-label">outdoors</span> = Swimming</p>
            <p><span className="detail-label">downtime</span> = Binge-watching series</p>
        </>
    ),
  },
  {
    title: 'Dreams',
    icon: dreamsIcon,
    content: (
      <>
        <p><span className="detail-label">dreamJob</span> = CEO of tech start-up</p>
        <p><span className="detail-label">dreamCar</span> = Porsche 911 GT3 RS</p>
        <p><span className="detail-label">dreamProperty</span> = Sea-view apartment</p>
      </>
    ),
  },
  {
    title: 'Goals',
    icon: goalsIcon,
    content: (
      <>
        <p><span className="detail-label">shortTerm</span> = Acquire honours and MBA at NWU</p>
        <p><span className="detail-label">mediumTerm</span> = Complete first project as a project manager</p>
        <p><span className="detail-label">longTerm</span> = Buy my first company</p>
      </>
    ),
  },
  {
    title: 'Aspirations',
    icon: aspirationsIcon,
    content: (
      <>
        <p><span className="detail-label">personal</span> = Escape comfort zone</p>
        <p><span className="detail-label">relationships</span> = [Find soulmate, raise family]</p>
        <p><span className="detail-label">impact</span> = Leave lasting legacy</p>
      </>
    ),
  },
  {
    title: 'Dislikes',
    icon: dislikesIcon,
    content: (
      <>
        <p><span className="detail-label">personalPref</span> = [Noisy eaters, pessimists]</p>
        <p><span className="detail-label">techPeeves</span> = [Slow internet, tangled wires]</p>
        <p><span className="detail-label">quirks</span> = [Wet socks, scratching on blackboard]</p>
      </>
    ),
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