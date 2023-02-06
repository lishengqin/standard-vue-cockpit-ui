
import { withInstall } from "../withInstall";
import _lsqModuleBlock from "./LsqModuleBlock";
export const LsqModuleBlock = withInstall(_lsqModuleBlock)
export default LsqModuleBlock;
declare module "vue" {
  export interface GlobalComponents {
    LsqModuleBlock: typeof LsqModuleBlock;
  }
}
