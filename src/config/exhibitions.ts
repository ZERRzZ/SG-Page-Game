import { ExhibitionItem } from "@/types/Exhibition"

interface IType {
  [key: string]: ExhibitionItem[]
}

const exhibitions: IType = {
  "game": [
    // {
    //   "id": "g1",
    //   "name": "Touhou",
    //   "path": "Touhou",
    //   "description": "一个打飞机游戏却有成为东方那样的野心"
    // },
    // {
    //   "id": "g2",
    //   "name": "GreedySnake",
    //   "path": "GreedySnake",
    //   "icon": "icon-she",
    //   "description": "贪吃蛇小游戏"
    // },
    {
      "id": "g3",
      "name": "Typing",
      "path": "Typing",
      "icon": "icon-jianpan",
      "description": "极简打字小游戏"
    }
  ],
  "guide": [
    {
      "id": "s1",
      "name": "Rance Quest",
      "path": "RanceQuest",
      "icon": "icon-jiugongge",
      "description": "兰斯第 8 部，由日本游戏公司 AliceSoft 制作的健全大冒险游戏"
    }
  ]
}

export default exhibitions