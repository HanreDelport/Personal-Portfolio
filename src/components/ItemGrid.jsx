import './ItemGrid.css'

function ItemGrid({ items }) {
  return (
    <div className="item-grid">
      {items.map((item) => (
        <article key={item.title} className="item-panel">
          <header className="item-panel-header">
            {item.icon && (
              <img src={item.icon} alt="" className="item-panel-icon" />
            )}
            <h3 className="item-panel-title">{item.title}</h3>
          </header>
          <div className="item-panel-body">{item.content}</div>
        </article>
      ))}
    </div>
  )
}

export default ItemGrid