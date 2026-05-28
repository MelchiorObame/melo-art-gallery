import { motion } from 'framer-motion'
import { FiArrowRight, FiArrowUpRight, FiInstagram } from 'react-icons/fi'
import { SiTiktok, SiYoutube } from 'react-icons/si'
import Reveal from '../components/ui/Reveal'
import AnimatedTitle from '../components/ui/AnimatedTitle'
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
  { icon: <FiInstagram size={28} />, label: 'Instagram', handle: '@ledessin_art', href: '#' },
  { icon: <SiTiktok    size={24} />, label: 'TikTok',    handle: '@melo.art', href: '#' },
  { icon: <SiYoutube   size={28} />, label: 'YouTube',   handle: 'Melo Art',  href: '#' },
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
  const lines = [
    { text: 'Melo,' },
    { text: 'portraitiste', className: 'italic text-fg-soft' },
    { text: 'hyperréaliste.' },
  ]

  return (
    // relative so the absolutely-positioned portrait anchors here, not to an inner div
    <header
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{ padding: '120px var(--pad-x) 60px', gap: 'clamp(32px, 5vh, 64px)' }}
    >
      {/* 1 — Top bar */}
      <div className="flex justify-between items-center shrink-0">
        <span className="font-mono text-[11px] tracking-kicker uppercase text-fg-soft">
          Atelier de portrait
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
      <AnimatedTitle
        as="h1"
        lines={lines}
        className="flex-1 font-display font-light leading-[0.88] relative z-[2] pointer-events-none self-start"
        style={{ fontSize: 'clamp(64px, 9vw, 160px)', letterSpacing: '-0.02em' }}
      />

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
          top: '8vh',
          right: 'var(--pad-x)',
          width: 'clamp(220px, 44vw, 640px)',
        }}
      >
        <Reveal variant="clip" delay={0.1}>
          <figure className="group">
            <div className="overflow-hidden">
              <img
                src="/images/mathieu_dart.jpg"
                alt="Regard profond — portrait au crayon graphite"
                className="w-full block transition-transform duration-[500ms] ease-art group-hover:scale-[1.13]"
                style={{ aspectRatio: '3/4', objectFit: 'cover', objectPosition: 'center top' }}
              />
            </div>
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
const FEATURED_META = [
  ['Format',    '40 × 50 cm'],
  ['Technique', 'Graphite'],
  ['Durée',     '42 heures'],
  ['Année',     '2026'],
] as const

