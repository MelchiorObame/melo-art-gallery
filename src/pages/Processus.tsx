import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'
import Reveal from '../components/ui/Reveal'
import AnimatedTitle from '../components/ui/AnimatedTitle'
import Placeholder from '../components/ui/Placeholder'
import Btn from '../components/ui/Btn'

const STEPS = [
  { n: '01', cat: 'Photo',     title: 'Choix de la photo.',             desc: 'Sélection d\'une image nette, bien éclairée, avec un visage parfaitement lisible. La photo conditionne tout le dessin.',   dur: '≈ 1 h'  },
  { n: '02', cat: 'Esquisse',  title: 'Construction des proportions.',   desc: 'Mise en place du visage par mesures et repères — emplacement des yeux, axe du nez, équilibre général.',                    dur: '≈ 3 h'  },
  { n: '03', cat: 'Valeurs',   title: 'Premières ombres.',               desc: 'Mise en place des grandes zones d\'ombre et de lumière. Tout le volume du visage apparaît à cette étape.',                 dur: '≈ 4 h'  },
  { n: '04', cat: 'Regard',    title: 'Le travail des yeux.',            desc: 'L\'étape la plus importante — le regard donne sa présence au portrait. Six à huit heures sur chaque œil.',                 dur: '≈ 12 h' },
  { n: '05', cat: 'Peau',      title: 'Texture de la peau.',             desc: 'Posée en multiples couches fines — points, micro-traits, estompage. Chaque pore est suggéré, sans excès.',                 dur: '≈ 10 h' },
  { n: '06', cat: 'Cheveux',   title: 'Mèche par mèche.',                desc: 'Travail patient à la pointe fine, en suivant les flux naturels. Premières lumières gommées en blanc pur.',                 dur: '≈ 6 h'  },
  { n: '07', cat: 'Vêtements', title: 'Textures et tombé.',              desc: 'Coton, laine, cuir — chaque matière a son écriture. Les vêtements complètent la lumière du visage.',                       dur: '≈ 4 h'  },
  { n: '08', cat: 'Finitions', title: 'Contrastes finaux.',              desc: 'Reprise des noirs les plus profonds, des lumières les plus vives. Le portrait gagne ses dernières dixièmes.',              dur: '≈ 2 h'  },
  { n: '09', cat: 'Fixatif',   title: 'Protection et livraison.',        desc: 'Application du fixatif mat, passe-partout, mise sous protection. L\'œuvre est prête à voyager.',                           dur: '≈ 1 h'  },
]

export default function Processus() {
  return (
    <main>
      {/* Intro */}
      <header style={{ padding: '108px var(--pad-x) clamp(40px,5vw,68px)' }}>
        <div className="flex justify-between items-center border-b border-line pb-5 mb-[clamp(40px,7vw,100px)]">
          <span className="font-mono text-[11px] tracking-kicker uppercase text-fg-soft">— Processus / Making-of</span>
          <span className="font-mono text-[11px] tracking-kicker uppercase text-fg-soft">9 étapes · ~ 42 heures</span>
        </div>
        <Reveal>
          <AnimatedTitle
            as="h1"
            lines={[
              { text: 'De la photo' },
              { text: 'au dessin fini.', className: 'italic text-fg-soft' },
            ]}
            className="font-display font-light leading-[0.92] mb-10"
            style={{ fontSize: 'clamp(64px,9vw,160px)', letterSpacing: '-0.02em' }}
          />
        </Reveal>
        <Reveal delay={0.1}>
          <p className="font-display font-light italic text-[clamp(20px,1.6vw,26px)] text-fg-soft leading-[1.45] max-w-[620px]">
            Chaque portrait suit la même méthode lente — neuf étapes patientes,
            parfois trente heures d'écart entre la première esquisse et le dernier détail.
          </p>
        </Reveal>
      </header>

      {/* Scrollytelling */}
      <ScrollySection />

      {/* Before / After */}
      <BeforeAfterSection />

      {/* Videos */}
      <VideosSection />

      {/* CTA */}
      <section
        className="border-t border-line text-center"
        style={{ padding: 'clamp(52px,6vw,100px) var(--pad-x)' }}
      >
        <Reveal>
          <h2 className="font-display font-light leading-[0.95]" style={{ fontSize: 'clamp(48px,8vw,140px)' }}>
            Prêt à commencer<br /><em className="italic text-accent">un portrait</em> ?
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="flex gap-3.5 justify-center flex-wrap mt-14">
          <Btn to="/commander" filled>Commander un portrait <FiArrowRight /></Btn>
          <Btn to="/galerie">Voir la galerie</Btn>
        </Reveal>
      </section>
    </main>
  )
}

