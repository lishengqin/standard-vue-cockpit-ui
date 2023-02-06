
import { computed, defineComponent, PropType, ref, reactive, onMounted } from "vue";
import { NDataTable, DataTableColumn } from "naive-ui"
import { Pagination, AsyncData } from "./index"
import { getListeners } from "../utils"
import { cloneDeep } from "lodash";
import "./index.scss";
export const lsqDataTableProps = {
  /** 包含Naive UI【data-table】组件的属性  */
  columns: {
    type: Array as PropType<DataTableColumn[]>,
    default: [
      /* 列表头 */
      // title: string | (() => VNodeChild),
      /* 列属性字段 */
      // key: string,
      /* 列类型，index:序号,selection:选择框，expand:展开 */
      // type: "index" | 'selection' | 'expand',
      /* 超出是否省略号，默认true */
      // ellipsis: boolean,
      /* 固定列 */
      // fixed: 'left' | 'right' | false,
      /* 列宽 */
      // wdith: string | number,
      /* 自定义每列渲染 */
      // render: (rowData: object, rowIndex: number) => VNodeChild
    ]
  },
  /** 列表数据*/
  data: {
    default: null,
    type: Array as PropType<Object[]>
  },
  /** 异步返回列表数据方法，返回格式必须是{data:[],total:0}，方法里面有参数，包含page、pageSize等等 */
  asyncGetData: {
    default: (query): AsyncData => {
      return { data: [], total: 0 };
    },
    type: Function,
  },
  /** 异步查询额外的查询参数 */
  searchForm: {
    default: {},
    type: Object
  },
  /** 是否需要边框  */
  bordered: {
    type: Boolean,
    default: false
  },
  /** 是否为斑马线 */
  striped: {
    type: Boolean,
    default: true
  },
  /** 表格内容的最大高度 */
  maxHeight: {
    type: String,
    default: "200px"
  },
  /**  分页配置 */
  pagination: {
    type: Boolean as PropType<Pagination>,
    default: {
      pageSize: 5
    }
  },

}
export const lsqDataTableEmits = {}
export const lsqDataTableSlots = {}
export const lsqDataTableEvents = {
  /** 刷新列表  */
  refresh: () => { }
}
export default defineComponent({
  props: lsqDataTableProps,
  emits: lsqDataTableEmits,
  name: "lsq-data-table",
  setup(props, { emit, slots, attrs, expose }) {
    /* 列表展示数据 */
    const pageTableData = ref([]);
    const tableData = computed(() => {
      return props.data || pageTableData.value;
    });
    // 分页数据
    const _pagination = ref<Pagination>({
      pageSize: 5,
      prefix({ itemCount }) {
        return `共 ${itemCount} 条`
      }
    })
    if (props.pagination === false) {
      /* 不分页 */
      _pagination.value = false
    } else if (props.data) {
      /* 前端假分页 */
      _pagination.value = Object.assign(_pagination.value, props.pagination || {}, { itemCount: props.data.length })
    } else {
      /* 后端异步分页 */
      _pagination.value = Object.assign(_pagination.value, {
        itemCount: 0,
        page: 1,
        onChange: (page) => {
          onUpdatePage(page)
        },
        onUpdatePageSize: (pageSize) => {
          onUpdatePageSize(pageSize)
        }
      }, props.pagination || {})
    }
    const onUpdatePage = (page) => {
      if (_pagination.value) {
        _pagination.value.page = page;
      }
      _asyncGetData(false)
    }
    const onUpdatePageSize = (pageSize) => {
      if (_pagination.value) {
        _pagination.value.page = 1;
        _pagination.value.pageSize = pageSize;
      }
      _asyncGetData(false)
    }
    /* 列表分页查询 */
    const loading = ref(false)
    let searchQuery: { page: Number, pageSize: Number } | null = null;
    const _asyncGetData = (flag: Boolean) => {
      if (!_pagination.value) return
      loading.value = true;
      pageTableData.value = [];
      if (flag || !searchQuery) {
        _pagination.value.page = 1;
        searchQuery = {
          page: _pagination.value.page,
          /*  @ts-ignore  */
          pageSize: _pagination.value.pageSize,
          ...props.searchForm,
        };
      } else {
        searchQuery.page = _pagination.value.page || 1;
        /*  @ts-ignore  */
        searchQuery.pageSize = _pagination.value.pageSize;
      }
      return Promise.resolve(props.asyncGetData(searchQuery))
        .then(res => {
          pageTableData.value = res.data || [];
          if (_pagination.value) {
            _pagination.value.itemCount = res.total || 0
          }
        }).finally(() => {
          loading.value = false
        })
    }
    const refresh = () => {
      _asyncGetData(true)
    }
    expose({ refresh })
    onMounted(() => {
      if (!props.data && props.pagination !== false) {
        _asyncGetData(true)
      }
    })
    /* 列配置 */
    const _columns = computed(() => {
      let columns: DataTableColumn[] = [];
      props.columns.forEach((column) => {
        let _column = cloneDeep(column)
        /* 默认是要超出省略号 */
        _column.ellipsis = _column.ellipsis ?? { tooltip: true };
        /* 序号列 */
        // @ts-ignore 
        if (_column.type === "index") {
          _column = Object.assign(
            {},
            {
              title: '序号',
              width: '80px',
              ellipsis: true,
              align: 'center',
              render: (_, index) => {
                if (_pagination.value) {
                  /*  @ts-ignore  */
                  return ` ${(Number(_pagination.value.page) - 1) * _pagination.value.pageSize + index + 1}`;
                }
              },
            },
            _column
          );
        }
        columns.push(_column)
      })
      return columns
    })

    return () => (
      <NDataTable
        class="lsq-data-table"
        {...attrs}
        remote={!props.data}
        pagination={_pagination.value}
        striped={props.striped}
        bordered={props.bordered}
        maxHeight={props.maxHeight}
        columns={_columns.value}
        data={tableData.value}
        loading={loading.value}
      />)
  }
})
