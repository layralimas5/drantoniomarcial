import { Section, SectionTitle } from './Section'

const situacoes = [
  'A dentadura solta na hora de comer ou de conversar',
  'Você evita certos alimentos e já nem lembra o gosto de alguns',
  'Cobre a boca quando ri, ou evita aparecer em foto',
  'Perdeu vários dentes e acha que já passou da hora de resolver',
]

export function Dores() {
  return (
    <Section labelledBy="dores-titulo" className="bg-cream-50">
      <div className="container-page">
        <SectionTitle id="dores-titulo" className="max-w-3xl">
          Se você se identifica com alguma dessas situações, dá pra resolver
        </SectionTitle>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {situacoes.map((situacao) => (
            <li
              key={situacao}
              className="flex gap-4 rounded-card border border-cream-200 bg-white p-6 text-lg text-ink-800 md:text-xl"
            >
              <span aria-hidden="true" className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-accent-600" />
              {situacao}
            </li>
          ))}
        </ul>

        <p className="mt-10 max-w-3xl text-xl font-medium text-ink-900">
          Nenhuma dessas situações é definitiva. Existe tratamento, e o primeiro passo é entender o
          seu caso.
        </p>
      </div>
    </Section>
  )
}
