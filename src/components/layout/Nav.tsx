import { NavLink } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { preloadRoute } from '../../lib/routePreload'
import ThemeToggle from '../ui/ThemeToggle'

const links = [
  { to: '/',          label: 'Accueil'  },
  { to: '/galerie',   label: 'Galerie'  },
  { to: '/commander', label: 'Commander'},
  { to: '/processus', label: 'Processus'},
  { to: '/a-propos',  label: 'À propos' },
  { to: '/contact',   label: 'Contact'  },
]

function handlePrefetch(path: string) {
  preloadRoute(path)
}

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
        className="nav-glass fixed top-0 left-0 right-0 z-[80] flex flex-wrap items-center justify-between gap-3 text-fg"
        style={{ padding: '22px var(--pad-x)' }}
        aria-label="Principal"
      >
        <NavLink to="/" className="font-display text-[22px] tracking-[0.04em] text-fg">
          Melo<sup className="font-mono text-[9px] tracking-[0.2em] ml-1.5 opacity-60">ART</sup>
        </NavLink>

        <div className="flex flex-wrap items-center gap-4 md:gap-8 font-mono text-[10px] md:text-[11px] tracking-wide uppercase justify-end">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              onMouseEnter={() => handlePrefetch(to)}
              onFocus={() => handlePrefetch(to)}
              onTouchStart={() => handlePrefetch(to)}
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
          <ThemeToggle />
        </div>
      </nav>
    </>
  )
}
