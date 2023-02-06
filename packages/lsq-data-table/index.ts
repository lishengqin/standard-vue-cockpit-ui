
import { number } from "echarts";
import { withInstall } from "../withInstall";
import _lsqDataTable from "./LsqDataTable";
export type Pagination = false | {
  page?: number,
  pageSize?: number,
  [p: string]: any
}
/** no-show-doc  */
export type AsyncData = {
  data: Object[],
  total: Number
}
export const LsqDataTable = withInstall(_lsqDataTable)
export default LsqDataTable;
declare module "vue" {
  export interface GlobalComponents {
    LsqDataTable: typeof LsqDataTable;
  }
}
