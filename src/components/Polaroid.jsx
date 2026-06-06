export default function Polaroid({ name, role, year, progress }) {
  return (
    <div className="polaroid">
      <div className="pimage">
        <img src="/resume.png" alt="résumé" />
        <div className="wash" />
      </div>
      <div className="pcaption">
        <span className="pname">{name}</span>
        <div className="prole">
          {role} · {year} · <span className="pstate">{progress}% developed</span>
        </div>
      </div>
    </div>
  )
}
