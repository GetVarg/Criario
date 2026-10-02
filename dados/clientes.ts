export type LogotipoDeCliente = {
  id: string
  nome: string
  imagem: string
}

export const logotiposDeClientes: LogotipoDeCliente[] = [
  { id: 'onboard', nome: 'Onboard', imagem: '/images/parceiros/onboard.png' },
  { id: 'bene', nome: 'Bene', imagem: '/images/parceiros/bene.png' },
  { id: 'lumentum', nome: 'Lumentum', imagem: '/images/parceiros/lumentum.png' },
  { id: 'hardware-br', nome: 'Instituto Hardware BR', imagem: '/images/parceiros/hardware-br.png' },
  { id: 'hwit', nome: 'HwIT', imagem: '/images/parceiros/hwit.png' },
  { id: 'cirrus-lab', nome: 'Cirrus Lab', imagem: '/images/parceiros/cirrus-lab.png' },
  { id: 'medico-sem-fila', nome: 'Médico sem fila', imagem: '/images/parceiros/medico-sem-fila.png' },
  { id: 'grupo-seb', nome: 'Grupo SEB', imagem: '/images/parceiros/grupo-seb.png' },
  { id: 'agrosmart', nome: 'Agrosmart', imagem: '/images/parceiros/agrosmart.png' },
]
