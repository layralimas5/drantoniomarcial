import { Section, SectionTitle } from './Section'
import { clinic } from '../lib/site-config'

/**
 * Bloco de alcance local: dá contexto geográfico para quem pesquisa por
 * cidade ou bairro e reforça a proximidade, que é o que decide caso local.
 * PENDENTE: confirmar a lista de bairros com a clínica.
 */
const cidades = [
  {
    nome: 'Vila Velha',
    detalhe:
      'Riviera da Barra, Barra do Jucu, Interlagos, Morada da Barra, Ponta da Fruta, Praia dos Recifes, Itaparica, Praia da Costa e região.',
  },
  {
    nome: 'Vitória',
    detalhe: 'Quem vem pela Terceira Ponte, com hora marcada.',
  },
  { nome: 'Cariacica', detalhe: 'Acesso pela Rodovia do Sol e pela BR 262.' },
  { nome: 'Guarapari', detalhe: 'Quem vem pela Rodovia do Sol chega direto ao consultório.' },
]

export function AreaAtendida() {
  return (
    <Section labelledBy="area-titulo" className="bg-cream-100">
      <div className="container-page">
        <SectionTitle id="area-titulo" className="max-w-3xl">
          Atendimento em {clinic.address.city} e em toda a Grande Vitória
        </SectionTitle>

        <p className="mt-5 max-w-3xl text-lg text-ink-800 md:text-xl">
          O consultório fica em {clinic.address.district}, em {clinic.address.city}, e atende
          gente das cidades vizinhas. Esse tipo de tratamento pede várias voltas à clínica, e ser
          perto de casa faz diferença.
        </p>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cidades.map((cidade) => (
            <li key={cidade.nome} className="rounded-card border border-cream-200 bg-white p-5 md:p-6">
              <h3 className="text-lg font-semibold text-ink-900 md:text-xl">{cidade.nome}</h3>
              <p className="mt-1.5 text-base leading-relaxed text-ink-700">{cidade.detalhe}</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
