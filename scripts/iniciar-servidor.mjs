import { existsSync } from 'node:fs'
import { createRequire } from 'node:module'
import { fileURLToPath, pathToFileURL } from 'node:url'

const require = createRequire(import.meta.url)
const diretorio = fileURLToPath(new URL('../out/', import.meta.url))
const porta = Number(process.env.PORT || 3000)

if (!Number.isInteger(porta) || porta < 1 || porta > 65535) {
  throw new Error('PORT deve ser uma porta válida entre 1 e 65535.')
}

if (!existsSync(new URL('../out/index.html', import.meta.url))) {
  throw new Error('Site não compilado. Execute npm run build antes de npm start.')
}

// Mantém o servidor no mesmo processo e respeita a porta da hospedagem.
const executavel = require.resolve('serve/build/main.js')
process.env.NO_UPDATE_CHECK = '1'
process.argv = [
  process.execPath,
  executavel,
  diretorio,
  '--listen', `tcp://0.0.0.0:${porta}`,
  '--no-clipboard',
  '--no-port-switching',
]

await import(pathToFileURL(executavel).href)
