export type Status = 'init' | 'deal' | 'draw' | 'giri' | 'nagi' | 'end'

export interface River {
  type: 'tsumogiri' | 'tegiri' | 'riichi'
  tile: string
}

export type MeldType = 'chi' | 'pung' | 'kong'

/**
 * @param index 既可以是鸣牌家，也可以是鸣牌位置
 */
export interface Meld {
  type: MeldType
  index: number
  tiles: string[]
}

export interface RongType {
  type: string
  fan: number | '役满'
}
