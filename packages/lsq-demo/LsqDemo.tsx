import { defineComponent, PropType } from "vue";
import "./index.scss"
export const lsqDemoProps = {

}
export const lsqDemoEmits = {
}
export const lsqDemoSlots = {
}
export default defineComponent({
  name: "lsq-demo",
  props: lsqDemoProps,
  emits: lsqDemoEmits,
  setup(props, { slots, emit }) {
    return () => (<div class='lsq-demo'></div>
    )
  }
})