export function formatMethodTitle(title) {
  const match = title.match(/^def\s+(\w+)\(([^)]*)\):$/)
  if (!match) return title

  const [, methodName, args] = match

  return (
    <>
      <span className="title-keyword">def </span>
      <span className="title-method">{methodName}</span>
      <span className="title-punct">(</span>
      <span className="title-keyword">{args}</span>
      <span className="title-punct">)</span>
      <span className="title-colon">:</span>
    </>
  )
}