function FeaturedSection() {
  return (
    <section style={{ padding: 'clamp(52px,7vw,100px) var(--pad-x)' }}>

      {/* Label above */}
      <Reveal className="mb-10">
        <SectionLabel>Œuvre sélectionnée</SectionLabel>
      </Reveal>

      {/* Two-column layout */}
      <div
        className="grid grid-cols-1 lg:grid-cols-2 items-start gap-[clamp(40px,5vw,80px)]"
      >
        {/* ── Left : image + metadata below ── */}
        <div>
          <Reveal variant="clip">
            <img
              src="https://mathieudutemps.com/uploads/1/4/5/0/145098750/334252078-593722655702200-2255601889673066476-n_orig.jpg"
              alt="Œuvre sélectionnée — portrait au crayon graphite"
              className="w-full block"
              style={{ aspectRatio: '4/5', objectFit: 'cover', objectPosition: 'center top' }}
            />
          </Reveal>

          {/* Metadata grid below the image — small text */}
          <Reveal delay={0.1}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-3 mt-5 pt-4 border-t border-line">
              {FEATURED_META.map(([k, v]) => (
                <div key={k} className="flex flex-col gap-1">
                  <span className="font-mono text-[9px] tracking-[0.18em] uppercase text-fg-mute">
                    {k}
                  </span>
                  <span className="font-mono text-[11px] text-fg-soft">
                    {v}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* ── Right : title + description + button ── */}
        <div className="flex flex-col justify-center gap-8" style={{ paddingTop: 'clamp(20px,4vw,60px)' }}>
          <Reveal>
            <h2
              className="font-display font-light italic leading-[0.95]"
              style={{ fontSize: 'clamp(36px,4.5vw,72px)' }}
            >
              Le regard,<br />avant tout.
            </h2>
          </Reveal>

          <Reveal delay={0.1} className="flex flex-col gap-6">
            <p className="text-[15px] leading-[1.7] text-fg-soft">
              Cette œuvre, réalisée au crayon graphite sur papier Bristol, explore
              l'intensité du regard et la finesse des textures de peau. Chaque
              contraste a été travaillé en couches successives, parfois pendant
              plus de dix-huit heures sur un seul œil.
            </p>
            <Btn to="/galerie">
              Voir l'œuvre complète <FiArrowRight />
            </Btn>
          </Reveal>
        </div>
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
      className="grid grid-cols-1 lg:grid-cols-[2fr_1.2fr] items-start border-t border-line bg-[#ddccb0]"
      style={{
        padding: 'clamp(52px,7vw,100px) var(--pad-x)',
        gap: 'clamp(32px,4vw,80px)',
      }}
    >
      {/* Left — label directly above the text */}
      <div className="flex flex-col gap-6">
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
      </div>

      {/* Right — photo */}
      <Reveal variant="clip" delay={0.1}>
        <img
          src="https://mathieudutemps.com/uploads/1/4/5/0/145098750/400066553-369375942216075-2255719002411491936-n_orig.jpg"
          alt="Portrait de Melo à l'atelier"
          className="w-full block"
          style={{ aspectRatio: '4/5', objectFit: 'cover', objectPosition: 'center top' }}
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
    <section style={{ padding: 'clamp(52px,7vw,100px) var(--pad-x)' }}>
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
          className="columns-1 md:columns-2 xl:columns-3"
          style={{ columnGap: 'clamp(16px,2vw,32px)' }}
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
      style={{ padding: 'clamp(52px,7vw,100px) var(--pad-x)' }}
    >
      <div
        className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] items-start gap-[clamp(40px,6vw,120px)]"
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
                className="grid grid-cols-[46px_1fr] md:grid-cols-[60px_1fr] items-baseline gap-4 md:gap-6 py-[22px] border-b border-line text-[18px] md:text-[22px]"
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
      className="border-t border-line"
      style={{ padding: 'clamp(52px,7vw,100px) var(--pad-x)' }}
    >
      {/* Header */}
      <div className="flex justify-between items-end gap-8 mb-16">
        <div>
          <Reveal>
            <SectionLabel>Suivre l'atelier</SectionLabel>
          </Reveal>
          <Reveal delay={0.05}>
            <h2
              className="font-display font-light leading-[0.95] mt-6"
              style={{ fontSize: 'clamp(36px,5vw,80px)' }}
            >
              L'atelier vit aussi<br />en <em className="italic">vidéo</em>.
            </h2>
          </Reveal>
        </div>
      </div>

      {/* Icon grid — N cards centered, well spaced */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mx-auto"
        style={{
          gap: 'clamp(16px, 2.5vw, 40px)',
          maxWidth: '980px',
        }}
      >
        {SOCIAL_LINKS.map(({ icon, label, handle, href }, i) => (
          <Reveal key={label} delay={i * 0.07}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-5 border border-line px-6 py-8 hover:border-fg hover:bg-bg-soft transition-all duration-300"
            >
              {/* Icon */}
              <span className="text-fg-soft group-hover:text-fg transition-colors duration-300">
                {icon}
              </span>

              {/* Platform name + handle */}
              <div className="flex flex-col items-center gap-1 text-center">
                <span className="font-mono text-[11px] tracking-kicker uppercase text-fg">
                  {label}
                </span>
                <span className="font-display italic text-[13px] text-fg-soft">
                  {handle}
                </span>
              </div>

              {/* Arrow */}
              <FiArrowUpRight
                size={14}
                className="text-fg-mute group-hover:text-accent transition-colors duration-300 self-end"
              />
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
