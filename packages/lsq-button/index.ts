import { withInstall } from "../withInstall";
import _lsqButton from "./LsqButton";
export type lsqButtonType = 'primary' | 'text'
export const LsqButton = withInstall(_lsqButton)
export default LsqButton;
declare module "vue" {
  export interface GlobalComponents {
    LsqButton: typeof LsqButton;
  }
}