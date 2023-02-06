
import { defineComponent, computed, onMounted, onBeforeUnmount, getCurrentInstance } from "vue";
import { CountTo } from 'vue3-count-to';
import "./index.scss";
export const lsqCountToProps = {
  /** 数据值 */
  value: {
    default: 0,
    type: String || Number,
  },
  /** 滚动开始值，默认0 */
  startVal: {
    default: 0,
    type: Number
  },
  /** 保留小数位数 */
  decimals: {
    default: null,
    type: Number,
  },
  /** 动画执行时间，单位毫秒  */
  duration: {
    default: 3000,
    type: Number,
  },
  /** 初始是否自动滚动  */
  autoplay: {
    default: true,
    type: Boolean
  },
  /** 是否定时循环滚动 */
  loop: {
    default: false,
    type: Boolean,
  },
  /** 定时滚动的时间，单位毫秒   */
  setIntervalTime: {
    default: 5000,
    type: Number,
  },
  /** 字体颜色 */
  color: {
    default: "#2ffff9",
    type: String
  },
  /** 字体大小 */
  fontSize: {
    default: "26px",
    type: Number || String
  }
}
export const lsqCountToEmits = {}
export const lsqCountToSlots = {}
export const lsqCountToEvents = {}
export default defineComponent({
  props: lsqCountToProps,
  emits: lsqCountToEmits,
  name: "lsq-count-to",
  components: { CountTo },
  setup(props, { emit, slots }) {
    let style = {
      color: props.color,
      fontSize: parseFloat(props.fontSize.toString()) + "px"
    }
    const decimals = computed(() => {
      if (props.decimals || props.decimals === 0) {
        return props.decimals;
      }
      let v = props.value.toString();
      if (v.indexOf('.') < 0) {
        return 0;
      }
      let decimals = v.length - v.indexOf('.') - 1;
      return decimals
    });

    // 定时循环动
    const instance = getCurrentInstance() as any;// 实例
    let countToRef: any = null;
    let timer: any = null;
    // 定时动的时间应该是定时+动画才是间隔时间
    let setIntervaltime = props.setIntervalTime + (props.duration || 3000);
    const setIntervalDo = () => {
      clearInterval(timer);
      if (props.loop) {
        timer = setInterval(() => {
          countToRef?.reset();
          countToRef?.start();
        }, setIntervaltime);
      }
    };
    onMounted(() => {
      countToRef = instance.refs.countToRef;
      setIntervalDo();
    });
    onBeforeUnmount(() => {
      clearInterval(timer);
    });

    return () => (<>{
      (!isNaN(Number(props.value)) && props.autoplay) ? <CountTo
        ref="countToRef"
        class={{ "lsq-count-to": true }}
        startVal={props.startVal}
        endVal={Number(props.value)}
        duration={props.duration}
        decimals={decimals.value}
        style={style}
      ></CountTo> : <span style={style} class={{ "lsq-count-to": true }}>{props.value}</span>
    }</>)

  }
})
