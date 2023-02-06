
import { withInstall } from "../withInstall";
import _lsqModuleTitle from "./LsqModuleTitle";
export const LsqModuleTitle = withInstall(_lsqModuleTitle)
export default LsqModuleTitle;
declare module "vue" {
  export interface GlobalComponents {
    LsqModuleTitle: typeof LsqModuleTitle;
  }
}
