import { computed, defineComponent, PropType, ref, defineExpose } from "vue";
// @ts-ignore
import sideToggleImg from "./assets/hide-sidebar-btn.png"
// @ts-ignore
import sideArrowleImg from "./assets/arrow_icon.png"
import "./index.scss"
export const lsqSidePanelProps = {
  /** 面板的宽度  */
  width: {
    type: String,
    default: "482px"
  },
  /** 面板的高度  */
  height: {
    type: String,
    default: "963px"
  },
  /** 面板所放的位置，left right */
  position: {
    type: String as PropType<'left' | 'right'>,
    default: "left"
  },
  /** 隐藏收起展示图标 */
  hideArrow: {
    type: Boolean,
    default: true
  },
  /** 收起时的偏移量，只有当【hideArrow】为false才有用 */
  offset: {
    type: Number,
    default: 23
  },
  /** 默认面板展开 */
  modelValue: {
    type: Boolean,
    default: true
  }
}
export const lsqSidePanelEvents = {
  /** 改变面板是否展示还是收起 (flag)=>{}*/
  showChange: (flag) => { return flag },
}

export const lsqSidePanelEmits = {
  /** 改变展开和收起 */
  "update:modelValue": (flag) => { return flag }
}
export default defineComponent({
  name: "lsq-side-panel",
  props: lsqSidePanelProps,
  emits: lsqSidePanelEmits,
  setup(props, { slots, emit, expose }) {
    const sideContentShow = ref(props.modelValue);
    const showToggle = () => {
      sideContentShow.value = !sideContentShow.value;
      emit("update:modelValue", sideContentShow.value)
      showChange(sideContentShow.value)
    }
    const showChange = (v) => {
      sideContentShow.value = v;
      emit("update:modelValue", sideContentShow.value)
    }
    const style = computed(() => {
      let baseStyle = {
        width: props.width,
        height: props.height,
        transform: ""
      }
      if (sideContentShow.value) {
        baseStyle.transform = 'translateX(0px)'
      } else {
        let translateX = parseFloat(props.width) + props.offset;
        baseStyle.transform = `translateX(${props.position === 'left' ? ("-" + translateX) : translateX}px)`
      }
      return baseStyle
    })
    expose({ showChange })

    return () => (
      <div class={{
        ['lsq-side-panel_' + props.position]: true,
        'lsq-side-panel': true,
        'lsq-side-panel_hide': !sideContentShow.value
      }} style={style.value}>
        <div class="lsq-side-panel-content">
          {slots.default && slots.default()}
        </div>
        {
          props.hideArrow ? null :
            <div class="lsq-side-bar__visibility-toggle" onClick={() => showToggle()}>
              <span class="text">{sideContentShow.value ? '收起' : '展开'}</span>
              <img
                class="lsq-side-bar__visibility-toggle-bg"
                src={sideToggleImg}
                alt="toggle bg"
              />
              <img class="arrow-img" src={sideArrowleImg} alt="arrow" />
            </div>
        }
      </div>
    )
  }
})