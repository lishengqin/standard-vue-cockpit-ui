
import { withInstall } from "../withInstall";
import _lsqSearchForm from "./LsqSearchForm";
export const LsqSearchForm = withInstall(_lsqSearchForm)
export default LsqSearchForm;
declare module "vue" {
  export interface GlobalComponents {
    LsqSearchForm: typeof LsqSearchForm;
  }
}
