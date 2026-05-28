import { useState } from 'react'
import Reveal from '../components/ui/Reveal'
import WorkCard from '../components/ui/WorkCard'
import WorkDialog from '../components/ui/WorkDialog'
import Placeholder from '../components/ui/Placeholder'
import { WORKS } from '../data/works'
import type { WorkCategory, WorkTechnique } from '../data/works'

type FilterCat  = WorkCategory | 'all'
type FilterTech = WorkTechnique | 'all'

const CAT_FILTERS: { value: FilterCat; label: string }[] = [
  { value: 'all',      label: 'Toutes'       },
  { value: 'nb',       label: 'Noir & blanc' },
  { value: 'couleur',  label: 'Couleur'      },
  { value: 'celeb',    label: 'Célébrités'   },
  { value: 'commande', label: 'Commandes'    },
  { value: 'etude',    label: 'Études'       },
]

const TECH_FILTERS: { value: FilterTech; label: string }[] = [
  { value: 'all',      label: 'Toutes'   },
  { value: 'graphite', label: 'Graphite' },
  { value: 'fusain',   label: 'Fusain'   },
  { value: 'mixte',    label: 'Mixte'    },
  { value: 'pastel',   label: 'Pastel'   },
]

const DETAILS = [
  { label: 'Le regard',    sub: '001' },
  { label: 'La peau',      sub: '002' },
  { label: 'Les cheveux',  sub: '003' },
  { label: 'Les mains',    sub: '004' },
]

export default function Galerie() {
  const [cat,  setCat ] = useState<FilterCat>('all')
  const [tech, setTech] = useState<FilterTech>('all')

  const filtered = WORKS.filter(
    (w) => (cat  === 'all' || w.category  === cat)
         && (tech === 'all' || w.technique === tech),
  )

  return (
    <main>
      {/* Page intro */}
      <header
        className="border-b border-line"
        style={{ padding: '108px var(--pad-x) clamp(40px,5vw,68px)' }}
      >
        <div className="flex justify-between items-center border-b border-line pb-5 mb-[clamp(40px,7vw,100px)]">
          <span className="font-mono text-[11px] tracking-kicker uppercase text-fg-soft">— Galerie complète</span>
          <span className="font-mono text-[11px] tracking-kicker uppercase text-fg-soft">
            2024 — 2026 · {WORKS.length} œuvres
          </span>
        </div>
        <Reveal>
          <h1
            className="font-display font-light leading-[0.92] mb-10"
            style={{ fontSize: 'clamp(60px,12vw,200px)', letterSpacing: '-0.02em' }}
          >
            <em className="italic text-fg-soft">Portraits.</em><br />Une archive vivante.
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="font-display font-light text-[clamp(20px,1.6vw,26px)] italic text-fg-soft leading-[1.45] max-w-[620px]">
            Chaque œuvre est unique — crayon graphite, fusain, technique mixte.
            Cliquer sur un portrait pour voir les détails.
          </p>
        </Reveal>
      </header>

      {/* Filters */}
      <nav
        className="border-b border-line flex gap-[clamp(28px,4vw,60px)] flex-wrap"
        style={{ padding: '0 var(--pad-x) 40px', paddingTop: '32px' }}
        aria-label="Filtres"
      >
        <FilterGroup
          label="Catégorie"
          filters={CAT_FILTERS}
          active={cat}
          onSelect={(v) => setCat(v as FilterCat)}
        />
        <FilterGroup
          label="Technique"
          filters={TECH_FILTERS}
          active={tech}
          onSelect={(v) => setTech(v as FilterTech)}
        />
      </nav>

      {/* Gallery */}
      <section style={{ padding: 'clamp(40px,5vw,80px) var(--pad-x) clamp(80px,12vw,160px)' }}>
        {filtered.length === 0 ? (
          <p className="text-center py-[120px] font-mono text-[11px] tracking-kicker uppercase text-fg-soft">
            Aucune œuvre ne correspond à ces filtres.
          </p>
        ) : (
          <div style={{ columnCount: 3, columnGap: 'clamp(16px,2vw,32px)' }}>
            {filtered.map((work, i) => (
              <div key={work.id} className="break-inside-avoid mb-[clamp(16px,2vw,32px)]">
                <WorkDialog
                  work={work}
                  trigger={
                    <Reveal delay={(i % 6) * 0.06}>
                      <WorkCard work={work} />
                    </Reveal>
                  }
                />
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Études de détails */}
      <section
        className="border-t border-line"
        style={{ padding: 'clamp(52px,7vw,100px) var(--pad-x)' }}
      >
        <div
          className="grid items-end mb-[clamp(40px,6vw,100px)]"
          style={{ gridTemplateColumns: '1fr 2fr', gap: 'clamp(32px,4vw,80px)' }}
        >
          <div>
            <Reveal>
              <span className="font-mono text-[10px] tracking-eyebrow uppercase text-fg-soft">— Études de détails</span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2
                className="font-display font-light leading-[0.95] mt-4"
                style={{ fontSize: 'clamp(48px,7vw,120px)' }}
              >
                Le réel<br />au <em className="italic text-accent">millimètre</em>.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.12}>
            <p className="font-display font-light italic text-[clamp(20px,1.6vw,26px)] leading-[1.45] text-fg-soft max-w-[540px]">
              Zooms sur le regard, la peau, la barbe, les mains. L'hyperréalisme
              se vit dans le détail.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-4 gap-[clamp(16px,2vw,32px)]">
          {DETAILS.map(({ label, sub }, i) => (
            <Reveal key={label} variant="clip" delay={i * 0.08}>
              <figure className="flex flex-col gap-3">
                <Placeholder
                  label={sub}
                  description={`détail — ${label.toLowerCase()}`}
                  aspectRatio="1/1"
                />
                <figcaption className="flex justify-between font-mono text-[11px] tracking-wide uppercase text-fg-soft">
                  <span>{sub}</span>
                  <span className="font-display not-italic text-[14px] tracking-normal normal-case text-fg">
                    {label}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  )
}

/* ---- FilterGroup helper ---- */
function FilterGroup<T extends string>({
  label,
  filters,
  active,
  onSelect,
}: {
  label:    string
  filters:  { value: T; label: string }[]
  active:   T
  onSelect: (v: T) => void
}) {
  return (
    <div className="flex gap-4 items-center flex-wrap">
      <span className="font-mono text-[10px] tracking-eyebrow uppercase text-fg-soft">{label}</span>
      <div className="flex gap-2 flex-wrap">
        {filters.map(({ value, label: lbl }) => (
          <button
            key={value}
            onClick={() => onSelect(value)}
            className={`font-mono text-[10px] tracking-wide uppercase px-3.5 py-2 border transition-all duration-300 ${
              active === value
                ? 'bg-fg text-bg border-fg'
                : 'bg-transparent text-fg-soft border-line hover:text-fg hover:border-fg-soft'
            }`}
          >
            {lbl}
          </button>
        ))}
      </div>
    </div>
  )
}
