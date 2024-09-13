// 打字游戏状态
export type TypingState = 'init' | 'start' | 'pause' | 'finish'

export interface TypingColor {
  correct: string
  error: string
}

export interface TypingResult {
  id?: number
  rank: number
  total: number
  error: number
  speed: string
  accuracy: string
  latest: boolean
}
