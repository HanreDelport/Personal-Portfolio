import './SimpleExpandableCards.css'

function SimpleExpandableCard({ title, isExpanded, onToggle, children }) {
  return (
    <div className={`simple-card ${isExpanded ? 'simple-card-expanded' : ''}`}>
      <div className="card-header" onClick={onToggle}>
        <h2 className="card-title">{title}</h2>
      </div>

      {isExpanded && <div className="simple-card-body">{children}</div>}
    </div>
  )
}

export default SimpleExpandableCard