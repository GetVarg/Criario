import path from 'node:path'
import sharp from 'sharp'

const arquivoFonte = process.argv[2]
const pastaDestino = process.argv[3] ?? path.resolve('public/images/parceiros')

if (!arquivoFonte) {
  console.error('Uso: node scripts/recortar-logotipos-parceiros.mjs <imagem-fonte> [pasta-destino]')
  process.exit(1)
}

// Regiões da composição 834×388 enviada como referência. A rotina redimensiona
// essas coordenadas se a fonte tiver outra resolução e depois remove o excesso.
const regioes = [
  { id: 'onboard', nome: 'Onboard', x: 35, y: 35, width: 205, height: 90 },
  // O ícone e o lettering da Bene estão separados na imagem-fonte, mas
  // pertencem à mesma marca e precisam permanecer no mesmo recorte.
  { id: 'bene', nome: 'Bene', x: 235, y: 35, width: 345, height: 90 },
  { id: 'lumentum', nome: 'Lumentum', x: 600, y: 35, width: 205, height: 90 },
  { id: 'hardware-br', nome: 'Instituto Hardware BR', x: 65, y: 145, width: 260, height: 70 },
  { id: 'hwit', nome: 'HwIT', x: 340, y: 145, width: 170, height: 70 },
  { id: 'cirrus-lab', nome: 'Cirrus Lab', x: 555, y: 145, width: 245, height: 70 },
  { id: 'medico-sem-fila', nome: 'Médico sem fila', x: 35, y: 245, width: 315, height: 100 },
  { id: 'grupo-seb', nome: 'Grupo SEB', x: 345, y: 245, width: 205, height: 100 },
  { id: 'agrosmart', nome: 'Agrosmart', x: 565, y: 245, width: 235, height: 100 },
]

const { data: fonte, info } = await sharp(arquivoFonte)
  .removeAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true })

const escalaX = info.width / 834
const escalaY = info.height / 388

function transformarParaBranco(buffer) {
  const resultado = Buffer.alloc((buffer.length / 3) * 4)

  for (let origem = 0, destino = 0; origem < buffer.length; origem += 3, destino += 4) {
    const luminancia = (0.2126 * buffer[origem]) + (0.7152 * buffer[origem + 1]) + (0.0722 * buffer[origem + 2])
    const alpha = Math.max(0, 255 - luminancia)
    resultado[destino] = 255
    resultado[destino + 1] = 255
    resultado[destino + 2] = 255
    resultado[destino + 3] = alpha
  }

  return resultado
}

for (const regiao of regioes) {
  const extract = {
    left: Math.round(regiao.x * escalaX),
    top: Math.round(regiao.y * escalaY),
    width: Math.min(Math.round(regiao.width * escalaX), info.width - Math.round(regiao.x * escalaX)),
    height: Math.min(Math.round(regiao.height * escalaY), info.height - Math.round(regiao.y * escalaY)),
  }

  const recorte = await sharp(fonte, {
    raw: { width: info.width, height: info.height, channels: 3 },
  })
    .extract(extract)
    .raw()
    .toBuffer({ resolveWithObject: true })

  const rgba = transformarParaBranco(recorte.data)
  await sharp(rgba, {
    raw: { width: recorte.info.width, height: recorte.info.height, channels: 4 },
  })
    .trim({ background: { r: 255, g: 255, b: 255, alpha: 0 }, threshold: 4 })
    .extend({ top: 2, right: 2, bottom: 2, left: 2, background: { r: 24, g: 24, b: 24, alpha: 1 } })
    .flatten({ background: '#181818' })
    .png()
    .toFile(path.join(pastaDestino, `${regiao.id}.png`))

  console.log(`${regiao.nome}: ${regiao.id}.png`)
}
