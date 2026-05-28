import { useState } from 'react'
import { places, categoryMeta } from '../data/trip.js'
import { mapsUrl } from '../utils.js'

export default function PlaceChip({ id }) {
  const [open, setOpen] = useState(false)
  const p = places[id]
  if (!p) return null
  const cat = categoryMeta[p.cat]
  const hasTips = Array.isArray(p.tips) && p.tips.length > 0

  return (
    <div className="place-block">
      <div className="place-chip">
        <span className="place-dot" style={{ background: cat.color }} aria-hidden />
        <span className="place-name">{p.name}</span>
        {hasTips && (
          <button
            className="place-tips-toggle"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
          >
            💡 Astuces <span className="chev" data-open={open}>▾</span>
          </button>
        )}
        <a
          className="place-go"
          href={mapsUrl(p.lat, p.lng)}
          target="_blank"
          rel="noreferrer"
          aria-label={`Itinéraire vers ${p.name}`}
        >
          Itinéraire ↗
        </a>
      </div>

      {hasTips && open && (
        <ul className="place-tips">
          {p.tips.map((t, i) => (
            <li key={i}>{t}</li>
          ))}
        </ul>
      )}
    </div>
  )
}
