import { Section, SectionTitle } from './Section'
import { FormularioAgendamento } from './FormularioAgendamento'
import { WhatsAppButton } from './CtaButton'
import { clinic } from '../lib/site-config'


export function CtaFinal() {
  return (
    <Section id="agendar" labelledBy="agendar-titulo" origem="direita" className="bg-navy-900 text-cream-100">
      <div className="container-page grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-16">
        <div>
          <SectionTitle id="agendar-titulo" className="!text-cream-50">
            O primeiro passo para recuperar seu sorriso{' '}
            <span className="font-display font-normal italic text-sky-200">pode começar hoje</span>
          </SectionTitle>

          <p className="mt-5 text-[0.95rem] leading-relaxed text-cream-200 md:mt-6 md:text-xl">
            Se você perdeu um, vários ou todos os dentes, agende uma avaliação na {clinic.name}.
            Vamos analisar o seu caso, explicar as possibilidades de tratamento, as etapas e as
            condições de pagamento.
          </p>


          <p className="mt-3 text-[0.95rem] leading-relaxed text-cream-200 md:mt-4 md:text-xl">
            Sem obrigação de iniciar o tratamento no mesmo dia. Primeiro, você entende suas opções
            e decide com tranquilidade.
          </p>

          <div className="mt-8 flex flex-col items-start gap-2">
            <WhatsAppButton variant="light" className="w-full sm:w-auto">
              Prefiro conversar pelo WhatsApp
            </WhatsAppButton>
          </div>
        </div>

        <FormularioAgendamento />
      </div>
    </Section>
  )
}
