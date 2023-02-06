import { withInstall } from "../withInstall";
import _lsqSidePanel from "./LsqSidePanel";


export const LsqSidePanel = withInstall(_lsqSidePanel)
export default LsqSidePanel;
declare module "vue" {
  export interface GlobalComponents {
    LsqSidePanel: typeof LsqSidePanel;
  }
}