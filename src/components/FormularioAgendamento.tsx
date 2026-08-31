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

/** Resumo do que a pessoa preencheu, para ela mandar no WhatsApp da clínica. */
function montarMensagem(dados: FormData): string {
  const nome = String(dados.get('nome') ?? '').trim()
  const telefone = String(dados.get('telefone') ?? '').trim()
  const mensagem = String(dados.get('mensagem') ?? '').trim()

  const linhas = [
    'Olá! Vim pelo site e quero agendar uma avaliação.',
    nome ? `Nome: ${nome}` : '',
    telefone ? `WhatsApp: ${telefone}` : '',
    mensagem ? `O que me incomoda: ${mensagem}` : '',
  ]

  return linhas.filter(Boolean).join('\n')
}

export function FormularioAgendamento() {
  const [telefone, setTelefone] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [resumo, setResumo] = useState('')

  async function handleSubmit(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault()
    setStatus('sending')

    const form = event.currentTarget
    const dados = new FormData(form)
    dados.set('form-name', FORM_NAME)
    const mensagemWhatsApp = montarMensagem(dados)

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
      setResumo(mensagemWhatsApp)
      form.reset()
      setTelefone('')
      setStatus('success')
    } catch {
      setResumo(mensagemWhatsApp)
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div
        role="status"
        className="rounded-card border border-sky-200 bg-white p-5 text-center md:p-8"
      >
        <h3 className="text-[1.25rem] font-semibold text-ink-900 md:text-2xl">Recebemos o seu contato</h3>
        <p className="max-md:leading-[1.5] mt-2.5 text-[0.95rem] text-ink-800 md:mt-3 md:text-lg">
          A equipe vai retornar no horário de atendimento para combinar o dia da sua avaliação.
          Quer adiantar? O botão abaixo abre o WhatsApp da clínica com os seus dados já escritos: é
          só apertar enviar.
        </p>
        <WhatsAppButton mensagem={resumo} className="mt-6 w-full sm:w-auto">
          Enviar meus dados no WhatsApp
        </WhatsAppButton>
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
      className="rounded-card border border-sky-200 bg-white p-4 md:p-8"
    >
      <input type="hidden" name="form-name" value={FORM_NAME} />
      <p hidden>
        <label>
          Não preencha este campo: <input name="empresa" tabIndex={-1} autoComplete="off" />
        </label>
      </p>

      <div className="space-y-4 md:space-y-5">
        <div>
          <label htmlFor="nome" className="block text-[0.925rem] font-semibold text-ink-900 md:text-lg">
            Seu nome
          </label>
          <input
            id="nome"
            name="nome"
            type="text"
            required
            autoComplete="name"
            className="mt-1.5 min-h-[3rem] w-full rounded-xl border-2 border-cream-300 bg-cream-50 px-3.5 text-[1rem] text-ink-900 placeholder:text-ink-400 focus:border-navy-900 md:mt-2 md:min-h-[3.5rem] md:px-4 md:text-lg"
            placeholder="Como podemos te chamar"
          />
        </div>

        <div>
          <label htmlFor="telefone" className="block text-[0.925rem] font-semibold text-ink-900 md:text-lg">
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
            className="mt-1.5 min-h-[3rem] w-full rounded-xl border-2 border-cream-300 bg-cream-50 px-3.5 text-[1rem] text-ink-900 placeholder:text-ink-400 focus:border-navy-900 md:mt-2 md:min-h-[3.5rem] md:px-4 md:text-lg"
            placeholder="(27) 90000-0000"
          />
        </div>

        <div>
          <label htmlFor="mensagem" className="block text-[0.925rem] font-semibold text-ink-900 md:text-lg">
            O que te incomoda hoje? <span className="font-normal text-ink-500">(opcional)</span>
          </label>
          <textarea
            id="mensagem"
            name="mensagem"
            rows={3}
            className="mt-1.5 w-full rounded-xl border-2 border-cream-300 bg-cream-50 px-3.5 py-2.5 text-[1rem] text-ink-900 placeholder:text-ink-400 focus:border-navy-900 md:mt-2 md:px-4 md:py-3 md:text-lg"
            placeholder="Pode escrever com suas palavras"
          />
        </div>

        <div className="flex gap-3">
          <input
            id="consentimento"
            name="consentimento"
            type="checkbox"
            required
            className="mt-0.5 h-6 w-6 shrink-0 accent-[#0c2033] md:mt-1"
          />
          <label htmlFor="consentimento" className="leading-relaxed max-md:leading-[1.45] text-[0.95rem] text-ink-700 md:text-base">
            Autorizo o contato pelos dados informados e li a{' '}
            <a href="/politica-de-privacidade.html" className="underline underline-offset-4">
              política de privacidade
            </a>
            .
          </label>
        </div>
      </div>

      {status === 'error' ? (
        <div role="alert" className="mt-5 rounded-xl bg-red-50 p-4">
          <p className="max-md:leading-[1.45] text-[1rem] text-red-800 md:text-base">
            Não conseguimos enviar o formulário agora. Nada se perdeu: o botão abaixo abre o
            WhatsApp da clínica com os seus dados já escritos.
          </p>
          <WhatsAppButton mensagem={resumo} className="mt-4 w-full sm:w-auto">
            Enviar meus dados no WhatsApp
          </WhatsAppButton>
        </div>
      ) : null}

      <button
        type="submit"
        disabled={enviando}
        className="pulsar-suave mt-5 flex min-h-[3rem] w-full items-center justify-center rounded-full bg-navy-900 px-6 text-[0.975rem] font-semibold text-white transition-colors hover:bg-navy-800 disabled:cursor-not-allowed disabled:opacity-70 md:mt-6 md:min-h-[3.5rem] md:px-7 md:text-lg"
      >
        {enviando ? 'Enviando...' : 'Quero agendar minha avaliação'}
      </button>
    </form>
  )
}
