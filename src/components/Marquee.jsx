import './Marquee.css'

const TECH = [
  'Python', 'Java', 'C#', 'C++', 'SQL', 'JavaScript',
  'FastAPI', '.NET MAUI', 'React Native', 'React',
  'MySQL', 'SQLite', 'Firebase',
  'Git', 'GitHub', 'Docker',
]

function Marquee() {
  return (
    <div className="marquee" aria-label="Technologies I work with">
      <div className="marquee-track">
        {/* two identical groups so the loop is seamless */}
        {[0, 1].map((group) => (
          <ul key={group} className="marquee-group" aria-hidden={group === 1}>
            {TECH.map((name) => (
              <li key={name} className="marquee-item">{name}</li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  )
}

export default Marquee