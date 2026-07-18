import './TagList.css'

function TagList({ tags, color = 'cyan' }) {
  return (
    <div className="tag-list">
      {tags.map((tag) => (
        <span key={tag} className={`tag tag-${color}`}>
          {tag}
        </span>
      ))}
    </div>
  )
}

export default TagList