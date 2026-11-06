function SimpleExpandableCard({ title, label, isExpanded, onToggle, children }) {
  return (
    <div className={`simple-card ${isExpanded ? 'simple-card-expanded' : ''}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onToggle();
        }
      }}>
      <div className="card-header" onClick={onToggle}>
        <div className="card-heading">
          {label && <span className="card-label">{label}</span>}
          <h2 className="card-title">{title}</h2>
        </div>
      </div>

      {isExpanded && <div className="simple-card-body">{children}</div>}
    </div>
  )
}

export default SimpleExpandableCard