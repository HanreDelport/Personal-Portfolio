import { scrollToTarget } from '../lib/smoothScroll'
import profilePic from '../assets/icons/HD.png'
import PillNav from './PillNav'
import './NavBar.css'

const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
]

// the logo links to "#", so send it to the top smoothly
function NavAnchor({ href, onClick, ...props }) {
  const handleClick = (e) => {
    if (href === '#') {
      e.preventDefault()
      scrollToTarget(0)
    }
    onClick?.(e)
  }
  return <a href={href} onClick={handleClick} {...props} />
}

function Navbar({ activeCard, onNavigate }) {
  const handleItemClick = (item, _index, e) => {
    e.preventDefault()
    onNavigate(item.href.slice(1))
  }

  return (
    <div className="navbar">
      <PillNav
        logo={profilePic}
        logoAlt="Hanré Delport"
        logoHref="#"
        style={{ '--pn-mark': '44px' }}
        linkComponent={NavAnchor}
        items={NAV_ITEMS}
        activeHref={activeCard ? `#${activeCard}` : ''}
        onItemClick={handleItemClick}
        itemStyle="pill"
        hoverEffect="fill"
        indicator="dot"
        surface="solid"
        barColor="#050507"
        highlightColor="var(--color-purple)"
        highlightTextColor="#050507"
      />
    </div>
  )
}

export default Navbar