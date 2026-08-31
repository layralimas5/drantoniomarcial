import { Section, SectionTitle } from './Section'
import { clinic, dentist } from '../lib/site-config'

const credenciais = [
  ...dentist.specialties.map((especialidade) => `Especialista em ${especialidade}`),
  `Registro profissional ${dentist.cro}`,
  'Acompanhamento desde a avaliação e o planejamento até as etapas cirúrgicas e os retornos',
]

export function SobreDoutor() {
  return (
    <Section labelledBy="doutor-titulo" origem="esquerda" className="bg-cream-50">
      <div className="container-page grid items-center gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-14">
        <img
          src="/foto.webp"
          width={1200}
          height={1499}
          alt={`${dentist.name}, responsável técnico da ${clinic.name}`}
          loading="lazy"
          decoding="async"
          className="pulsar-suave aspect-3/4 w-full rounded-card object-cover shadow-[0_30px_70px_-40px_rgba(12,32,51,0.55)]"
        />

        <div>
          <SectionTitle id="doutor-titulo">
            Quem vai{' '}
            <span className="font-display font-normal italic text-navy-700">cuidar do seu caso</span>
          </SectionTitle>

          <p className="mt-5 text-[0.95rem] leading-relaxed text-ink-800 md:mt-6 md:text-xl">
            {dentist.name}, {dentist.cro}. Na {clinic.name}, o paciente conta com acompanhamento
            desde a avaliação e o planejamento até as etapas cirúrgicas e os retornos do
            tratamento, em {clinic.address.district}, {clinic.address.city}/{clinic.address.state}.
          </p>

          <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-800 md:mt-4 md:text-xl">
            Experiência e planejamento voltados especialmente para casos de implantes dentários,
            reabilitações com próteses fixas sobre implantes e cirurgia bucomaxilofacial.
          </p>

          <ul className="mt-7 space-y-3 md:mt-8 md:space-y-4">
            {credenciais.map((credencial) => (
              <li key={credencial} className="flex gap-3 text-[0.85rem] text-ink-800 md:text-lg">
                <svg
                  viewBox="0 0 20 20"
                  className="mt-1 h-5 w-5 shrink-0 fill-navy-900"
                  aria-hidden="true"
                >
                  <path d="M8.2 14.4 4 10.2l1.4-1.4 2.8 2.8L14.6 5l1.4 1.4z" />
                </svg>
                {credencial}
              </li>
            ))}
          </ul>

          {/* PENDENTE: confirmar o horário real com a clínica. */}
          <div className="mt-8 rounded-card bg-navy-900 p-4 text-cream-100 md:mt-10 md:p-7">
            <h3 className="text-base font-semibold text-cream-50 md:text-xl">Horário de atendimento</h3>
            <p className="mt-1 text-[0.85rem] text-cream-200 md:text-base">
              Avaliação com hora marcada, para você não esperar.
            </p>

            <dl className="mt-4 divide-y divide-navy-line border-t border-navy-line">
              {clinic.hoursByDay.map((linha) => (
                <div key={linha.dia} className="flex items-center justify-between gap-4 py-2.5">
                  <dt className="text-[0.9rem] text-cream-100 md:text-base">{linha.dia}</dt>
                  <dd className="text-[0.9rem] font-semibold text-cream-50 md:text-base">{linha.horario}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </Section>
  )
}
