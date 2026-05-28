import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'
import { cn } from '../../lib/utils'

interface BtnProps {
  children:  ReactNode
  filled?:   boolean
  to?:       string
  href?:     string
  type?:     'button' | 'submit' | 'reset'
  onClick?:  () => void
  disabled?: boolean
  className?: string
}

export default function Btn({
  children,
  filled,
  to,
  href,
  type = 'button',
  onClick,
  disabled,
  className,
}: BtnProps) {
  const base = cn(
    'inline-flex items-center gap-3.5 px-6 py-3.5',
    'font-mono text-[11px] tracking-kicker uppercase',
    'border border-fg transition-colors duration-[400ms]',
    'cursor-pointer select-none',
    filled
      ? 'bg-fg text-bg hover:bg-transparent hover:text-fg'
      : 'bg-transparent text-fg hover:bg-fg hover:text-bg',
    disabled && 'opacity-50 pointer-events-none',
    className,
  )

  if (to) return <Link to={to} className={base}>{children}</Link>
  if (href) return <a href={href} className={base} target="_blank" rel="noopener noreferrer">{children}</a>

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={base}>
      {children}
    </button>
  )
}
