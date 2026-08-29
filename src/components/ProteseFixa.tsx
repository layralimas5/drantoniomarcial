import { Section, SectionTitle } from './Section'

const diferencas = [
  { titulo: 'Mastigação', texto: 'A força da mordida vai para o osso, e não para a gengiva.' },
  { titulo: 'Fala', texto: 'Nada se mexe dentro da boca, então a fala fica mais natural.' },
  { titulo: 'Conforto', texto: 'Sem cola, sem soltar no meio da conversa, sem machucar a gengiva.' },
  { titulo: 'Osso', texto: 'O implante trabalha dentro do osso e ajuda a manter o osso firme.' },
]

export function ProteseFixa() {
  return (
    <Section id="tratamento" labelledBy="protese-titulo" origem="direita" className="bg-navy-900 text-cream-100">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <div>
            <SectionTitle id="protese-titulo" className="!text-cream-50">
              Dentes fixos, presos no osso, que não saem para dormir
            </SectionTitle>

            <p className="mt-5 text-[0.95rem] leading-relaxed text-cream-200 md:mt-6 md:text-xl">
              A saída para quase todas essas situações tem o mesmo princípio: pequenos pinos de
              titânio são presos no osso e, em cima deles, entram os dentes. Eles ficam firmes, não
              saem para dormir e não usam cola.
            </p>

            <p className="mt-3 text-[0.95rem] leading-relaxed text-cream-200 md:mt-4 md:text-xl">
              Se dá para fazer no seu caso, só o exame responde. Por telefone ninguém tem como
              dizer.
            </p>
          </div>

          <ul className="grid gap-4 sm:grid-cols-2">
            {diferencas.map((item) => (
              <li
                key={item.titulo}
                className="pulsar-suave rounded-card border border-navy-line bg-navy-800 p-3.5 md:p-6"
              >
                <h3 className="text-[0.95rem] font-semibold text-cream-50 md:text-xl">{item.titulo}</h3>
                <p className="mt-1 text-[0.85rem] leading-relaxed text-cream-200 md:mt-1.5 md:text-lg">
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
