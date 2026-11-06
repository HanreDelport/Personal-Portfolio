import './Section.css'

function Section({ id, label, title, children }) {
  return (
    <section id={id} className="section">
      <div className="section-heading">
        {label && <span className="section-label">{label}</span>}
        <h2 className="section-title">{title}</h2>
      </div>
      {children}
    </section>
  )
}

export default Section