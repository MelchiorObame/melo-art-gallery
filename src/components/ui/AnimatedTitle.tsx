import { motion } from 'framer-motion'
import type { CSSProperties, ElementType } from 'react'
import { cn } from '../../lib/utils'

type AnimatedLine = {
  text: string
  className?: string
}

interface AnimatedTitleProps {
  lines: AnimatedLine[]
  className?: string
  style?: CSSProperties
  as?: ElementType
  initialDelay?: number
  lineStagger?: number
  wordStagger?: number
}

export default function AnimatedTitle({
  lines,
  className,
  style,
  as: Tag = 'h1',
  initialDelay = 0.1,
  lineStagger = 0.18,
  wordStagger = 0.08,
}: AnimatedTitleProps) {
  return (
    <Tag className={cn(className)} style={style}>
      {lines.map((line, i) => (
        <span key={`${line.text}-${i}`} className="block overflow-hidden">
          <span className={cn('block', line.className)}>
            {line.text.split(' ').map((word, wi) => (
              <motion.span
                key={`${word}-${wi}`}
                className="inline-block mr-[0.25em]"
                initial={{ opacity: 0, y: '90%', filter: 'blur(8px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{
                  duration: 0.95,
                  ease: [0.16, 1, 0.3, 1],
                  delay: initialDelay + i * lineStagger + wi * wordStagger,
                }}
              >
                {word}
              </motion.span>
            ))}
          </span>
        </span>
      ))}
    </Tag>
  )
}