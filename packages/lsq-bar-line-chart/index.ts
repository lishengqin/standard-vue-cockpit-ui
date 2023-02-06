
import { withInstall } from "../withInstall";
import _lsqBarLineChart from "./LsqBarLineChart";
export const LsqBarLineChart = withInstall(_lsqBarLineChart)
export default LsqBarLineChart;
declare module "vue" {
  export interface GlobalComponents {
    LsqBarLineChart: typeof LsqBarLineChart;
  }
}
