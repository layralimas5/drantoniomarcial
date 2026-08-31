import { m, useReducedMotion } from 'framer-motion'
import { AnchorButton, WhatsAppButton } from './CtaButton'
import { clinic, dentist, specialtiesLine } from '../lib/site-config'

/** Cartões que ficam sobre a parte de baixo do banner. */
const fatos = [
  {
    titulo: 'Implantes dentários',
    texto:
      'Soluções para substituir um ou mais dentes perdidos, buscando recuperar função, conforto e segurança para sorrir.',
  },
  {
    titulo: 'Protocolo, prótese fixa sobre implantes',
    texto:
      'Para quem perdeu vários ou todos os dentes e busca uma alternativa fixa à dentadura removível.',
  },
  {
    titulo: 'Condições facilitadas de pagamento',
    texto:
      'Planejamento individualizado e diferentes possibilidades de pagamento para realizar seu tratamento. Consulte as condições.',
  },
]

export function Hero() {
  const reduceMotion = useReducedMotion()
  const fade = reduceMotion ? {} : { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } }

  return (
    <header
      id="topo"
      className="relative -mt-[3.75rem] overflow-hidden bg-cream-50 pt-[3.75rem] lg:-mt-[4.5rem] lg:pt-[4.5rem]"
    >
      {/* No celular o banner abre a página; no desktop ele ocupa a metade direita
          e o gradiente garante contraste do texto sobre a parte clara da foto. */}
      <div className="absolute inset-x-0 top-0 h-[60svh] sm:h-[62svh] md:h-[66svh] lg:inset-y-0 lg:right-0 lg:left-auto lg:h-auto lg:w-[54%]">
        <img
          src="/hero-banner.webp"
          width={2400}
          height={1193}
          alt={`${dentist.name} no consultório da ${clinic.name}, em ${clinic.address.district}`}
          fetchPriority="high"
          decoding="async"
          className="h-full w-full object-cover object-[76%_center] lg:object-[78%_center]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/88 to-transparent lg:bg-gradient-to-r lg:from-white lg:via-white/75 lg:to-transparent"
        />
      </div>

      <div className="container-page relative pt-[25svh] pb-8 sm:pt-[27svh] md:pt-[30svh] lg:min-h-[92svh] lg:content-center lg:pt-24 lg:pb-10">
        <m.div
          {...fade}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-2xl lg:max-w-[40rem]"
        >
          <h1 className="font-display text-hero leading-[1.02] font-bold tracking-[-0.02em] text-ink-900">
            Volte a sorrir e mastigar com segurança{' '}
            <span className="font-normal italic text-navy-700">
              através dos implantes dentários
            </span>
          </h1>

          <p className="mt-4 max-w-xl text-[0.95rem] leading-relaxed text-ink-800 md:mt-7 md:text-[1.35rem]">
            Implantes dentários e protocolos (prótese fixa sobre implantes) para quem perdeu um,
            vários ou todos os dentes. Tratamento planejado e acompanhado por profissional
            especialista.
          </p>

          <div className="mt-6 flex flex-col items-start gap-3 md:mt-9">
            <AnchorButton href="#agendar" className="w-full sm:w-auto">
              Quero avaliar meu caso
            </AnchorButton>
            <WhatsAppButton variant="outline" className="w-full sm:w-auto">
              Fale agora com nossa equipe pelo WhatsApp
            </WhatsAppButton>
          </div>

          <p className="mt-6 border-l-2 border-cream-300 pl-3 text-[0.8rem] text-ink-700 md:mt-8 md:pl-4 md:text-base">
            {dentist.name} · {dentist.cro}
            <br />
            {specialtiesLine}
            <br />
            {clinic.address.district}, {clinic.address.city}/{clinic.address.state}
          </p>
        </m.div>

        <m.ul
          {...fade}
          transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
          className="mt-8 grid gap-3 md:mt-12 md:grid-cols-3 md:gap-4"
        >
          {fatos.map((fato) => (
            <li
              key={fato.titulo}
              className="pulsar-suave rounded-card border border-cream-200 bg-white/85 p-3.5 shadow-[0_18px_45px_-20px_rgba(12,32,51,0.55)] backdrop-blur-md md:p-5"
            >
              <h2 className="text-[0.95rem] font-semibold text-ink-900 md:text-lg">{fato.titulo}</h2>
              <p className="mt-1 text-[0.85rem] leading-snug text-ink-700 md:text-base">
                {fato.texto}
              </p>
            </li>
          ))}
        </m.ul>
      </div>
    </header>
  )
}
