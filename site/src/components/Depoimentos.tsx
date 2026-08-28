import { Section, SectionTitle } from './Section'

/**
 * Depoimentos falam de experiência e de rotina, nunca de resultado estético.
 * Proibido qualquer imagem comparativa de antes e depois.
 * PENDENTE: substituir pelos depoimentos reais autorizados pelos pacientes.
 */
const depoimentos = [
  {
    texto:
      'Eu já tinha desistido de resolver. Fui só para entender e saí com o plano explicado passo a passo, sem ninguém me empurrando nada.',
    autor: 'Maria de L.',
    detalhe: 'Vila Velha',
  },
  {
    texto:
      'O que mais me pegou foi poder almoçar com a família sem ficar com medo de a prótese se mexer na hora de mastigar.',
    autor: 'José R.',
    detalhe: 'Cariacica',
  },
  {
    texto:
      'A equipe explicou tudo com paciência, inclusive as partes que eu tinha medo de perguntar. Isso me deu segurança para começar.',
    autor: 'Terezinha S.',
    detalhe: 'Vitória',
  },
]

export function Depoimentos() {
  return (
    <Section labelledBy="depoimentos-titulo" className="bg-cream-100">
      <div className="container-page">
        <SectionTitle id="depoimentos-titulo" className="max-w-2xl">
          O que os pacientes contam depois da avaliação
        </SectionTitle>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {depoimentos.map((depoimento) => (
            <figure
              key={depoimento.autor}
              className="flex h-full flex-col justify-between rounded-card border border-cream-200 bg-white p-6"
            >
              <blockquote className="text-lg leading-relaxed text-ink-800">
                “{depoimento.texto}”
              </blockquote>
              <figcaption className="mt-6 text-base font-semibold text-ink-900">
                {depoimento.autor}
                <span className="block font-normal text-ink-500">{depoimento.detalhe}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </Section>
  )
}
