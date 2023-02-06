
import { defineComponent, PropType, onMounted } from "vue";
import { Tab, Type } from "./index"
import "./index.scss";
export const lsqTabsProps = {
  /** tabs页切数组 */
  tabs: {
    default: [
      // /** 页切的标签 */
      // label: string,
      // /** 页切的value */
      // value: string | number | boolean
    ],
    type: Array as PropType<Tab[]>
  },
  /** 激活的页切的value */
  modelValue: {
    type: String || Number || Boolean,
    default: null
  },
  /** 页切类型，line:下划线的；border-card:边框卡片；card:卡片的 */
  type: {
    type: String as PropType<Type>,
    default: "line"
  },
  /** 每个tab页签样式  */
  tabStyle: {
    type: Object,
    default: () => { return {} }
  }
}
export const lsqTabsEmits = {
  /** 点击tab触发 (tab)=>{}*/
  tabClick: (tab) => { return true },
  /** 改变激活的tab触发 (tab)=>{}*/
  tabChange: (tab) => { return true },
  /** 修改激活的tab (value)=>{}*/
  "update:modelValue": (value) => { }
}
export const lsqTabsSlots = {
  /** 自定义每个tab渲染的内容 #[tab.value]="{tab}" */
  "[tab.value]": ({ tab }) => { return true }
}
export const lsqTabsEvents = {}
export default defineComponent({
  props: lsqTabsProps,
  emits: lsqTabsEmits,
  name: "lsq-tabs",
  setup(props, { emit, slots }) {
    onMounted(() => {
      if (!props.tabs.find(tab => tab.value === props.modelValue)) {
        tabChange(props.tabs[0])
      }
    })
    const tabClick = (tab) => {
      emit("tabClick", tab);
      if (tab.value !== props.modelValue) {
        tabChange(tab)
      }
    }
    const tabChange = (tab) => {
      emit("tabChange", tab);
      emit("update:modelValue", tab?.value);
    }
    return () => (
      <div class={{ "lsq-tabs": true, ['lsq-tabs_' + props.type]: true }}>
        {
          props.tabs.map((tab, index) => {
            return (
              <div class={{ "lsq-tab": true, "lsq-tab_active": props.modelValue === tab.value }} key={index} onClick={() => tabClick(tab)} style={props.tabStyle}>
                <span class="lsq-tab-text">
                  {/*  @ts-ignore */}
                  {(slots[tab.value] && slots[tab.value]({ tab })) ?? tab.label}
                </span>
              </div>
            )
          })
        }
      </div>
    )
  }
})
