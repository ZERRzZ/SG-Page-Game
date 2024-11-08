import { useState } from 'react'

import { faker } from '@faker-js/faker/locale/en'

export const useWords = (count: number) => {

  const [words, setWords] = useState(faker.word.words(count))

  const updateWords = () => {
    setWords(faker.word.words(count))
  }

  return { words, updateWords }

}