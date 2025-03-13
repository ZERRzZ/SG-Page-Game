import { useMemo, useState } from 'react'

import { Mode, ModeConfig, State } from '@/types/specific/Typing'
import useLocalStorage from '@/hooks/common/useLocalStorage'

export const totalMode = new Map<Mode, ModeConfig>([
  ['快速', { word: 15, count: 15 }],
  ['适中', { word: 30, count: 30 }],
  ['持久', { word: 60, count: 60 }],
])

export const useInit = () => {
  // 游戏状态
  const [state, setState] = useState<State>('init')
  // 游戏模式
  const [mode, changeMode] = useLocalStorage<Mode>('typingMode', '适中')

  const word = useMemo(() => totalMode.get(mode)!.word, [mode])

  const initCount = useMemo(() => totalMode.get(mode)!.count, [mode])

  return {
    state,
    word,
    initCount,
    mode,
    setState,
    changeMode,
  }
}
