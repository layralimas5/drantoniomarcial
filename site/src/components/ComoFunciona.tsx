import { Section, SectionTitle } from './Section'

const etapas = [
  {
    titulo: 'Avaliação presencial',
    texto: 'O Dr. Antonio examina sua boca e pede um exame de imagem para ver como está o osso.',
  },
  {
    titulo: 'Plano de tratamento',
    texto: 'Ele explica o que dá para fazer, quanto tempo leva e quais são as opções de pagamento.',
  },
  {
    titulo: 'Cirurgia',
    texto: 'Feita com anestesia, na própria clínica, por cirurgião especialista.',
  },
  {
    titulo: 'Acompanhamento',
    texto: 'Você volta algumas vezes para ajuste e para acompanhar a cicatrização.',
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
          Ninguém sai da primeira consulta operando. A consulta serve para você entender o seu
          caso e decidir com calma.
        </p>

        <ol className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {etapas.map((etapa, index) => (
            <li
              key={etapa.titulo}
              className="pulsar-suave relative rounded-card border border-cream-200 bg-white p-6"
            >
              {index < etapas.length - 1 ? (
                <>
                  {/* Traço que liga uma etapa à seguinte, no vão entre os cards. */}
                  <span
                    aria-hidden="true"
                    className="absolute top-12 -right-5 hidden h-px w-5 bg-cream-300 lg:block"
                  />
                  <span
                    aria-hidden="true"
                    className="absolute -bottom-5 left-12 h-5 w-px bg-cream-300 md:hidden"
                  />
                </>
              ) : null}

              <span
                aria-hidden="true"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-navy-900 text-xl font-semibold text-white"
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
