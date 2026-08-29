import { Section, SectionTitle } from './Section'

const diferencas = [
  { titulo: 'Mastigação', texto: 'A força da mordida vai para o osso, e não para a gengiva.' },
  { titulo: 'Fala', texto: 'Nada se mexe dentro da boca, então a fala fica mais natural.' },
  { titulo: 'Conforto', texto: 'Sem cola, sem soltar no meio da conversa, sem machucar a gengiva.' },
  { titulo: 'Osso', texto: 'O implante trabalha dentro do osso e ajuda a manter o osso firme.' },
]

export function ProteseFixa() {
  return (
    <Section id="tratamento" labelledBy="protese-titulo" className="bg-navy-900 text-cream-100">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <div>
            <SectionTitle id="protese-titulo" className="!text-cream-50">
              Dentes fixos, presos no osso, que não saem para dormir
            </SectionTitle>

            <p className="mt-6 text-lg leading-relaxed text-cream-200 md:text-xl">
              Pequenos pinos de titânio são presos no osso. Em cima deles entram os dentes, que
              ficam firmes: não saem para dormir e não usam cola.
            </p>

            <p className="mt-4 text-lg leading-relaxed text-cream-200 md:text-xl">
              Se dá para fazer no seu caso, só o exame responde. Por telefone ninguém tem como
              dizer.
            </p>
          </div>

          <ul className="grid gap-4 sm:grid-cols-2">
            {diferencas.map((item) => (
              <li
                key={item.titulo}
                className="pulsar-suave rounded-card border border-navy-line bg-navy-800 p-5 md:p-6"
              >
                <h3 className="text-lg font-semibold text-cream-50 md:text-xl">{item.titulo}</h3>
                <p className="mt-1.5 text-base leading-relaxed text-cream-200 md:text-lg">
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
