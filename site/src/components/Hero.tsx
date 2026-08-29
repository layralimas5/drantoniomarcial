import { m, useReducedMotion } from 'framer-motion'
import { AnchorButton, WhatsAppButton } from './CtaButton'
import { clinic, dentist } from '../lib/site-config'

export function Hero() {
  const reduceMotion = useReducedMotion()
  const fade = reduceMotion ? {} : { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } }

  return (
    <header id="topo" className="relative -mt-[4.5rem] overflow-hidden bg-cream-50 pt-[4.5rem]">
      {/* No celular o banner abre a página; no desktop ele ocupa a metade direita
          e o gradiente garante contraste do texto sobre a parte clara da foto. */}
      <div className="relative lg:absolute lg:inset-y-0 lg:right-0 lg:w-[54%]">
        <img
          src="/hero-banner.webp"
          width={2400}
          height={1193}
          alt={`${dentist.name} no consultório da ${clinic.name}, em ${clinic.address.district}`}
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
          className="max-w-2xl lg:max-w-[40rem]"
        >
          <h1 className="font-display text-hero font-bold leading-[1.02] tracking-[-0.02em] text-ink-900">
            Volte a comer, falar e sorrir sem se preocupar com a dentadura
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink-800 md:text-[1.35rem]">
            Dentes fixos, que não saem para dormir, aqui em {clinic.address.city}. Na consulta
            você descobre o que dá para fazer no seu caso, quanto tempo leva e como pode pagar.
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
