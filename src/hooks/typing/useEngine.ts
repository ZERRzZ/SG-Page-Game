import { useEffect } from 'react'

import { State } from '@/types/specific/Typing'

const useEngine = (
  state: State,
  count: number,
  total: number,
  mode: string,
  words: string,
  startGame: () => void,
  resetGame: () => void,
  endGame: () => void,
) => {
  const enterKeyEvent = (event: KeyboardEvent) => {
    if (event.code !== 'Enter') return

    switch (state) {
      case 'init':
        startGame()
        break
      case 'running':
      case 'end':
        resetGame()
        break
    }
  }

  useEffect(() => {
    document.addEventListener('keyup', enterKeyEvent)
    return () => document.removeEventListener('keyup', enterKeyEvent)
  }, [state])

  useEffect(() => {
    count <= 0 && endGame()
  }, [count])

  useEffect(() => {
    total === words.length && endGame()
  }, [total])

  useEffect(() => {
    resetGame()
  }, [mode])
}

export default useEngine
