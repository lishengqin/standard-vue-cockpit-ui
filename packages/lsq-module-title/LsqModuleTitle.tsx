
import { defineComponent } from "vue";
import { omit } from "lodash"
// @ts-ignore
import LsqTabs, { lsqTabsProps, lsqTabsEmits } from "../lsq-tabs/LsqTabs"
import { getListeners } from "../utils"
import "./index.scss";
// @ts-ignore
import arrowImg from "./assets/arrow.png"
export const lsqModuleTitleProps = {
  /** 包含【tabs标签页】组件的属性  */
  ...lsqTabsProps,
  /** 标题 */
  title: {
    default: "",
    type: String
  },
}
export const lsqModuleTitleEmits = {}
export const lsqModuleTitleSlots = {
  /** 自定义标题的内容 */
  title: () => true,
  /** 自定义右侧的内容 */
  headRight: () => true,
  /** 包含【tabs标签页】组件的插槽  */
  ...lsqTabsEmits
}
export const lsqModuleTitleEvents = {}
export default defineComponent({
  props: lsqModuleTitleProps,
  emits: lsqModuleTitleEmits,
  name: "lsq-module-title",
  setup(props, { emit, slots, attrs }) {
    const listeners = getListeners(attrs)
    return () => (
      <div class="lsq-module-title">
        <div class="left-wrap">
          <img src={arrowImg} alt="" />
          <div class="title">
            {(slots.title && slots.title()) ?? props.title}
          </div>
        </div>
        <div class="right-wrap">
          {(slots.headRight && slots.headRight())}
          {
            props.tabs.length ? <LsqTabs
              {...listeners}
              {...omit(props, 'title')}
              v-slots={{ ...slots }}
              tabStyle={{ "height": props.type === 'line' ? "46px" : '' }}
            /> : null
          }
        </div>
      </div>
    )
  }
})