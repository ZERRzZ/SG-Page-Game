export const getRandomTiles = (length: number, tiles: string[]) => {
  const picks: string[] = []
  const rests = [...tiles]
  while (length-- > 0) {
    const i = Math.floor(Math.random() * rests.length)
    picks.push(rests[i])
    rests.splice(i, 1)
  }
  return [rests, picks] as [string[], string[]]
}
