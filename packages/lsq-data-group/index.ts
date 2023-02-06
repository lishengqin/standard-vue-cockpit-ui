
import { withInstall } from "../withInstall";
import _lsqDataGroup from "./LsqDataGroup";
export const LsqDataGroup = withInstall(_lsqDataGroup)

export type lsqDataGroupType = 'type1' | 'type2' | "type3" | "type4"
export type ListOfItem = {
  /** 展示的类型名称 */
  name: String,
  /** 展示的类型单位 */
  unit: String,
  /** 展示的类型值 */
  value?: any,
  /** 展示的类型的字段，值可以通过value 或者 data[prop]展示，默认读取value */
  prop?: String
}
export default LsqDataGroup;
declare module "vue" {
  export interface GlobalComponents {
    LsqDataGroup: typeof LsqDataGroup;
  }
}
