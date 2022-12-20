import { defineComponent, PropType } from "vue";
import { Column, ListOfItem } from "./index"
import LsqScrollList, { lsqScrollListProps } from "../lsq-scroll-list/LsqScrollList"
import "./index.scss"
export const lsqScrollTableProps = {
  /** 表格的列配置 */
  columns: {
    type: Array as PropType<Column[]>,
    default: []
  },
  /** 表头和文字的对齐方式 left cengter right */
  align: {
    type: String as PropType<"left" | "center" | "right">,
    default: "left"
  },
  /** 表头文字超出是否可以换行 */
  headWrap: {
    type: Boolean,
    default: false
  },
  /** 每行文字超出是否可以换行 */
  bodyWrap: {
    type: Boolean,
    default: false
  },
  /** 是否为斑马线 */
  stripe: {
    type: Boolean,
    default: true
  },
  /** 包含【滚动列表】组件的属性  */
  ...lsqScrollListProps,
  /** 数组数据 */
  list: {
    type: Array as PropType<ListOfItem[]>,
    default: []
  },
  /** 获取东西  */
  getSomeThing: {
    default: () => {
      return {}
    },
    type: Function
  }
}
export const lsqScrollTableEmits = {
  /** 点击列表行触发 (row)=>{}*/
  rowClicked: (row) => { return true }
}
export const lsqScrollTableSlots = {
  /** 每列的prop可以作为插槽，可自定义每列的内容 */
  "[column.prop]": () => { return true }
}
export default defineComponent({
  name: "lsq-scroll-table",
  props: lsqScrollTableProps,
  emits: lsqScrollTableEmits,
  setup(props, { slots, emit }) {
    let tableClassName = {
      'lsq-scroll-table': true,
      'lsq-scroll-table_stripe': props.stripe
    }
    return () => (
      <div class={tableClassName}>
        <div class="lsq-table-header">
          {
            props.columns.map((column, columnIndex) => {
              return (<div
                class={{ 'lsq-header-th': true, 'lsq-header-th_wrap': props.headWrap }}
                style={{
                  width: column.width,
                  minWidth: column.width,
                  maxWidth: column.width,
                }}
                key={column.label + columnIndex}
              >
                <div class="cell cell_header ellipsis" style={{ 'text-align': column.headAlign || props.align }}>{column.label}</div>
              </div>)
            })
          }
        </div>

        <LsqScrollList
          class="lsq-table-body"
          list={props.list}
          copyNum={props.copyNum}
          modelValue={props.modelValue}
          step={props.step}
        >
          {
            props.list.map((row, index) => {
              return (
                <div
                  class={[row.className, 'row', props.bodyWrap ? 'row_wrap' : ''].join(" ")}
                  key={index}
                  onClick={() => emit('rowClicked', row)}
                >
                  {
                    props.columns.map((column, columnIndex) => {
                      return (
                        <div
                          class="body-td"
                          style={{
                            width: column.width,
                            minWidth: column.width,
                            maxWidth: column.width,
                          }}
                          key={column.label + columnIndex}
                        >
                          <div class="cell ellipsis" style={{ 'text-align': column.align || props.align }}>
                            {
                              (
                                // @ts-ignore
                                (slots[column.prop] && slots[column.prop]({ row, column, index })) ||
                                (column.type === 'index' ?
                                  (<span class="index">{index + 1}</span>) :
                                  (<span title={row[column.prop]}>{row[column.prop]}</span>)))
                            }
                          </div>
                        </div>
                      )
                    })
                  }

                </div>
              )
            })
          }
        </LsqScrollList>
      </div>
    )
  }
})