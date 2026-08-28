import { Section, SectionTitle } from './Section'
import { FormularioAgendamento } from './FormularioAgendamento'
import { WhatsAppButton } from './CtaButton'
import { clinic } from '../lib/site-config'

export function CtaFinal() {
  return (
    <Section id="agendar" labelledBy="agendar-titulo" className="bg-navy-900 text-cream-100">
      <div className="container-page grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-16">
        <div>
          <SectionTitle id="agendar-titulo" className="!text-cream-50">
            Agende sua avaliação e pare de adiar
          </SectionTitle>

          <p className="mt-6 text-lg leading-relaxed text-cream-200 md:text-xl">
            Deixe seu nome e WhatsApp que a equipe entra em contato para marcar o dia. A avaliação
            é presencial, em {clinic.address.district}, e nela você descobre a condição do seu osso,
            o que pode ser feito, quanto tempo leva e as formas de pagamento. Sem compromisso de
            fechar tratamento na hora.
          </p>

          <div className="mt-8 rounded-card border border-navy-line bg-navy-800 p-6">
            <p className="text-lg font-semibold text-cream-50">Prefere falar agora?</p>
            <p className="mt-1 text-base text-cream-200">
              A equipe responde no WhatsApp dentro do horário de atendimento.
            </p>
            <WhatsAppButton variant="light" className="mt-5 w-full sm:w-auto">
              Chamar no WhatsApp
            </WhatsAppButton>
          </div>
        </div>

        <FormularioAgendamento />
      </div>
    </Section>
  )
}
