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
    <Section labelledBy="area-titulo" origem="direita" className="bg-navy-900 text-cream-100">
      <div className="container-page">
        <SectionTitle id="area-titulo" className="max-w-3xl !text-cream-50">
          Atendimento em {clinic.address.city} e em toda a Grande Vitória
        </SectionTitle>

        <p className="mt-4 max-w-3xl text-base text-cream-200 md:mt-5 md:text-xl">
          O consultório fica em {clinic.address.district}, em {clinic.address.city}, e atende
          gente das cidades vizinhas. Esse tipo de tratamento pede várias voltas à clínica, e ser
          perto de casa faz diferença.
        </p>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cidades.map((cidade) => (
            <li key={cidade.nome} className="pulsar-suave rounded-card border border-navy-line bg-navy-800 p-4 md:p-6">
              <h3 className="text-base font-semibold text-cream-50 md:text-xl">{cidade.nome}</h3>
              <p className="mt-1 text-[0.95rem] leading-relaxed text-cream-200 md:mt-1.5 md:text-base">{cidade.detalhe}</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
