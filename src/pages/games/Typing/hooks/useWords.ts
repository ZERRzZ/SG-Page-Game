import { useCallback, useState } from 'react'
import { faker } from '@faker-js/faker/locale/en'

export const useWords = (count: number) => {

  const [words, setWords] = useState(faker.word.words(count))

  const updateWords = useCallback(() => {
    setWords(faker.word.words(count))
  }, [count])

  return { words, updateWords }

}