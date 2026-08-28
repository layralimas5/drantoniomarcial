/**
 * Cria imagens temporárias para o site rodar antes das fotos reais chegarem.
 * Substituir por fotos do consultório assim que o cliente enviar.
 */
import sharp from 'sharp'

const placeholders = [
  { arquivo: 'public/video-poster.webp', width: 1280, height: 720, texto: 'Capa do vídeo' },
]

for (const { arquivo, width, height, texto } of placeholders) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
    <rect width="100%" height="100%" fill="#ece2d4"/>
    <text x="50%" y="50%" font-family="Georgia, serif" font-size="${Math.round(width / 22)}"
      fill="#4d6b5e" text-anchor="middle">${texto}</text>
  </svg>`

  await sharp(Buffer.from(svg)).webp({ quality: 70 }).toFile(arquivo)
  console.log(`Gerado ${arquivo}`)
}
