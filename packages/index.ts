import { App } from 'vue'
// hook
export { usePageScale } from "./hook/usePageScale"
// 组件

import LsqButton from "./lsq-button/index"
import LsqCountTo from "./lsq-count-to/index"
import LsqScrollList from "./lsq-scroll-list/index"
import LsqScrollTable from "./lsq-scroll-table/index"
import LsqSidePanel from "./lsq-side-panel/index"
import LsqModal from "./lsq-modal/index"
import LsqTabs from "./lsq-tabs/index"
import LsqModuleTitle from "./lsq-module-title/index"
import LsqModuleBlock from "./lsq-module-block/index"
import LsqDataGroup from "./lsq-data-group/index"
import LsqBarLineChart from "./lsq-bar-line-chart/index"
import LsqPieChart from "./lsq-pie-chart/index"
import LsqDataTable from "./lsq-data-table/index"
import LsqSearchForm from "./lsq-search-form/index"
import LsqSearchTable from "./lsq-search-table/index"
const components = [
  LsqButton,
  LsqCountTo,
  LsqScrollList,
  LsqScrollTable,
  LsqSidePanel,
  LsqModal,
  LsqTabs,
  LsqModuleTitle,
  LsqModuleBlock,
  LsqDataGroup,
  LsqBarLineChart,
  LsqPieChart,
  LsqDataTable,
  LsqSearchForm,
  LsqSearchTable
]
const install = (app: App): void => {
  components.map((component) => component.install(app))
}
// 按需引入
export {
  LsqButton,
  LsqCountTo,
  LsqScrollList,
  LsqScrollTable,
  LsqSidePanel,
  LsqModal,
  LsqTabs,
  LsqModuleTitle,
  LsqModuleBlock,
  LsqDataGroup,
  LsqBarLineChart,
  LsqPieChart,
  LsqDataTable,
  LsqSearchForm,
  LsqSearchTable
}
// 全量引入
export default {
  install
}