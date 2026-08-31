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

        <p className="max-md:leading-[1.5] mt-3 max-w-3xl text-[1.0625rem] text-ink-800 md:mt-5 md:text-xl">
          A primeira consulta serve para entender o seu caso e apresentar as possibilidades de
          tratamento, para você decidir com calma.
        </p>

        {/* No celular as etapas viram uma linha do tempo: o número à esquerda e o
            texto ao lado ocupam bem menos altura do que quatro cards empilhados. */}
        <ol className="mt-6 grid gap-4 md:mt-10 md:grid-cols-2 md:gap-5 lg:grid-cols-4">
          {etapas.map((etapa, index) => (
            <li
              key={etapa.titulo}
              className="pulsar-suave relative flex gap-3 md:block md:rounded-card md:border md:border-cream-200 md:bg-white md:p-6"
            >
              {index < etapas.length - 1 ? (
                <>
                  {/* Traço que liga uma etapa à seguinte: vertical no celular,
                      horizontal no vão entre os cards do desktop. */}
                  <span
                    aria-hidden="true"
                    className="absolute top-12 -right-5 hidden h-px w-5 bg-cream-300 lg:block"
                  />
                  <span
                    aria-hidden="true"
                    className="absolute top-8 bottom-[-1rem] left-[0.84rem] w-px bg-cream-300 md:hidden"
                  />
                </>
              ) : null}

              <span
                aria-hidden="true"
                className="relative z-10 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-navy-900 text-[0.8rem] font-semibold text-white md:h-12 md:w-12 md:text-xl"
              >
                {index + 1}
              </span>

              <div>
                <h3 className="text-[1rem] font-semibold text-ink-900 max-md:leading-snug md:mt-5 md:text-xl">
                  {etapa.titulo}
                </h3>
                <p className="mt-1 text-[1rem] leading-[1.45] md:leading-relaxed text-ink-700 md:mt-1.5 md:text-lg">
                  {etapa.texto}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-8 flex justify-center md:mt-12">
          <AnchorButton href="#agendar" className="w-full sm:w-auto">
            Quero agendar minha avaliação
          </AnchorButton>
        </div>
      </div>
    </Section>
  )
}
