/**
 * 展览项类型
 * @param id 展览项ID
 * @param name 展览项名称
 * @param path 展览项对应路由
 * @param icon 展览项预览图标名称，对应到 IconFont 的图标名称
 * @param img 展览项预览图片路径
 * @param description 展览项描述
 */
export interface ExhibitionItem {
    id: string
    name: string
    path: string
    icon?: string
    img?: string
    description?: string
}