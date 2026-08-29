import { Section, SectionTitle } from './Section'
import { clinic } from '../lib/site-config'

/**
 * Fotos dos atendimentos e da estrutura da clínica.
 *
 * Regra do CFO: nada de antes e depois, nem foto que mostre resultado de
 * tratamento. Valem imagens de estrutura, equipamento, equipe e atendimento.
 * PENDENTE: trocar os placeholders pelas fotos reais (ver README).
 */
const fotos = [
  { arquivo: 'galeria-implante', legenda: 'Planejamento de implante com exame de imagem' },
  { arquivo: 'galeria-cirurgia', legenda: 'Sala preparada para procedimento cirúrgico' },
  { arquivo: 'galeria-protese', legenda: 'Prótese fixa sendo ajustada na consulta' },
  { arquivo: 'galeria-ortodontia', legenda: 'Acompanhamento de aparelho ortodôntico' },
  { arquivo: 'galeria-atendimento', legenda: 'Atendimento clínico de rotina' },
  { arquivo: 'galeria-estrutura', legenda: 'Recepção e estrutura do consultório' },
]

export function Galeria() {
  return (
    <Section id="clinica" labelledBy="galeria-titulo" origem="esquerda" className="bg-cream-100">
      <div className="container-page">
        <SectionTitle id="galeria-titulo" className="max-w-3xl">
          Como é o atendimento por dentro
        </SectionTitle>

        <p className="mt-5 max-w-3xl text-lg text-ink-800 md:text-xl">
          O consultório em {clinic.address.district} tem estrutura própria para exame, cirurgia e
          acompanhamento. Veja o lugar antes de marcar sua consulta.
        </p>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {fotos.map((foto) => (
            <li key={foto.arquivo}>
              <figure className="group overflow-hidden rounded-card border border-cream-200 bg-white">
                <div className="overflow-hidden">
                  <img
                    src={`/${foto.arquivo}.webp`}
                    width={1200}
                    height={900}
                    alt={foto.legenda}
                    loading="lazy"
                    decoding="async"
                    className="aspect-4/3 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <figcaption className="p-4 text-base text-ink-700 md:p-5 md:text-lg">
                  {foto.legenda}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
