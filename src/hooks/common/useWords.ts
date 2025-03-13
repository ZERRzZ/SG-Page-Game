import { useState } from 'react'

import { faker } from '@faker-js/faker/locale/en'

export const useWords = (num: number) => {
  const [words, setWords] = useState(faker.word.words(num))

  const updateWords = () => {
    setWords(faker.word.words(num))
  }

  return { words, updateWords }
}
