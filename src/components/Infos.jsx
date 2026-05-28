import { weatherZones, pieges } from '../data/trip.js'
import { windyUrl } from '../utils.js'

export default function Infos() {
  return (
    <div className="stack">
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
