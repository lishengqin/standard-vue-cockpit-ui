
import { defineComponent, computed, h } from "vue";
import "./index.scss";
import { NGrid, NGi } from 'naive-ui';
import { cloneDeep } from "lodash";
import LsqButton from "@packages/lsq-button/LsqButton";

export const lsqSearchFormProps = {
  /** 展示几列 */
  columnCount: {
    default: 3,
    type: Number
  },
  /** 标签宽度 */
  labelWidth: {
    default: '80px',
    type: String,
  },
  /** 查询表单绑定的数据 */
  searchForm: {
    default: {},
    type: Object
  }
}
export const lsqSearchFormEmits = {
  /** 点击重置按钮触发 */
  reset: () => { },
  /** 点击查询按钮触发 */
  search: () => { },
  /** 更新表单 */
  "update:searchForm": (form) => { }
}
export const lsqSearchFormSlots = {
  /** 
  * searchForm插槽，自定义查询表单，每项可以配置：
  * {
    valueKey：string 绑定字段
    label：string 标签
    required：boolean 是否必填，
  }
  */
  searchForm: () => true
}
export const lsqSearchFormEvents = {}
export default defineComponent({
  props: lsqSearchFormProps,
  emits: lsqSearchFormEmits,
  name: "lsq-search-form",
  setup(props, { emit, slots }) {
    // 表单插槽
    const searchFormSlots = computed(() => {
      if (!slots.searchForm) return [];
      let list = getSearchFormSlots(slots.searchForm());
      if (list.length >= props.columnCount && (list.length + 1) % props.columnCount > 0) {
        const pushCount = props.columnCount - ((list.length + 1) % props.columnCount);
        let emptyList = Array(pushCount).fill({ _empty: true });
        list = list.concat(emptyList);
      }
      return list;
    });
    const getSearchFormSlots = list => {
      if (!list.length) return;
      if (list[0].children) {
        return getSearchFormSlots(list[0].children);
      } else if (Array.isArray(list)) {
        return list.filter(one => one.props);
      }
    };

    // 渲染表单
    const renderItem = (formItem) => {
      return h(formItem, {
        value: props.searchForm[formItem.props.valueKey],
        "onUpdate:value"(v) {
          props.searchForm[formItem.props.valueKey] = v;
        }
      })
    }
    const reset = () => {
      let _searchForm = cloneDeep(props.searchForm);
      searchFormSlots.value.forEach(one => {
        // 非必填的就会被清空掉
        if (one.props?.valueKey && !one.props.required) {
          _searchForm[one.props.valueKey] = null;
        }
      });
      emit('update:searchForm', _searchForm);
      emit("reset")
    }
    const search = () => {
      emit("search")
    }
    return () => (<div class="lsq-search-form">
      <NGrid x-gap="24" cols={props.columnCount}>
        {
          searchFormSlots.value.map((formItem, index) => {
            if (formItem._empty) {
              return <NGi class={{ searchFormItem: true }} ></NGi>
            } else {
              return (<NGi class={{ searchFormItem: true, "searchFormItem_required": formItem.props.required, 'mt-16': index > props.columnCount }} >
                {
                  formItem.props.label ? <span
                    class="label"
                    style={{ width: props.labelWidth }}
                  >
                    {formItem.props.label + ' ：'}
                  </span> : null
                }
                {
                  renderItem(formItem)
                }
              </NGi>)
            }
          })
        }
        <NGi class={{ 'btn-group': true, searchFormItem: true, 'mt-16': searchFormSlots.value.length > props.columnCount }} >
          <LsqButton onClick={reset}>重置</LsqButton>
          <LsqButton onClick={search}>查询</LsqButton>
        </NGi>
      </NGrid >
    </div >)
  }
})
