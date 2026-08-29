import { useState } from 'react'
import { Section, SectionTitle } from './Section'
import { clinic, fullAddress, mapsEmbedUrl, mapsUrl } from '../lib/site-config'

/** O iframe do Google só é montado depois do clique, para não pesar o carregamento. */
export function Localizacao() {
  const [mapaVisivel, setMapaVisivel] = useState(false)

  return (
    <Section id="local" labelledBy="local-titulo" origem="esquerda" className="bg-cream-50">
      <div className="container-page grid gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionTitle id="local-titulo">Onde fica o consultório</SectionTitle>

          <dl className="mt-8 space-y-6 text-lg text-ink-800">
            <div>
              <dt className="font-semibold text-ink-900">Endereço</dt>
              <dd>{fullAddress}</dd>
            </div>
            <div>
              <dt className="font-semibold text-ink-900">Horário de atendimento</dt>
              <dd>{clinic.hours}</dd>
            </div>
            <div>
              <dt className="font-semibold text-ink-900">Telefone</dt>
              <dd>
                <a className="underline underline-offset-4" href={`tel:+${clinic.whatsappNumber}`}>
                  {clinic.phoneDisplay}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-ink-900">E-mail</dt>
              <dd>
                <a className="underline underline-offset-4" href={`mailto:${clinic.email}`}>
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
            className="mt-8 inline-flex min-h-[3.5rem] items-center rounded-full border-2 border-navy-900 px-7 text-lg font-semibold text-navy-900 transition-colors hover:bg-navy-900 hover:text-white"
          >
            Ver rota no Google Maps
          </a>
        </div>

        <div className="overflow-hidden rounded-card border border-cream-200 bg-cream-100">
          {mapaVisivel ? (
            <iframe
              title={`Mapa com a localização da ${clinic.legalName}`}
              src={mapsEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full min-h-[22rem] w-full border-0"
            />
          ) : (
            <button
              type="button"
              onClick={() => setMapaVisivel(true)}
              className="flex h-full min-h-[22rem] w-full flex-col items-center justify-center gap-3 p-8 text-center"
            >
              <svg viewBox="0 0 24 24" className="h-10 w-10 fill-navy-900" aria-hidden="true">
                <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z" />
              </svg>
              <span className="text-lg font-semibold text-ink-900">Carregar o mapa</span>
              <span className="text-base text-ink-500">{fullAddress}</span>
            </button>
          )}
        </div>
      </div>
    </Section>
  )
}
