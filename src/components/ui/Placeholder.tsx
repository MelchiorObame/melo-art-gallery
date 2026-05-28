import { useEffect, useMemo, useState } from 'react'
import { cn } from '../../lib/utils'

const IMAGE_POOL = [
  'https://www.netkulture.fr/data/images/2018/03/jono_dry1.jpg',
  'https://designspartan.com/wp-content/uploads/2017/04/Dessin_Crayon_Arinze_Stanley_05.jpg',
  'https://www.netkulture.fr/data/images/2024/07/kohei_ohmori1.jpeg',
  'https://designspartan.com/wp-content/uploads/2017/04/Dessin_Crayon_Arinze_Stanley_02.jpg',
  'https://www.dessein-de-dessin.com/wp-content/uploads/2020/12/Les-portraits-au-crayon-hyper-realistes-de-Arinze-Stanley-1.jpg',
  'https://www.dessein-de-dessin.com/wp-content/uploads/2020/12/Les-portraits-au-crayon-hyper-realistes-de-Arinze-Stanley-4.jpg',
]

const preloadedImages = new Set<string>()
const pendingPreloads = new Map<string, Promise<void>>()
let hasWarmedImagePool = false

function preloadImage(src: string, onReady?: () => void) {
  if (preloadedImages.has(src)) {
    onReady?.()
    return
  }

  const pending = pendingPreloads.get(src)
  if (pending) {
    if (onReady) pending.finally(onReady)
    return
  }

  const preloadPromise = new Promise<void>((resolve) => {
    const img = new Image()
    img.onload = () => {
      preloadedImages.add(src)
      resolve()
    }
    img.onerror = () => {
      resolve()
    }
    img.src = src
  })

  pendingPreloads.set(src, preloadPromise)
  preloadPromise.finally(() => {
    pendingPreloads.delete(src)
    onReady?.()
  })
}

function hashString(value: string) {
  let hash = 0
  for (let i = 0; i < value.length; i += 1) {
    hash = (hash << 5) - hash + value.charCodeAt(i)
    hash |= 0
  }
  return Math.abs(hash)
}

interface PlaceholderProps {
  label:       string
  description?: string
  aspectRatio?: string
  className?:  string
  loading?: 'lazy' | 'eager'
  fetchPriority?: 'high' | 'low' | 'auto'
  seedKey?: string
}

export default function Placeholder({
  label,
  description,
  aspectRatio = '4/5',
  className,
  loading = 'lazy',
  fetchPriority = 'low',
  seedKey,
}: PlaceholderProps) {
  const imageSrc = useMemo(() => {
    const seed = seedKey ?? `${label}|${description ?? ''}|${aspectRatio}`
    return IMAGE_POOL[hashString(seed) % IMAGE_POOL.length]
  }, [label, description, aspectRatio, seedKey])

  const [displaySrc, setDisplaySrc] = useState(imageSrc)

  // Warm cache once for smoother navigation in gallery/dialog.
  useEffect(() => {
    if (hasWarmedImagePool) return
    hasWarmedImagePool = true
    IMAGE_POOL.forEach((src) => preloadImage(src))
  }, [])

  // Keep current image visible until the next one is ready to avoid flash/flicker.
  useEffect(() => {
    if (imageSrc === displaySrc) return
    preloadImage(imageSrc, () => setDisplaySrc(imageSrc))
  }, [imageSrc, displaySrc])

  return (
    <div
      className={cn('relative bg-bg-soft overflow-hidden', className)}
      style={{ aspectRatio }}
    >
      {/* Image */}
      <img
        src={displaySrc}
        alt={description ? `Illustration ${description}` : 'Illustration portrait'}
        className="absolute inset-0 w-full h-full object-cover"
        loading={loading}
        decoding="async"
        fetchPriority={fetchPriority}
      />

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-bg-deep/55 via-transparent to-transparent" />

      {/* Center description */}
      {description && (
        <div className="absolute inset-0 flex items-center justify-center font-display font-light italic text-bg text-[clamp(14px,1.4vw,18px)] text-center leading-relaxed px-5">
          {description}
        </div>
      )}

      {/* Bottom label tag */}
      <div className="absolute bottom-3.5 left-3.5 font-mono text-[10px] tracking-kicker uppercase text-bg bg-fg/80 px-2 py-1 border border-bg/20">
        {label}
      </div>
    </div>
  )
}
