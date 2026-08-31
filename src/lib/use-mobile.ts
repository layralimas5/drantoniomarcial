import { useEffect, useState } from 'react'

/** Abaixo disso a página usa a composição pensada para o celular. */
const CONSULTA_MOBILE = '(max-width: 767px)'

/**
 * Diz se a tela está na faixa do celular. Serve para trocar a *animação* de
 * entrada, que no celular precisa ser curta: o layout em si é resolvido por
 * classes do Tailwind, não por JavaScript.
 */
export function useIsMobile(): boolean {
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== 'undefined' && window.matchMedia(CONSULTA_MOBILE).matches,
  )

  useEffect(() => {
    const consulta = window.matchMedia(CONSULTA_MOBILE)

    function atualizar(evento: MediaQueryListEvent | MediaQueryList): void {
      setIsMobile(evento.matches)
    }

    atualizar(consulta)
    consulta.addEventListener('change', atualizar)
    return () => consulta.removeEventListener('change', atualizar)
  }, [])

  return isMobile
}
