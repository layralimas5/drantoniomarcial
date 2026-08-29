import { m, useReducedMotion } from 'framer-motion'
import { AnchorButton, WhatsAppButton } from './CtaButton'
import { clinic, dentist } from '../lib/site-config'

export function Hero() {
  const reduceMotion = useReducedMotion()
  const fade = reduceMotion ? {} : { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } }

  return (
    <header id="topo" className="relative -mt-[3.75rem] overflow-hidden bg-cream-50 pt-[3.75rem] lg:-mt-[4.5rem] lg:pt-[4.5rem]">
      {/* No celular o banner abre a página; no desktop ele ocupa a metade direita
          e o gradiente garante contraste do texto sobre a parte clara da foto. */}
      <div className="absolute inset-0 lg:inset-y-0 lg:right-0 lg:left-auto lg:w-[54%]">
        <img
          src="/hero-banner.webp"
          width={2400}
          height={1193}
          alt={`${dentist.name} no consultório da ${clinic.name}, em ${clinic.address.district}`}
          fetchPriority="high"
          decoding="async"
          className="h-full w-full object-cover object-[84%_top] lg:object-[78%_center]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/90 to-transparent lg:bg-gradient-to-r lg:from-white lg:via-white/75 lg:to-transparent"
        />
      </div>

      <div className="container-page relative min-h-[104svh] content-end pt-[40svh] pb-10 sm:min-h-[100svh] md:pt-[44svh] lg:min-h-[88svh] lg:content-center lg:pt-24 lg:pb-24">
        <m.div
          {...fade}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-2xl lg:max-w-[40rem]"
        >
          <h1 className="font-display text-hero font-bold leading-[1.02] tracking-[-0.02em] text-ink-900">
            Volte a comer, falar e sorrir sem se preocupar com a dentadura
          </h1>

          <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-800 md:mt-7 md:text-[1.35rem]">
            Dentes fixos, que não saem para dormir, aqui em {clinic.address.city}. Na consulta
            você descobre o que dá para fazer no seu caso, quanto tempo leva e como pode pagar.
          </p>

          <div className="mt-6 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap md:mt-9 md:gap-3">
            <WhatsAppButton className="w-full sm:w-auto" />
            <AnchorButton href="#agendar" className="w-full sm:w-auto">
              Agendar minha avaliação
            </AnchorButton>
          </div>

          <p className="mt-6 border-l-2 border-cream-300 pl-3 text-sm text-ink-700 md:mt-9 md:pl-4 md:text-base">
            {dentist.name} · {dentist.cro}
            <br />
            {clinic.address.district}, {clinic.address.city}
          </p>
        </m.div>
      </div>
    </header>
  )
}
