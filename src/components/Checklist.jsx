import { reservations, packing, apps } from '../data/trip.js'
import { useLocalStorage } from '../hooks/useLocalStorage.js'

function Check({ checked, onChange, children, urgent }) {
  return (
    <label className={`check ${checked ? 'done' : ''}`}>
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span className="check-box" />
      <span className="check-text">
        {urgent && !checked && <span className="tag tag-urgent">urgent</span>}
        {children}
      </span>
    </label>
  )
}

export default function Checklist() {
  const [done, setDone] = useLocalStorage('checklist', {})
  const set = (k, v) => setDone((d) => ({ ...d, [k]: v }))

  const todo = reservations.filter((r) => r.status === 'todo')
  const booked = reservations.filter((r) => r.status === 'reserved')

  return (
    <div className="stack">
      <div className="panel">
        <h3>À réserver</h3>
        {todo.map((r) => (
          <div key={r.name} className="resa todo">
            <Check checked={!!done[r.name]} onChange={(e) => set(r.name, e.target.checked)} urgent={r.urgent}>
              <strong>{r.name}</strong>
              <span className="resa-detail">{r.detail}</span>
              {r.link && (
                <a href={r.link} target="_blank" rel="noreferrer" className="resa-link">
                  Réserver ↗
                </a>
              )}
            </Check>
          </div>
        ))}
      </div>

      <div className="panel">
        <h3>Déjà réservé</h3>
        {booked.map((r) => (
          <div key={r.name} className="resa booked">
            <span className="ok">✓</span>
            <div>
              <strong>{r.name}</strong>
              <span className="resa-detail">{r.detail}{r.cost ? ` · ${r.cost}` : ''}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="panel">
        <h3>À emporter</h3>
        {packing.map((item) => (
          <Check key={item} checked={!!done[`pack:${item}`]} onChange={(e) => set(`pack:${item}`, e.target.checked)}>
            {item}
          </Check>
        ))}
      </div>

      <div className="panel">
        <h3>Apps à installer</h3>
        {apps.map((a) => (
          <Check key={a.name} checked={!!done[`app:${a.name}`]} onChange={(e) => set(`app:${a.name}`, e.target.checked)}>
            <strong>{a.name}</strong> <span className="resa-detail">— {a.why}</span>
          </Check>
        ))}
      </div>
    </div>
  )
}
