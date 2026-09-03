import { useState } from 'react'
import { Section, SectionTitle } from './Section'
import { WhatsAppButton } from './CtaButton'
import { clinic, whatsappUrl } from '../lib/site-config'
import { trackConversion } from '../lib/tracking'

interface FotoCaso {
  arquivo: string
  /** Marcação que vai abaixo da foto: ilustrativo ou caso clínico real. */
  marcacao: string
  largura: number
  altura: number
  alt: string
  /** Cor de fundo da própria imagem, para a moldura não deixar emenda. */
  fundo: string
}

type Servico = {
  /** Chave da lista: `arquivo` se repete entre tratamentos. */
  id: string
  titulo: string
  texto: string
} & (
  | {
      arquivo: string
      /** Recorte da foto, quando o padrão centralizado não mostra o que importa. */
      posicao?: string
      fotos?: never
    }
  | {
      /** Par ilustrativo + caso clínico real, do material enviado pelo cliente. */
      fotos: [FotoCaso, FotoCaso]
      arquivo?: never
      posicao?: never
    }
)

/**
 * Tratamentos em lista numerada com foto grande ao lado. Sem troca automática:
 * o público da página lê devagar, e conteúdo que se move sozinho atrapalha.
 *
 * Implante unitário e protocolo abrem a lista e são os únicos com par de fotos,
 * porque são o que a página vende. As imagens vêm de `imagens-originais/` e são
 * convertidas por `npm run img`.
 *
 * Regra do CFO: as fotos entram isoladas, nunca como antes e depois nem como
 * comparativo de resultado, e nenhum texto promete resultado.
 */
const servicos: Servico[] = [
  {
    id: 'implantes',
    titulo: 'Implantes Unitários',
    texto:
      'Solução individual para repor um dente perdido, sem desgastar os dentes vizinhos.',
    fotos: [
      {
        arquivo: 'caso-implante-ilustrativo',
        marcacao: 'Ilustrativo',
        largura: 329,
        altura: 339,
        alt: 'Ilustração de um implante de titânio no osso, com pilar e coroa sobre ele',
        fundo: '#2d425d',
      },
      {
        arquivo: 'caso-implante-real',
        marcacao: 'Caso clínico real',
        largura: 445,
        altura: 337,
        alt: 'Foto de dentes anteriores após reabilitação com implante',
        fundo: '#00142a',
      },
    ],
  },
  {
    id: 'protocolo',
    titulo: 'Protocolos sobre Implantes',
    texto:
      'Prótese fixa sobre implantes para quem perdeu vários ou todos os dentes da arcada.',
    fotos: [
      {
        arquivo: 'caso-protocolo-ilustrativo',
        marcacao: 'Ilustrativo',
        largura: 348,
        altura: 310,
        alt: 'Ilustração de uma prótese fixa apoiada sobre quatro implantes na arcada inferior',
        fundo: '#000000',
      },
      {
        arquivo: 'caso-protocolo-real',
        marcacao: 'Caso clínico real',
        largura: 443,
        altura: 308,
        alt: 'Foto de arcada reabilitada com prótese fixa sobre implantes',
        fundo: '#050f1f',
      },
    ],
  },
  {
    id: 'cirurgia',
    arquivo: 'servico-cirurgia',
    titulo: 'Cirurgia Buco Maxilofacial',
    texto:
      'Procedimentos cirúrgicos da região da boca e estruturas relacionadas, mediante avaliação especializada.',
  },
  {
    id: 'proteses',
    arquivo: 'servico-proteses',
    titulo: 'Próteses Dentárias',
    texto: 'Alternativas protéticas definidas de acordo com a necessidade de cada paciente.',
  },
  {
    id: 'ortodontia',
    arquivo: 'servico-ortodontia',
    titulo: 'Ortodontia',
    texto: 'Tratamentos para correção do posicionamento e alinhamento dentário.',
  },
  {
    id: 'clinico-geral',
    arquivo: 'servico-clinico-geral',
    titulo: 'Clínica Geral',
    texto:
      'Prevenção, limpeza, restaurações e demais cuidados para manutenção da saúde bucal.',
  },
]

interface ParDeFotosProps {
  fotos: [FotoCaso, FotoCaso]
  /** `compacto` é o cartão do celular, com marcação e espaçamento menores. */
  compacto?: boolean
}

/* `object-contain` sobre o fundo da própria imagem: as quatro têm proporções
   diferentes e cortar tiraria justamente o implante nas ilustrações. */
