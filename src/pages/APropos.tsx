import { FiArrowRight } from 'react-icons/fi'
import Reveal from '../components/ui/Reveal'
import AnimatedTitle from '../components/ui/AnimatedTitle'
import Placeholder from '../components/ui/Placeholder'
import Marquee from '../components/ui/Marquee'
import Btn from '../components/ui/Btn'

const TIMELINE = [
  { year: '2018', title: 'Premiers crayons.',            desc: 'Découverte du dessin réaliste à travers les portraits académiques. Études autodidactes, des heures passées à reproduire des maîtres classiques.' },
  { year: '2021', title: "Passage à l'hyperréalisme.",   desc: 'Approfondissement de la technique du graphite. Apprentissage du dégradé infini, des textures de peau et du rendu lumineux.' },
  { year: '2024', title: 'Ouverture aux commandes.',     desc: "Lancement de l'activité de portraitiste sur commande. Premiers clients en France, Belgique, Suisse. Présence sur les réseaux." },
  { year: '2026', title: 'Atelier Melo — Paris.',        desc: 'Installation dans un atelier dédié. Travail sur de plus grands formats, exploration de la technique mixte, premières expositions collectives.' },
]

const DEMARCHE = [
  { n: '01', title: 'Précision', desc: 'Chaque trait est mesuré avant d\'être posé. Le respect des proportions ouvre la voie à l\'émotion.' },
  { n: '02', title: 'Patience',  desc: 'De 18 à 60 heures par dessin. Le temps long est ce qui permet à la peau, aux cheveux, au regard de devenir vrais.' },
  { n: '03', title: 'Lumière',   desc: 'Le portrait se construit par les contrastes. La lumière sculpte les volumes, révèle les textures.' },
  { n: '04', title: 'Présence',  desc: "Au-delà de la ressemblance, c'est l'âme du modèle qu'il s'agit de saisir. Le regard, l'attention, l'instant." },
  { n: '05', title: 'Texture',   desc: 'Peau, cheveux, tissus, mains — chaque matière a sa technique propre. Aucune n\'est ignorée.' },
  { n: '06', title: 'Respect',   desc: 'Le modèle — vivant ou disparu — est traité avec considération. Aucune caricature, aucune trahison.' },
]

const MATERIEL = [
  { title: 'Crayons graphite', desc: 'Du 9H au 9B — toute la gamme de duretés pour gérer les contrastes les plus fins.' },
  { title: 'Fusain',           desc: 'Bâtons compressés pour les noirs profonds, fusain de saule pour la douceur.' },
  { title: 'Papier Bristol',   desc: 'Grain extra-fin 300 g/m², capable de tenir jusqu\'à dix couches de graphite.' },
  { title: 'Estompes & gommes',desc: 'Estompes pour fondre les valeurs, gomme mie de pain pour révéler la lumière.' },
  { title: 'Fixatif',          desc: 'Appliqué en fines couches pour protéger l\'œuvre sans modifier ses contrastes.' },
  { title: 'Table à dessin',   desc: 'Plan inclinable, éclairage LED neutre (5500K) pour reproduire fidèlement les valeurs.' },
]

const EXPOSITIONS_PRESSE = [
  {
    date: 'Mars 2024',
    text: 'Exposition collective, Paris 11e — sélection de trois portraits graphite autour du thème "Présences".',
  },
  {
    date: 'Novembre 2024',
    text: 'Interview invitée sur une plateforme d\'art francophone à propos du processus hyperréaliste et des commandes privées.',
  },
  {
    date: 'Mai 2025',
    text: 'Participation à un accrochage indépendant à Bruxelles — série d\'études de regards et textures.',
  },
  {
    date: 'Février 2026',
    text: 'Présentation d\'atelier ouverte au public à Paris : démonstration en direct et échange autour du portrait sur commande.',
  },
]

