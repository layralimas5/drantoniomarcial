type GtagFn = (...args: unknown[]) => void
type FbqFn = (...args: unknown[]) => void

interface TrackingWindow extends Window {
  gtag?: GtagFn
  fbq?: FbqFn
}

/**
 * Dispara conversão no Google Ads e Lead no Meta Pixel.
 * As tags são injetadas no HTML final; aqui só disparamos os eventos,
 * sem quebrar a página caso o script tenha sido bloqueado.
 */
export function trackConversion(event: 'whatsapp_click' | 'form_submit'): void {
  const scope = window as TrackingWindow

  try {
    scope.gtag?.('event', 'conversion', { event_category: 'lead', event_label: event })
    scope.fbq?.('track', 'Lead', { content_name: event })
  } catch {
    /* rastreamento nunca pode impedir o usuário de converter */
  }
}
