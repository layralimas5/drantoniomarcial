import { Section, SectionTitle } from './Section'
import { WhatsAppButton } from './CtaButton'

/**
 * Última objeção antes do agendamento: dinheiro e burocracia.
 * PENDENTE: confirmar com a clínica a lista de convênios e a condição exata de
 * parcelamento (entrada, número de parcelas, Pix) antes de publicar.
 */
const blocos = [
  {
    titulo: 'Formas de pagamento',
    texto:
      'Após a avaliação e a definição do tratamento, você recebe todas as informações sobre etapas, investimento e possibilidades de pagamento.',
    itens: [
      'Diferentes formas de pagamento',
      'Possibilidade de parcelamento',
      'Planejamento apresentado antes do início do tratamento',
      'Condições explicadas de forma clara pela equipe',
    ],
  },
  {
    titulo: 'Convênio odontológico',
    texto: 'Diga qual é o seu no WhatsApp que a equipe confirma o que dá para usar.',
    itens: [
      'A confirmação sai antes de você sair de casa',
      'Se o seu plano não cobrir, a equipe explica o que muda',
    ],
  },
  {
    titulo: 'O que levar na consulta',
    texto: 'Só o que ajuda o Dr. Antonio a entender o seu caso.',
    itens: [
      'A lista dos remédios que você toma',
      'Exame de imagem recente, se você já tiver',
      'Documento e carteirinha do convênio, se for usar',
    ],
  },
]

export function ConvenioPagamento() {
  return (
    <Section labelledBy="pagamento-titulo" origem="esquerda" className="bg-navy-800 text-cream-100">
      <div className="container-page">
        <SectionTitle id="pagamento-titulo" className="max-w-3xl !text-cream-50">
          Um planejamento que também{' '}
          <span className="font-display font-normal italic text-sky-200">
            considera suas possibilidades
          </span>
        </SectionTitle>

        <p className="mt-4 max-w-3xl text-[0.95rem] text-cream-200 md:mt-5 md:text-xl">
          As condições são apresentadas junto do plano de tratamento, porque o investimento muda
          conforme a quantidade de implantes e o tipo de prótese. Qualquer dúvida, a equipe
          responde no WhatsApp sem compromisso.
        </p>

        <ul className="mt-10 grid gap-4 md:grid-cols-3 md:gap-6">
          {blocos.map((bloco) => (
            <li key={bloco.titulo} className="pulsar-suave rounded-card border border-navy-line bg-navy-900 p-4 md:p-7">
              <h3 className="text-base font-semibold text-cream-50 md:text-xl">{bloco.titulo}</h3>
              <p className="mt-2 text-[0.85rem] leading-relaxed text-cream-200 md:text-base">
                {bloco.texto}
              </p>

              <ul className="mt-5 space-y-2.5 border-t border-navy-line pt-5">
                {bloco.itens.map((item) => (
                  <li key={item} className="flex gap-2.5 text-[0.85rem] text-cream-100 md:text-base">
                    <svg viewBox="0 0 20 20" className="mt-1 h-4 w-4 shrink-0 fill-sky-300" aria-hidden="true">
                      <path d="M8.2 14.4 4 10.2l1.4-1.4 2.8 2.8L14.6 5l1.4 1.4z" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex justify-center">
          <WhatsAppButton variant="light" className="w-full sm:w-auto">
            Consultar formas de pagamento
          </WhatsAppButton>
        </div>
      </div>
    </Section>
  )
}
