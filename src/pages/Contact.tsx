import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi'
import { useState, type FormEvent, type ReactNode } from 'react'
import Reveal from '../components/ui/Reveal'
import AnimatedTitle from '../components/ui/AnimatedTitle'
import Btn from '../components/ui/Btn'

const contactCards = [
  {
    icon: <FiMail size={18} />,
    label: 'E-mail',
    value: 'melo@melo-art.fr',
    href: 'mailto:melo@melo-art.fr',
  },
  {
    icon: <FiPhone size={18} />,
    label: 'Telephone',
    value: '+33 (0)6 29 18 81 11',
    href: 'tel:+33629188111',
  },
  {
    icon: <FiMapPin size={18} />,
    label: 'Atelier',
    value: 'Paris, France',
    href: '#',
  },
]

export default function Contact() {
  const [sent, setSent] = useState(false)

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const data = new FormData(event.currentTarget)
    const name = String(data.get('name') || '').trim()
    const email = String(data.get('email') || '').trim()
    const inquiry = String(data.get('subject') || '').trim()
    const message = String(data.get('message') || '').trim()

    const subject = encodeURIComponent(
      inquiry ? `Demande de contact - ${inquiry}` : `Demande de contact - ${name || 'Nouveau message'}`,
    )
    const body = encodeURIComponent(
      `Nom: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    )

    window.location.href = `mailto:melo@melo-art.fr?subject=${subject}&body=${body}`
    setSent(true)
    event.currentTarget.reset()
  }

  return (
    <main>
      <header
        className="border-b border-line"
        style={{ padding: '108px var(--pad-x) clamp(40px,5vw,68px)' }}
      >
        <div className="flex justify-between items-center border-b border-line pb-5 mb-[clamp(40px,7vw,100px)]">
          <span className="font-mono text-[11px] tracking-kicker uppercase text-fg-soft">— Contact</span>
          <span className="font-mono text-[11px] tracking-kicker uppercase text-fg-soft">Reponse sous 48 h</span>
        </div>

        <Reveal>
          <AnimatedTitle
            as="h1"
            lines={[
              { text: 'Parlons de' },
              { text: 'votre projet.', className: 'italic text-fg-soft' },
            ]}
            className="font-display font-light leading-[0.92] mb-10"
            style={{ fontSize: 'clamp(64px,9vw,160px)', letterSpacing: '-0.02em' }}
          />
        </Reveal>

        <Reveal delay={0.1}>
          <p className="font-display font-light italic text-[clamp(20px,1.6vw,26px)] text-fg-soft leading-[1.45] max-w-[620px]">
            Que vous soyez collectionneur, galeriste ou amateur d'art,
            je serai heureux d'echanger avec vous autour de mon travail.
          </p>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="text-[15px] leading-[1.75] text-fg-soft max-w-[760px]">
            Pour toute demande d'information, commande sur mesure, exposition ou collaboration artistique,
            vous pouvez me contacter via le formulaire ci-dessous ou directement a l'adresse suivante :
            <span className="font-mono ml-1">melo@melo-art.fr</span>.
            Je reponds personnellement a chaque message dans les plus brefs delais.
            Merci pour votre interet, votre confiance et votre sensibilite envers mon univers artistique.
          </p>
        </Reveal>
      </header>

      <section style={{ padding: 'clamp(52px,7vw,100px) var(--pad-x)' }}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[clamp(20px,3vw,44px)]">
          {contactCards.map(({ icon, label, value, href }, i) => (
            <Reveal key={label} delay={i * 0.06}>
              <a
                href={href}
                className="group border border-line p-6 flex flex-col gap-4 hover:border-fg hover:bg-bg-soft transition-all duration-300"
              >
                <span className="text-fg-soft group-hover:text-fg transition-colors duration-300">{icon}</span>
                <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-fg-mute">{label}</span>
                <span className="font-display italic text-[24px] leading-[1.15] text-fg">{value}</span>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      <section
        className="border-t border-line"
        style={{ padding: 'clamp(52px,7vw,100px) var(--pad-x)' }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-[clamp(32px,5vw,80px)] items-start">
          <Reveal>
            <div>
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-fg-soft">— Ecrire un message</span>
              <h2
                className="font-display font-light leading-[0.95] mt-4"
                style={{ fontSize: 'clamp(42px,5.4vw,88px)' }}
              >
                Demandes, commandes,<br />
                <em className="italic text-accent">collaborations</em>.
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="flex flex-col gap-5">
              <div className="bg-bg border border-line p-[clamp(28px,4vw,56px)] relative min-h-[520px]">
                {sent ? (
                  <div className="absolute inset-0 flex flex-col justify-center p-[clamp(28px,4vw,56px)]">
                    <div className="font-display font-light italic text-[56px] leading-none mb-4">Merci.</div>
                    <p className="text-fg-soft max-w-[420px]">
                      Votre demande de contact est prete. Confirmez l'envoi dans votre application e-mail,
                      et je vous repondrai personnellement dans les plus brefs delais.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={onSubmit} className="grid grid-cols-2 gap-7">
                    <FormField label="Nom complet">
                      <input name="name" required className={fieldCls} placeholder="Votre nom" />
                    </FormField>

                    <FormField label="E-mail">
                      <input name="email" required type="email" className={fieldCls} placeholder="vous@email.com" />
                    </FormField>

                    <FormField label="Sujet" className="col-span-2">
                      <input name="subject" className={fieldCls} placeholder="Commande, collaboration, exposition..." />
                    </FormField>

                    <FormField label="Message" className="col-span-2">
                      <textarea
                        name="message"
                        required
                        className={`${fieldCls} resize-y min-h-[120px]`}
                        placeholder="Parlez-nous de votre demande en quelques lignes..."
                      />
                    </FormField>

                    <div className="col-span-2 flex justify-between items-center gap-4 flex-wrap mt-4">
                      <Btn type="submit" filled>
                        Envoyer la demande de contact
                      </Btn>
                      <p className="font-mono text-[10px] tracking-wide uppercase text-fg-soft">
                        Vos informations ne sont jamais partagees.
                      </p>
                    </div>
                  </form>
                )}
              </div>

              <p className="text-[13px] leading-[1.7] text-fg-soft">
                Je reponds personnellement a chaque message dans les plus brefs delais.
                Merci pour votre interet, votre confiance et votre sensibilite envers mon univers artistique.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  )
}

const fieldCls = 'w-full bg-transparent border-0 border-b border-line py-3 text-[15px] text-fg placeholder:text-fg-mute outline-none focus:border-fg transition-colors duration-300 appearance-none rounded-none font-[inherit]'

function FormField({
  label,
  children,
  className = '',
}: {
  label: string
  children: ReactNode
  className?: string
}) {
  return (
    <label className={`flex flex-col gap-2 ${className}`}>
      <span className="font-mono text-[11px] tracking-kicker uppercase text-fg-soft">{label}</span>
      {children}
    </label>
  )
}