import { useState } from 'react'
import CanisterRail from './CanisterRail.jsx'
import Sprockets from './Sprockets.jsx'
import FrameItem from './FrameItem.jsx'
import { frames } from '../data/frames.js'

const FRAME_COUNTS = {
  'api-gateway':   { total: 142, developed: 9 },
  'auth-service':  { total: 87,  developed: 5 },
  'payments-core': { total: 63,  developed: 4 },
  'ui-components': { total: 54,  developed: 2 },
}

export default function FilmStrip() {
  const [activeRoll, setActiveRoll] = useState('api-gateway')

  const counts = FRAME_COUNTS[activeRoll] ?? { total: 0, developed: 0 }

  return (
    <div className="strip">
      <CanisterRail activeRoll={activeRoll} onSelect={setActiveRoll} />
      <div className="strip-head">
        <div className="label">film strip — <span>{activeRoll}</span></div>
        <div className="count">{counts.total} frames · {counts.developed} developed</div>
      </div>
      <Sprockets />
      <div className="frames">
        {frames.map((frame) => (
          <FrameItem key={frame.id} frame={frame} />
        ))}
      </div>
      <Sprockets />
    </div>
  )
}
