import { Section, SectionTitle } from './Section'
import { clinic, dentist } from '../lib/site-config'

const { career, bucomaxilo, implantodontiaDesde, ortodontiaDesde } = dentist.experience

export function SobreDoutor() {
  return (
    <Section labelledBy="doutor-titulo" origem="esquerda" className="bg-cream-50">
      {/* No celular o título vem antes do retrato: primeiro a pessoa entende de
          quem se trata, depois vê o rosto. No desktop a ordem aprovada é a foto
          à esquerda e o texto à direita. */}
      <div className="container-page grid items-center gap-6 md:gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-14">
        <SectionTitle id="doutor-titulo-mobile" className="lg:hidden">
          Quem vai{' '}
          <span className="font-display font-normal italic text-navy-700">cuidar do seu caso</span>
        </SectionTitle>

        <img
          src="/apresentacao.webp"
          width={874}
          height={1600}
          alt={`${dentist.name}, responsável técnico da ${clinic.name}, durante um atendimento`}
          loading="lazy"
          decoding="async"
          className="pulsar-suave aspect-4/5 w-full rounded-card object-cover object-[center_25%] shadow-[0_18px_40px_-30px_rgba(12,32,51,0.5)] sm:aspect-3/2 lg:aspect-3/4 lg:object-center lg:shadow-[0_30px_70px_-40px_rgba(12,32,51,0.55)]"
        />

        <div>
          <SectionTitle id="doutor-titulo" className="hidden lg:block">
            Quem vai{' '}
            <span className="font-display font-normal italic text-navy-700">
              cuidar do seu caso
            </span>
          </SectionTitle>

          <p className="leading-relaxed max-md:leading-[1.5] text-[1.0625rem] text-ink-800 lg:mt-6 lg:text-xl">
            {dentist.name}, {dentist.cro}. São {career} anos de profissão, {bucomaxilo} deles como
            especialista em {dentist.mainSpecialty}, com atendimento na {clinic.name}, em{' '}
            {clinic.address.district}, {clinic.address.city}/{clinic.address.state}.
          </p>

          <p className="leading-relaxed max-md:leading-[1.5] mt-2.5 text-[1.0625rem] text-ink-800 md:mt-4 lg:text-xl">
            Atua na área de implantodontia desde {implantodontiaDesde} e na de ortodontia desde{' '}
            {ortodontiaDesde}. Ao longo da carreira acompanhou um grande número de casos clínicos e
            cirúrgicos e trabalhou em diversos hospitais da Grande Vitória, nas áreas de
            traumatologia e buco maxilofacial.
          </p>

          <p className="leading-relaxed max-md:leading-[1.5] mt-2.5 text-[1.0625rem] text-ink-800 md:mt-4 lg:text-xl">
            Na {clinic.name}, o paciente é acompanhado por ele desde a avaliação e o planejamento
            até as etapas cirúrgicas e os retornos do tratamento.
          </p>

          {/* PENDENTE: confirmar o horário real com a clínica. */}
          <div className="mt-6 rounded-card bg-navy-900 p-4 text-cream-100 md:mt-10 md:p-7">
            <h3 className="text-[1rem] font-semibold text-cream-50 md:text-xl">
              Horário de atendimento
            </h3>
            <p className="mt-1 text-[0.95rem] text-cream-200 md:text-base">
              Avaliação com hora marcada, para você não esperar.
            </p>

            <dl className="mt-3 divide-y divide-navy-line border-t border-navy-line md:mt-4">
              {clinic.hoursByDay.map((linha) => (
                <div key={linha.dia} className="flex items-center justify-between gap-4 py-2 md:py-2.5">
                  <dt className="text-[0.95rem] text-cream-100 md:text-base">{linha.dia}</dt>
                  <dd className="text-[0.95rem] font-semibold text-cream-50 md:text-base">
                    {linha.horario}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </Section>
  )
}
