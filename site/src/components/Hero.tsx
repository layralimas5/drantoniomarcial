import { m, useReducedMotion } from 'framer-motion'
import { AnchorButton, WhatsAppButton } from './CtaButton'
import { clinic, dentist } from '../lib/site-config'

export function Hero() {
  const reduceMotion = useReducedMotion()
  const fade = reduceMotion ? {} : { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } }

  return (
    <header className="relative overflow-hidden bg-cream-50 pt-12 pb-16 md:pt-20 md:pb-24 lg:min-h-[92svh] lg:content-center">
      <div className="container-page grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <m.div {...fade} transition={{ duration: 0.6, ease: 'easeOut' }}>
          <p className="mb-6 inline-block rounded-full bg-cream-100 px-4 py-2 text-base font-medium text-ink-700 ring-1 ring-cream-200">
            Prótese fixa sobre implantes · {clinic.address.city} (ES)
          </p>

          <h1 className="font-display text-hero font-semibold leading-[1.08] text-ink-900">
            Volte a comer, falar e sorrir sem se preocupar com a dentadura
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-ink-800 md:text-xl lg:text-[1.3rem]">
            Prótese fixa sobre implantes em {clinic.address.city}, com cirurgião especialista em
            bucomaxilofacial. Avaliação presencial para entender o seu caso e explicar, com clareza,
            o que pode ser feito.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <WhatsAppButton className="w-full sm:w-auto" />
            <AnchorButton href="#agendar" className="w-full sm:w-auto">
              Agendar minha avaliação
            </AnchorButton>
          </div>

          <p className="mt-9 border-l-2 border-cream-300 pl-4 text-base text-ink-500">
            {dentist.name} · {dentist.cro}
            <br />
            {clinic.address.district}, {clinic.address.city}
          </p>
        </m.div>

        <m.div
          {...fade}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          className="relative"
        >
          <img
            src="/dr-antonio.webp"
            width={960}
            height={1200}
            alt={`${dentist.name}, cirurgião bucomaxilofacial, no consultório em ${clinic.address.city}`}
            fetchPriority="high"
            decoding="async"
            className="aspect-4/5 w-full rounded-card object-cover shadow-[0_30px_70px_-32px_rgba(0,0,0,0.45)]"
          />
        </m.div>
      </div>
    </header>
  )
}
