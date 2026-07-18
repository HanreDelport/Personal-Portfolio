import { useState } from 'react'
import SubCard from './SubCard'
import './ExpandableCardRow.css'

function ExpandableCardRow({ title, icon, items }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="card-row-container">
      <div
        className="card-header"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {icon && <span className="card-icon">{icon}</span>}
        <h2 className="card-title">{title}</h2>
      </div>

      {isExpanded && (
        <div className="card-row">
          {items.map((item) => (
            <SubCard key={item.title} title={item.title}>
              {item.content}
            </SubCard>
          ))}
        </div>
      )}
    </div>
  )
}

export default ExpandableCardRow