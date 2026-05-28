import { useState } from 'react'
import PlaceChip from './PlaceChip.jsx'
import { useLocalStorage } from '../hooks/useLocalStorage.js'

export default function DayCard({ day }) {
  const [open, setOpen] = useState(false)
  const [notes, setNotes] = useLocalStorage(`notes:${day.id}`, '')

  return (
    <article className="day-card">
      <button className="day-head" onClick={() => setOpen((o) => !o)} aria-expanded={open}>
        <span className="day-badge">{day.id}</span>
        <span className="day-head-text">
          <span className="day-date">{day.date}</span>
          <span className="day-title">{day.title}</span>
        </span>
        <span className="day-head-right">
          {day.active && <span className="tag tag-active">actif</span>}
          <span className="chev" data-open={open}>▾</span>
        </span>
      </button>

      <div className="day-zone">📍 {day.zone}</div>

      {open && (
        <div className="day-body">
          <ol className="timeline">
            {day.stops.map((s, i) => (
              <li key={i} className="stop">
                <span className="stop-time">{s.time}</span>
                <div className="stop-main">
                  <div className="stop-line">
                    <span className={`tag ${s.type === 'FIXE' ? 'tag-fixe' : 'tag-flex'}`}>{s.type}</span>
                    <span className="stop-label">{s.label}</span>
                  </div>
                  {s.note && <p className="stop-note">{s.note}</p>}
                  {s.place && <PlaceChip id={s.place} />}
                </div>
              </li>
            ))}
          </ol>

          <div className="tip-box">
            <span className="tip-icon">💡</span>
            <div>
              <div className="tip-title">Bon plan</div>
              <p>{day.tip}</p>
            </div>
          </div>

          <label className="notes">
            <span className="notes-label">📝 Mes notes / photos (liens)</span>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Réservation confirmée, lien photo, idée resto…"
              rows={3}
            />
          </label>
        </div>
      )}
    </article>
  )
}
