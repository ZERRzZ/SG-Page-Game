import { useLocalStorage } from "@/hooks/useLocalStorage"

export const useInit = () => {

  const [iword, changeIword] = useLocalStorage('iword', 20)

  const [icount, changeIcount] = useLocalStorage('icount', 30)

  const [isTip, changeIsTip] = useLocalStorage('isTip', true)

  const changeInit = (...args: { key: string, value: any }[]) => {
    args.forEach(a => {
      switch (a.key) {
        case 'iword': changeIword(a.value); break
        case 'icount': changeIcount(a.value); break
        case 'isTip': changeIsTip(a.value); break
        default: break
      }
    })
  }

  return {
    init: { iword, icount, isTip },
    changeInit
  }

}