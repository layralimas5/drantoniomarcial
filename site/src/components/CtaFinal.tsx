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
            Agende sua avaliação e{' '}
            <span className="font-display font-normal italic text-sky-200">pare de adiar</span>
          </SectionTitle>

          <p className="mt-5 text-[0.95rem] leading-relaxed text-cream-200 md:mt-6 md:text-xl">
            Você já sabe o que é o tratamento, como ele funciona e quem vai fazer. Falta o passo
            mais fácil: deixe seu nome e WhatsApp que a equipe liga para marcar o dia. Na consulta,
            aqui em {clinic.address.district}, você fica sabendo como está o seu osso, o que dá
            para fazer, quanto tempo leva e como pode pagar. Sem compromisso de fechar nada na hora.
          </p>


          <div className="mt-8 flex flex-col items-start gap-2">
            <WhatsAppButton variant="light" className="w-full sm:w-auto">
              Prefiro falar agora no WhatsApp
            </WhatsAppButton>
          </div>
        </div>

        <FormularioAgendamento />
      </div>
    </Section>
  )
}
