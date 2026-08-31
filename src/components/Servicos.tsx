import { useState } from 'react'
import { Section, SectionTitle } from './Section'
import { WhatsAppButton } from './CtaButton'
import { clinic, whatsappUrl } from '../lib/site-config'
import { trackConversion } from '../lib/tracking'

interface Servico {
  arquivo: string
  titulo: string
  texto: string
  /** Recorte da foto, quando o padrão centralizado não mostra o que importa. */
  posicao?: string
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
    // PENDENTE: foto própria de protocolo. Enquanto não vier, reaproveita a
    // foto de implantes num recorte mais fechado.
    arquivo: 'servico-implantes',
    posicao: 'object-[center_75%]',
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
        <p className="text-[0.7rem] font-semibold tracking-[0.18em] text-sky-300 uppercase md:text-sm">
          Outros tratamentos
        </p>

        <SectionTitle id="servicos-titulo" className="mt-2 max-w-3xl !text-cream-50 md:mt-3">
          Cuidado completo{' '}
          <span className="font-display font-normal italic text-sky-200">para o seu sorriso</span>
        </SectionTitle>

        <p className="max-md:leading-[1.5] mt-3 max-w-3xl text-[1.0625rem] text-cream-200 md:mt-5 md:text-xl">
          Além dos tratamentos com implantes, a {clinic.name} oferece diferentes áreas da
          odontologia para cuidar da sua saúde bucal.
        </p>

        {/* No celular os seis tratamentos aparecem de uma vez, em cartões de
            duas colunas: a lista de botões mais o painel grande do desktop
            custava mais de uma tela inteira só para mostrar um tratamento. */}
        <ul className="mt-6 grid grid-cols-2 gap-2.5 md:hidden">
          {servicos.map((item, index) => (
            <li
              key={item.arquivo}
              className="overflow-hidden rounded-card border border-navy-line bg-navy-900"
            >
              <img
                src={`/${item.arquivo}.webp`}
                width={1050}
                height={1400}
                alt={item.titulo}
                loading="lazy"
                decoding="async"
                className={`aspect-16/10 w-full object-cover ${item.posicao ?? ''}`}
              />
              <div className="p-2.5">
                <p className="text-[0.7rem] font-semibold tracking-[0.14em] text-sky-300">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <h3 className="mt-0.5 text-[1rem] leading-snug font-semibold text-cream-50">
                  {item.titulo}
                </h3>
                <p className="mt-1 line-clamp-2 text-[0.875rem] leading-[1.35] text-cream-200">{item.texto}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-10 hidden gap-8 md:grid lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
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
              className={`aspect-4/3 w-full object-cover md:aspect-16/10 ${servico.posicao ?? ''}`}
            />
            <div className="p-4 md:p-8">
              <h3 className="text-lg font-semibold text-cream-50 md:text-2xl">{servico.titulo}</h3>
              <p className="mt-2 text-[0.9rem] leading-relaxed text-cream-200 md:text-lg">{servico.texto}</p>
            </div>
          </div>
        </div>

        <p className="max-md:leading-[1.45] mt-6 text-[1rem] text-cream-200 md:mt-8 md:text-base">
          Não encontrou o seu caso?{' '}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackConversion('whatsapp_click')}
            className="font-semibold text-white underline underline-offset-4 max-md:hidden"
          >
            Pergunte no WhatsApp
          </a>
          <span className="max-md:hidden"> e a equipe orienta o próximo passo.</span>
          <span className="md:hidden">a equipe orienta o próximo passo pelo WhatsApp.</span>
        </p>

        {/* No celular o mesmo caminho vira botão: link dentro de parágrafo não
            alcança o alvo de toque que este público precisa. */}
        <WhatsAppButton variant="light" className="mt-4 w-full md:hidden">
          Pergunte no WhatsApp
        </WhatsAppButton>
      </div>
    </Section>
  )
}
