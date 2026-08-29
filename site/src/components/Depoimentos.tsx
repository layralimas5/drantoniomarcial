import { Section, SectionTitle } from './Section'
import { clinic } from '../lib/site-config'

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
    motivo: 'Prótese fixa',
  },
  {
    texto:
      'O que mais me pegou foi poder almoçar com a família sem ficar com medo de a prótese se mexer na hora de mastigar.',
    autor: 'José R.',
    detalhe: 'Cariacica',
    motivo: 'Protocolo',
  },
  {
    texto:
      'A equipe explicou tudo com paciência, inclusive as partes que eu tinha medo de perguntar. Isso me deu segurança para começar.',
    autor: 'Terezinha S.',
    detalhe: 'Vitória',
    motivo: 'Implantes',
  },
  {
    texto:
      'Chegei achando que não tinha osso e que ia ouvir um não. Saí sabendo exatamente qual era a minha situação, com prazo e valor na mão.',
    autor: 'Sebastião A.',
    detalhe: 'Vila Velha',
    motivo: 'Avaliação',
  },
  {
    texto:
      'Passei anos evitando foto de família. O que mudou primeiro não foi o dente, foi eu parar de pensar nele o tempo todo.',
    autor: 'Neusa C.',
    detalhe: 'Guarapari',
    motivo: 'Prótese fixa',
  },
]

/** Quantas vezes a lista se repete dentro da faixa. A animação desloca metade da faixa. */
const REPETICOES = 4

export function Depoimentos() {
  return (
    <Section labelledBy="depoimentos-titulo" className="bg-cream-100">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <SectionTitle id="depoimentos-titulo">
              O que os pacientes contam depois da avaliação
            </SectionTitle>

            <p className="mt-5 text-lg text-ink-800 md:text-xl">
              Quase todo mundo chega com o mesmo medo e sai falando a mesma coisa: entender o
              próprio caso tira um peso de anos.
            </p>
          </div>

          <p className="rounded-full border border-cream-300 bg-white px-4 py-2.5 text-base text-ink-700 md:px-5 md:py-3">
            Pacientes atendidos em {clinic.address.district} e região
          </p>
        </div>
      </div>

      {/* A faixa sangra até a borda da tela para o movimento não parecer preso num quadro. */}
      <div className="marquee mt-10">
        <ul className="marquee-faixa">
          {Array.from({ length: REPETICOES }).flatMap((_, repeticao) =>
            depoimentos.map((depoimento) => (
              <li
                key={`${repeticao}-${depoimento.autor}`}
                aria-hidden={repeticao > 0}
                className="w-[17rem] shrink-0 sm:w-[19rem] md:w-[23rem]"
              >
                <figure className="flex h-full flex-col rounded-card border border-cream-200 bg-white p-5 shadow-[0_20px_45px_-32px_rgba(12,32,51,0.45)] md:p-7">
                  <span
                    aria-hidden="true"
                    className="font-display text-5xl leading-none text-gold-400 md:text-6xl"
                  >
                    “
                  </span>

                  <blockquote className="-mt-3 grow text-base leading-relaxed text-ink-800 md:text-lg">
                    {depoimento.texto}
                  </blockquote>

                  <figcaption className="mt-5 flex items-center gap-3 border-t border-cream-200 pt-4 md:mt-6 md:gap-4 md:pt-5">
                    <span
                      aria-hidden="true"
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy-900 text-base font-semibold text-white md:h-12 md:w-12 md:text-lg"
                    >
                      {depoimento.autor.charAt(0)}
                    </span>
                    <span className="text-base font-semibold text-ink-900">
                      {depoimento.autor}
                      <span className="block font-normal text-ink-500">
                        {depoimento.detalhe} · {depoimento.motivo}
                      </span>
                    </span>
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
