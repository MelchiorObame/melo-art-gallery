import { motion } from 'framer-motion'
import type { CSSProperties, ReactNode } from 'react'
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
    hidden:  { opacity: 0 },
    visible: { opacity: 1 },
  },
}

const durations: Record<Variant, number> = {
  fade: 1,
  rise: 1.4,
  clip: 1.9,
}

interface RevealProps {
  children:   ReactNode
  delay?:     number
  variant?:   Variant
  className?: string
  style?:     CSSProperties
  as?:        'div' | 'li' | 'section' | 'article' | 'header' | 'span'
}

const motionTags = {
  div: motion.div,
  li: motion.li,
  section: motion.section,
  article: motion.article,
  header: motion.header,
  span: motion.span,
} as const

export default function Reveal({
  children,
  delay   = 0,
  variant = 'fade',
  className,
  style,
  as: Tag = 'div',
}: RevealProps) {
  const MotionTag = motionTags[Tag]

  return (
    <MotionTag
      className={cn(className)}
      style={style}
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
