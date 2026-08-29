/**
 * Converte as fotos reais de `imagens-originais/` para WebP em `public/`.
 * Uso: coloque os arquivos com os nomes abaixo e rode `npm run img`.
 */
import { readdir } from 'node:fs/promises'
import { join, parse } from 'node:path'
import sharp from 'sharp'

const ORIGEM = 'imagens-originais'
const DESTINO = 'public'

const alvos = {
  /** Banner do hero: horizontal, o recorte final é feito no CSS. */
  'hero-banner': { width: 2400, height: 1193 },
  /** Retrato do Dr. Antonio na seção de credenciais. */
  foto: { width: 1200, height: 1499 },
  'video-poster': { width: 1280, height: 720 },
  /** Fotos da galeria: qualquer arquivo com o prefixo `galeria-`. */
  galeria: { width: 1200, height: 900 },
  /** Fotos dos serviços: retrato, qualquer arquivo com o prefixo `servico-`. */
  servico: { width: 1050, height: 1400 },
  og: { width: 1200, height: 630 },
}

const arquivos = await readdir(ORIGEM).catch(() => [])

if (arquivos.length === 0) {
  console.log(`Nenhuma imagem em ${ORIGEM}/. Nada a fazer.`)
  process.exit(0)
}

for (const arquivo of arquivos) {
  const { name } = parse(arquivo)
  let alvo = alvos[name]

  if (name.startsWith('galeria-')) alvo = alvos.galeria
  if (name.startsWith('servico-')) alvo = alvos.servico

  if (!alvo) {
    console.warn(`Ignorado (nome fora da lista): ${arquivo}`)
    continue
  }

  const saida = join(DESTINO, name === 'og' ? 'og.jpg' : `${name}.webp`)

  await sharp(join(ORIGEM, arquivo))
    .resize(alvo.width, alvo.height, { fit: 'cover', position: 'attention', kernel: 'lanczos3' })
    .sharpen({ sigma: 0.8, m1: 0.6, m2: 2 })
    .toFormat(name === 'og' ? 'jpeg' : 'webp', { quality: 88 })
    .toFile(saida)

  console.log(`Gerado ${saida}`)
}
