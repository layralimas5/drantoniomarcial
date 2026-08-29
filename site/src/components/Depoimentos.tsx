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
  {
    texto:
      'Chegei achando que não tinha osso e que ia ouvir um não. Saí sabendo exatamente qual era a minha situação, com prazo e valor na mão.',
    autor: 'Sebastião A.',
    detalhe: 'Vila Velha',
  },
]

/** Quantas vezes a lista se repete dentro da faixa. A animação desloca metade da faixa. */
const REPETICOES = 4

export function Depoimentos() {
  return (
    <Section labelledBy="depoimentos-titulo" className="bg-cream-100">
      <div className="container-page">
        <SectionTitle id="depoimentos-titulo" className="max-w-2xl">
          O que os pacientes contam depois da avaliação
        </SectionTitle>

        <p className="mt-5 max-w-3xl text-lg text-ink-800 md:text-xl">
          Quase todo mundo chega com o mesmo receio e sai falando da mesma coisa: entender o
          próprio caso tira um peso que estava lá havia anos.
        </p>
      </div>

      {/* A faixa sangra até a borda da tela para o movimento não parecer preso num quadro. */}
      <div className="marquee mt-10">
        <ul className="marquee-faixa">
          {Array.from({ length: REPETICOES }).flatMap((_, repeticao) =>
            depoimentos.map((depoimento) => (
              <li
                key={`${repeticao}-${depoimento.autor}`}
                aria-hidden={repeticao > 0}
                className="w-[19rem] shrink-0 md:w-[24rem]"
              >
                <figure className="flex h-full flex-col justify-between rounded-card border border-cream-200 bg-white p-6">
                  <blockquote className="text-lg leading-relaxed text-ink-800">
                    “{depoimento.texto}”
                  </blockquote>
                  <figcaption className="mt-6 text-base font-semibold text-ink-900">
                    {depoimento.autor}
                    <span className="block font-normal text-ink-500">{depoimento.detalhe}</span>
                  </figcaption>
                </figure>
              </li>
            )),
          )}
        </ul>
      </div>
    </Section>
  )
}
