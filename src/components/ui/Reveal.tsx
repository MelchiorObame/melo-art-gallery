import { motion } from 'framer-motion'
import type { ReactNode, ElementType } from 'react'
import { cn } from '../../lib/utils'

type Variant = 'fade' | 'clip' | 'rise'

const variants = {
  fade: {
    hidden:  { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0  },
  },
  rise: {
    hidden:  { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0  },
  },
  clip: {
    hidden:  { clipPath: 'inset(0 0 100% 0)' },
    visible: { clipPath: 'inset(0 0 0% 0)'   },
  },
}

const durations: Record<Variant, number> = {
  fade: 1,
  rise: 1.4,
  clip: 1.4,
}

interface RevealProps {
  children:  ReactNode
  delay?:    number
  variant?:  Variant
  className?: string
  as?:       ElementType
}

export default function Reveal({
  children,
  delay   = 0,
  variant = 'fade',
  className,
  as: Tag = 'div',
}: RevealProps) {
  const MotionTag = motion(Tag as 'div')

  return (
    <MotionTag
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-8% 0px' }}
      variants={variants[variant]}
      transition={{
        duration: durations[variant],
        ease: [0.16, 1, 0.3, 1],
        delay,
      }}
    >
      {children}
    </MotionTag>
  )
}
