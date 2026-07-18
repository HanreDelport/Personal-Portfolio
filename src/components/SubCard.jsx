import { useState } from 'react'
import './SubCard.css'

function SubCard({ title, icon, children }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      className={`subcard ${isOpen ? 'subcard-open' : ''}`}
      onClick={() => setIsOpen(!isOpen)}
    >
      {icon && <img src={icon} alt="" className="subcard-icon" />}
      <h3 className="subcard-title">{title}</h3>
      {isOpen && <div className="subcard-content">{children}</div>}
    </div>
  )
}

export default SubCard