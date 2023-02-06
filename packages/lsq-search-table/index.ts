
import { withInstall } from "../withInstall";
import _lsqSearchTable from "./LsqSearchTable";
export const LsqSearchTable = withInstall(_lsqSearchTable)
export default LsqSearchTable;
declare module "vue" {
  export interface GlobalComponents {
    LsqSearchTable: typeof LsqSearchTable;
  }
}
