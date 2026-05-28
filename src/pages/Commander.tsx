import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { FiArrowRight, FiUpload, FiFile } from 'react-icons/fi'
import Reveal from '../components/ui/Reveal'
import AnimatedTitle from '../components/ui/AnimatedTitle'
import Placeholder from '../components/ui/Placeholder'
import Btn from '../components/ui/Btn'

/* ---- Zod schema ---- */
const schema = z.object({
  name:      z.string().min(2, 'Votre nom est requis'),
  email:     z.string().email('Adresse email invalide'),
  type:      z.enum(['Individuel', 'Couple', 'Famille', 'Enfant', 'Hommage', 'Artiste / icône']),
  format:    z.enum(['A3', 'A2', 'Sur mesure']),
  technique: z.enum(['Graphite', 'Fusain', 'Crayon couleur', 'Technique mixte']),
  deadline:  z.string().optional(),
  message:   z.string().optional(),
  photo:     z.any().optional(),
})
type DevisForm = z.infer<typeof schema>

const TYPES     = ['Individuel', 'Couple', 'Famille', 'Enfant', 'Hommage', 'Artiste / icône'] as const
const FORMATS   = ['A3', 'A2', 'Sur mesure'] as const
const TECHS     = ['Graphite', 'Fusain', 'Crayon couleur', 'Technique mixte'] as const

const PORTRAIT_TYPES = [
  { label: 'Individuel', desc: 'Un seul visage, traité avec la plus grande précision.' },
  { label: 'Couple',     desc: 'Deux personnes, deux regards qui se répondent.'         },
  { label: 'Famille',    desc: 'Composition de 3 à 6 personnes, sur grand format.'      },
  { label: 'Enfant',     desc: 'Saisir une expression, un âge, un moment.'              },
  { label: 'Hommage',    desc: "D'après photo ancienne — mémoire et présence."          },
  { label: 'Artiste',    desc: 'Sur demande — à partir d\'une photo libre de droits.'   },
]

const PROCESS_STEPS = [
  { n: '01', title: 'Photo de référence',    desc: 'Vous envoyez une photo nette et bien éclairée du modèle.' },
  { n: '02', title: 'Validation',            desc: 'Je confirme si la photo est exploitable pour un rendu fidèle.' },
  { n: '03', title: 'Devis',                 desc: 'Format, technique, délai — tout est détaillé par écrit.' },
  { n: '04', title: 'Acompte',               desc: '30 % à la signature pour démarrer le dessin.' },
  { n: '05', title: 'Esquisse',              desc: 'Construction des proportions, validation des grandes lignes.' },
  { n: '06', title: 'Photos de progression', desc: 'Vous suivez l\'avancement, étape par étape.' },
  { n: '07', title: 'Finitions & fixatif',   desc: 'Détails finaux, protection de l\'œuvre.' },
  { n: '08', title: 'Livraison',             desc: 'Remise en main propre, ou envoi sécurisé avec passe-partout.' },
]

const TIPS = [
  { title: 'Lumière naturelle',   desc: 'De préférence proche d\'une fenêtre, sans flash.' },
  { title: 'Haute résolution',    desc: 'Minimum 2000 px de large — sans compression excessive.' },
  { title: 'Visage net',          desc: 'Mise au point sur les yeux, sans flou.' },
  { title: 'Expression naturelle',desc: 'L\'expression sera celle du portrait final.' },
]

