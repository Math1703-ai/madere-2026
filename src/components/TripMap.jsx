import { useMemo, useState, useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { places, categoryMeta } from '../data/trip.js'
import { mapsUrl } from '../utils.js'

const iconCache = {}
function pinIcon(color) {
  if (!iconCache[color]) {
    iconCache[color] = L.divIcon({
      className: 'leaflet-pin',
      html: `<span class="map-pin" style="background:${color}"></span>`,
      iconSize: [16, 16],
      iconAnchor: [8, 8],
      popupAnchor: [0, -8],
    })
  }
  return iconCache[color]
}

function FitBounds({ points }) {
  const map = useMap()
  useEffect(() => {
    if (points.length) {
      map.fitBounds(points.map((p) => [p.lat, p.lng]), { padding: [30, 30] })
    }
  }, [map, points])
  return null
}

export default function TripMap() {
  const cats = Object.keys(categoryMeta)
  const [active, setActive] = useState(() => new Set(cats))

  const list = useMemo(
    () => Object.entries(places).map(([id, p]) => ({ id, ...p })).filter((p) => active.has(p.cat)),
    [active],
  )

  const toggle = (c) =>
    setActive((prev) => {
      const next = new Set(prev)
      next.has(c) ? next.delete(c) : next.add(c)
      return next
    })

  return (
    <div className="map-wrap">
      <div className="map-filters">
        {cats.map((c) => (
          <button
            key={c}
            className="filter-chip"
            data-on={active.has(c)}
            onClick={() => toggle(c)}
            style={{ '--chip': categoryMeta[c].color }}
          >
            <span className="filter-dot" style={{ background: categoryMeta[c].color }} />
            {categoryMeta[c].emoji} {categoryMeta[c].label}
          </button>
        ))}
      </div>

      <MapContainer center={[32.75, -17.0]} zoom={10} className="map" scrollWheelZoom>
        <TileLayer
          attribution='&copy; OpenStreetMap'
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <FitBounds points={list} />
        {list.map((p) => (
          <Marker key={p.id} position={[p.lat, p.lng]} icon={pinIcon(categoryMeta[p.cat].color)}>
            <Popup>
              <strong>{p.name}</strong>
              {p.note && <div className="popup-note">{p.note}</div>}
              <a href={mapsUrl(p.lat, p.lng)} target="_blank" rel="noreferrer" className="popup-go">
                Itinéraire ↗
              </a>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  )
}
