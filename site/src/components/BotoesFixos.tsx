import { useEffect, useState } from 'react'
import { AnimatePresence, m, useReducedMotion } from 'framer-motion'
import { WhatsAppIcon } from './CtaButton'
import { whatsappUrl } from '../lib/site-config'
import { trackConversion } from '../lib/tracking'

/** Aparece depois do hero: WhatsApp flutuante no desktop, barra de CTA no mobile. */
export function BotoesFixos() {
  const [visivel, setVisivel] = useState(false)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    function onScroll(): void {
      setVisivel(window.scrollY > 400)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const animacao = reduceMotion
    ? {}
    : { initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: 24 } }

  return (
    <AnimatePresence>
      {visivel ? (
        <>
          <m.a
            key="flutuante"
            {...animacao}
            transition={{ duration: 0.25 }}
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackConversion('whatsapp_click')}
            className="fixed right-5 bottom-5 z-40 hidden h-16 w-16 items-center justify-center rounded-full bg-[#128C7E] text-white shadow-lg transition-colors hover:bg-[#0d6d62] md:flex"
          >
            <WhatsAppIcon className="h-8 w-8" />
            <span className="sr-only">Falar no WhatsApp</span>
          </m.a>

          <m.div
            key="barra"
            {...animacao}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 bottom-0 z-40 flex gap-3 border-t border-cream-300 bg-cream-50/95 p-3 backdrop-blur md:hidden"
          >
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackConversion('whatsapp_click')}
              className="flex min-h-[3.25rem] flex-1 items-center justify-center gap-2 rounded-full bg-accent-600 text-lg font-semibold text-white"
            >
              <WhatsAppIcon className="h-6 w-6" />
              WhatsApp
            </a>
            <a
              href="#agendar"
              className="flex min-h-[3.25rem] flex-1 items-center justify-center rounded-full border-2 border-ink-700 text-lg font-semibold text-ink-900"
            >
              Agendar
            </a>
          </m.div>
        </>
      ) : null}
    </AnimatePresence>
  )
}
