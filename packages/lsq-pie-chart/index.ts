
import { withInstall } from "../withInstall";
import _lsqPieChart from "./LsqPieChart";
export const LsqPieChart = withInstall(_lsqPieChart)
export default LsqPieChart;
export type DataOfItem = {
  /** 类型 */
  name: String,
  /** 数据 */
  value: String | Number,
  /** 图例展示内容，无该字段则展示value字段的值 */
  legendValue?: String | Number,
}
declare module "vue" {
  export interface GlobalComponents {
    LsqPieChart: typeof LsqPieChart;
  }
}
