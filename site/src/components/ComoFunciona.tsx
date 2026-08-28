import { Section, SectionTitle } from './Section'
import { dentist } from '../lib/site-config'

const etapas = [
  {
    titulo: 'Avaliação presencial',
    texto: 'Exame clínico e exame de imagem para entender a condição do osso e da gengiva.',
  },
  {
    titulo: 'Plano de tratamento',
    texto: `${dentist.shortName} explica o que pode ser feito no seu caso, o tempo previsto e as opções.`,
  },
  {
    titulo: 'Cirurgia',
    texto:
      'Feita com anestesia, em ambiente preparado, por cirurgião especialista em bucomaxilofacial.',
  },
  {
    titulo: 'Acompanhamento',
    texto: 'Retornos para ajuste e acompanhamento da cicatrização.',
  },
]

export function ComoFunciona() {
  return (
    <Section id="passos" labelledBy="passos-titulo" className="bg-cream-50">
      <div className="container-page">
        <SectionTitle id="passos-titulo" className="max-w-2xl">
          Como funciona, do primeiro contato ao acompanhamento
        </SectionTitle>

        <p className="mt-5 max-w-3xl text-lg text-ink-800 md:text-xl">
          Ninguém sai da primeira consulta operando. A avaliação existe para você entender o seu
          caso e decidir com informação na mão, no seu tempo.
        </p>

        <ol className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {etapas.map((etapa, index) => (
            <li key={etapa.titulo} className="rounded-card border border-cream-200 bg-white p-6">
              <span
                aria-hidden="true"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-ink-900 text-xl font-semibold text-cream-50"
              >
                {index + 1}
              </span>
              <h3 className="mt-5 text-xl font-semibold text-ink-900">{etapa.titulo}</h3>
              <p className="mt-2 text-base leading-relaxed text-ink-700 md:text-lg">{etapa.texto}</p>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  )
}
