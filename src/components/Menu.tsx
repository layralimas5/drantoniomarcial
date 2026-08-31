import { useEffect, useState } from 'react'
import { WhatsAppIcon } from './CtaButton'
import { clinic, whatsappUrl } from '../lib/site-config'
import { trackConversion } from '../lib/tracking'

const links = [
  { href: '#tratamento', rotulo: 'O tratamento' },
  { href: '#passos', rotulo: 'Como funciona' },
  { href: '#duvidas', rotulo: 'Dúvidas' },
  { href: '#local', rotulo: 'Onde fica' },
] as const

/**
 * Menu flutuante em formato de cápsula, centralizado no topo. O invólucro
 * continua sticky e sem fundo: quem carrega o visual é a própria cápsula,
 * que ganha sombra mais firme depois do primeiro scroll.
 */
export function Menu() {
  const [rolou, setRolou] = useState(false)

  useEffect(() => {
    function onScroll(): void {
      setRolou(window.scrollY > 24)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="container-page sticky top-0 z-50 py-1.5 md:py-2.5">
      <nav
        aria-label="Navegação da página"
        className={`mx-auto flex max-w-5xl items-center justify-between gap-3 rounded-full border border-cream-200 bg-white/85 py-1.5 pr-1.5 pl-4 backdrop-blur-md transition-shadow duration-200 md:gap-6 md:pl-6 ${
          rolou
            ? 'shadow-[0_10px_30px_-12px_rgba(12,32,51,0.28)]'
            : 'shadow-[0_6px_20px_-14px_rgba(12,32,51,0.25)]'
        }`}
      >
        <a
          href="#topo"
          className="flex shrink-0 items-center text-[0.975rem] font-semibold tracking-tight text-navy-900 max-md:min-h-[3rem] md:text-lg"
        >
          {clinic.name}
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[0.95rem] font-medium text-ink-800 underline-offset-8 transition-colors hover:text-ink-900 hover:underline"
              >
                {link.rotulo}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackConversion('whatsapp_click')}
          className="pulsar-suave inline-flex min-h-[3rem] shrink-0 items-center gap-2 rounded-full bg-navy-900 py-1 pr-1 pl-4 text-sm font-semibold text-white transition-colors hover:bg-navy-800 md:min-h-[3rem] md:gap-3 md:pl-5 md:text-base"
        >
          <span className="hidden sm:inline">Falar no WhatsApp</span>
          <span className="sm:hidden">WhatsApp</span>
          <span className="grid h-9 w-9 place-items-center rounded-full bg-white/15 md:h-10 md:w-10">
            <WhatsAppIcon className="h-4 w-4 md:h-5 md:w-5" />
          </span>
        </a>
      </nav>
    </div>
  )
}
