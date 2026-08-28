import { m, useReducedMotion } from 'framer-motion'
import { AnchorButton, WhatsAppButton } from './CtaButton'
import { clinic, dentist } from '../lib/site-config'

export function Hero() {
  const reduceMotion = useReducedMotion()
  const fade = reduceMotion ? {} : { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } }

  return (
    <header className="relative overflow-hidden bg-cream-50">
      {/* No celular o banner abre a página; no desktop ele ocupa a metade direita
          e o gradiente garante contraste do texto sobre a parte clara da foto. */}
      <div className="relative lg:absolute lg:inset-y-0 lg:right-0 lg:w-[58%]">
        <img
          src="/hero-banner.webp"
          width={1778}
          height={884}
          alt="Consultório odontológico preparado para cirurgia, em Vila Velha"
          fetchPriority="high"
          decoding="async"
          className="aspect-[16/11] w-full object-cover object-[78%_center] sm:aspect-[2/1] lg:h-full lg:aspect-auto"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 hidden bg-gradient-to-r from-white via-white/75 to-transparent lg:block"
        />
      </div>

      <div className="container-page relative py-12 md:py-16 lg:min-h-[88svh] lg:content-center lg:py-24">
        <m.div
          {...fade}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-2xl lg:max-w-[34rem]"
        >
          <p className="mb-6 inline-block rounded-full bg-cream-100 px-4 py-2 text-base font-medium text-ink-700 ring-1 ring-cream-200">
            Prótese fixa sobre implantes · {clinic.address.city} (ES)
          </p>

          <h1 className="font-display text-hero font-semibold leading-[1.08] text-ink-900">
            Volte a comer, falar e sorrir sem se preocupar com a dentadura
          </h1>

          <p className="mt-7 text-lg leading-relaxed text-ink-800 md:text-xl">
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
      </div>
    </header>
  )
}
