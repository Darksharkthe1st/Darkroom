import { useEffect, useRef, useState } from 'react'

export default function Sprockets() {
  const ref = useRef(null)
  const [count, setCount] = useState(60)

  useEffect(() => {
    if (!ref.current) return
    const obs = new ResizeObserver(([entry]) => {
      setCount(Math.floor(entry.contentRect.width / 18))
    })
    obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <div className="sprockets" ref={ref}>
      {Array.from({ length: count }, (_, i) => <i key={i} />)}
    </div>
  )
}
