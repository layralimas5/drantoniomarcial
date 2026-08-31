import { useState } from 'react'
import { Section, SectionTitle } from './Section'
import { WhatsAppButton } from './CtaButton'
import { perguntasFrequentes } from '../lib/faq'

export function Faq() {
  const [aberta, setAberta] = useState<number | null>(0)

  return (
    <Section id="duvidas" labelledBy="faq-titulo" origem="direita" className="bg-navy-900 text-cream-100">
      <div className="container-page">
        <div className="grid gap-6 md:gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div className="lg:sticky lg:top-[calc(50vh-9rem)] lg:self-start lg:text-center">
            <SectionTitle id="faq-titulo" className="!text-[1.55rem] !text-cream-50 sm:!text-4xl md:!text-5xl lg:!text-[3.25rem]">
              Ainda tem dúvidas sobre implantes dentários?
            </SectionTitle>

            <p className="leading-relaxed max-md:leading-[1.5] mt-3 text-[1.0625rem] text-cream-200 sm:text-xl md:mt-5 md:text-2xl">
              Reunimos as perguntas que mais aparecem na avaliação. Leia com calma antes de
              decidir o próximo passo.
            </p>

          </div>

          <div>
            <div className="divide-y divide-navy-line border-y border-navy-line">
              {perguntasFrequentes.map((item, index) => {
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
                    className="max-md:leading-snug flex w-full items-start justify-between gap-3 py-3.5 text-left text-[0.975rem] font-semibold text-cream-50 md:gap-4 md:py-5 md:text-xl"
                  >
                    {item.pergunta}
                    <span
                      aria-hidden="true"
                      className={`mt-1 shrink-0 text-2xl leading-none text-sky-300 transition-transform duration-200 ${
                        isOpen ? 'rotate-45' : ''
                      }`}
                    >
                      +
                    </span>
                  </button>
                </h3>

                <div id={panelId} role="region" aria-labelledby={buttonId} hidden={!isOpen}>
                  <p className="leading-relaxed max-md:leading-[1.5] pb-4 text-[1rem] text-cream-200 md:pb-6 md:text-lg">{item.resposta}</p>
                </div>
              </div>
            )
          })}
            </div>

            <div className="mt-6 flex flex-col items-center rounded-card border border-navy-line bg-navy-800 p-4 text-center md:mt-8 md:p-6">
              <p className="max-md:leading-[1.45] text-[1rem] text-cream-100 md:text-lg">
                Cada paciente possui uma condição diferente. Converse com nossa equipe e agende
                uma avaliação para entender as possibilidades para o seu caso.
              </p>
              <WhatsAppButton variant="light" className="mt-4 w-full sm:mt-5 sm:w-auto">
                Tirar minhas dúvidas pelo WhatsApp
              </WhatsAppButton>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
