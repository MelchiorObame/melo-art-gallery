import { cn } from '../../lib/utils'

interface PlaceholderProps {
  label:       string
  description?: string
  aspectRatio?: string
  className?:  string
}

export default function Placeholder({
  label,
  description,
  aspectRatio = '4/5',
  className,
}: PlaceholderProps) {
  return (
    <div
      className={cn('relative bg-bg-soft overflow-hidden', className)}
      style={{ aspectRatio }}
    >
      {/* Diagonal stripes */}
      <div className="absolute inset-0 bg-stripe" />

      {/* Center description */}
      {description && (
        <div className="absolute inset-0 flex items-center justify-center font-display font-light italic text-fg-mute text-[clamp(14px,1.4vw,18px)] text-center leading-relaxed px-5">
          {description}
        </div>
      )}

      {/* Bottom label tag */}
      <div className="absolute bottom-3.5 left-3.5 font-mono text-[10px] tracking-kicker uppercase text-fg-soft bg-bg px-2 py-1 border border-line">
        {label}
      </div>
    </div>
  )
}
