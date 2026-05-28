import { motion } from 'framer-motion'
import { FiArrowRight, FiArrowUpRight } from 'react-icons/fi'
import Reveal from '../components/ui/Reveal'
import Placeholder from '../components/ui/Placeholder'
import Marquee from '../components/ui/Marquee'
import WorkCard from '../components/ui/WorkCard'
import Btn from '../components/ui/Btn'
import SectionLabel from '../components/ui/SectionLabel'
import { WORKS_PREVIEW } from '../data/works'

const MARQUEE_ITEMS = [
  'Hyperréalisme', 'Crayon graphite', 'Fusain',
  'Technique mixte', 'Portrait sur commande', 'Atelier Melo',
]

const SOCIAL_LINKS = [
  { n: '01', label: 'Instagram', handle: '@melo.art' },
  { n: '02', label: 'TikTok',    handle: '@melo.art' },
  { n: '03', label: 'YouTube',   handle: 'Melo Art'  },
  { n: '04', label: 'Behance',   handle: '/melo'     },
  { n: '05', label: 'Pinterest', handle: '/meloart'  },
]

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Marquee items={MARQUEE_ITEMS} />
      <FeaturedSection />
      <BioSection />
      <GalleryPreviewSection />
      <CommissionSection />
      <SocialSection />
    </main>
  )
}

/* ============================================================
   Hero
   ============================================================ */
function HeroSection() {
  const lines = ['Le portrait,', 'dessiné', 'à la main.']

  return (
    // relative so the absolutely-positioned portrait anchors here, not to an inner div
    <header
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{ padding: '120px var(--pad-x) 60px', gap: 'clamp(32px, 5vh, 64px)' }}
    >
      {/* 1 — Top bar */}
      <div className="flex justify-between items-center shrink-0">
        <span className="font-mono text-[11px] tracking-kicker uppercase text-fg-soft">
          Melo — Atelier de portrait
        </span>
        <span className="font-mono text-[11px] tracking-kicker uppercase text-fg-soft inline-flex items-center gap-2.5">
          <motion.span
            className="w-[7px] h-[7px] rounded-full bg-accent inline-block"
            animate={{ opacity: [1, 0.5, 1], scale: [1, 1.25, 1] }}
            transition={{ duration: 2, ease: [0.2, 0.7, 0.2, 1], repeat: Infinity }}
          />
          Disponible pour commandes — 2026
        </span>
      </div>

      {/* 2 — Title : grows to fill the middle space */}
      <h1
        className="flex-1 font-display font-light leading-[0.88] relative z-[2] pointer-events-none self-start"
        style={{ fontSize: 'clamp(64px, 9vw, 160px)', letterSpacing: '-0.02em' }}
      >
        {lines.map((line, i) => (
          <span
            key={i}
            className="block overflow-hidden"
            style={{ textIndent: i === 1 ? '10vw' : i === 2 ? '4vw' : undefined }}
          >
            <motion.span
              className={`block${i === 1 ? ' italic text-fg-soft' : ''}`}
              initial={{ y: '105%' }}
              animate={{ y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 + i * 0.12 }}
            >
              {line}
            </motion.span>
          </span>
        ))}
      </h1>

      {/* 3 — Lede + CTAs (left column, portrait sits to the right via absolute) */}
      <Reveal delay={0.2} className="max-w-[420px] flex flex-col gap-8 relative z-[3] shrink-0">
        <p className="font-display font-light text-[clamp(18px,1.4vw,24px)] italic text-fg-soft leading-[1.45]">
          Crayon graphite, fusain, technique mixte. Un travail patient
          du visage — le regard, la peau, la lumière — jusqu'à ce que
          le dessin respire.
        </p>
        <div className="flex items-center gap-3.5">
          <Btn to="/galerie" filled>
            Voir la galerie <FiArrowRight />
          </Btn>
          <Btn to="/commander">Commander un portrait</Btn>
        </div>
      </Reveal>

      {/* 4 — Floor */}
      <div className="flex justify-between items-end font-mono text-[10px] tracking-[0.18em] uppercase text-fg-soft relative z-[3] shrink-0">
        <div className="inline-flex items-center gap-3.5">
          <div className="w-[60px] h-px bg-fg-soft relative overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-fg"
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 2.4, ease: [0.2, 0.7, 0.2, 1], repeat: Infinity, repeatDelay: 0.2 }}
            />
          </div>
          Défiler pour découvrir
        </div>
        <div>
          <span>014 œuvres</span>&nbsp;&middot;&nbsp;<span>2024 — 2026</span>
        </div>
      </div>

      {/* Portrait — direct child of <header> (which is `relative`).
          The outer div handles position; Reveal handles only the clip animation. */}
      <div
        className="absolute z-[1] hidden md:block"
        style={{
          top: '14vh',
          right: 'var(--pad-x)',
          width: 'clamp(220px, 30vw, 420px)',
        }}
      >
        <Reveal variant="clip" delay={0.1}>
          <figure>
            <Placeholder
              label="œuvre n° 014"
              description="portrait principal — format vertical"
              aspectRatio="3/4"
            />
            <figcaption
              className="grid gap-4 items-baseline mt-3.5 font-mono text-[10px] tracking-[0.14em] uppercase text-fg-soft"
              style={{ gridTemplateColumns: 'auto 1fr' }}
            >
              <span>N° 014</span>
              <span className="font-display not-italic text-[13px] tracking-normal normal-case text-fg truncate">
                « Regard profond »
              </span>
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </header>
  )
}

