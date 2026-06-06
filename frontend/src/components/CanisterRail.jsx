import { rolls } from '../data/frames.js'

export default function CanisterRail({ activeRoll, onSelect }) {
  return (
    <div className="canrail">
      {rolls.map((roll) => (
        <div
          key={roll.id}
          className={`can ${activeRoll === roll.id ? 'active' : ''}`}
          onClick={() => onSelect(roll.id)}
        >
          <div className="can-body" />
          <div className="can-ltr">{roll.letter}</div>
          <div className="can-lab">{roll.id}</div>
        </div>
      ))}
      <div className="railcount">
        {rolls.length} canisters loaded<br />
        roll {rolls.find(r => r.id === activeRoll)?.letter} mounted
      </div>
    </div>
  )
}
