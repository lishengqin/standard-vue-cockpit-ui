
import { defineComponent } from "vue";
import LsqModuleTitle, { lsqModuleTitleProps, lsqModuleTitleEmits } from "../lsq-module-title/LsqModuleTitle"
import { getListeners } from "../utils"
import "./index.scss";

export const lsqModuleBlockProps = {
  /** 包含【模块标题 LsqModuleTitle】组件的属性  */
  ...lsqModuleTitleProps,
  /** 模块高度 */
  height: {
    default: "100%",
    type: String
  },
  /** 隐藏头部 */
  hideHead: {
    type: Boolean,
    default: false
  }
}
export const lsqModuleBlockEmits = {}
export const lsqModuleBlockSlots = {}
export const lsqModuleBlockEvents = {}
export default defineComponent({
  props: lsqModuleBlockProps,
  emits: lsqModuleBlockEmits,
  name: "lsq-module-block",
  setup(props, { emit, slots, attrs }) {
    const listeners = getListeners(attrs)
    let style = {
      height: props.height,
      minHeight: props.height
    }
    return () => (
      <div class="lsq-module-block" style={style}>
        {
          props.hideHead ? null :
            <LsqModuleTitle
              {...listeners}
              {...props}
              v-slots={{ ...slots }}
            />
        }

        <div class="lsq-module-content">
          {slots.default && slots.default()}
        </div>
      </div>
    )
  }
})
