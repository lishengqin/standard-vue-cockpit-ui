import { withInstall } from "../withInstall";
import _LsqSrcollTable from "./LsqScrollTable";

export type Column = {
  /** 列表头标签 */
  label: string,
  /** 列的类型，index表示该列为序号 */
  type?: 'index' | "",
  /**  该列的字段 */
  prop: string,
  /**  该列的宽度 */
  width?: string,
  /** 该列的表头对齐方式 */
  headAlign?: 'left' | "center" | "right",
  /** 该列的内容对齐方式 */
  align?: 'left' | "center" | "right"
}
export type ListOfItem = {
  /** 当前行的类名 */
  className?: string,
}
export const LsqScrollTable = withInstall(_LsqSrcollTable)
export default LsqScrollTable;
declare module "vue" {
  export interface GlobalComponents {
    LsqScrollTable: typeof LsqScrollTable;
  }
}