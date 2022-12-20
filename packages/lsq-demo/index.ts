import { withInstall } from "../withInstall";
import _LsqDemo from "./LsqDemo";

export const LsqDemo = withInstall(_LsqDemo)
export default LsqDemo;
declare module "vue" {
  export interface GlobalComponents {
    LsqDemo: typeof LsqDemo;
  }
}