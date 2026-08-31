import { useState } from 'react'
import { Section, SectionTitle } from './Section'
import { clinic, fullAddress, mapsEmbedUrl, mapsUrl } from '../lib/site-config'

/** O iframe do Google só é montado depois do clique, para não pesar o carregamento. */
export function Localizacao() {
  const [mapaVisivel, setMapaVisivel] = useState(false)

  return (
    <Section id="local" labelledBy="local-titulo" origem="esquerda" className="bg-cream-50">
      <div className="container-page grid gap-6 md:gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionTitle id="local-titulo">
            {clinic.name} em {clinic.address.district}, {clinic.address.city}
          </SectionTitle>

          <p className="max-md:leading-[1.5] mt-3 max-w-xl text-[1.0625rem] text-ink-800 md:mt-5 md:text-lg">
            Atendimento com hora marcada para pacientes de {clinic.areasServed.join(', ')} e
            região.
          </p>

          <dl className="mt-5 space-y-3 text-[0.925rem] text-ink-800 md:mt-8 md:space-y-6 md:text-lg">
            <div>
              <dt className="font-semibold text-ink-900">Endereço</dt>
              <dd>{fullAddress}</dd>
            </div>
            <div>
              <dt className="font-semibold text-ink-900">Telefone</dt>
              <dd>
                <a
                  className="underline underline-offset-4 max-md:inline-block max-md:py-3"
                  href={`tel:+${clinic.whatsappNumber}`}
                >
                  {clinic.phoneDisplay}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-ink-900">E-mail</dt>
              <dd>
                <a
                  className="underline underline-offset-4 max-md:inline-block max-md:py-3"
                  href={`mailto:${clinic.email}`}
                >
                  {clinic.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-ink-900">Atendemos pacientes de</dt>
              <dd>{clinic.areasServed.join(', ')}</dd>
            </div>
          </dl>

          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="pulsar-suave mt-6 inline-flex min-h-[3rem] w-full items-center justify-center rounded-full bg-navy-900 px-7 text-[0.975rem] font-semibold text-white transition-colors hover:bg-navy-800 sm:w-auto md:mt-8 md:min-h-[3.5rem] md:text-lg"
          >
            Como chegar
          </a>
        </div>

        <div className="overflow-hidden rounded-card border border-cream-200 bg-cream-100">
          {mapaVisivel ? (
            <iframe
              title={`Mapa com a localização da ${clinic.legalName}`}
              src={mapsEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full min-h-[15rem] w-full border-0 md:min-h-[22rem]"
            />
          ) : (
            <button
              type="button"
              onClick={() => setMapaVisivel(true)}
              className="flex h-full min-h-[15rem] w-full flex-col items-center justify-center gap-2 p-6 text-center md:min-h-[22rem] md:gap-3 md:p-8"
            >
              <svg viewBox="0 0 24 24" className="h-8 w-8 fill-navy-900 md:h-10 md:w-10" aria-hidden="true">
                <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z" />
              </svg>
              <span className="text-[1rem] font-semibold text-ink-900 md:text-lg">Carregar o mapa</span>
              <span className="text-[0.95rem] text-ink-500 md:text-base">{fullAddress}</span>
            </button>
          )}
        </div>
      </div>
    </Section>
  )
}
