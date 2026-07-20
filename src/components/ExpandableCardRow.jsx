import SubCard from './SubCard'
import './ExpandableCardRow.css'
import { formatMethodTitle } from '../utils/formatTitle'

function ExpandableCardRow({ title, icon, items, isExpanded, onToggle }) {
  return (
    
    <div className={`card-row-container ${isExpanded ? 'card-expanded' : ''}`} 
      onClick={(e) => {
      if (e.target === e.currentTarget) {
        onToggle();
      }
    }}>
      <div className="card-header">
        {icon && <span className="card-icon">{icon}</span>}
        <h2 className="card-title">{formatMethodTitle(title)}</h2>
      </div>

      {isExpanded && (
        <div className="card-row">
          {items.map((item) => (
          <SubCard key={item.title} title={item.title} icon={item.icon}>
            {item.content}
          </SubCard>
        ))}
        </div>
      )}
    </div>
  )
}

export default ExpandableCardRow