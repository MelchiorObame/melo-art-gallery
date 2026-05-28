import { NavLink } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'

const links = [
  { to: '/',          label: 'Accueil'  },
  { to: '/galerie',   label: 'Galerie'  },
  { to: '/commander', label: 'Commander'},
  { to: '/processus', label: 'Processus'},
  { to: '/a-propos',  label: 'À propos' },
]

export default function Nav() {
  const { scrollYProgress } = useScroll()
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <>
      {/* Scroll-progress bar */}
      <div className="progress-track">
        <motion.div className="h-full bg-fg origin-left" style={{ scaleX }} />
      </div>

      {/* Nav — fond verre dépoli */}
      <nav
        className="fixed top-0 left-0 right-0 z-[80] flex items-center justify-between text-fg"
        style={{
          padding: '22px var(--pad-x)',
          background: 'rgba(243, 237, 227, 0.82)',
          backdropFilter: 'blur(24px) saturate(160%)',
          WebkitBackdropFilter: 'blur(24px) saturate(160%)',
          borderBottom: '1px solid rgba(43, 37, 32, 0.08)',
        }}
        aria-label="Principal"
      >
        <NavLink to="/" className="font-display text-[22px] tracking-[0.04em] text-fg">
          Melo<sup className="font-mono text-[9px] tracking-[0.2em] ml-1.5 opacity-60">ART</sup>
        </NavLink>

        <div className="flex gap-8 font-mono text-[11px] tracking-wide uppercase">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `relative py-1 text-fg transition-opacity duration-300 hover:opacity-100 ${
                  isActive
                    ? 'opacity-100 after:absolute after:left-0 after:right-0 after:-bottom-0.5 after:h-px after:bg-fg'
                    : 'opacity-50'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
      </nav>
    </>
  )
}
