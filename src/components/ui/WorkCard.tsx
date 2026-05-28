import type { Work, WorkStatus } from '../../data/works'
import Placeholder from './Placeholder'
import { cn } from '../../lib/utils'

const STATUS_CLS: Record<WorkStatus, string> = {
  'Disponible':      'bg-bg text-fg border border-line',
  'Vendu':           'bg-fg text-bg border-0',
  'Commande privée': 'bg-transparent text-fg-soft border border-line',
  'En cours':        'bg-accent text-bg-deep border-0',
}

interface WorkCardProps {
  work:      Work
  onClick?:  () => void
  className?: string
}

export default function WorkCard({ work, onClick, className }: WorkCardProps) {
  return (
    <article
      className={cn('group relative cursor-pointer', className)}
      onClick={onClick}
    >
      {/* Image frame with zoom hover */}
      <div className="relative overflow-hidden">
        <div className="transition-transform duration-[1600ms] ease-art group-hover:scale-[1.04]">
          <Placeholder
            label={`n° ${work.id}`}
            description={`${work.title}\n${work.size}`}
            aspectRatio={work.aspectRatio}
            seedKey={`work:${work.id}`}
          />
        </div>
        {/* Status badge */}
        <span className={cn('absolute top-3.5 right-3.5 font-mono text-[9px] tracking-wide uppercase px-2.5 py-[5px]', STATUS_CLS[work.status])}>
          {work.status}
        </span>
      </div>

      {/* Meta */}
      <div className="flex justify-between items-baseline mt-3.5 font-mono text-[11px] tracking-[0.1em] text-fg-soft uppercase">
        <span className="font-display not-italic text-[17px] tracking-normal normal-case text-fg">
          {work.title}
        </span>
        <span>{work.year}</span>
      </div>
      <div className="font-mono text-[10px] tracking-[0.14em] text-fg-mute uppercase mt-1.5">
        {work.technique} · {work.size}
      </div>
    </article>
  )
}
