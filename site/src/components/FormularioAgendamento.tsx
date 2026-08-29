import { useState, type FormEvent } from 'react'
import { WhatsAppButton } from './CtaButton'
import { trackConversion } from '../lib/tracking'

type Status = 'idle' | 'sending' | 'success' | 'error'

const FORM_NAME = 'avaliacao'

function formatarTelefone(valor: string): string {
  const digitos = valor.replace(/\D/g, '').slice(0, 11)

  if (digitos.length <= 2) return digitos
  if (digitos.length <= 6) return `(${digitos.slice(0, 2)}) ${digitos.slice(2)}`
  if (digitos.length <= 10) return `(${digitos.slice(0, 2)}) ${digitos.slice(2, 6)}-${digitos.slice(6)}`
  return `(${digitos.slice(0, 2)}) ${digitos.slice(2, 7)}-${digitos.slice(7)}`
}

export function FormularioAgendamento() {
  const [telefone, setTelefone] = useState('')
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault()
    setStatus('sending')

    const form = event.currentTarget
    const dados = new FormData(form)
    dados.set('form-name', FORM_NAME)

    try {
      const resposta = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(dados as unknown as Record<string, string>).toString(),
      })

      if (!resposta.ok) {
        throw new Error(`Falha no envio: ${resposta.status}`)
      }

      trackConversion('form_submit')
      form.reset()
      setTelefone('')
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div
        role="status"
        className="rounded-card border border-sky-200 bg-white p-6 text-center md:p-8"
      >
        <h3 className="text-2xl font-semibold text-ink-900">Recebemos o seu contato</h3>
        <p className="mt-3 text-lg text-ink-800">
          A equipe vai retornar no horário de atendimento para combinar o dia da sua avaliação. Se
          preferir adiantar, chame no WhatsApp agora.
        </p>
        <WhatsAppButton className="mt-6 w-full sm:w-auto">Falar agora no WhatsApp</WhatsAppButton>
      </div>
    )
  }

  const enviando = status === 'sending'

  return (
    <form
      name={FORM_NAME}
      method="POST"
      data-netlify="true"
      netlify-honeypot="empresa"
      onSubmit={handleSubmit}
      noValidate={false}
      className="rounded-card border border-sky-200 bg-white p-5 md:p-8"
    >
      <input type="hidden" name="form-name" value={FORM_NAME} />
      <p hidden>
        <label>
          Não preencha este campo: <input name="empresa" tabIndex={-1} autoComplete="off" />
        </label>
      </p>

      <div className="space-y-5">
        <div>
          <label htmlFor="nome" className="block text-base font-semibold text-ink-900 md:text-lg">
            Seu nome
          </label>
          <input
            id="nome"
            name="nome"
            type="text"
            required
            autoComplete="name"
            className="mt-2 min-h-[3.5rem] w-full rounded-xl border-2 border-cream-300 bg-cream-50 px-4 text-lg text-ink-900 placeholder:text-ink-400 focus:border-navy-900"
            placeholder="Como podemos te chamar"
          />
        </div>

        <div>
          <label htmlFor="telefone" className="block text-base font-semibold text-ink-900 md:text-lg">
            Seu WhatsApp
          </label>
          <input
            id="telefone"
            name="telefone"
            type="tel"
            inputMode="numeric"
            required
            autoComplete="tel"
            value={telefone}
            onChange={(event) => setTelefone(formatarTelefone(event.target.value))}
            className="mt-2 min-h-[3.5rem] w-full rounded-xl border-2 border-cream-300 bg-cream-50 px-4 text-lg text-ink-900 placeholder:text-ink-400 focus:border-navy-900"
            placeholder="(27) 90000-0000"
          />
        </div>

        <div>
          <label htmlFor="mensagem" className="block text-base font-semibold text-ink-900 md:text-lg">
            O que te incomoda hoje? <span className="font-normal text-ink-500">(opcional)</span>
          </label>
          <textarea
            id="mensagem"
            name="mensagem"
            rows={3}
            className="mt-2 w-full rounded-xl border-2 border-cream-300 bg-cream-50 px-4 py-3 text-lg text-ink-900 placeholder:text-ink-400 focus:border-navy-900"
            placeholder="Pode escrever com suas palavras"
          />
        </div>

        <div className="flex gap-3">
          <input
            id="consentimento"
            name="consentimento"
            type="checkbox"
            required
            className="mt-1 h-6 w-6 shrink-0 accent-[#0c2033]"
          />
          <label htmlFor="consentimento" className="text-base leading-relaxed text-ink-700">
            Autorizo o contato pelos dados informados e li a{' '}
            <a href="/politica-de-privacidade.html" className="underline underline-offset-4">
              política de privacidade
            </a>
            .
          </label>
        </div>
      </div>

      {status === 'error' ? (
        <p role="alert" className="mt-5 rounded-xl bg-red-50 p-4 text-base text-red-800">
          Não conseguimos enviar agora. Tente novamente em instantes ou chame direto no WhatsApp.
        </p>
      ) : null}

      <button
        type="submit"
        disabled={enviando}
        className="pulsar-suave mt-6 flex min-h-[3.5rem] w-full items-center justify-center rounded-full bg-navy-900 px-7 text-lg font-semibold text-white transition-colors hover:bg-navy-800 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {enviando ? 'Enviando...' : 'Quero agendar minha avaliação'}
      </button>
    </form>
  )
}
