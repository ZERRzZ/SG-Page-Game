export type Status = 'init' | 'deal' | 'play'

export interface River {
  type: 'tsumogiri' | 'tegiri' | 'riichi'
  tile: string
}
