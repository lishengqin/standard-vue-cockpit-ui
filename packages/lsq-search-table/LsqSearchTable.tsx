
import { defineComponent, getCurrentInstance, nextTick } from "vue";
import {
  lsqSearchFormProps,
  lsqSearchFormEmits,
  lsqSearchFormSlots
} from "../lsq-search-form/LsqSearchForm"
import LsqSearchForm from "../lsq-search-form/LsqSearchForm"
import { lsqDataTableProps } from "../lsq-data-table/LsqDataTable"
import LsqDataTable from "../lsq-data-table/LsqDataTable"


import { getListeners } from "../utils"
import { omit } from "lodash"
import "./index.scss";
export const lsqSearchTableProps = {
  /** 组件【LsqSearchForm】的props  */
  ...lsqSearchFormProps,
  /** 组件【LsqDataTable】的props  */
  ...lsqDataTableProps,
  /** 重置时候不查询  */
  resetNeverSearch: {
    type: Boolean,
    default: false
  }
}
export const lsqSearchTableEmits = {
  /** 组件【LsqSearchForm】的emits  */
  ...lsqSearchFormEmits
}
export const lsqSearchTableSlots = {
  /** 组件【LsqSearchForm】的Slots  */
  ...lsqSearchFormSlots,
  /** 自定义中间的内容  */
  centerContent: () => true
}
export const lsqSearchTableEvents = {
  /** 刷新列表  */
  refresh: () => { }
}
export default defineComponent({
  props: lsqSearchTableProps,
  emits: lsqSearchTableEmits,
  name: "lsq-search-table",
  setup(props, { emit, slots, attrs, expose }) {
    const listeners = getListeners(attrs)
    const instance = getCurrentInstance() as any;// 实例
    const search = () => {
      refresh()
      emit("search")
    }
    const reset = () => {
      /* 由于Update:searchForm和reset同时触发，会导致查询时表单还未清空更新，所有稍微晚一步再触发查询，先等表单更新结束 */
      nextTick(() => {
        if (!props.resetNeverSearch) {
          refresh()
        }
        emit("reset")
      })
    }
    const refresh = () => {
      instance.refs.lsqDataTableRef.refresh();
    }
    expose({ refresh })
    return () => (<div class="lsq-search-table">
      <LsqSearchForm class="lsq-search-form"
        {...(omit(props, Object.keys(omit(props, Object.keys(lsqSearchFormProps)))))}
        v-slots={{ ...slots }}
        {...listeners}
        v-model:searchForm={props.searchForm}
        onSearch={search}
        onReset={reset}
        onUpdate:searchForm={(v) => emit('update:searchForm', v)}
      />
      {
        slots.centerContent && slots.centerContent() ?
          <div class="center-content">{slots.centerContent && slots.centerContent()}</div> : null}
      <LsqDataTable ref="lsqDataTableRef" {...(omit(props, Object.keys(omit(props, Object.keys(lsqDataTableProps)))))} />
    </div>)
  }
})
