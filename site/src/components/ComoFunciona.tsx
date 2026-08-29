import { Section, SectionTitle } from './Section'
import { AnchorButton } from './CtaButton'

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
    <Section id="passos" labelledBy="passos-titulo" origem="direita" className="bg-cream-50">
      <div className="container-page">
        <SectionTitle id="passos-titulo" className="max-w-2xl">
          Como funciona,{' '}
          <span className="font-display font-normal italic text-navy-700">
            da primeira consulta ao último retorno
          </span>
        </SectionTitle>

        <p className="mt-4 max-w-3xl text-[0.95rem] text-ink-800 md:mt-5 md:text-xl">
          Ninguém sai da primeira consulta operando. Ela serve para você entender o seu caso e
          decidir com calma, em casa.
        </p>

        <ol className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {etapas.map((etapa, index) => (
            <li
              key={etapa.titulo}
              className="pulsar-suave relative rounded-card border border-cream-200 bg-white p-3.5 md:p-6"
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
                    className="absolute -bottom-5 left-10 h-5 w-px bg-cream-300 md:hidden"
                  />
                </>
              ) : null}

              <span
                aria-hidden="true"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-navy-900 text-[0.95rem] font-semibold text-white md:h-12 md:w-12 md:text-xl"
              >
                {index + 1}
              </span>
              <h3 className="mt-3 text-[0.95rem] font-semibold text-ink-900 md:mt-5 md:text-xl">{etapa.titulo}</h3>
              <p className="mt-1 text-[0.85rem] leading-relaxed text-ink-700 md:mt-1.5 md:text-lg">{etapa.texto}</p>
            </li>
          ))}
        </ol>

        <div className="mt-10 flex justify-center md:mt-12">
          <AnchorButton href="#agendar" className="w-full sm:w-auto">
            Agendar minha avaliação
          </AnchorButton>
        </div>
      </div>
    </Section>
  )
}
