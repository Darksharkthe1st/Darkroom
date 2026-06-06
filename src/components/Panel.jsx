import Polaroid from './Polaroid.jsx'

export default function Panel() {
  return (
    <div className="panel">
      <div className="ptitle">résumé snapshot</div>
      <div className="psub">the print, developing from your kept frames</div>

      <Polaroid
        name="Farhan Kittur"
        role="software engineer"
        year="2026"
        progress={62}
      />

      <div className="snapmeta">
        <div className="smrow">
          <span className="k">frames kept</span>
          <span className="v"><b>9</b> of 142</span>
        </div>
        <div className="smrow">
          <span className="k">canisters</span>
          <span className="v">4 loaded</span>
        </div>
        <div className="smrow">
          <span className="k">last developed</span>
          <span className="v">A · 014</span>
        </div>
      </div>

      <button className="printbtn">develop &amp; print</button>
    </div>
  )
}
