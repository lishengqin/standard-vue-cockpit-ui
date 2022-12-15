import { defineComponent, PropType } from "vue";
import { ButtonType } from "./index"
import "./index.scss"
export const lsqButtonProps = {
  /* 按钮类型 */
  type: {
    type: String as PropType<ButtonType>,
    default: "primary",
    validator(value: string) {
      return ["primary", "text"].includes(value)
    }
  },
  /* 文字颜色 */
  color: {
    type: String,
    default: "fff"
  },
  bottomLine: {
    type: Boolean,
    default: false
  }
}
export const lsqButtonEmits = {
  /* 点击触发 */
  click: () => { }
}
export const lsqButtonSlots = {
  /* 自定义按钮文字插槽 */
  default: () => true
}
export default defineComponent({
  name: "lsq-button",
  props: lsqButtonProps,
  emits: lsqButtonEmits,
  setup(props, { emit, slots }) {
    let className = {
      "lsq-button": true,
      ['lsq_button_' + props.type]: true,
      'lsq_button_text_border': props.type === 'text' && props.bottomLine
    }
    let style = {
      color: props.color
    }
    const onClick = () => {
      emit("click");
    }
    return () => (<div class={className} style={style} onClick={onClick}>{slots.default && slots.default()}</div>)
  }
})