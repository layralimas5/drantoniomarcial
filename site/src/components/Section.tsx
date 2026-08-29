import type { ReactNode } from 'react'
import { m, useReducedMotion } from 'framer-motion'

/** De onde a seção entra quando aparece na tela. */
export type Origem = 'esquerda' | 'direita' | 'baixo'

const DESLOCAMENTO: Record<Origem, { x: number; y: number }> = {
  esquerda: { x: -56, y: 0 },
  direita: { x: 56, y: 0 },
  baixo: { x: 0, y: 28 },
}

interface SectionProps {
  id?: string
  children: ReactNode
  className?: string
  labelledBy?: string
  origem?: Origem
}

export function Section({
  id,
  children,
  className = '',
  labelledBy,
  origem = 'baixo',
}: SectionProps) {
  const reduceMotion = useReducedMotion()
  const { x, y } = DESLOCAMENTO[origem]

  return (
    <m.section
      id={id}
      aria-labelledby={labelledBy}
      className={`py-10 md:py-24 ${className}`}
      initial={reduceMotion ? false : { opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
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
      className={`text-[1.375rem] font-semibold leading-tight tracking-tight text-ink-900 sm:text-3xl md:text-4xl ${className}`}
    >
      {children}
    </h2>
  )
}
