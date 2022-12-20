export type definition = {
  // 组件的英文名称
  name: string,
  // 组件的中文名称
  zhName: string,
  // 组件状态 ：下线|开发中|已完成
  state: 'offline' | 'doing' | 'finish',
  // 组件的排序
  order: Number
}