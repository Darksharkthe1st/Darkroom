import TopBar from './components/TopBar.jsx'
import FilmStrip from './components/FilmStrip.jsx'
import Panel from './components/Panel.jsx'

export default function App() {
  return (
    <div className="app">
      <TopBar />
      <div className="body">
        <FilmStrip />
        <Panel />
      </div>
    </div>
  )
}
