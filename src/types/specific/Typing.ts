/**
 * 游戏状态
 */
export type State = 'init' | 'running' | 'end'

/**
 * 游戏模式
 */
export type Mode = '快速' | '适中' | '持久'

/**
 * 模式配置
 * @param count 倒计时
 * @param word 词数
 */
export interface ModeConfig {
  count: number
  word: number
}

/**
 * 输入校验颜色
 */
export type TypingColor = [string, string]

/**
 * 输入内容
 * @param word 输入
 * @param isCorrect 是否正确
 */
export interface Typed {
  word: string
  isCorrect: boolean
}

/**
 * 游戏结果
 * @param id 唯一
 * @param rank 排名
 * @param score 分数
 * @param total 总输入词数
 * @param error 错误词数
 * @param speed 速度（词/分）
 * @param accuracy 准确性
 * @param latest 是否最新
 */
export interface TypingResult {
  id: string
  rank: number
  score: number
  total: number
  error: number
  speed: string
  accuracy: string
  latest: boolean
}
