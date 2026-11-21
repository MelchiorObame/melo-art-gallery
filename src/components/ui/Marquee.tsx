interface MarqueeProps {
  items: string[]
}

export default function Marquee({ items }: MarqueeProps) {
  // Duplicate for seamless loop — animation runs on the compositor (CSS), not JS
  const doubled = [...items, ...items]

  return (
    <div className="overflow-hidden border-y border-line py-[22px] whitespace-nowrap">
      <div className="animate-marquee inline-flex gap-[60px] font-display font-light italic text-[clamp(28px,4vw,56px)] text-fg will-change-transform">
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-[60px] after:content-['✦'] after:not-italic after:text-[0.5em] after:text-accent">
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
