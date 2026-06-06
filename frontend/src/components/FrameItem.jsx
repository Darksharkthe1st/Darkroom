export default function FrameItem({ frame }) {
  const { roll, num, state, sha, message, stats, bullet } = frame

  return (
    <div className={`frame ${state}`}>
      <div className="gutter">
        <div className="fnum">{roll} · {num}</div>
      </div>
      <div className="frow">
        <div className="commit">
          {sha && <span className="sha">{sha}</span>}
          <span className="msg">{message}</span>
          {state === 'unexposed' && (
            <span className="badge">no exposure</span>
          )}
          {state === 'cut' && (
            <span className="badge">cut</span>
          )}
          {stats && (
            <div className="stats">
              <span className="add">+{stats.add}</span>
              <span className="del">−{stats.del}</span>
              <span className="f">{stats.files} files</span>
            </div>
          )}
        </div>

        {state === 'developed' && (
          <>
            <div className="devlabel">developed</div>
            <div className="bullet">{bullet}</div>
            <div className="actions">
              <button className="keep">keep</button>
              <button className="cut">cut</button>
              <button className="retake">retake</button>
            </div>
          </>
        )}

        {state === 'developing' && (
          <>
            <div className="devlabel" style={{ color: 'var(--dev)' }}>developing</div>
            <div className="processing">· · · developing · · ·</div>
          </>
        )}

        {state === 'cut' && bullet && (
          <>
            <div className="bullet">{bullet}</div>
            <button className="restore">restore</button>
          </>
        )}
      </div>
    </div>
  )
}
