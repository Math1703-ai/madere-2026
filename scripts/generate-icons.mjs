import { deflateSync } from 'node:zlib'
import { writeFileSync, mkdirSync } from 'node:fs'

// --- minimal PNG encoder (RGBA, 8-bit) ---
const crcTable = (() => {
  const t = new Uint32Array(256)
  for (let n = 0; n < 256; n++) {
    let c = n
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1
    t[n] = c >>> 0
  }
  return t
})()
function crc32(buf) {
  let c = 0xffffffff
  for (let i = 0; i < buf.length; i++) c = crcTable[(c ^ buf[i]) & 0xff] ^ (c >>> 8)
  return (c ^ 0xffffffff) >>> 0
}
function chunk(type, data) {
  const len = Buffer.alloc(4)
  len.writeUInt32BE(data.length, 0)
  const typeBuf = Buffer.from(type, 'ascii')
  const crc = Buffer.alloc(4)
  crc.writeUInt32BE(crc32(Buffer.concat([typeBuf, data])), 0)
  return Buffer.concat([len, typeBuf, data, crc])
}
function encodePng(size, pixelFn) {
  const sig = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10])
  const ihdr = Buffer.alloc(13)
  ihdr.writeUInt32BE(size, 0)
  ihdr.writeUInt32BE(size, 4)
  ihdr[8] = 8 // bit depth
  ihdr[9] = 6 // RGBA
  const raw = Buffer.alloc((size * 4 + 1) * size)
  let o = 0
  for (let y = 0; y < size; y++) {
    raw[o++] = 0 // filter: none
    for (let x = 0; x < size; x++) {
      const [r, g, b, a] = pixelFn(x / size, y / size)
      raw[o++] = r; raw[o++] = g; raw[o++] = b; raw[o++] = a
    }
  }
  return Buffer.concat([sig, chunk('IHDR', ihdr), chunk('IDAT', deflateSync(raw)), chunk('IEND', Buffer.alloc(0))])
}

// --- scene: dark sport theme, teal mountains + coral sun ---
const BG = [12, 17, 21, 255]
const MOUNT_BACK = [13, 148, 136, 255]
const MOUNT_FRONT = [45, 212, 191, 255]
const SUN = [255, 122, 89, 255]

function scene(nx, ny) {
  // coral sun
  const dx = nx - 0.7, dy = ny - 0.27
  if (dx * dx + dy * dy < 0.11 * 0.11) return SUN
  // front mountain (drawn on top)
  if (ny > 0.62 + Math.abs(nx - 0.6) * 1.15) return MOUNT_FRONT
  // back mountain
  if (ny > 0.46 + Math.abs(nx - 0.34) * 0.95) return MOUNT_BACK
  return BG
}

mkdirSync(new URL('../public/', import.meta.url), { recursive: true })
const out = (name, size) =>
  writeFileSync(new URL(`../public/${name}`, import.meta.url), encodePng(size, scene))

out('pwa-192x192.png', 192)
out('pwa-512x512.png', 512)
out('apple-touch-icon.png', 180)
console.log('Icônes générées : pwa-192x192, pwa-512x512, apple-touch-icon')
