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
 * Barra fixa no topo. Começa transparente sobre o banner e, a partir do
 * primeiro scroll, ganha fundo desfocado para o texto continuar legível.
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
    <div
      className={`sticky top-0 z-50 transition-colors duration-200 ${
        rolou ? 'border-b border-cream-200 bg-white/80 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav
        aria-label="Navegação da página"
        className="container-page flex min-h-[4.5rem] items-center justify-between gap-6"
      >
        <a href="#topo" className="text-xl font-semibold tracking-tight text-navy-900">
          {clinic.name}
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-base font-medium text-ink-800 underline-offset-8 hover:underline"
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
          className="inline-flex min-h-[3rem] items-center gap-2 rounded-full bg-navy-900 px-5 text-base font-semibold text-white transition-colors hover:bg-navy-800"
        >
          <WhatsAppIcon className="h-5 w-5" />
          <span className="hidden sm:inline">Falar no WhatsApp</span>
          <span className="sm:hidden">WhatsApp</span>
        </a>
      </nav>
    </div>
  )
}
