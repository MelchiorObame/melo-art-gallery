interface SectionLabelProps {
  children: React.ReactNode
  className?: string
}

export default function SectionLabel({ children, className = '' }: SectionLabelProps) {
  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      {/* Short accent rule replacing the "—" dash */}
      <span className="block h-px w-7 bg-accent shrink-0" />
      <span className="font-mono text-[15px] tracking-[0.22em] uppercase text-fg-soft leading-none">
        {children}
      </span>
    </div>
  )
}
