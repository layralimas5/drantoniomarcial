import { Section, SectionTitle } from './Section'
import { WhatsAppButton } from './CtaButton'
import { dentist } from '../lib/site-config'

/**
 * A página inteira é construída em cima de protocolo e prótese fixa. Este bloco
 * existe só para quem chega procurando outro tratamento não achar que a clínica
 * não atende, sem tirar o foco do caso principal.
 */
const tratamentos = [
  {
    titulo: 'Implantes e protocolo',
    texto: 'Implante unitário, múltiplos implantes e prótese fixa sobre implantes.',
    principal: true,
  },
  {
    titulo: 'Ortodontia',
    texto: 'Aparelho para alinhar os dentes, de adolescente e de adulto.',
  },
  {
    titulo: 'Próteses',
    texto: 'Coroa, ponte e prótese parcial para quem já perdeu algum dente.',
  },
  {
    titulo: 'Clínico geral',
    texto: 'Limpeza, restauração, extração e o cuidado de rotina da sua boca.',
  },
  {
    titulo: 'ATM e bruxismo',
    texto: 'Dor perto do ouvido, estalo ao abrir a boca e dente gasto de ranger.',
  },
  {
    titulo: 'Cirurgia bucomaxilofacial',
    texto: 'Cirurgias da boca e do rosto, feitas por quem é especialista nisso.',
  },
]

export function OutrosTratamentos() {
  return (
    <Section labelledBy="tratamentos-titulo" origem="esquerda" className="bg-cream-50">
      <div className="container-page">
        <SectionTitle id="tratamentos-titulo" className="max-w-3xl">
          A clínica também atende o resto da sua boca
        </SectionTitle>

        <p className="mt-5 max-w-3xl text-lg text-ink-800 md:text-xl">
          O forte do {dentist.shortName} é implante, mas o atendimento não para aí. Se o seu
          caso começa por outro tratamento, é aqui mesmo que ele se resolve.
        </p>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tratamentos.map((tratamento) => (
            <li
              key={tratamento.titulo}
              className={`pulsar-suave rounded-card border p-5 md:p-6 ${
                tratamento.principal
                  ? 'border-navy-900 bg-navy-900 text-cream-100'
                  : 'border-cream-200 bg-white hover:border-navy-900'
              }`}
            >
              <h3
                className={`text-lg font-semibold md:text-xl ${
                  tratamento.principal ? 'text-cream-50' : 'text-ink-900'
                }`}
              >
                {tratamento.titulo}
              </h3>
              <p
                className={`mt-1.5 text-base leading-relaxed md:text-lg ${
                  tratamento.principal ? 'text-cream-200' : 'text-ink-700'
                }`}
              >
                {tratamento.texto}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex justify-center">
          <WhatsAppButton className="w-full sm:w-auto">
            Perguntar sobre outro tratamento
          </WhatsAppButton>
        </div>
      </div>
    </Section>
  )
}
