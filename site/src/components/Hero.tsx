import { m, useReducedMotion } from 'framer-motion'
import { AnchorButton, WhatsAppButton } from './CtaButton'
import { clinic, dentist } from '../lib/site-config'

export function Hero() {
  const reduceMotion = useReducedMotion()
  const fade = reduceMotion ? {} : { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } }

  return (
    <header className="relative overflow-hidden bg-cream-100 pt-10 pb-14 md:pt-16 md:pb-20">
      <div className="container-page grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <m.div {...fade} transition={{ duration: 0.6, ease: 'easeOut' }}>
          <p className="mb-5 inline-block rounded-full bg-cream-200 px-4 py-2 text-base font-medium text-ink-700">
            Prótese fixa sobre implantes · {clinic.address.city} (ES)
          </p>

          <h1 className="font-display text-[2.15rem] font-semibold leading-[1.15] text-ink-900 sm:text-5xl lg:text-[3.4rem]">
            Volte a comer, falar e sorrir sem se preocupar com a dentadura
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-800 md:text-xl">
            Prótese fixa sobre implantes em {clinic.address.city}, com cirurgião especialista em
            bucomaxilofacial. Avaliação presencial para entender o seu caso e explicar, com clareza,
            o que pode ser feito.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <WhatsAppButton className="w-full sm:w-auto" />
            <AnchorButton href="#agendar" className="w-full sm:w-auto">
              Agendar minha avaliação
            </AnchorButton>
          </div>

          <p className="mt-7 border-l-2 border-cream-300 pl-4 text-base text-ink-500">
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
            className="aspect-4/5 w-full rounded-card object-cover shadow-[0_24px_60px_-30px_rgba(18,36,29,0.5)]"
          />
        </m.div>
      </div>
    </header>
  )
}