/* ============================================================
   Scrollytelling sticky section
   ============================================================ */
function ScrollySection() {
  const [activeStep, setActiveStep] = useState('01')

  return (
    <section
      className="border-t border-line grid grid-cols-1 lg:grid-cols-2 items-start"
      style={{
        padding: '0 var(--pad-x)',
        paddingTop: 'clamp(40px,5vw,80px)',
        gap: 'clamp(40px,6vw,120px)',
      }}
    >
      {/* Sticky visual */}
      <div className="scrolly-visual">
        <div className="relative h-full bg-bg-soft flex items-center justify-center p-6 overflow-hidden">
          {STEPS.map(({ n }) => (
            <motion.div
              key={n}
              className="absolute inset-6 flex items-center justify-center"
              animate={{ opacity: activeStep === n ? 1 : 0, scale: activeStep === n ? 1 : 0.96 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <Placeholder
                label={`étape ${n}`}
                description={`${n} — ${STEPS.find((s) => s.n === n)?.cat}`}
                aspectRatio="4/5"
                className="w-full max-w-[480px]"
              />
            </motion.div>
          ))}
          {/* Step counter */}
          <div className="absolute top-4 right-5 font-mono text-[10px] tracking-kicker text-fg-soft">
            <span className="text-fg">{activeStep}</span>
            <span className="ml-1">/ 09</span>
          </div>
        </div>
      </div>

      {/* Scrollable steps */}
      <ol className="flex flex-col py-[10vh]">
        {STEPS.map(({ n, cat, title, desc, dur }) => (
          <ScrollyStep
            key={n}
            n={n}
            cat={cat}
            title={title}
            desc={desc}
            dur={dur}
            onActivate={() => setActiveStep(n)}
          />
        ))}
      </ol>
    </section>
  )
}

function ScrollyStep({
  n, cat, title, desc, dur, onActivate,
}: (typeof STEPS)[0] & { onActivate: () => void }) {
  const ref = useRef<HTMLLIElement>(null)
  const isInView = useInView(ref, { margin: '-45% 0px -45% 0px' })

  useEffect(() => {
    if (isInView) onActivate()
  }, [isInView, onActivate])

  return (
    <li
      ref={ref}
      className="min-h-[70vh] py-[clamp(24px,4vw,60px)] border-b border-line flex flex-col justify-center gap-[18px] transition-opacity duration-[600ms]"
      style={{ opacity: isInView ? 1 : 0.35 }}
    >
      <span className="font-mono text-[11px] tracking-kicker uppercase text-accent">
        {n} — {cat}
      </span>
      <h3
        className="font-display italic font-normal leading-none"
        style={{ fontSize: 'clamp(36px,4.5vw,72px)', letterSpacing: '-0.005em' }}
      >
        {title}
      </h3>
      <p className="text-fg-soft text-[18px] max-w-[540px] leading-[1.5]">{desc}</p>
      <span className="font-mono text-[11px] tracking-wide uppercase text-fg-mute mt-3">{dur}</span>
    </li>
  )
}

/* ============================================================
   Before / After slider
   ============================================================ */
function BeforeAfterSection() {
  const [pct, setPct] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)
  const dragging = useRef(false)

  const move = (clientX: number) => {
    const r = containerRef.current?.getBoundingClientRect()
    if (!r) return
    setPct(Math.max(0, Math.min(100, ((clientX - r.left) / r.width) * 100)))
  }

  useEffect(() => {
    const onMove = (e: MouseEvent | TouchEvent) => {
      if (!dragging.current) return
      const x = 'touches' in e ? e.touches[0].clientX : e.clientX
      move(x)
    }
    const onUp = () => { dragging.current = false }
    window.addEventListener('mousemove', onMove)
    window.addEventListener('touchmove', onMove)
    window.addEventListener('mouseup', onUp)
    window.addEventListener('touchend', onUp)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('touchmove', onMove)
      window.removeEventListener('mouseup', onUp)
      window.removeEventListener('touchend', onUp)
    }
  }, [])

  return (
    <section className="border-t border-line" style={{ padding: 'clamp(52px,7vw,100px) var(--pad-x)' }}>
      <div
        className="grid grid-cols-1 md:grid-cols-[1fr_2fr_1.5fr] items-end mb-[clamp(40px,5vw,80px)] gap-[clamp(28px,4vw,80px)]"
      >
        <Reveal>
          <span className="font-mono text-[10px] tracking-eyebrow uppercase text-fg-soft">— Avant / après</span>
        </Reveal>
        <Reveal delay={0.04}>
          <h2 className="font-display font-light leading-[0.95]" style={{ fontSize: 'clamp(48px,7vw,120px)' }}>
            Glisser pour<br /><em className="italic text-accent">comparer</em>.
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="font-display font-light italic text-[clamp(20px,1.6vw,26px)] text-fg-soft leading-[1.45]">
            Photo de référence à gauche, dessin final à droite.
          </p>
        </Reveal>
      </div>

      <Reveal variant="clip">
        <div
          ref={containerRef}
          className="relative overflow-hidden select-none bg-bg-soft"
          onClick={(e) => move(e.clientX)}
        >
          {/* Before */}
          <Placeholder label="avant" description="photo de référence — avant" aspectRatio="16/10" />

          {/* After (clipped) */}
          <div
            className="absolute inset-0"
            style={{ clipPath: `inset(0 0 0 ${pct}%)` }}
          >
            <Placeholder label="après" description="dessin final — après ~ 42 h" aspectRatio="16/10" />
          </div>

          {/* Handle */}
          <div
            className="absolute top-0 bottom-0 flex items-center justify-center"
            style={{ left: `${pct}%`, transform: 'translateX(-50%)', width: 2, background: 'var(--bg)' }}
            onMouseDown={() => { dragging.current = true }}
            onTouchStart={() => { dragging.current = true }}
          >
            <div
              className="relative w-14 h-14 rounded-full bg-bg border border-fg flex items-center justify-between px-3 font-mono text-[12px]"
              style={{ minWidth: 56 }}
            >
              ←&nbsp;&nbsp;→
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}

/* ============================================================
   Videos section
   ============================================================ */
const VIDEOS = [
  { platform: 'Instagram', title: "L'œil en 40 secondes",   desc: "Reel 40s — œil complet"       },
  { platform: 'TikTok',    title: '42 h en 60 secondes',    desc: "TikTok 1 min — visage entier"  },
  { platform: 'YouTube',   title: 'Détail — la peau',       desc: 'YouTube short — texture peau'  },
]

function VideosSection() {
  return (
    <section className="border-t border-line" style={{ padding: 'clamp(52px,7vw,100px) var(--pad-x)' }}>
      <div
        className="grid grid-cols-1 md:grid-cols-[1fr_2fr_1.5fr] items-end mb-[clamp(40px,5vw,80px)] gap-[clamp(28px,4vw,80px)]"
      >
        <Reveal>
          <span className="font-mono text-[10px] tracking-eyebrow uppercase text-fg-soft">— Time-lapse / Réseaux</span>
        </Reveal>
        <Reveal delay={0.04}>
          <h2 className="font-display font-light leading-[0.95]" style={{ fontSize: 'clamp(48px,7vw,120px)' }}>
            Voir le crayon <em className="italic text-fg-soft">en mouvement</em>.
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="font-display font-light italic text-[clamp(20px,1.6vw,26px)] text-fg-soft leading-[1.45]">
            Trois extraits accélérés pour comprendre la construction d'un portrait.
          </p>
        </Reveal>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[clamp(20px,3vw,48px)]">
        {VIDEOS.map(({ platform, title, desc }, i) => (
          <Reveal key={platform} variant="clip" delay={i * 0.1}>
            <figure className="group flex flex-col gap-4">
              <div className="relative">
                <Placeholder label={`video 0${i + 1}`} description={desc} aspectRatio="9/16" />
                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-bg border border-line flex items-center justify-center text-[18px] transition-all duration-[400ms] group-hover:scale-110 group-hover:bg-fg group-hover:text-bg">
                    ▶
                  </div>
                </div>
              </div>
              <figcaption className="flex justify-between font-mono text-[10px] tracking-wide uppercase text-fg-soft">
                <span>{platform}</span>
                <span className="font-display not-italic text-[14px] tracking-normal normal-case text-fg">{title}</span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
