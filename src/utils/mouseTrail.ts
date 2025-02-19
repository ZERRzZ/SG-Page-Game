import { throttle } from './throttle'

const mouseMove = (e: MouseEvent) => {
  const el = new MouseElement(e.clientX, e.clientY)
  el.addElement()
  el.move()
}

const throttleMouseMove = throttle(mouseMove, 100)

const add = () => {
  document.addEventListener('mousemove', throttleMouseMove)
}
const remove = () => {
  document.removeEventListener('mousemove', throttleMouseMove)
}

class MouseElement {
  x: number
  y: number
  color: string
  character: string
  node: HTMLSpanElement

  constructor(x: number, y: number) {
    this.x = x
    this.y = y
    this.color = this.randomColor()
    this.character = this.randomCharacter()
    this.node = this.createElement()
  }

  private colors = [
    '#F5F5F5',
    '#F8F8FF',
    '#ADD8E6',
    '#7BF2EA',
    '#C0C0C0',
    '#E0E0E0'
  ] // 颜色数组

  private characters = ['✺', '❆', '❄', '❄', '❄', '✺', '❉', '✹', '✵', '❁', '❆'] // 拖尾符号类型数组

  private randomColor() {
    return this.colors[Math.floor(Math.random() * this.colors.length)]
  }

  private randomCharacter() {
    return this.characters[Math.floor(Math.random() * this.characters.length)]
  }

  private createElement() {
    const span = document.createElement('span')
    const initStyle: Partial<CSSStyleDeclaration> = {
      color: this.color,
      opacity: '1',
      transition: 'transform 1s, opacity 1s',
      userSelect: 'none',
      pointerEvents: 'none',
      cursor: 'none',
      position: 'fixed',
      top: `${this.y}px`,
      left: `${this.x}px`
    }
    span.innerHTML = this.character
    for (let k in initStyle) {
      initStyle[k] && (span.style[k] = initStyle[k])
    }
    return span
  }

  addElement() {
    document.body.appendChild(this.node)
  }

  move(delay = 10) {
    setTimeout(() => {
      const range = (l: number) => Math.floor(Math.random() * l) - l / 2
      this.node.style.setProperty('opacity', '0')
      this.node.style.setProperty(
        'transform',
        `translate(${range(50)}px, ${Math.abs(range(400))}px)`
      )
      setTimeout(() => {
        this.delElement()
      }, 1000)
    }, delay)
  }

  delElement() {
    document.body.removeChild(this.node)
  }
}

export const mouseTrail = {
  add,
  remove
}
