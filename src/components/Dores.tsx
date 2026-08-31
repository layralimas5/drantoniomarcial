import { m, useReducedMotion } from 'framer-motion'
import { useIsMobile } from '../lib/use-mobile'
import { Section, SectionTitle } from './Section'

const situacoes = [
  {
    titulo: 'Perdeu um ou mais dentes',
    texto:
      'O espaço incomoda ao sorrir ou mastigar e você procura uma solução para substituir os dentes perdidos.',
  },
  {
    titulo: 'Sua dentadura está solta ou machucando',
    texto:
      'Você evita determinados alimentos ou fica inseguro para conversar e sorrir porque a prótese se movimenta.',
  },
  {
    titulo: 'Perdeu vários ou todos os dentes',
    texto:
      'Você gostaria de voltar a ter dentes fixos e quer saber se o protocolo sobre implantes é indicado para o seu caso.',
  },
  {
    titulo: 'Disseram que você não tem osso suficiente',
    texto:
      'Mesmo casos com perda óssea precisam ser avaliados individualmente. O exame de imagem é que permite definir quais possibilidades existem.',
  },
]

export function Dores() {
  const reduceMotion = useReducedMotion()
  const isMobile = useIsMobile()

  return (
    <Section labelledBy="dores-titulo" origem="esquerda" className="bg-cream-50">
      <div className="container-page">
        <SectionTitle id="dores-titulo" className="max-w-3xl">
          Você se identifica com{' '}
          <span className="font-display font-normal italic text-navy-700">
            alguma dessas situações?
          </span>
        </SectionTitle>

        <p className="max-md:leading-[1.5] mt-3 max-w-3xl text-[1.0625rem] text-ink-800 md:mt-5 md:text-xl">
          A perda de dentes afeta muito mais do que o sorriso. Pode interferir na mastigação, na
          fala, na autoestima e até nos momentos simples do dia a dia.
        </p>

        <ul className="mt-6 grid gap-2.5 sm:mt-10 sm:grid-cols-2 sm:gap-4">
          {situacoes.map((situacao, index) => (
            <m.li
              key={situacao.titulo}
              initial={
                reduceMotion
                  ? false
                  : isMobile
                    ? { opacity: 0, y: 12 }
                    : { opacity: 0, x: index % 2 === 0 ? -32 : 32 }
              }
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: isMobile ? 0.35 : 0.45,
                delay: index * (isMobile ? 0.05 : 0.08),
                ease: 'easeOut',
              }}
              className="group rounded-card border border-cream-200 bg-white p-3 transition-all duration-300 hover:-translate-y-1 hover:border-navy-900 hover:shadow-[0_18px_40px_-24px_rgba(12,32,51,0.5)] sm:p-3.5 md:p-6"
            >
              <div className="flex items-start gap-3 sm:gap-4">
                <span
                  aria-hidden="true"
                  className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-navy-900 text-[0.8rem] font-semibold text-white transition-transform duration-300 group-hover:scale-110 sm:h-7 sm:w-7 sm:text-sm md:mt-1 md:h-9 md:w-9 md:text-base"
                >
                  {index + 1}
                </span>
                <div>
                  <h3 className="max-md:leading-snug text-[1rem] font-semibold text-ink-900 md:text-xl">
                    {situacao.titulo}
                  </h3>
                  <p className="mt-1 text-[1rem] leading-[1.45] md:leading-relaxed text-ink-700 md:mt-1.5 md:text-lg">
                    {situacao.texto}
                  </p>
                </div>
              </div>
            </m.li>
          ))}
        </ul>

        <div className="mt-7 flex flex-col items-center text-center md:mt-12">
          <p className="max-md:leading-[1.45] max-w-3xl text-[1.0625rem] font-medium text-ink-900 sm:text-xl md:text-2xl">
            O primeiro passo não é a cirurgia. É entender o seu caso e descobrir qual tratamento
            pode ser indicado para você.
          </p>
        </div>
      </div>
    </Section>
  )
}
