// Validação de UX. O serviço receptor também precisa validar e escapar os dados.
export function campoInvalido(dados: FormData, origens: string[]): string | null {
  const limites: Record<string, number> = {
    name: 120, email: 254, empresa: 160, telefone: 40, cargo: 120, origem: 160, message: 5000,
  }
  for (const [campo, limite] of Object.entries(limites)) {
    const valor = dados.get(campo) ?? ''
    if (typeof valor !== 'string' || dados.getAll(campo).length > 1) return campo
    const texto = valor.trim()
    dados.set(campo, texto)
    if (['name', 'email', 'message'].includes(campo) && !texto) return campo
    if (texto.length > limite) return campo
    // Permite quebras de linha e tabs somente na mensagem; rejeita controles invisíveis.
    const controles = /\p{Cc}/u
    const inspecao = campo === 'message' ? texto.replace(/[\r\n\t]/g, '') : texto
    if (controles.test(inspecao)) return campo
    if (campo === 'email' && !/^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/u.test(texto)) return campo
    if (campo === 'telefone' && texto && (!/^\+?[0-9 () .-]+$/.test(texto) || texto.replace(/\D/g, '').length < 7 || texto.replace(/\D/g, '').length > 15)) return campo
    if (campo === 'origem' && texto && !origens.includes(texto)) return campo
  }
  return null
}
