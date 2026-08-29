import { useState } from 'react'
import { Section, SectionTitle } from './Section'
import { WhatsAppButton } from './CtaButton'
import { perguntasFrequentes } from '../lib/faq'
import { dentist } from '../lib/site-config'

export function Faq() {
  const [aberta, setAberta] = useState<number | null>(0)

  return (
    <Section id="duvidas" labelledBy="faq-titulo" className="bg-navy-900 text-cream-100">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div className="lg:sticky lg:top-[calc(50vh-9rem)] lg:self-start lg:text-center">
            <SectionTitle id="faq-titulo" className="!text-cream-50">
              As dúvidas que travam a decisão, respondidas
            </SectionTitle>

            <p className="mt-5 text-lg text-cream-200 md:text-xl">
              Muita gente adia o tratamento por causa de uma dessas perguntas. Leia com calma: é
              melhor decidir sabendo do que continuar adiando.
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
                    className="flex w-full items-start justify-between gap-4 py-5 text-left text-lg font-semibold text-cream-50 md:text-xl"
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
                  <p className="pb-6 text-lg leading-relaxed text-cream-200">{item.resposta}</p>
                </div>
              </div>
            )
          })}
            </div>

            <div className="mt-8 rounded-card border border-navy-line bg-navy-800 p-6">
              <p className="text-lg text-cream-100">
                Sua dúvida não está aqui? Pergunte direto para a equipe do {dentist.shortName}, sem
                compromisso de agendar nada.
              </p>
              <WhatsAppButton variant="light" className="mt-5 w-full sm:w-auto">
                Tirar minha dúvida agora
              </WhatsAppButton>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
