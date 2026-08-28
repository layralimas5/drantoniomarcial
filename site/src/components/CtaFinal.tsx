import { Section, SectionTitle } from './Section'
import { FormularioAgendamento } from './FormularioAgendamento'
import { WhatsAppButton } from './CtaButton'
import { clinic } from '../lib/site-config'

export function CtaFinal() {
  return (
    <Section id="agendar" labelledBy="agendar-titulo" className="bg-sky-100 text-ink-900">
      <div className="container-page grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-16">
        <div>
          <SectionTitle id="agendar-titulo">
            Agende sua avaliação
          </SectionTitle>

          <p className="mt-6 text-lg leading-relaxed text-ink-800 md:text-xl">
            Deixe seu nome e WhatsApp que a equipe entra em contato para marcar o dia. A avaliação é
            presencial, em {clinic.address.district}, e serve para entender o seu caso antes de
            qualquer decisão.
          </p>

          <div className="mt-8 rounded-card border border-sky-200 bg-white p-6">
            <p className="text-lg font-semibold text-ink-900">Prefere falar agora?</p>
            <p className="mt-1 text-base text-ink-700">
              A equipe responde no WhatsApp dentro do horário de atendimento.
            </p>
            <WhatsAppButton className="mt-5 w-full sm:w-auto">Chamar no WhatsApp</WhatsAppButton>
          </div>
        </div>

        <FormularioAgendamento />
      </div>
    </Section>
  )
}
