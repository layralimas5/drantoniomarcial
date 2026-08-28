import { m, useReducedMotion } from 'framer-motion'
import { Section, SectionTitle } from './Section'
import { WhatsAppButton } from './CtaButton'

const situacoes = [
  {
    titulo: 'A dentadura solta na hora errada',
    texto:
      'No meio do almoço, na conversa, na hora de rir. Você já aprendeu a mastigar devagar e a segurar a boca sem ninguém perceber.',
  },
  {
    titulo: 'Você desistiu de comer o que gosta',
    texto:
      'Carne, maçã, pão de casca dura, milho. A lista de alimentos que você evita só cresce, e já faz tempo que você nem lembra o gosto de alguns.',
  },
  {
    titulo: 'Você cobre a boca quando ri',
    texto:
      'Some das fotos, evita falar de perto, escolhe o lugar da mesa. É cansativo viver calculando isso o dia inteiro.',
  },
  {
    titulo: 'Você acha que já passou da hora',
    texto:
      'Perdeu vários dentes, ouviu que não tem osso, achou caro uma vez e deixou pra lá. Faz anos que você adia por medo da resposta.',
  },
]

export function Dores() {
  const reduceMotion = useReducedMotion()

  return (
    <Section labelledBy="dores-titulo" className="bg-cream-50">
      <div className="container-page">
        <SectionTitle id="dores-titulo" className="max-w-3xl">
          Se você se identifica com alguma dessas situações, dá pra resolver
        </SectionTitle>

        <p className="mt-5 max-w-3xl text-lg text-ink-800 md:text-xl">
          Quem chega aqui quase nunca fala de dente. Fala de vergonha, de comida que deixou de
          comer e de foto que deixou de tirar. Veja se alguma dessas situações é a sua.
        </p>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {situacoes.map((situacao, index) => (
            <m.li
              key={situacao.titulo}
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: index * 0.08, ease: 'easeOut' }}
              className="group rounded-card border border-cream-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-navy-900 hover:shadow-[0_18px_40px_-24px_rgba(12,32,51,0.5)]"
            >
              <div className="flex items-start gap-4">
                <span
                  aria-hidden="true"
                  className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-navy-900 text-base font-semibold text-white transition-transform duration-300 group-hover:scale-110"
                >
                  {index + 1}
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-ink-900">{situacao.titulo}</h3>
                  <p className="mt-2 text-base leading-relaxed text-ink-700 md:text-lg">
                    {situacao.texto}
                  </p>
                </div>
              </div>
            </m.li>
          ))}
        </ul>

        <div className="mt-10 max-w-3xl">
          <p className="text-xl font-medium text-ink-900">
            Nenhuma dessas situações é definitiva. Existe tratamento para a maioria dos casos, e o
            primeiro passo não é a cirurgia: é entender exatamente o que dá para fazer no seu.
          </p>
          <WhatsAppButton className="mt-6 w-full sm:w-auto">
            Quero saber se o meu caso tem solução
          </WhatsAppButton>
        </div>
      </div>
    </Section>
  )
}
