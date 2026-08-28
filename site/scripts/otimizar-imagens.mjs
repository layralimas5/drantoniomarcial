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
  'dr-antonio': { width: 960, height: 1200 },
  consultorio: { width: 900, height: 1100 },
  'video-poster': { width: 1280, height: 720 },
  og: { width: 1200, height: 630 },
}

const arquivos = await readdir(ORIGEM).catch(() => [])

if (arquivos.length === 0) {
  console.log(`Nenhuma imagem em ${ORIGEM}/. Nada a fazer.`)
  process.exit(0)
}

for (const arquivo of arquivos) {
  const { name } = parse(arquivo)
  const alvo = alvos[name]

  if (!alvo) {
    console.warn(`Ignorado (nome fora da lista): ${arquivo}`)
    continue
  }

  const saida = join(DESTINO, name === 'og' ? 'og.jpg' : `${name}.webp`)

  await sharp(join(ORIGEM, arquivo))
    .resize(alvo.width, alvo.height, { fit: 'cover', position: 'attention' })
    .toFormat(name === 'og' ? 'jpeg' : 'webp', { quality: 78 })
    .toFile(saida)

  console.log(`Gerado ${saida}`)
}
