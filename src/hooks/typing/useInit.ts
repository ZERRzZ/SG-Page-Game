import { useMemo, useState } from 'react'

import useWords from '@/hooks/common/useWords'
import useCount from '@/hooks/common/useCount'
import useLocalStorage from '@/hooks/common/useLocalStorage'

import { Mode, State } from '@/types/specific/Typing'
import { TYPING_MODES } from '@/constants/typingConfig'

const useInit = () => {
  // 游戏状态
  const [state, setState] = useState<State>('init')
  // 游戏模式
  const [mode, changeMode] = useLocalStorage<Mode>('typingMode', '适中')

  const word = useMemo(() => TYPING_MODES.get(mode)!.word, [mode, TYPING_MODES])

  const initCount = useMemo(
    () => TYPING_MODES.get(mode)!.count,
    [mode, TYPING_MODES],
  )

  // 打字文本
  const { words, updateWords } = useWords(word)

  // 计数器
  const { count, startCount, resetCount, pauseCount } = useCount(initCount)

  const startGame = () => {
    setState('running')
    startCount()
  }

  return {
    state,
    setState,
    mode,
    changeMode,
    words,
    updateWords,
    initCount,
    count,
    resetCount,
    pauseCount,
    startGame,
  }
}

export default useInit
