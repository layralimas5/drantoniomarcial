import type { ReactNode } from 'react'
import { m, useReducedMotion } from 'framer-motion'

interface SectionProps {
  id?: string
  children: ReactNode
  className?: string
  labelledBy?: string
}

export function Section({ id, children, className = '', labelledBy }: SectionProps) {
  const reduceMotion = useReducedMotion()

  return (
    <m.section
      id={id}
      aria-labelledby={labelledBy}
      className={`py-12 md:py-24 ${className}`}
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      {children}
    </m.section>
  )
}

interface SectionTitleProps {
  id: string
  children: ReactNode
  className?: string
}

export function SectionTitle({ id, children, className = '' }: SectionTitleProps) {
  return (
    <h2
      id={id}
      className={`text-2xl font-semibold leading-tight tracking-tight text-ink-900 sm:text-3xl md:text-4xl ${className}`}
    >
      {children}
    </h2>
  )
}
