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
    texto: 'Aparelho fixo e acompanhamento do alinhamento, para adulto e adolescente.',
  },
  {
    titulo: 'Próteses',
    texto: 'Coroas, próteses parciais e reabilitação de dentes já tratados.',
  },
  {
    titulo: 'Clínico geral',
    texto: 'Limpeza, restauração, extração e o acompanhamento de rotina da sua boca.',
  },
  {
    titulo: 'ATM e bruxismo',
    texto: 'Avaliação de dor na articulação, estalo ao abrir a boca e desgaste do dente.',
  },
  {
    titulo: 'Cirurgia bucomaxilofacial',
    texto: 'Procedimentos cirúrgicos conduzidos por especialista na área.',
  },
]

export function OutrosTratamentos() {
  return (
    <Section labelledBy="tratamentos-titulo" className="bg-cream-50">
      <div className="container-page">
        <SectionTitle id="tratamentos-titulo" className="max-w-3xl">
          A clínica também atende o resto da sua boca
        </SectionTitle>

        <p className="mt-5 max-w-3xl text-lg text-ink-800 md:text-xl">
          O foco do {dentist.shortName} é implante e reabilitação, mas o atendimento não para aí.
          Se o seu caso começa por outro tratamento, é aqui mesmo que ele é resolvido.
        </p>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tratamentos.map((tratamento) => (
            <li
              key={tratamento.titulo}
              className={`rounded-card border p-6 transition-colors duration-300 ${
                tratamento.principal
                  ? 'border-navy-900 bg-navy-900 text-cream-100'
                  : 'border-cream-200 bg-white hover:border-navy-900'
              }`}
            >
              <h3
                className={`text-xl font-semibold ${
                  tratamento.principal ? 'text-cream-50' : 'text-ink-900'
                }`}
              >
                {tratamento.titulo}
              </h3>
              <p
                className={`mt-2 text-base leading-relaxed md:text-lg ${
                  tratamento.principal ? 'text-cream-200' : 'text-ink-700'
                }`}
              >
                {tratamento.texto}
              </p>
            </li>
          ))}
        </ul>

        <WhatsAppButton className="mt-10 w-full sm:w-auto">
          Perguntar sobre outro tratamento
        </WhatsAppButton>
      </div>
    </Section>
  )
}
