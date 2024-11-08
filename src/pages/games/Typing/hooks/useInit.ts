import { useMemo, useState } from "react"

import { TypingMode, TypingState } from "@/types/Typing"
import { useLocalStorage } from "@/hooks/useLocalStorage"

export const useInit = () => {

  const [state, setState] = useState<TypingState>('init')

  const [showTip, changeShowTip] = useLocalStorage('typingShowTip', true)

  const [tMode, changeTMode] = useLocalStorage<TypingMode>('typingMode', '适中')

  const mode = {
    '快速': { word: 15, count: 15 },
    '适中': { word: 30, count: 30 },
    '持久': { word: 60, count: 60 }
  }

  const word = useMemo(() => mode[tMode].word, [tMode])

  const count = useMemo(() => mode[tMode].count, [tMode])

  const changeInit = (key: string, value: any) => {
    switch (key) {
      case 'typingShowTip': changeShowTip(value); break
      case 'typingMode': changeTMode(value); break
      case 'state': setState(value); break
    }
  }

  return {
    init: { state, word, count, showTip, tMode },
    changeInit
  }

}