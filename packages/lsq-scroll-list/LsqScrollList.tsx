import { defineComponent, onMounted, ref, onBeforeUnmount, watch, nextTick, getCurrentInstance, ComponentInternalInstance } from 'vue';
import "./index.scss"
export const lsqScrollListProps = {
  /** 
   * 我是
   * 滚动的列表数组*/
  list: {
    default: [],
    type: Array as any,
  },
  /** 滚动速度*/
  step: {
    default: 0.5,
    type: Number,
  },
  /** 复制的份数，只有列表滚动起来了才会进行复制*/
  copyNum: {
    type: Number,
    default: 1,
  },
  /** 是否进行滚动*/
  modelValue: {
    type: Boolean,
    default: true,
  },
}
export const lsqScrollListSlots = {
  /**  自定义列表中的内容*/
  default: () => true,
  /**  自定义列表为空的内容*/
  empty: () => true,
}
export default defineComponent({
  name: "lsq-scroll-list",
  props: lsqScrollListProps,
  setup(props, { slots }) {
    const instance = getCurrentInstance() as any;// 实例
    const top = ref<number>(0); // 偏移的距离
    const timer = ref(); //定时器
    const isScroll = (): boolean => {
      // 内容超出盒子高度,并且有数据,且设置可以滚动(已默认设置),那就可以滚动起来了。
      if (!instance.refs.listWrapRef || !instance.refs.scrollListRef) {
        return false;
      }
      if (
        props.list.length === 0 ||
        !props.modelValue ||
        instance.refs.listWrapRef.scrollHeight < instance.refs.scrollListRef.offsetHeight
      ) {
        return false;
      }
      return true;
    };
    const start = (): void => {
      if (!isScroll()) {
        return;
      }
      // 滑动到底部需要回到顶部
      if (Math.abs(top.value) >= instance.refs.listWrapRef.scrollHeight / (props.copyNum + 1)) {
        top.value = 0;
      }
      top.value += -props.step;
      timer.value = requestAnimationFrame(start);
    };
    // 鼠标滑入则停止滚动
    const mouseenter = () => {
      if (!timer.value) return;
      cancelAnimationFrame(timer.value);
      timer.value = null;
    };
    // 鼠标滑出则继续滚动
    const mouseleave = () => {
      start();
    };
    // 支持鼠标手动滚动列表
    const mousewheel = (e) => {
      let count = 10;
      let subH = instance.refs.listWrapRef.scrollHeight - instance.refs.listWrapRef.offsetHeight;
      if (subH <= 0) return;
      if (e.wheelDeltaY < 0) {
        count = -count;
        if (Math.abs(top.value) > subH) return;
      } else {
        if (top.value > 0) {
          return;
        }
      }
      top.value += count;
    };
    onMounted(() => {
      start();
    });
    onBeforeUnmount(() => {
      cancelAnimationFrame(timer.value);
      timer.value = null;
    });
    watch(
      () => props.list,
      () => {
        top.value = 0;
        nextTick(() => {
          start();
        });
      },
      {
        deep: true,
      }
    );
    return () => (
      <div
        class="lsq-scroll-list"
        ref="scrollListRef"
        onMouseover={mouseenter}
        onMouseleave={mouseleave}
        onMousewheel={mousewheel}
      >
        <div ref="listWrapRef" class="lsq-list" style={{ 'transform': `translateY(${top.value}px)` }}>
          {
            props.list.length ?
              Array((!isScroll() ? 0 : props.copyNum) + 1).fill("").map(one => {
                return (slots.default && slots.default())
              })
              : ((slots.empty && slots.empty()) ?? <div class="lsq-empty">暂无数据</div>)
          }
        </div>
      </div>
    )
  },
})