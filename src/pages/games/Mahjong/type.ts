export type Status = 'init' | 'start'

export interface River {
  type: 'tsumogiri' | 'tegiri' | 'riichi'
  tile: string
}
