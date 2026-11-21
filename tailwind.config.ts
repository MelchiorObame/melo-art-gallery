import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // rgb channels → Tailwind opacity modifiers (bg-fg/40…) work and follow the theme
        bg:       'rgb(var(--bg-rgb) / <alpha-value>)',
        'bg-soft':'rgb(var(--bg-soft-rgb) / <alpha-value>)',
        'bg-deep':'rgb(var(--bg-deep-rgb) / <alpha-value>)',
        'bg-bio': 'rgb(var(--bg-bio-rgb) / <alpha-value>)',
        fg:       'rgb(var(--fg-rgb) / <alpha-value>)',
        'fg-soft':'rgb(var(--fg-soft-rgb) / <alpha-value>)',
        'fg-mute':'rgb(var(--fg-mute-rgb) / <alpha-value>)',
        accent:   'rgb(var(--accent-rgb) / <alpha-value>)',
        paper:    'rgb(243 237 227 / <alpha-value>)', // fixed light ink for text over images
      },
      fontFamily: {
        display: ['var(--font-display)'],
        mono:    ['var(--font-mono)'],
      },
      letterSpacing: {
        kicker:  '0.18em',
        eyebrow: '0.22em',
        wide:    '0.16em',
      },
      transitionTimingFunction: {
        'ease-out-expo': 'cubic-bezier(.16, 1, .3, 1)',
        'ease-art':      'cubic-bezier(.2, .7, .2, 1)',
      },
      animation: {
        pulse: 'pulse 2s cubic-bezier(.2,.7,.2,1) infinite',
      },
    },
  },
  plugins: [],
} satisfies Config
