import { useState } from 'react'
import { Section, SectionTitle } from './Section'
import { clinic, whatsappUrl } from '../lib/site-config'
import { trackConversion } from '../lib/tracking'

interface Servico {
  arquivo: string
  titulo: string
  texto: string
}

/**
 * Serviços em lista numerada com foto grande ao lado. Sem troca automática:
 * o público da página lê devagar, e conteúdo que se move sozinho atrapalha.
 *
 * As imagens vêm de `imagens-originais/servico-*.png` e são convertidas por
 * `npm run img`. Regra do CFO: nada de antes e depois nem comparativo.
 */
const servicos: Servico[] = [
  {
    arquivo: 'servico-implantes',
    titulo: 'Implantes Dentários',
    texto: 'Implantes unitários ou múltiplos para reposição de dentes perdidos.',
  },
  {
    arquivo: 'galeria-protese',
    titulo: 'Protocolo sobre Implantes',
    texto:
      'Prótese fixa sobre implantes para reabilitação de pacientes que perderam vários ou todos os dentes.',
  },
  {
    arquivo: 'servico-cirurgia',
    titulo: 'Cirurgia Bucomaxilofacial',
    texto:
      'Procedimentos cirúrgicos da região da boca e estruturas relacionadas, mediante avaliação especializada.',
  },
  {
    arquivo: 'servico-proteses',
    titulo: 'Próteses Dentárias',
    texto: 'Alternativas protéticas definidas de acordo com a necessidade de cada paciente.',
  },
  {
    arquivo: 'servico-ortodontia',
    titulo: 'Ortodontia',
    texto: 'Tratamentos para correção do posicionamento e alinhamento dentário.',
  },
  {
    arquivo: 'servico-clinico-geral',
    titulo: 'Clínica Geral',
    texto:
      'Prevenção, limpeza, restaurações e demais cuidados para manutenção da saúde bucal.',
  },
]

export function Servicos() {
  const [ativo, setAtivo] = useState(0)
  const servico = servicos[ativo]
  const painelId = 'servico-painel'

  return (
    <Section id="servicos" labelledBy="servicos-titulo" origem="esquerda" className="bg-navy-800 text-cream-100">
      <div className="container-page">
        <p className="text-xs font-semibold tracking-[0.18em] text-sky-300 uppercase md:text-sm">
          Outros tratamentos
        </p>

        <SectionTitle id="servicos-titulo" className="mt-3 max-w-3xl !text-cream-50">
          Cuidado completo{' '}
          <span className="font-display font-normal italic text-sky-200">para o seu sorriso</span>
        </SectionTitle>

        <p className="mt-4 max-w-3xl text-[0.95rem] text-cream-200 md:mt-5 md:text-xl">
          Além dos tratamentos com implantes, a {clinic.name} oferece diferentes áreas da
          odontologia para cuidar da sua saúde bucal.
        </p>

        <div className="mt-10 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
          <div>
            <p className="flex items-baseline gap-2 font-display text-2xl text-cream-50 md:text-4xl">
              {String(ativo + 1).padStart(2, '0')}
              <span className="text-base text-sky-300 md:text-xl">/ {String(servicos.length).padStart(2, '0')}</span>
            </p>

            <div aria-hidden="true" className="mt-3 h-1 w-full rounded-full bg-navy-line">
              <div
                className="h-1 rounded-full bg-sky-200 transition-[width] duration-300"
                style={{ width: `${((ativo + 1) / servicos.length) * 100}%` }}
              />
            </div>

            <ul className="mt-6 space-y-1">
              {servicos.map((item, index) => {
                const selecionado = index === ativo

                return (
                  <li key={item.arquivo}>
                    <button
                      type="button"
                      onClick={() => setAtivo(index)}
                      aria-controls={painelId}
                      aria-current={selecionado}
                      className={`min-h-[3rem] w-full rounded-full px-4 text-left text-[0.95rem] font-medium transition-colors md:text-lg ${
                        selecionado
                          ? 'border-2 border-sky-200 bg-navy-900 text-cream-50'
                          : 'border-2 border-transparent text-cream-200 hover:bg-navy-900'
                      }`}
                    >
                      {item.titulo}
                    </button>
                  </li>
                )
              })}
            </ul>
          </div>

          <div id={painelId} aria-live="polite" className="overflow-hidden rounded-card border border-navy-line bg-navy-900">
            <img
              key={servico.arquivo}
              src={`/${servico.arquivo}.webp`}
              width={1050}
              height={1400}
              alt={servico.titulo}
              loading="lazy"
              decoding="async"
              className="aspect-4/3 w-full object-cover md:aspect-16/10"
            />
            <div className="p-4 md:p-8">
              <h3 className="text-lg font-semibold text-cream-50 md:text-2xl">{servico.titulo}</h3>
              <p className="mt-2 text-[0.9rem] leading-relaxed text-cream-200 md:text-lg">{servico.texto}</p>
            </div>
          </div>
        </div>

        <p className="mt-8 text-[0.85rem] text-cream-200 md:text-base">
          Não encontrou o seu caso?{' '}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackConversion('whatsapp_click')}
            className="font-semibold text-white underline underline-offset-4"
          >
            Pergunte no WhatsApp
          </a>{' '}
          e a equipe orienta o próximo passo.
        </p>
      </div>
    </Section>
  )
}
