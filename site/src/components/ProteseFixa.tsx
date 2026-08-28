import { Section, SectionTitle } from './Section'

const diferencas = [
  {
    titulo: 'Mastigação',
    texto:
      'Como a prótese fica presa nos implantes, a força da mordida volta a ser distribuída no osso, e não na gengiva.',
  },
  {
    titulo: 'Fala',
    texto:
      'Sem a placa que se move dentro da boca, a língua encosta onde precisa encostar. A fala tende a ficar mais natural.',
  },
  {
    titulo: 'Conforto',
    texto:
      'Não precisa de cola, não solta no meio da conversa e não fica machucando a gengiva ao longo do dia.',
  },
  {
    titulo: 'Osso',
    texto:
      'O implante trabalha dentro do osso e ajuda a manter o estímulo que a dentadura móvel não dá.',
  },
]

export function ProteseFixa() {
  return (
    <Section labelledBy="protese-titulo" className="bg-sky-100 text-ink-900">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <div>
            <SectionTitle id="protese-titulo">
              Dentes fixos, presos no osso, que não saem para dormir
            </SectionTitle>

            <p className="mt-6 text-lg leading-relaxed text-ink-800 md:text-xl">
              Implantes de titânio são fixados no osso e servem de base para uma prótese que fica
              presa ali. Ela não sai para dormir, não depende de cola e a higiene é feita com a
              prótese na boca, com escova e material específico, orientado no acompanhamento.
            </p>

            <p className="mt-4 text-lg leading-relaxed text-ink-800 md:text-xl">
              Se o seu caso permite esse tipo de tratamento é o que a avaliação presencial responde:
              depende do osso, da gengiva e da sua saúde geral.
            </p>
          </div>

          <ul className="grid gap-4 sm:grid-cols-2">
            {diferencas.map((item) => (
              <li key={item.titulo} className="rounded-card border border-sky-200 bg-white p-6">
                <h3 className="text-xl font-semibold text-ink-900">{item.titulo}</h3>
                <p className="mt-2 text-base leading-relaxed text-ink-700 md:text-lg">{item.texto}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
