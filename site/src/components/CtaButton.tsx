import type { ReactNode } from 'react'
import { whatsappUrl } from '../lib/site-config'
import { trackConversion } from '../lib/tracking'

const baseClasses =
  'pulsar inline-flex min-h-[3rem] items-center justify-center gap-2.5 rounded-full px-6 py-2.5 text-center text-base leading-snug font-semibold transition-colors duration-200 sm:min-h-[3.5rem] sm:gap-3 sm:px-7 sm:py-3 sm:text-lg'

/** `light` existe para os blocos de fundo azul escuro, onde o sólido sumiria. */
const VARIANTES = {
  solid: 'bg-navy-900 text-white hover:bg-navy-800',
  light: 'bg-white text-navy-900 hover:bg-cream-100',
  outline: 'border-2 border-navy-900 bg-transparent text-navy-900 hover:bg-navy-900 hover:text-white',
} as const

interface WhatsAppButtonProps {
  children?: ReactNode
  className?: string
  variant?: keyof typeof VARIANTES
}

export function WhatsAppButton({
  children = 'Falar com a equipe no WhatsApp',
  className = '',
  variant = 'solid',
}: WhatsAppButtonProps) {
  const variantClasses = VARIANTES[variant]

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackConversion('whatsapp_click')}
      className={`${baseClasses} ${variantClasses} ${className}`}
    >
      <WhatsAppIcon />
      {children}
    </a>
  )
}

interface AnchorButtonProps {
  href: string
  children: ReactNode
  className?: string
}

export function AnchorButton({ href, children, className = '' }: AnchorButtonProps) {
  return (
    <a
      href={href}
      className={`${baseClasses} ${VARIANTES.outline} ${className}`}
    >
      {children}
    </a>
  )
}

export function WhatsAppIcon({ className = 'h-6 w-6' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.48-1.75-1.65-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.47s1.06 2.86 1.21 3.06c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.75-.72 2-1.41.25-.69.25-1.28.17-1.41-.07-.13-.27-.2-.57-.35Z" />
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.28-1.38a9.86 9.86 0 0 0 4.76 1.21h.01c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2Zm0 18.02c-1.5 0-2.97-.4-4.25-1.16l-.3-.18-3.13.82.84-3.05-.2-.31a8.16 8.16 0 0 1-1.25-4.35c0-4.53 3.69-8.22 8.23-8.22 2.2 0 4.26.86 5.81 2.41a8.16 8.16 0 0 1 2.41 5.82c0 4.54-3.69 8.22-8.16 8.22Z" />
    </svg>
  )
}
