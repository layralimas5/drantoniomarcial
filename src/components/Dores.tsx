import { m, useReducedMotion } from 'framer-motion'
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

  return (
    <Section labelledBy="dores-titulo" origem="esquerda" className="bg-cream-50">
      <div className="container-page">
        <SectionTitle id="dores-titulo" className="max-w-3xl">
          Você se identifica com{' '}
          <span className="font-display font-normal italic text-navy-700">
            alguma dessas situações?
          </span>
        </SectionTitle>

        <p className="mt-4 max-w-3xl text-[0.95rem] text-ink-800 md:mt-5 md:text-xl">
          A perda de dentes afeta muito mais do que o sorriso. Pode interferir na mastigação, na
          fala, na autoestima e até nos momentos simples do dia a dia.
        </p>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {situacoes.map((situacao, index) => (
            <m.li
              key={situacao.titulo}
              initial={reduceMotion ? false : { opacity: 0, x: index % 2 === 0 ? -32 : 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: index * 0.08, ease: 'easeOut' }}
              className="group rounded-card border border-cream-200 bg-white p-3.5 transition-all duration-300 hover:-translate-y-1 hover:border-navy-900 hover:shadow-[0_18px_40px_-24px_rgba(12,32,51,0.5)] md:p-6"
            >
              <div className="flex items-start gap-4">
                <span
                  aria-hidden="true"
                  className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-navy-900 text-sm font-semibold text-white transition-transform duration-300 group-hover:scale-110 md:mt-1 md:h-9 md:w-9 md:text-base"
                >
                  {index + 1}
                </span>
                <div>
                  <h3 className="text-[0.95rem] font-semibold text-ink-900 md:text-xl">{situacao.titulo}</h3>
                  <p className="mt-1 text-[0.85rem] leading-relaxed text-ink-700 md:mt-1.5 md:text-lg">
                    {situacao.texto}
                  </p>
                </div>
              </div>
            </m.li>
          ))}
        </ul>

        <div className="mt-9 flex flex-col items-center text-center md:mt-12">
          <p className="max-w-3xl text-[0.95rem] font-medium text-ink-900 sm:text-xl md:text-2xl">
            O primeiro passo não é a cirurgia. É entender o seu caso e descobrir qual tratamento
            pode ser indicado para você.
          </p>
        </div>
      </div>
    </Section>
  )
}
