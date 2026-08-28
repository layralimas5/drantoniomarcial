import { useState } from 'react'
import { Section, SectionTitle } from './Section'
import { dentist } from '../lib/site-config'

/**
 * Vídeo carregado só sob clique: antes disso a página serve apenas o poster,
 * para não comprometer o LCP em rede móvel.
 */
export function VideoDoutor() {
  const [playing, setPlaying] = useState(false)

  return (
    <Section id="video" labelledBy="video-titulo" className="bg-cream-100">
      <div className="container-page max-w-3xl">
        <SectionTitle id="video-titulo">{dentist.shortName} explica como funciona</SectionTitle>

        <p className="mt-4 text-lg text-ink-700 md:text-xl">
          Menos de dois minutos: o que é o procedimento, como é a avaliação, quanto tempo leva e o
          que a pessoa sente.
        </p>

        <div className="mt-8 overflow-hidden rounded-card bg-ink-900 shadow-[0_24px_60px_-32px_rgba(18,36,29,0.6)]">
          {playing ? (
            <video
              className="aspect-video w-full"
              controls
              autoPlay
              playsInline
              preload="none"
              poster="/video-poster.webp"
            >
              <source src="/dr-antonio-explica.mp4" type="video/mp4" />
              <track kind="captions" srcLang="pt-BR" label="Português" src="/legendas.vtt" default />
              Seu navegador não consegue exibir este vídeo.
            </video>
          ) : (
            <button
              type="button"
              onClick={() => setPlaying(true)}
              className="group relative block aspect-video w-full"
            >
              <img
                src="/video-poster.webp"
                width={1280}
                height={720}
                alt=""
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
              <span className="absolute inset-0 flex items-center justify-center bg-ink-900/35">
                <span className="flex h-20 w-20 items-center justify-center rounded-full bg-navy-900 transition-transform duration-200 group-hover:scale-105">
                  <svg viewBox="0 0 24 24" className="ml-1 h-9 w-9 fill-white" aria-hidden="true">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
              </span>
              <span className="sr-only">
                Assistir ao vídeo em que {dentist.shortName} explica o tratamento
              </span>
            </button>
          )}
        </div>
      </div>
    </Section>
  )
}
