import { Section, SectionTitle } from './Section'
import { clinic, dentist } from '../lib/site-config'

const credenciais = [
  `Especialização em ${dentist.specialty.toLowerCase()}`,
  `Registro profissional ${dentist.cro}`,
  'Atendimento em implantodontia, ortodontia, ATM e bruxismo',
  'Consultório próprio com exame de imagem e ambiente preparado para cirurgia',
]

export function SobreDoutor() {
  return (
    <Section labelledBy="doutor-titulo" className="bg-cream-50">
      <div className="container-page grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <img
          src="/foto.webp"
          width={1200}
          height={1499}
          alt={`${dentist.name}, cirurgião bucomaxilofacial responsável pela ${clinic.name}`}
          loading="lazy"
          decoding="async"
          className="pulsar-suave aspect-4/5 w-full rounded-card object-cover"
        />

        <div>
          <SectionTitle id="doutor-titulo">Quem vai cuidar do seu caso</SectionTitle>

          <p className="mt-6 text-lg leading-relaxed text-ink-800 md:text-xl">
            {dentist.name} é cirurgião-dentista especialista em cirurgia da boca e do rosto.
            Atende em {clinic.address.district}, em {clinic.address.city}, e acompanha
            pessoalmente cada caso, da primeira consulta ao último retorno.
          </p>

          <ul className="mt-8 space-y-4">
            {credenciais.map((credencial) => (
              <li key={credencial} className="flex gap-3 text-lg text-ink-800">
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
        </div>
      </div>
    </Section>
  )
}
