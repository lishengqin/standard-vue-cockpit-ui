import { App } from 'vue'

import LsqButton from "./lsq-button/index";
import LsqScrollList from "./lsq-scroll-list/index";
import LsqScrollTable from "./lsq-scroll-table/index";
const components = [
  LsqButton,
  LsqScrollList,
  LsqScrollTable
]
const install = (app: App): void => {
  components.map(one => one.install(app))
}
// 按需加载
export {
  LsqButton,
  LsqScrollList,
  LsqScrollTable
}
// 完整加载
export default {
  install
}