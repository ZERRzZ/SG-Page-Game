import { MyTheme } from '@/types/common/MyTheme'
import useLocalStorage from './useLocalStorage'

const useTheme = (): [MyTheme, (theme: MyTheme) => void] => {
  // 媒体查询列表
  const mediaQueryList = matchMedia('(prefers-color-scheme: dark)')

  const systemTheme = mediaQueryList.matches ? 'dark' : 'light'
  const [theme, _changeTheme] = useLocalStorage<MyTheme>('theme')

  const applyTheme = (theme: MyTheme) =>
    document.documentElement.setAttribute('data-theme', theme)

  const changeTheme = (theme: MyTheme) => {
    _changeTheme(theme)
    applyTheme(theme)
  }

  theme ? applyTheme(theme) : changeTheme(systemTheme)

  mediaQueryList.addEventListener('change', e =>
    changeTheme(e.matches ? 'dark' : 'light'),
  )

  return [theme, changeTheme]
}

export default useTheme
