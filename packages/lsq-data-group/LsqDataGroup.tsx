
import { defineComponent, PropType, computed } from "vue";
// @ts-ignore
import { ListOfItem, lsqDataGroupType } from "./index"
import { chunk } from "lodash"
import "./index.scss";
export const lsqDataGroupProps = {
  /** 展示的数据  */
  list: {
    default: [
      // /** 展示的类型名称 */
      // name: String,
      // /** 展示的类型单位 */
      // unit: String,
      // /** 展示的类型值 */
      // value ?: any,
      // /** 展示的类型的字段，值可以通过value 或者 data[prop]展示，默认读取value */
      // prop ?: String
    ],
    type: Array as PropType<ListOfItem[]>
  },
  /** 数据 */
  data: {
    default: () => { return {} },
    type: Object
  },
  /** 展示样式类型，type1 type2 type3 type4 */
  type: {
    type: String as PropType<lsqDataGroupType>,
    default: 'type1',
  },
  /** 展示几列 */
  columnCount: {
    default: 3,
    type: Number
  },
  /** 每行的间距 */
  rowGap: {
    default: '8px',
    type: String,
  },
  /** 每列的间距 */
  columnGap: {
    default: '8px',
    type: String,
  },
  /** 整体放置的位置 */
  justifyContent: {
    default: 'left',
    type: String,
  },
  /** 自定义每个块的样式 */
  itemStyle: {
    type: Object,
    default: () => {
      return {};
    },
  },
}
export const lsqDataGroupEmits = {}
export const lsqDataGroupSlots = {
  /** 自定义每项的name */
  "item.prop+Name": () => { },
  /** 自定义每项的unit后面的位置 */
  "item.prop+Append": () => { }
}
export const lsqDataGroupEvents = {}
export default defineComponent({
  props: lsqDataGroupProps,
  emits: lsqDataGroupEmits,
  name: "lsq-data-group",
  setup(props, { emit, slots }) {
    const showList = computed(() => {
      // 补齐空的，为了让样式好看居中
      let pushCount = 0;
      if (props.list.length % props.columnCount > 0 && props.list.length > props.columnCount) {
        pushCount = props.columnCount - (props.list.length % props.columnCount);
      }
      let emptyList = Array(pushCount).fill({ _empty: true });
      return chunk(props.list.concat(emptyList), props.columnCount);
    });
    return () => (
      <div class={{ "lsq-data-group": true, ['lsq-data-group_' + props.type]: true, ['lsq-data-group_circle']: props.type !== 'type1' }} style={{ 'row-gap': props.rowGap }}>
        {
          showList.value.map((row, index) => {
            return (
              <div class="row" style={{ 'column-gap': props.columnGap, 'justify-content': props.justifyContent }} key={index}>
                {
                  row.map((item, itemIndex) => {
                    /* @ts-ignore */
                    if (item._empty) {
                      return (<div
                        class={{ item: true, item_empty: true }}
                        style={props.itemStyle || {}}
                      ></div>)
                    } else {
                      if (props.type === "type1") {
                        return (<div class="item" style={props.itemStyle || {}}  >
                          <div class="name">
                            {/* @ts-ignore */}
                            {(item.prop && slots[item.prop + "Name"] && slots[item.prop + "Name"](item)) ?? item.name}
                          </div>
                          <div class="value-wrap">
                            <span class="value">
                              {/* @ts-ignore  */}
                              {(item.value ?? props.data[item.prop || ''] ?? '').toString() || '-'}
                            </span>
                            <span class="unit">{item.unit}</span>
                            {/* @ts-ignore */}
                            {item.prop && slots[item.prop + "Append"] && slots[item.prop + "Append"](item)}
                          </div>
                        </div>)
                      } else {
                        return (<div class="item" style={props.itemStyle || {}}  >
                          <div class="value-wrap">
                            <div class="value">
                              {/* @ts-ignore  */}
                              {(item.value ?? props.data[item.prop || ''] ?? '').toString() || '-'}
                            </div>
                            <div class="unit">{item.unit}</div>
                            {/* @ts-ignore */}
                            {item.prop && slots[item.prop + "Append"] && slots[item.prop + "Append"](item)}
                          </div>
                          <div class="name">
                            {/* @ts-ignore */}
                            {(item.prop && slots[item.prop + "Name"] && slots[item.prop + "Name"](item)) ?? item.name}
                          </div>
                        </div>)
                      }
                    }
                  })
                }
              </div>
            )
          })
        }
      </div >)
  }
})
