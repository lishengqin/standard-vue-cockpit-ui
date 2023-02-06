
import { withInstall } from "../withInstall";
import _lsqCountTo from "./LsqCountTo";
export const LsqCountTo = withInstall(_lsqCountTo)
export default LsqCountTo;
declare module "vue" {
  export interface GlobalComponents {
    LsqCountTo: typeof LsqCountTo;
  }
}
