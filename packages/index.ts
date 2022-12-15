import { App } from 'vue'

import LsqButton from "./lsq-button/index";
const components = [
  LsqButton
]
const install = (app: App): void => {
  components.map(one => one.install(app))
}
// 按需加载
export {
  LsqButton
}
// 完整加载
export default {
  install
}