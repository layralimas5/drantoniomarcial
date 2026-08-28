import { useState } from 'react'
import { Section, SectionTitle } from './Section'
import { WhatsAppButton } from './CtaButton'
import { dentist } from '../lib/site-config'

/**
 * Respostas escritas em linguagem de possibilidade, sem promessa de resultado,
 * conforme o Código de Ética Odontológica. Toda revisão de texto aqui precisa
 * passar pelo Dr. Antonio antes de publicar.
 */
const perguntas = [
  {
    pergunta: 'Dói?',
    resposta:
      'O procedimento é feito com anestesia, então durante a cirurgia a região fica dormente. Depois é comum haver inchaço e desconforto por alguns dias, e você recebe orientação e prescrição para esse período. Cada organismo responde de um jeito, e isso é conversado na avaliação.',
  },
  {
    pergunta: 'Vou ficar sem dente durante o tratamento?',
    resposta:
      'Na maior parte dos casos existe uma solução provisória para o período de cicatrização, para que você não fique sem dentes no dia a dia. O que dá para fazer no seu caso depende da condição do osso e é definido no plano de tratamento.',
  },
  {
    pergunta: 'Quanto tempo leva do início ao fim?',
    resposta:
      'Varia bastante conforme o caso, porque o osso precisa de tempo para cicatrizar em volta dos implantes. Na avaliação você recebe uma previsão de etapas e de prazo para a sua situação, não uma média genérica.',
  },
  {
    pergunta: 'Eu tenho osso suficiente? E se não tiver?',
    resposta:
      'Isso é justamente o que o exame de imagem mostra. Quando o osso está reduzido, existem alternativas técnicas, como enxerto ou outro planejamento de posicionamento dos implantes. Só dá para dizer o que se aplica a você depois do exame.',
  },
  {
    pergunta: 'Sou diabético, hipertenso ou fumante. Posso fazer?',
    resposta:
      'Essas condições não descartam o tratamento por si só, mas influenciam o planejamento e a cicatrização. Por isso a avaliação inclui seu histórico de saúde e as medicações que você usa. Em alguns casos é pedido contato com o seu médico antes de seguir.',
  },
  {
    pergunta: 'Dura quanto tempo? Preciso de manutenção?',
    resposta:
      'Implante e prótese exigem higiene diária e retornos periódicos, como qualquer estrutura que fica na boca. Com acompanhamento e cuidado, a tendência é de longa durabilidade, mas não existe garantia de prazo, e quem promete isso está prometendo o que não pode.',
  },
  {
    pergunta: 'Quais as formas de pagamento?',
    resposta:
      'As condições são apresentadas pessoalmente, depois do plano de tratamento, porque o valor depende de quantos implantes e de qual tipo de prótese o seu caso exige. Trabalhamos com formas de pagamento parceladas, apresentadas na consulta.',
  },
  {
    pergunta: 'Atendem convênio?',
    resposta:
      'Fale com a equipe pelo WhatsApp informando o seu convênio, que a gente confirma o que é possível antes de você se deslocar até a clínica.',
  },
]

export function Faq() {
  const [aberta, setAberta] = useState<number | null>(0)

  return (
    <Section id="duvidas" labelledBy="faq-titulo" className="bg-cream-100">
      <div className="container-page max-w-3xl">
        <SectionTitle id="faq-titulo">Perguntas que quase todo mundo faz</SectionTitle>

        <div className="mt-10 divide-y divide-cream-300 border-y border-cream-300">
          {perguntas.map((item, index) => {
            const isOpen = aberta === index
            const panelId = `faq-painel-${index}`
            const buttonId = `faq-botao-${index}`

            return (
              <div key={item.pergunta}>
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setAberta(isOpen ? null : index)}
                    className="flex w-full items-start justify-between gap-4 py-5 text-left text-lg font-semibold text-ink-900 md:text-xl"
                  >
                    {item.pergunta}
                    <span
                      aria-hidden="true"
                      className={`mt-1 shrink-0 text-2xl leading-none text-accent-600 transition-transform duration-200 ${
                        isOpen ? 'rotate-45' : ''
                      }`}
                    >
                      +
                    </span>
                  </button>
                </h3>

                <div id={panelId} role="region" aria-labelledby={buttonId} hidden={!isOpen}>
                  <p className="pb-6 text-lg leading-relaxed text-ink-800">{item.resposta}</p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-10 rounded-card border border-cream-200 bg-white p-6 text-center md:p-8">
          <p className="text-lg text-ink-800 md:text-xl">
            Ficou alguma dúvida que não está aqui? Pergunte direto para a equipe do{' '}
            {dentist.shortName}.
          </p>
          <WhatsAppButton className="mt-5 w-full sm:w-auto">Tirar minha dúvida agora</WhatsAppButton>
        </div>
      </div>
    </Section>
  )
}
