import { meta, days } from './data/trip.js'
import DayCard from './components/DayCard.jsx'
import TripMap from './components/TripMap.jsx'
import Checklist from './components/Checklist.jsx'
import Budget from './components/Budget.jsx'

const sections = [
  { id: 'programme', label: 'Programme', icon: '📅' },
  { id: 'carte', label: 'Carte', icon: '🗺️' },
  { id: 'checklist', label: 'Checklist', icon: '✓' },
  { id: 'budget', label: 'Budget', icon: '💶' },
]

export default function App() {
  return (
    <div className="app">
      <header className="hero">
        <div className="hero-eyebrow">{meta.dateRange}</div>
        <h1>{meta.title}</h1>
        <div className="hero-sub">{meta.subtitle} · 7 nuits / 8 jours</div>
      </header>

      <nav className="quicknav">
        {sections.map((s) => (
          <a key={s.id} href={`#${s.id}`}>
            <span>{s.icon}</span>
            {s.label}
          </a>
        ))}
      </nav>

      <main>
        <section id="programme" className="section">
          <h2 className="section-title">📅 Programme jour par jour</h2>
          <p className="section-hint">Touche un jour pour l’ouvrir. <span className="tag tag-fixe">FIXE</span> = ancré/réservé · <span className="tag tag-flex">FLEX</span> = si temps/envie.</p>
          <div className="days">
            {days.map((d) => (
              <DayCard key={d.id} day={d} />
            ))}
          </div>
        </section>

        <section id="carte" className="section">
          <h2 className="section-title">🗺️ Carte des spots</h2>
          <TripMap />
        </section>

        <section id="checklist" className="section">
          <h2 className="section-title">✓ Réservations & checklist</h2>
          <Checklist />
        </section>

        <section id="budget" className="section">
          <h2 className="section-title">💶 Budget & infos</h2>
          <Budget />
        </section>
      </main>

      <footer className="footer">
        <span>Bon voyage Mathieu & Melvin 🌊</span>
        <span className="footer-sub">Données enregistrées sur ton téléphone · fonctionne hors-ligne après 1ère visite</span>
      </footer>
    </div>
  )
}