/* ============================================================
   Featured work
   ============================================================ */
function FeaturedSection() {
  return (
    <section
      className="section grid items-start"
      style={{
        padding: 'clamp(80px,12vw,160px) var(--pad-x)',
        gridTemplateColumns: '1fr 1.3fr',
        gridTemplateAreas: '"meta figure" "caption figure"',
        gap: 'clamp(40px,5vw,80px)',
      }}
    >
      {/* Meta */}
      <div className="flex flex-col gap-12" style={{ gridArea: 'meta' }}>
        <Reveal>
          <SectionLabel>Œuvre sélectionnée</SectionLabel>
        </Reveal>
        <Reveal delay={0.05}>
          <div className="grid grid-cols-2 gap-7">
            {[
              ['Format',    '40 × 50 cm'],
              ['Technique', 'Graphite'],
              ['Durée',     '42 heures'],
              ['Année',     '2026'],
            ].map(([k, v]) => (
              <div key={k} className="flex flex-col gap-1.5">
                <span className="font-mono text-[11px] tracking-kicker uppercase text-fg-soft">{k}</span>
                <span className="font-display italic text-[28px] text-fg">{v}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      {/* Figure */}
      <Reveal variant="clip" style={{ gridArea: 'figure' }}>
        <Placeholder
          label="featured 01"
          description="œuvre sélectionnée — vue large"
          aspectRatio="5/3"
        />
      </Reveal>

      {/* Caption */}
      <div className="flex flex-col gap-7 max-w-[460px]" style={{ gridArea: 'caption' }}>
        <Reveal>
          <h2
            className="font-display font-light italic leading-[0.95]"
            style={{ fontSize: 'clamp(40px,5vw,80px)' }}
          >
            Le regard, avant tout.
          </h2>
        </Reveal>
        <Reveal delay={0.12} className="flex flex-col gap-6">
          <p className="text-[16px] leading-[1.65] text-fg-soft max-w-[380px]">
            Cette œuvre, réalisée au crayon graphite sur papier Bristol, explore
            l'intensité du regard et la finesse des textures de peau. Chaque
            contraste a été travaillé en couches successives.
          </p>
          <Btn to="/galerie">
            Voir l'œuvre complète <FiArrowRight />
          </Btn>
        </Reveal>
      </div>
    </section>
  )
}

/* ============================================================
   Bio
   ============================================================ */
function BioSection() {
  return (
    <section
      className="grid items-start border-t border-line"
      style={{
        padding: 'clamp(80px,12vw,160px) var(--pad-x)',
        gridTemplateColumns: '1fr 2fr 1.2fr',
        gap: 'clamp(32px,4vw,80px)',
      }}
    >
      <Reveal>
        <SectionLabel>Atelier</SectionLabel>
      </Reveal>

      <Reveal delay={0.06} className="flex flex-col">
        <p
          className="font-display font-light leading-[1.08]"
          style={{ fontSize: 'clamp(32px,3.6vw,56px)', letterSpacing: '-0.01em' }}
        >
          Je suis <em className="italic text-accent">Melo</em>, dessinateur portraitiste
          spécialisé dans l'hyperréalisme. Mon travail cherche à
          capturer non seulement les traits d'un visage, mais aussi
          la présence, l'émotion et l'histoire de chaque personne.
        </p>
        <Btn to="/a-propos" className="mt-10 self-start">
          À propos de l'artiste <FiArrowRight />
        </Btn>
      </Reveal>

      <Reveal variant="clip" delay={0.1}>
        <Placeholder
          label="portrait Melo"
          description="photo de l'artiste à l'atelier"
          aspectRatio="4/5"
        />
      </Reveal>
    </section>
  )
}

/* ============================================================
   Gallery preview
   ============================================================ */
function GalleryPreviewSection() {
  return (
    <section style={{ padding: 'clamp(80px,12vw,160px) var(--pad-x)' }}>
      {/* Header */}
      <div className="flex justify-between items-end gap-6 mb-[clamp(40px,5vw,80px)]">
        <div>
          <Reveal>
            <SectionLabel>Aperçu de la galerie</SectionLabel>
          </Reveal>
          <Reveal delay={0.05}>
            <h2
              className="font-display font-light leading-[0.95] mt-4"
              style={{ fontSize: 'clamp(40px,5.6vw,88px)' }}
            >
              Une sélection<br />de <em className="italic text-fg-soft">portraits récents</em>.
            </h2>
          </Reveal>
        </div>
        <Reveal delay={0.08}>
          <Btn to="/galerie">
            Voir toute la galerie <FiArrowRight />
          </Btn>
        </Reveal>
      </div>

      {/* Masonry grid via CSS columns */}
      <Reveal>
        <div
          className="gap-[clamp(16px,2vw,32px)]"
          style={{ columnCount: 3, columnGap: 'clamp(16px,2vw,32px)' }}
        >
          {WORKS_PREVIEW.map((work) => (
            <div key={work.id} className="break-inside-avoid mb-[clamp(16px,2vw,32px)]">
              <WorkCard work={work} />
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  )
}

/* ============================================================
   Commission CTA
   ============================================================ */
const STEPS = [
  'Envoi de la photo de référence.',
  'Devis personnalisé.',
  'Acompte et démarrage.',
  'Photos de progression.',
  'Livraison ou remise en main propre.',
]

function CommissionSection() {
  return (
    <section
      className="border-t border-line"
      style={{ padding: 'clamp(80px,12vw,160px) var(--pad-x)' }}
    >
      <div
        className="grid items-start"
        style={{ gridTemplateColumns: '1.2fr 1fr', gap: 'clamp(40px,6vw,120px)' }}
      >
        {/* Text */}
        <div>
          <Reveal>
            <SectionLabel>Commandes personnalisées</SectionLabel>
          </Reveal>
          <Reveal delay={0.04}>
            <h2
              className="font-display font-light leading-[0.95] mt-6"
              style={{ fontSize: 'clamp(48px,7vw,120px)' }}
            >
              Offrir un portrait,<br />c'est offrir<br />un regard.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="font-display font-light text-[clamp(20px,1.6vw,26px)] italic text-fg-soft leading-[1.45] mt-9 max-w-[480px]">
              Je réalise des portraits sur demande à partir de vos photos de
              référence. Cadeau, hommage, souvenir — chaque dessin est une pièce unique.
            </p>
          </Reveal>
          <Reveal delay={0.18} className="flex gap-3.5 flex-wrap mt-9">
            <Btn to="/commander" filled>
              Demander un devis <FiArrowRight />
            </Btn>
            <Btn to="/processus">Voir le processus</Btn>
          </Reveal>
        </div>

        {/* Steps */}
        <Reveal delay={0.08}>
          <ol className="divide-line">
            {STEPS.map((step, i) => (
              <li
                key={i}
                className="grid items-baseline gap-6 py-[22px] border-b border-line text-[22px]"
                style={{ gridTemplateColumns: '60px 1fr' }}
              >
                <span className="font-mono text-[10px] tracking-kicker text-fg-soft">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="font-display italic">{step}</span>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  )
}

/* ============================================================
   Social / Follow
   ============================================================ */
function SocialSection() {
  return (
    <section
      className="border-t border-line grid"
      style={{
        padding: 'clamp(80px,12vw,160px) var(--pad-x)',
        gridTemplateColumns: '1fr 3fr',
        gap: 'clamp(32px,5vw,80px)',
      }}
    >
      <Reveal>
        <SectionLabel>Suivre l'atelier</SectionLabel>
      </Reveal>

      <Reveal delay={0.04}>
        <h2
          className="font-display font-light leading-[0.95] mb-14"
          style={{ fontSize: 'clamp(40px,5.5vw,96px)' }}
        >
          L'atelier vit aussi<br />en <em className="italic">vidéo</em>.
        </h2>
      </Reveal>

      {/* Social list */}
      <ul className="col-span-full border-t border-line">
        {SOCIAL_LINKS.map(({ n, label, handle }, i) => (
          <Reveal key={label} delay={i * 0.06} as="li" className="border-b border-line">
            <a
              href="#"
              className="group grid items-center py-7 font-display font-light transition-all duration-500 hover:pl-[clamp(16px,3vw,48px)] hover:text-accent"
              style={{
                fontSize: 'clamp(28px,4vw,64px)',
                gridTemplateColumns: '80px 1fr 1fr 40px',
              }}
            >
              <span className="font-mono text-[11px] tracking-kicker text-fg-soft">{n}</span>
              <span>{label}</span>
              <span className="font-display italic text-[0.55em] text-fg-soft text-right">{handle}</span>
              <FiArrowUpRight className="text-[18px] text-fg-soft ml-auto transition-transform duration-[400ms] group-hover:translate-x-2 group-hover:-translate-y-2 group-hover:text-accent" />
            </a>
          </Reveal>
        ))}
      </ul>
    </section>
  )
}
