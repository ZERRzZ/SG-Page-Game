import { Mode, ModeConfig, State, TypingColor } from '@/types/specific/Typing'

export const TYPING_MODES = new Map<Mode, ModeConfig>([
  ['快速', { word: 15, count: 15 }],
  ['适中', { word: 30, count: 30 }],
  ['持久', { word: 60, count: 60 }],
])

export const TYPING_COLORS: TypingColor = ['#FF0000', '#00BB00']

export const TYPING_TIPS: Record<State, string> = {
  init: '开始游戏',
  running: '重新开始',
  end: '重新开始',
}
