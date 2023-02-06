
import { withInstall } from "../withInstall";
import _lsqTabs from "./LsqTabs";
export type Tab = {
  /** 页切的标签 */
  label: String,
  /** 页切的value */
  value: String | Number | Boolean
}
export type Type = "line" | "border-card" | "card"
export const LsqTabs = withInstall(_lsqTabs)
export default LsqTabs;
declare module "vue" {
  export interface GlobalComponents {
    LsqTabs: typeof LsqTabs;
  }
}