export default function Commander() {
  const [sent, setSent] = useState(false)
  const [photoName, setPhotoName] = useState('')

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<DevisForm>({
    resolver: zodResolver(schema),
    defaultValues: { type: 'Individuel', format: 'A3', technique: 'Graphite' },
  })

  const photoReg = register('photo')

  const onSubmit = (_data: DevisForm) => {
    // TODO: wire to email service
    return new Promise<void>((res) => setTimeout(() => { setSent(true); res() }, 800))
  }

  return (
    <main>
      {/* Intro */}
      <PageIntro
        kicker="Commander"
        subtitle="Réponse sous 48 h · Devis personnalisé"
        titleLines={[
          { text: 'Faire dessiner' },
          { text: 'un portrait.', className: 'italic text-fg-soft' },
        ]}
        lede="Pour un cadeau, un souvenir familial, un hommage ou une décoration personnelle — je réalise des portraits uniques à partir de vos photos de référence."
      />

      {/* Types */}
      <section style={{ padding: 'clamp(52px,7vw,100px) var(--pad-x)' }}>
        <div
          className="grid items-end mb-[clamp(40px,5vw,80px)]"
          style={{ gridTemplateColumns: '1fr 2fr', gap: 'clamp(24px,4vw,80px)' }}
        >
          <Reveal>
            <span className="font-mono text-[10px] tracking-eyebrow uppercase text-fg-soft">01 — Types de portraits</span>
          </Reveal>
          <Reveal delay={0.04}>
            <h2 className="font-display font-light text-[clamp(48px,7vw,120px)] leading-[0.95]">
              Six manières<br />de <em className="italic text-fg-soft">regarder</em>.
            </h2>
          </Reveal>
        </div>
        <div className="grid grid-cols-3 gap-[clamp(20px,3vw,48px)]">
          {PORTRAIT_TYPES.map(({ label, desc }, i) => (
            <Reveal key={label} delay={i * 0.06}>
              <article className="flex flex-col gap-4">
                <Placeholder label={`type 0${i + 1}`} description={`portrait ${label.toLowerCase()}`} aspectRatio="4/5" />
                <h3 className="font-display italic text-[28px] font-normal mt-1.5">{label}</h3>
                <p className="text-fg-soft text-[14px] max-w-[280px]">{desc}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Formats & Techniques */}
      <section
        className="border-t border-line grid items-start"
        style={{
          padding: 'clamp(52px,7vw,100px) var(--pad-x)',
          gridTemplateColumns: '1fr 1fr',
          gap: 'clamp(40px,6vw,120px)',
        }}
      >
        {[
          {
            eyebrow: '02 — Formats',
            title: 'Sur papier\nBristol grain fin.',
            rows: [
              ['A3',     '29,7 × 42 cm',  'portrait standard'],
              ['A2',     '42 × 59,4 cm',  'œuvre principale'],
              ['CUSTOM', 'sur mesure',     "jusqu'à 70 × 100 cm"],
            ],
          },
          {
            eyebrow: '03 — Techniques',
            title: 'Quatre médiums.\nUne seule exigence.',
            rows: [
              ['01', 'Crayon graphite', 'précision, contrastes'],
              ['02', 'Fusain',          'profondeur, douceur'  ],
              ['03', 'Crayon couleur',  'sobre, nuancé'        ],
              ['04', 'Technique mixte', 'graphite + fusain + pastel'],
            ],
          },
        ].map(({ eyebrow, title, rows }) => (
          <div key={eyebrow}>
            <Reveal>
              <span className="font-mono text-[10px] tracking-eyebrow uppercase text-fg-soft">{eyebrow}</span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-display font-light text-[clamp(36px,4.5vw,72px)] leading-none my-4">
                {title.split('\n').map((l, i) => <span key={i} className="block">{l}</span>)}
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <ul className="border-t border-line">
                {rows.map(([k, v, sub]) => (
                  <li
                    key={k}
                    className="grid items-baseline gap-5 py-[22px] border-b border-line hover:pl-4 hover:bg-bg-soft transition-all duration-300"
                    style={{ gridTemplateColumns: '80px 1fr 1fr' }}
                  >
                    <span className="font-mono text-[11px] tracking-wide uppercase text-fg-soft">{k}</span>
                    <span className="text-[15px]">{v}</span>
                    <span className="font-display italic text-fg-soft">{sub}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        ))}
      </section>

      {/* Process steps */}
      <section
        className="border-t border-line"
        style={{ padding: 'clamp(52px,7vw,100px) var(--pad-x)' }}
      >
        <div className="mb-[clamp(50px,6vw,100px)]">
          <Reveal>
            <span className="font-mono text-[10px] tracking-eyebrow uppercase text-fg-soft">04 — Processus de commande</span>
          </Reveal>
          <Reveal delay={0.04}>
            <h2
              className="font-display font-light leading-[0.9] mt-4"
              style={{ fontSize: 'clamp(48px,8vw,140px)' }}
            >
              Huit étapes,<br />de la photo<br />au <em className="italic text-accent">cadre</em>.
            </h2>
          </Reveal>
        </div>
        <ol className="grid border-t border-l border-line" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
          {PROCESS_STEPS.map(({ n, title, desc }, i) => (
            <Reveal key={n} delay={i * 0.06} as="li" className="border-r border-b border-line p-8 pb-16 flex flex-col gap-4 min-h-[240px] hover:bg-bg-soft transition-colors duration-[400ms]">
              <span className="font-mono text-[11px] tracking-kicker uppercase text-fg-soft">{n}</span>
              <h3 className="font-display italic text-[28px] font-normal">{title}</h3>
              <p className="text-fg-soft text-[14px] leading-[1.55]">{desc}</p>
            </Reveal>
          ))}
        </ol>
      </section>

      {/* Photo tips */}
      <section
        className="border-t border-line grid items-start"
        style={{
          padding: 'clamp(52px,7vw,100px) var(--pad-x)',
          gridTemplateColumns: '1fr 1.2fr',
          gap: 'clamp(40px,6vw,120px)',
        }}
      >
        <div>
          <Reveal>
            <span className="font-mono text-[10px] tracking-eyebrow uppercase text-fg-soft">05 — Qualité de la photo</span>
          </Reveal>
          <Reveal delay={0.04}>
            <h2
              className="font-display font-light leading-[0.95] my-4"
              style={{ fontSize: 'clamp(44px,6vw,96px)' }}
            >
              Une bonne photo,<br />un bon <em className="italic text-fg-soft">portrait</em>.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="font-display font-light italic text-[clamp(20px,1.6vw,26px)] text-fg-soft leading-[1.45] max-w-[480px]">
              Pour un résultat optimal, envoyez une photo nette,
              bien éclairée, avec un visage visible et suffisamment détaillé.
            </p>
          </Reveal>
        </div>
        <ul>
          {TIPS.map(({ title, desc }, i) => (
            <Reveal key={title} delay={i * 0.06} as="li" className="grid items-start gap-6 py-7 border-b border-line first:border-t" style={{ gridTemplateColumns: '60px 1fr' }}>
              <span className="font-display italic text-[36px] text-accent">✓</span>
              <div>
                <h4 className="font-display italic text-[22px] font-normal mb-1.5">{title}</h4>
                <p className="text-fg-soft text-[14px]">{desc}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* Devis form */}
      <section
        id="devis"
        className="border-t border-line bg-bg-soft"
        style={{ padding: 'clamp(52px,7vw,100px) var(--pad-x)' }}
      >
        <div
          className="grid items-start"
          style={{ gridTemplateColumns: '1fr 1.4fr', gap: 'clamp(40px,5vw,100px)' }}
        >
          {/* Left: heading + price */}
          <div>
            <Reveal>
              <span className="font-mono text-[10px] tracking-eyebrow uppercase text-fg-soft">06 — Demander un devis</span>
            </Reveal>
            <Reveal delay={0.04}>
              <h2
                className="font-display font-light leading-[0.9] mt-4"
                style={{ fontSize: 'clamp(56px,8vw,140px)' }}
              >
                Commencer<br />un <em className="italic text-accent">portrait</em>.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="font-display font-light italic text-[clamp(20px,1.6vw,26px)] text-fg-soft leading-[1.45] mt-8 max-w-[420px]">
                Quelques questions pour préparer votre devis — je vous réponds personnellement sous 48 heures.
              </p>
            </Reveal>
            <Reveal delay={0.16}>
              <div className="mt-14 pt-8 pb-8 border-t border-b border-line flex flex-col gap-2">
                <span className="font-mono text-[11px] tracking-kicker uppercase text-fg-soft">à partir de</span>
                <span className="font-display font-light text-[64px] leading-none">
                  450 <em className="italic text-fg-soft">€</em>
                </span>
                <span className="font-mono text-[11px] tracking-kicker uppercase text-fg-soft">
                  format A3 — un sujet — graphite
                </span>
              </div>
            </Reveal>
          </div>

          {/* Right: form */}
          <Reveal delay={0.08}>
            <div className="bg-bg border border-line p-[clamp(28px,4vw,56px)] relative min-h-[600px]">
              {sent ? (
                <div className="absolute inset-0 flex flex-col justify-center p-[clamp(28px,4vw,56px)]">
                  <div className="font-display font-light italic text-[56px] leading-none mb-4">Merci.</div>
                  <p className="text-fg-soft max-w-[380px]">
                    Votre demande a été reçue. Je reviens vers vous personnellement sous 48 heures.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2 gap-7">
                  <FormField label="Nom complet" error={errors.name?.message}>
                    <input {...register('name')} placeholder="Marie Dupont" className={fieldCls} />
                  </FormField>

                  <FormField label="Email" error={errors.email?.message}>
                    <input {...register('email')} type="email" placeholder="obamemelchior@gmail.com.fr" className={fieldCls} />
                  </FormField>

                  <FormField label="Type de portrait" className="col-span-2">
                    <select {...register('type')} className={fieldCls}>
                      {TYPES.map((t) => <option key={t}>{t}</option>)}
                    </select>
                  </FormField>

                  <FormField label="Format souhaité">
                    <select {...register('format')} className={fieldCls}>
                      {FORMATS.map((f) => <option key={f}>{f}</option>)}
                    </select>
                  </FormField>

                  <FormField label="Technique">
                    <select {...register('technique')} className={fieldCls}>
                      {TECHS.map((t) => <option key={t}>{t}</option>)}
                    </select>
                  </FormField>

                  <FormField label="Échéance souhaitée" className="col-span-2">
                    <input {...register('deadline')} placeholder="Anniversaire en mai, mariage le 14 juin..." className={fieldCls} />
                  </FormField>

                  <FormField label="Description du projet" className="col-span-2">
                    <textarea {...register('message')} rows={5} placeholder="Parlez-moi du modèle, du contexte, de ce que vous aimeriez transmettre..." className={`${fieldCls} resize-y min-h-[100px]`} />
                  </FormField>

                  {/* ── Photo upload ── */}
                  <div className="col-span-2 flex flex-col gap-2">
                    <span className="font-mono text-[11px] tracking-kicker uppercase text-fg-soft">
                      Photo de référence
                    </span>
                    <label
                      htmlFor="photo-upload"
                      className="group flex flex-col items-center justify-center gap-3 border border-dashed border-line py-10 px-6 cursor-pointer hover:border-fg hover:bg-bg-soft transition-all duration-300 text-center"
                    >
                      {photoName ? (
                        <>
                          <FiFile size={22} className="text-accent" />
                          <span className="font-mono text-[11px] tracking-wide text-fg">{photoName}</span>
                          <span className="font-mono text-[10px] text-fg-mute">Cliquer pour changer</span>
                        </>
                      ) : (
                        <>
                          <FiUpload size={22} className="text-fg-soft group-hover:text-fg transition-colors duration-300" />
                          <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-fg-soft group-hover:text-fg transition-colors duration-300">
                            Glissez ou cliquez pour importer
                          </span>
                          <span className="font-mono text-[10px] text-fg-mute">JPG, PNG, WEBP — max 10 Mo</span>
                        </>
                      )}
                    </label>
                    <input
                      {...photoReg}
                      id="photo-upload"
                      type="file"
                      accept="image/jpeg,image/jpg,image/png,image/webp"
                      className="sr-only"
                      onChange={(e) => {
                        photoReg.onChange(e)
                        setPhotoName(e.target.files?.[0]?.name ?? '')
                      }}
                    />
                  </div>

                  <div className="col-span-2 flex justify-between items-center gap-4 flex-wrap mt-4">
                    <Btn type="submit" filled disabled={isSubmitting}>
                      {isSubmitting ? 'Envoi…' : 'Envoyer la demande'} <FiArrowRight />
                    </Btn>
                    <p className="font-mono text-[10px] tracking-wide uppercase text-fg-soft">
                      Vos informations ne sont jamais partagées.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  )
}

/* ---- Helpers ---- */
const fieldCls = 'w-full bg-transparent border-0 border-b border-line py-3 text-[15px] text-fg placeholder:text-fg-mute outline-none focus:border-fg transition-colors duration-300 appearance-none rounded-none font-[inherit]'

function FormField({
  label,
  error,
  children,
  className = '',
}: {
  label:     string
  error?:    string
  children:  React.ReactNode
  className?: string
}) {
  return (
    <label className={`flex flex-col gap-2 ${className}`}>
      <span className="font-mono text-[11px] tracking-kicker uppercase text-fg-soft">{label}</span>
      {children}
      {error && <span className="font-mono text-[10px] text-red-500">{error}</span>}
    </label>
  )
}

/* ---- Shared PageIntro ---- */
function PageIntro({ kicker, subtitle, titleLines, lede }: {
  kicker:   string
  subtitle: string
  titleLines: { text: string; className?: string }[]
  lede:     string
}) {
  return (
    <header style={{ padding: '108px var(--pad-x) clamp(40px,5vw,68px)' }}>
      <div className="flex justify-between items-center border-b border-line pb-5 mb-[clamp(40px,7vw,100px)]">
        <span className="font-mono text-[11px] tracking-kicker uppercase text-fg-soft">— {kicker}</span>
        <span className="font-mono text-[11px] tracking-kicker uppercase text-fg-soft">{subtitle}</span>
      </div>
      <Reveal>
        <AnimatedTitle
          as="h1"
          lines={titleLines}
          className="font-display font-light leading-[0.92] mb-10"
          style={{ fontSize: 'clamp(60px,12vw,200px)', letterSpacing: '-0.02em' }}
        />
      </Reveal>
      <Reveal delay={0.1}>
        <p className="font-display font-light italic text-[clamp(20px,1.6vw,26px)] text-fg-soft leading-[1.45] max-w-[620px]">
          {lede}
        </p>
      </Reveal>
    </header>
  )
}
