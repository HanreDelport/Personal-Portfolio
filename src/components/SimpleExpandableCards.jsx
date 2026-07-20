import './SimpleExpandableCards.css'
import { formatMethodTitle } from '../utils/formatTitle'

function SimpleExpandableCard({ title, isExpanded, onToggle, children }) {
  return (
    <div className={`simple-card ${isExpanded ? 'simple-card-expanded' : ''}`}  onClick={onToggle}>
      <div className="card-header">
        <h2 className="card-title">{formatMethodTitle(title)}</h2>
      </div>

      {isExpanded && <div className="simple-card-body">{children}</div>}
    </div>
  )
}

export default SimpleExpandableCard