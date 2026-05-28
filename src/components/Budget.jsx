import { budgetItems, meta, weatherZones, pieges } from '../data/trip.js'
import { useLocalStorage } from '../hooks/useLocalStorage.js'
import { euros, windyUrl } from '../utils.js'

export default function Budget() {
  const defaults = Object.fromEntries(budgetItems.map((b) => [b.label, b.amount]))
  const [amounts, setAmounts] = useLocalStorage('budget', defaults)

  const get = (label) => (amounts[label] ?? defaults[label] ?? 0)
  const total = budgetItems.reduce((s, b) => s + Number(get(b.label) || 0), 0)
  const pct = Math.min(100, Math.round((total / meta.budget.max) * 100))
  const over = total > meta.budget.max
  const margin = meta.budget.max - total

  return (
    <div className="stack">
      <div className="panel">
        <h3>Budget <span className="muted">{meta.budget.note}</span></h3>

        <div className="budget-total">
          <div className="budget-num" data-over={over}>{euros(total)}</div>
          <div className="budget-target">objectif {euros(meta.budget.min)}–{euros(meta.budget.max)}</div>
        </div>
        <div className="bar">
          <div className="bar-fill" style={{ width: `${pct}%`, background: over ? '#fb7185' : '#2dd4bf' }} />
        </div>
        <div className={`margin ${margin < 0 ? 'neg' : ''}`}>
          {margin >= 0 ? `Marge restante : ${euros(margin)}` : `Dépassement : ${euros(-margin)}`}
        </div>

        <div className="budget-list">
          {budgetItems.map((b) => (
            <label key={b.label} className="budget-row">
              <span>{b.label}</span>
              <span className="budget-input">
                <input
                  type="number"
                  inputMode="numeric"
                  value={get(b.label)}
                  onChange={(e) => setAmounts((a) => ({ ...a, [b.label]: e.target.value === '' ? 0 : Number(e.target.value) }))}
                />
                <span className="eur">€</span>
              </span>
            </label>
          ))}
        </div>
        <p className="hint">Estimations modifiables — sauvegardées sur ton téléphone.</p>
      </div>

      <div className="panel">
        <h3>Météo par zone</h3>
        <p className="hint">4 microclimats : vérifie la zone où tu vas, pas « Madère ».</p>
        <div className="weather-grid">
          {weatherZones.map((z) => (
            <a key={z.name} href={windyUrl(z.lat, z.lng)} target="_blank" rel="noreferrer" className="weather-chip">
              🌦️ {z.name} ↗
            </a>
          ))}
        </div>
      </div>

      <div className="panel">
        <h3>Pièges & conseils</h3>
        <ul className="pieges">
          {pieges.map((p, i) => (
            <li key={i}>{p}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
