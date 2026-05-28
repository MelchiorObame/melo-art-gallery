import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg:       'var(--bg)',
        'bg-soft':'var(--bg-soft)',
        'bg-deep':'var(--bg-deep)',
        fg:       'var(--fg)',
        'fg-soft':'var(--fg-soft)',
        'fg-mute':'var(--fg-mute)',
        accent:   'var(--accent)',
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