export default function APropos() {
  return (
    <main>
      {/* Hero */}
      <header
        className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] items-end"
        style={{
          padding: '140px var(--pad-x) clamp(40px,6vw,100px)',
          gap: 'clamp(40px,6vw,120px)',
        }}
      >
        <div>
          <Reveal>
            <span className="font-mono text-[11px] tracking-kicker uppercase text-fg-soft">— L'artiste</span>
          </Reveal>
          <Reveal delay={0.08}>
            <AnimatedTitle
              as="h1"
              lines={[
                { text: "L'artiste," },
                { text: 'le geste,' },
                { text: 'la présence.', className: 'italic text-accent' },
              ]}
              className="font-display font-light leading-[0.9] my-8"
              style={{ fontSize: 'clamp(64px,9vw,160px)', letterSpacing: '-0.02em' }}
            />
          </Reveal>
          <Reveal delay={0.16}>
            <p className="font-display font-light italic text-[clamp(20px,1.6vw,26px)] text-fg-soft leading-[1.45] max-w-[540px]">
              Depuis plusieurs années, je développe une pratique centrée
              sur le portrait. Mon objectif n'est pas seulement de reproduire
              les traits visibles, mais de transmettre l'émotion et la présence
              du modèle.
            </p>
          </Reveal>
        </div>

        <Reveal variant="clip">
          <figure>
            <Placeholder label="portrait Melo" description="photo de Melo à l'atelier" aspectRatio="4/5" />
            <figcaption className="font-mono text-[10px] tracking-kicker uppercase text-fg-soft mt-3.5">
              Atelier Melo — Paris — 2025
            </figcaption>
          </figure>
        </Reveal>
      </header>

      <Marquee items={['Patience', 'Précision', 'Présence', 'Lumière', 'Texture', 'Émotion']} />

      {/* Timeline */}
      <section style={{ padding: 'clamp(52px,7vw,100px) var(--pad-x)' }}>
        <div
          className="grid grid-cols-1 md:grid-cols-[1fr_2fr] items-end mb-[clamp(40px,5vw,80px)] gap-[clamp(32px,4vw,80px)]"
        >
          <Reveal>
            <span className="font-mono text-[10px] tracking-eyebrow uppercase text-fg-soft">— Parcours</span>
          </Reveal>
          <Reveal delay={0.04}>
            <h2 className="font-display font-light text-[clamp(48px,6vw,96px)] leading-[0.95]">
              Un parcours<br />en <em className="italic text-fg-soft">quatre temps</em>.
            </h2>
          </Reveal>
        </div>

        <ol className="border-t border-line">
          {TIMELINE.map(({ year, title, desc }, i) => (
            <Reveal
              key={year}
              delay={i * 0.08}
              as="li"
              className="grid grid-cols-1 md:grid-cols-[160px_1fr] items-start border-b border-line md:hover:pl-6 transition-all duration-[400ms]"
              style={{
                gap: 'clamp(20px,4vw,60px)',
                padding: 'clamp(32px,4vw,60px) 0',
              }}
            >
              <span className="font-mono text-[14px] tracking-kicker text-accent pt-1.5">{year}</span>
              <div>
                <h3 className="font-display italic text-[clamp(28px,3vw,44px)] font-normal leading-none mb-3.5">{title}</h3>
                <p className="text-fg-soft max-w-[620px] text-[16px]">{desc}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </section>

      {/* Démarche */}
      <section className="border-t border-line" style={{ padding: 'clamp(52px,7vw,100px) var(--pad-x)' }}>
        <Reveal className="mb-[clamp(40px,5vw,80px)]">
          <span className="font-mono text-[10px] tracking-eyebrow uppercase text-fg-soft">— Démarche artistique</span>
          <h2
            className="font-display font-light leading-[0.95] mt-4"
            style={{ fontSize: 'clamp(48px,8vw,140px)' }}
          >
            Pas seulement<br />ressembler.<br />Respirer.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 border-t border-l border-line">
          {DEMARCHE.map(({ n, title, desc }, i) => (
            <Reveal
              key={n}
              delay={i * 0.06}
              className="border-r border-b border-line p-10 flex flex-col gap-4 min-h-[260px] hover:bg-bg-soft transition-colors duration-[400ms]"
            >
              <span className="font-mono text-[11px] tracking-kicker uppercase text-fg-soft">{n}</span>
              <h3 className="font-display italic text-[32px] font-normal">{title}</h3>
              <p className="text-fg-soft text-[14px]">{desc}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Statement */}
      <section
        className="border-t border-line text-center"
        style={{ padding: 'clamp(52px,7vw,104px) var(--pad-x)' }}
      >
        <Reveal>
          <p
            className="font-display font-light leading-[1.2] max-w-[1100px] mx-auto"
            style={{ fontSize: 'clamp(28px,3.2vw,56px)', letterSpacing: '-0.005em' }}
          >
            <em className="not-italic text-accent text-[1.4em] align-[-0.1em] mx-1">«</em>
            Mon style se caractérise par un rendu détaillé, des contrastes
            forts et une attention particulière portée aux expressions du visage.
            Chaque portrait est construit progressivement, couche après couche.
            <em className="not-italic text-accent text-[1.4em] align-[-0.1em] mx-1">»</em>
          </p>
          <div className="mt-12 text-[22px] font-display italic text-fg-soft">— Melo</div>
        </Reveal>
      </section>

      {/* Matériel */}
      <section className="border-t border-line" style={{ padding: 'clamp(52px,7vw,100px) var(--pad-x)' }}>
        <Reveal className="mb-[clamp(40px,5vw,80px)]">
          <span className="font-mono text-[10px] tracking-eyebrow uppercase text-fg-soft">— Matériel de l'atelier</span>
          <h2
            className="font-display font-light leading-[0.95] mt-4"
            style={{ fontSize: 'clamp(48px,6vw,100px)' }}
          >
            Des outils,<br />peu nombreux,<br />
            <em className="italic text-fg-soft">longtemps cherchés</em>.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[clamp(24px,3vw,56px)]">
          {MATERIEL.map(({ title, desc }, i) => (
            <Reveal key={title} delay={i * 0.07}>
              <article className="flex flex-col gap-4">
                <Placeholder label={`mat. 0${i + 1}`} description={title.toLowerCase()} aspectRatio="5/4" />
                <h3 className="font-display italic text-[26px] font-normal">{title}</h3>
                <p className="text-fg-soft text-[14px]">{desc}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Expositions & Presse */}
      <section className="border-t border-line" style={{ padding: 'clamp(52px,7vw,100px) var(--pad-x)' }}>
        <div
          className="grid grid-cols-1 md:grid-cols-[1fr_2fr] items-start mb-[clamp(32px,4vw,64px)] gap-[clamp(28px,4vw,80px)]"
        >
          <Reveal>
            <span className="font-mono text-[10px] tracking-eyebrow uppercase text-fg-soft">— Expositions et presse</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-display font-light leading-[0.95]" style={{ fontSize: 'clamp(40px,5vw,82px)' }}>
              Expositions,<br />articles et
              <em className="italic text-fg-soft"> interventions</em>.
            </h2>
          </Reveal>
        </div>

        <Reveal delay={0.08}>
          <ul className="border-t border-line">
            {EXPOSITIONS_PRESSE.map(({ date, text }, i) => (
              <li
                key={`${date}-${i}`}
                className="grid grid-cols-1 md:grid-cols-[150px_1fr] items-start gap-3 md:gap-6 py-6 border-b border-line"
              >
                <span className="font-mono text-[11px] tracking-kicker uppercase text-accent pt-0.5">{date}</span>
                <span className="text-[15px] leading-[1.7] text-fg-soft flex items-start gap-3">
                  <span className="text-accent mt-[6px] shrink-0 text-[8px]">◆</span>
                  {text}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      {/* CTA */}
      <section
        className="border-t border-line text-center"
        style={{ padding: 'clamp(52px,6vw,100px) var(--pad-x)' }}
      >
        <Reveal>
          <h2 className="font-display font-light leading-[0.95]" style={{ fontSize: 'clamp(48px,8vw,140px)' }}>
            <em className="italic text-accent">Confier</em> un visage,<br />
            c'est confier<br />une histoire.
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
