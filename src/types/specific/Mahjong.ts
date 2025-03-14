export type Status = 'init' | 'deal' | 'draw' | 'giri' | 'nagi'

export interface River {
  type: 'tsumogiri' | 'tegiri' | 'riichi'
  tile: string
}

export interface NagiType {
  type: 'chi' | 'pung' | 'kong'
  index: number
  tiles: string[]
}
