import { Section, SectionTitle } from './Section'

const diferencas = [
  {
    titulo: 'Mastigação',
    texto: 'Busca devolver maior estabilidade e eficiência ao mastigar.',
  },
  {
    titulo: 'Segurança',
    texto: 'A prótese apoiada sobre implantes oferece estabilidade durante a fala e a mastigação.',
  },
  {
    titulo: 'Conforto',
    texto:
      'Uma alternativa para pacientes que apresentam desconforto ou insegurança com próteses removíveis.',
  },
  {
    titulo: 'Sorriso',
    texto:
      'O planejamento considera função e estética para buscar um resultado harmônico e natural.',
  },
]

export function ProteseFixa() {
  return (
    <Section id="tratamento" labelledBy="protese-titulo" origem="direita" className="bg-navy-900 text-cream-100">
      <div className="container-page">
        <div className="grid gap-6 md:gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <div>
            <SectionTitle id="protese-titulo" className="!text-cream-50">
              Implantes dentários: uma base para devolver dentes fixos
            </SectionTitle>

            <p className="leading-relaxed max-md:leading-[1.5] mt-3 text-[1.0625rem] text-cream-200 md:mt-6 md:text-xl">
              Os implantes são estruturas de titânio instaladas no osso para substituir as raízes
              dos dentes perdidos. Sobre eles podem ser instalados desde um único dente até
              próteses fixas para reabilitar toda a arcada.
            </p>

            <p className="leading-relaxed max-md:leading-[1.5] mt-2.5 text-[1.0625rem] text-cream-200 md:mt-4 md:text-xl">
              Cada caso é diferente. A indicação depende da avaliação clínica e dos exames de
              imagem.
            </p>
          </div>

          <ul className="grid grid-cols-2 gap-2.5 sm:gap-4">
            {diferencas.map((item) => (
              <li
                key={item.titulo}
                className="pulsar-suave rounded-card border border-navy-line bg-navy-800 p-3 sm:p-3.5 md:p-6"
              >
                <h3 className="text-[0.95rem] font-semibold text-cream-50 md:text-xl">{item.titulo}</h3>
                <p className="leading-relaxed max-md:leading-[1.4] mt-1 text-[0.95rem] text-cream-200 md:mt-1.5 md:text-lg">
                  {item.texto}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
