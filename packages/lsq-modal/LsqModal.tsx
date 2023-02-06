import { defineComponent, onMounted, ref, Teleport } from "vue";
// @ts-ignore
import modalCloseImg from "./assets/modal-close.png"
import "./index.scss"
export const lsqModalProps = {
  /**
   * 弹窗标题 */
  title: {
    default: "",
    type: String
  },
  /** 是否显示 弹窗，支持 .sync 修饰符 */
  visible: {
    default: false,
    type: Boolean
  },
  /** 弹窗宽度 */
  width: {
    default: "1300px",
    type: String
  },
  /** 弹窗高度 */
  height: {
    default: "820px",
    type: String
  },
  /** 弹窗挂载的父节点 */
  teleport: {
    default: "body",
    tyep: String
  },
  /** 点击遮罩层关闭弹窗 */
  closeOnClickModal: {
    default: true,
    tyep: Boolean
  },
  /** 隐藏弹窗头部  */
  hideHead: {
    default: false,
    tyep: Boolean
  }
}
export const lsqModalEmits = {
  /** 关闭弹窗触发 */
  close: (): void => { },
  /** 更新弹窗状态，关闭或打开 */
  'update:visible': (flag) => { }
}
export const lsqModalSlots = {
  /**  自定义弹窗内的内容*/
  default: () => true,
  /**  自定义标题的内容*/
  title: () => true,
}
export default defineComponent({
  name: "lsq-modal",
  props: lsqModalProps,
  emits: lsqModalEmits,
  setup(props, { slots, emit }) {
    const teleport = ref('body');
    onMounted(() => {
      teleport.value = props.teleport
    })
    const onClose = () => {
      emit('update:visible', false);
      emit('close');
    }
    const modalClick = () => {
      if (props.closeOnClickModal) {
        onClose()
      }
    }
    return () => (
      <Teleport to={teleport.value}>
        {
          props.visible ?
            <div class={{ "lsq-modal": true, "lsq-modal_nohead": props.hideHead }}>
              <div class="mark" onClick={modalClick}></div>
              <div
                class="modal-wrapper"
                style={{
                  width: props.width,
                  height: props.height,
                }}
              >
                {props.hideHead ? null : <div
                  class="modal-wrapper-header"
                  style={{ 'margin-top': parseFloat(props.height) * 0.01 + 'px' }}
                >
                  <div class="header-left">
                    {(slots.title && slots.title()) ?? props.title}
                  </div>
                  <div class="header-right" onClick={onClose}>
                    <img src={modalCloseImg} />
                  </div>
                </div>}
                <div class="modal-wrapper-content">
                  <div class="modal-content">
                    {slots.default && slots.default()}
                  </div>
                </div>
              </div>
            </div> : null
        }
      </Teleport >
    )
  }
})