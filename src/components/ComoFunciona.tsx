import { Section, SectionTitle } from './Section'
import { AnchorButton } from './CtaButton'

const etapas = [
  {
    titulo: 'Avaliação especializada',
    texto: 'Exame clínico e análise da sua condição bucal para entender suas necessidades.',
  },
  {
    titulo: 'Planejamento',
    texto:
      'Com auxílio dos exames de imagem, é definido o tratamento indicado, suas etapas, prazo estimado e condições de pagamento.',
  },
  {
    titulo: 'Tratamento',
    texto:
      'Quando há indicação de implantes, o procedimento é realizado com anestesia e planejamento individualizado.',
  },
  {
    titulo: 'Acompanhamento',
    texto:
      'Após o procedimento, são realizados retornos para acompanhar cicatrização, adaptação e evolução do tratamento.',
  },
]

export function ComoFunciona() {
  return (
    <Section id="passos" labelledBy="passos-titulo" origem="direita" className="bg-cream-50">
      <div className="container-page">
        <SectionTitle id="passos-titulo" className="max-w-2xl">
          Da avaliação{' '}
          <span className="font-display font-normal italic text-navy-700">ao novo sorriso</span>
        </SectionTitle>

        <p className="mt-4 max-w-3xl text-[0.95rem] text-ink-800 md:mt-5 md:text-xl">
          A primeira consulta serve para entender o seu caso e apresentar as possibilidades de
          tratamento, para você decidir com calma.
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
            Quero agendar minha avaliação
          </AnchorButton>
        </div>
      </div>
    </Section>
  )
}
