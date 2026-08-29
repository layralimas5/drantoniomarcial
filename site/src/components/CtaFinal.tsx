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
            Agende sua avaliação e pare de adiar
          </SectionTitle>

          <p className="mt-5 text-base leading-relaxed text-cream-200 md:mt-6 md:text-xl">
            Deixe seu nome e WhatsApp que a equipe liga para marcar o dia. A consulta é aqui em
            {clinic.address.district}, e nela você fica sabendo como está o seu osso, o que dá para
            fazer, quanto tempo leva e como pode pagar. Sem compromisso de fechar nada na hora.
          </p>

          <div className="mt-8 rounded-card border border-navy-line bg-navy-800 p-4 md:p-6">
            <p className="text-base font-semibold text-cream-50 md:text-lg">Prefere falar agora?</p>
            <p className="mt-1 text-[0.95rem] text-cream-200 md:text-base">
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
