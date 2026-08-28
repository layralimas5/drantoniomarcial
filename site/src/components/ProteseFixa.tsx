import { Section, SectionTitle } from './Section'

const diferencas = [
  { titulo: 'Mastigação', texto: 'A força da mordida volta para o osso, não para a gengiva.' },
  { titulo: 'Fala', texto: 'Sem a placa que se move, a língua encosta onde precisa encostar.' },
  { titulo: 'Conforto', texto: 'Não usa cola, não solta na conversa e não machuca ao longo do dia.' },
  { titulo: 'Osso', texto: 'O implante trabalha dentro do osso e ajuda a manter o estímulo.' },
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
              Implantes de titânio fixados no osso servem de base para uma prótese presa. Ela não
              sai para dormir e não depende de cola.
            </p>

            <p className="mt-4 text-lg leading-relaxed text-cream-200 md:text-xl">
              Se o seu caso permite esse tratamento é pergunta de exame, não de orçamento por
              telefone.
            </p>
          </div>

          <ul className="grid gap-4 sm:grid-cols-2">
            {diferencas.map((item) => (
              <li
                key={item.titulo}
                className="pulsar-suave rounded-card border border-navy-line bg-navy-800 p-6"
              >
                <h3 className="text-xl font-semibold text-cream-50">{item.titulo}</h3>
                <p className="mt-2 text-base leading-relaxed text-cream-200 md:text-lg">
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