function ParDeFotos({ fotos, compacto = false }: ParDeFotosProps) {
  return (
    <div className={`grid grid-cols-2 ${compacto ? 'gap-2 p-2' : 'gap-4 p-4 md:gap-5 md:p-6'}`}>
      {fotos.map((foto) => (
        <figure key={foto.arquivo}>
          <img
            src={`/${foto.arquivo}.webp`}
            width={foto.largura}
            height={foto.altura}
            alt={foto.alt}
            loading="lazy"
            decoding="async"
            style={{ backgroundColor: foto.fundo }}
            className="aspect-4/3 w-full rounded-card object-contain"
          />
          <figcaption
            className={`mt-1.5 text-center font-semibold tracking-[0.1em] text-sky-300 uppercase ${
              compacto ? 'text-[0.65rem]' : 'mt-2 text-[0.75rem] md:mt-3 md:text-sm'
            }`}
          >
            {foto.marcacao}
          </figcaption>
        </figure>
      ))}
    </div>
  )
}

export function Servicos() {
  const [ativo, setAtivo] = useState(0)
  const servico = servicos[ativo]
  const painelId = 'servico-painel'

  return (
    <Section id="servicos" labelledBy="servicos-titulo" origem="esquerda" className="bg-navy-800 text-cream-100">
      <div className="container-page">
        <p className="text-[0.7rem] font-semibold tracking-[0.18em] text-sky-300 uppercase md:text-sm">
          Tratamentos
        </p>

        <SectionTitle id="servicos-titulo" className="mt-2 max-w-3xl !text-cream-50 md:mt-3">
          Cuidado completo{' '}
          <span className="font-display font-normal italic text-sky-200">para o seu sorriso</span>
        </SectionTitle>

        <p className="max-md:leading-[1.5] mt-3 max-w-3xl text-[1.0625rem] text-cream-200 md:mt-5 md:text-xl">
          Dois caminhos, conforme o seu caso: o implante unitário, para repor um dente, e o
          protocolo, para quem perdeu vários ou todos. Além deles, a {clinic.name} cuida das
          demais áreas da odontologia.
        </p>

        {/* No celular os seis tratamentos aparecem de uma vez, em cartões de
            duas colunas: a lista de botões mais o painel grande do desktop
            custava mais de uma tela inteira só para mostrar um tratamento.
            Os dois com par de fotos ocupam a linha toda, senão cada imagem
            ficaria pequena demais para este público enxergar. */}
        <ul className="mt-6 grid grid-cols-2 gap-2.5 md:hidden">
          {servicos.map((item, index) => (
            <li
              key={item.id}
              className={`overflow-hidden rounded-card border border-navy-line bg-navy-900 ${
                item.fotos ? 'col-span-2' : ''
              }`}
            >
              {item.fotos ? (
                <ParDeFotos fotos={item.fotos} compacto />
              ) : (
                <img
                  src={`/${item.arquivo}.webp`}
                  width={1050}
                  height={1400}
                  alt={item.titulo}
                  loading="lazy"
                  decoding="async"
                  className={`aspect-16/10 w-full object-cover ${item.posicao ?? ''}`}
                />
              )}
              <div className="p-2.5">
                <p className="text-[0.7rem] font-semibold tracking-[0.14em] text-sky-300">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <h3 className="mt-0.5 text-[1rem] leading-snug font-semibold text-cream-50">
                  {item.titulo}
                </h3>
                <p
                  className={`mt-1 text-[0.875rem] leading-[1.35] text-cream-200 ${
                    item.fotos ? '' : 'line-clamp-2'
                  }`}
                >
                  {item.texto}
                </p>
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
                  <li key={item.id}>
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
            {servico.fotos ? (
              <ParDeFotos key={servico.id} fotos={servico.fotos} />
            ) : (
              <img
                key={servico.id}
                src={`/${servico.arquivo}.webp`}
                width={1050}
                height={1400}
                alt={servico.titulo}
                loading="lazy"
                decoding="async"
                className={`aspect-4/3 w-full object-cover md:aspect-16/10 ${servico.posicao ?? ''}`}
              />
            )}
            <div className="p-4 md:px-8 md:pb-8">
              <h3 className="text-lg font-semibold text-cream-50 md:text-2xl">{servico.titulo}</h3>
              <p className="mt-2 text-[0.9rem] leading-relaxed text-cream-200 md:text-lg">{servico.texto}</p>
            </div>
          </div>
        </div>

        <p className="max-md:leading-[1.45] mt-6 text-[0.9rem] text-cream-300 md:mt-8 md:text-base">
          Imagens ilustrativas e de casos clínicos reais, usadas apenas para explicar os
          procedimentos. Cada caso depende da avaliação clínica e dos exames de imagem.
        </p>

        <p className="max-md:leading-[1.45] mt-4 text-[1rem] text-cream-200 md:mt-6 md:text-base">
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
