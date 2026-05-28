export const mapsUrl = (lat, lng) =>
  `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`

export const windyUrl = (lat, lng) =>
  `https://www.windy.com/${lat}/${lng}?${lat},${lng},10`
