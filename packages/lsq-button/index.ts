export type ButtonType = "primary" | "text"
import _lsqButton from "./LsqButton"
import { withInstall } from "../withInstall"
export const LsqButton = withInstall(_lsqButton)
export default LsqButton
declare module "vue" {
  export interface GlobalComponents {
    LsqButton: typeof LsqButton
  }
}