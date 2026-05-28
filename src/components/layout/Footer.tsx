import { Link } from 'react-router-dom'
import { FiInstagram } from 'react-icons/fi'
import { SiTiktok, SiYoutube, SiBehance, SiPinterest } from 'react-icons/si'
import Reveal from '../ui/Reveal'

const studio = [
  { to: '/galerie',   label: 'Galerie'   },
  { to: '/commander', label: 'Commander' },
  { to: '/processus', label: 'Processus' },
  { to: '/a-propos',  label: 'À propos'  },
]

const social = [
  { href: '#', icon: <FiInstagram />, label: 'Instagram' },
  { href: '#', icon: <SiTiktok />,    label: 'TikTok'    },
  { href: '#', icon: <SiYoutube />,   label: 'YouTube'   },
  { href: '#', icon: <SiBehance />,   label: 'Behance'   },
  { href: '#', icon: <SiPinterest />, label: 'Pinterest' },
]

export default function Footer() {
  return (
    <footer
      className="border-t border-line bg-bg grid gap-10"
      style={{
        padding: '80px var(--pad-x) 40px',
        gridTemplateColumns: '2fr 1fr 1fr 1fr',
      }}
    >
      {/* Brand */}
      <Reveal>
        <span className="font-mono text-[11px] tracking-kicker uppercase text-fg-soft">
          Atelier Melo — Paris
        </span>
        <div
          className="font-display font-light text-[clamp(56px,9vw,140px)] leading-none mt-6"
        >
          <em className="italic">Melo</em>Art
        </div>
        <p className="font-display font-light text-[clamp(18px,1.4vw,22px)] italic text-fg-soft mt-4 max-w-[480px] leading-[1.45]">
          Portraits hyperréalistes dessinés à la main — sur commande,
          dans le respect du modèle.
        </p>
      </Reveal>

      {/* Studio links */}
      <Reveal delay={0.05}>
        <h4 className="font-mono text-[10px] tracking-[0.2em] uppercase text-fg-soft mb-[18px]">Studio</h4>
        <ul className="space-y-2.5">
          {studio.map(({ to, label }) => (
            <li key={to} className="text-sm">
              <Link to={to} className="hover:text-fg-soft transition-colors duration-300">{label}</Link>
            </li>
          ))}
        </ul>
      </Reveal>

      {/* Social links */}
      <Reveal delay={0.08}>
        <h4 className="font-mono text-[10px] tracking-[0.2em] uppercase text-fg-soft mb-[18px]">Suivre</h4>
        <ul className="space-y-2.5">
          {social.map(({ href, icon, label }) => (
            <li key={label} className="text-sm">
              <a href={href} className="flex items-center gap-2 hover:text-fg-soft transition-colors duration-300">
                <span className="text-base">{icon}</span> {label}
              </a>
            </li>
          ))}
        </ul>
      </Reveal>

      {/* Contact */}
      <Reveal delay={0.11}>
        <h4 className="font-mono text-[10px] tracking-[0.2em] uppercase text-fg-soft mb-[18px]">Contact</h4>
        <ul className="space-y-2.5 text-sm text-fg-soft">
          <li>melo@melo-art.fr</li>
          <li>+33 (0)6 00 00 00 00</li>
          <li>Sur rendez-vous</li>
        </ul>
      </Reveal>

      {/* Bottom bar */}
      <div className="col-span-full flex justify-between items-end pt-20 font-mono text-[11px] tracking-[0.14em] text-fg-soft">
        <span>© MMXXVI — Melo. Tous droits réservés.</span>
        <span>Conçu à l'atelier, ligne par ligne.</span>
      </div>
    </footer>
  )
}
