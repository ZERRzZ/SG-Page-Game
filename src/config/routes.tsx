import App from '@/App'
import Layout from '@/layouts/common'
import { MyRoute } from '@/types/common/MyRoute'
import ErrorPage from '@/components/common/ErrorPage'
import IndexPage from '@/pages'
import GameIndex from '@/pages/games'
import Typing from '@/pages/games/Typing'
import Mahjong from '@/pages/games/Mahjong'
import GuideIndex from '@/pages/guides'

const routes: MyRoute[] = [
  {
    path: '/',
    element: <App />,
    extra: { name: '首页', icon: 'i-common-home' },
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <IndexPage />,
      },
      {
        path: 'games',
        element: <Layout />,
        extra: { name: '游戏', icon: 'i-common-game' },
        children: [
          {
            index: true,
            element: <GameIndex />,
          },
          {
            path: 'Mahjong',
            element: <Mahjong />,
            extra: {
              id: 'g2',
              name: '麻将',
              icon: 'i-common-mahjong',
              description: '麻将小游戏',
            },
          },
          {
            path: 'Typing',
            element: <Typing />,
            extra: {
              id: 'g3',
              name: '打字',
              icon: 'i-common-keyboard',
              description: '极简打字小游戏',
            },
          },
        ],
      },
      {
        path: 'guides',
        element: <Layout />,
        extra: { name: '攻略', icon: 'i-common-guide' },
        children: [
          {
            index: true,
            element: <GuideIndex />,
          },
          {
            path: 'RanceQuest',
            element: <div>RanceQuest</div>, // TODO: replace with actual component
            extra: {
              id: 's1',
              name: 'RanceQuest',
              icon: '',
              description:
                '兰斯第 8 部，由日本游戏公司 AliceSoft 制作的健全大冒险游戏',
            },
          },
        ],
      },
    ],
  },
]

export default routes
