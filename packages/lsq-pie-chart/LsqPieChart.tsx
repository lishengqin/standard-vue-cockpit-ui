
import { defineComponent, PropType, getCurrentInstance } from "vue";
import { DataOfItem } from "./index"
import * as echarts from 'echarts';
import { cloneDeep, chunk } from 'lodash-es';
import { onMounted, onUnmounted, ref, computed, shallowRef, defineProps, watch } from 'vue';
import ResizeObserver from 'resize-observer-polyfill';
// @ts-ignore 
import pieVideo from "./assets/ring.mp4"
import "./index.scss";
export const lsqPieChartProps = {
  /** 饼状图数据 */
  data: {
    default: [
      // /** 类型 */
      // name: String,
      // /** 数据 */
      // value: String | Number,
      // /** 图例展示内容，无该字段则展示value字段的值 */
      // legendValue ?: String | Number,
    ],
    type: Array as PropType<DataOfItem[]>
  },
  /**  饼状图的图表属性，非必传，有默认的*/
  chartOptions: {
    default: {
      // series: [
      //   {
      //     unit: ""// 这个单位便于在tooltip时候拼接上去
      //   }
      // ]
    },
    type: Object,
  },
  /** 圆环里内容 */
  emphasis: {
    default: {
      label: {
        color: '#90B6D2',
        show: true,
        fontSize: '14',
        formatter: function (v) {
          let wrapLength = 10;
          let text = '\n' + v.name;
          if (v.name.length >= wrapLength) {
            let list = chunk(v.name.split(""), wrapLength)
            text = list.map(one => one.join("")).join("\n")
          }
          return '{value|' + +v.percent + '%' + '\n}' + '{v|' + text + '}';
        },
        rich: {
          value: {
            color: '#27E0FD',
            fontSize: '32',
            fontWeight: 'bold',
            padding: [8, 8, 0, 0],
            display: 'block',
          },
          v: {
            color: '#90B6D2',
            fontSize: '18',
            padding: [-4, 8, 0, 0],
          },
        },
      },
    },
    type: Object
  },
  /** 是否展示图例 */
  showLegend: {
    default: true,
    type: Boolean,
  },
  /** 图例展示几列 */
  // todo legendColumnCount
  legendColumnCount: {
    default: 1,
    type: Number,
  },
  /** 每项图例的宽度，一般用于图例多列，为了方便对齐 */
  legendItemWidth: {
    default: 'auto',
    type: String,
  },
  /** 图例name字段的宽度 */
  legendNameWidth: {
    default: '120px',
    type: String,
  },
  /** 图例文字超出是否换行 */
  legendWrap: {
    default: false,
    type: Boolean,
  },
  /** video动画的偏移，有时多列图例会导致动画位置偏移 */
  videoLeft: {
    default: "",
    type: String
  },
  /** 隐藏动画 */
  hideVideo: {
    default: false,
    type: Boolean,
  },
  /** 自动轮播tooltip */
  autoShowToolTip: {
    default: true,
    type: Boolean,
  },
  /** 鼠标悬浮上去时自动轮播停止 */
  hoverStopShowTip: {
    default: true,
    type: Boolean,
  },
}
export const lsqPieChartEmits = {}
export const lsqPieChartSlots = {}
export const lsqPieChartEvents = {
  /** 可以通过实例获取chart，然后绑定一些图表的事件等  */
  chart: () => { }
}
export default defineComponent({
  props: lsqPieChartProps,
  emits: lsqPieChartEmits,
  name: "lsq-pie-chart",
  setup(props, { emit, slots, expose }) {
    const instance = getCurrentInstance() as any;// 实例
    //默认属性
    const defaultChartOptions: {
      [p: string]: any,
      series: [
        { data: DataOfItem[], [p: string]: any }
      ]
    } = {
      color: ['#65F2D4', '#EEB57F', '#2879FF', '#02BC76', '#F0696D', '#05A2F1', '#396CE3', '#FFE4AF'],
      legend: {
        show: false,
      },
      tooltip: {
        show: false,
        borderColor: '#278BFF',
        borderWidth: 1,
        backgroundColor: '#07266C',
        formatter: function (params) {
          return (
            "<div style='width: 100%; font-size: 14px;font-weight: bold;color: " +
            params.color +
            ";'>" +
            params.name +
            '</div>' +
            "<div style='width: 100%;margin-top: vh(6);font-size: 12px;color: #6CD0FF'>" +
            params.seriesName +
            "：<span style='margin-left: 8px;font-size: 14px;color: #FFFFFF;'> " +
            params.value +
            (props.chartOptions.series ? props.chartOptions.series[0].unit : "") +
            '</span>' +
            '</div>'
          );
        },
      },
      series: [
        {
          name: 'pieChart',
          data: [], // {name:类别,value:类别的value,legendValue:图例显示的value}
          radius: ['70%', '80%'],
          center: [props.showLegend ? (props.legendColumnCount === 1 ? '20%' : '15%') : '50%', '50%'],
          type: 'pie',
          top: 'top',
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: 'center',
          },
          labelLine: {
            show: true,
          },
          emphasis: props.emphasis
        },
      ],
    };
    // 不可以直接 Object.assign(targetObj,originObj),不然对象里面的对象会进行覆盖，更深层次的对象目前不考虑
    const objectAssignFn = (originObj, targetObj) => {
      for (let key in originObj) {
        if (targetObj[key] && originObj[key] && typeof targetObj[key] === 'object') {
          // if (isArray(originObj[key])) {
          //   originObj[key].forEach((one, index) => {
          //     if (typeof one === 'object') {
          //       objectAssignFn(one, targetObj[key]?.index || {})
          //     }
          //   })
          // } else {
          //   objectAssignFn(originObj[key], targetObj[key])
          // }
          targetObj[key] = Object.assign(targetObj[key], originObj[key]);
        } else {
          targetObj[key] = originObj[key];
        }
      }
    };
    const pieChartOptions = computed(() => {
      let options = cloneDeep(defaultChartOptions);
      options.series[0].data = props.data || [];
      if (props.chartOptions && Object.values(props.chartOptions).length) {
        objectAssignFn(props.chartOptions, options)
      }
      console.log(props.chartOptions)
      return options;
    });
    // 图表实例
    let chartRef: any = null;
    let myChart: any = shallowRef(null);
    expose({ chart: myChart })
    let myChartResizeObserver: any = null;
    const initSetChart = () => {
      chartRef = instance.refs.chartRef;
      myChart.value = echarts.init(chartRef);
      myChart.value.setOption(pieChartOptions.value);
      let autoShowTip = () => {
        if (props.autoShowToolTip) {
          myChart.value.dispatchAction({
            type: 'downplay',
          });
          initTimer();
        }
      };
      let stopShowTip = dataIndex => {
        if (dataIndex || dataIndex === 0) {
          clearInterval(timers);
          myChart.value.dispatchAction({
            type: 'downplay',
          });
          myChart.value.dispatchAction({
            type: 'highlight',
            seriesIndex: 0,
            dataIndex: dataIndex || 0,
          });
        }
      };
      // 鼠标悬浮上去时自动轮播停止
      if (props.hoverStopShowTip) {
        let zRender = myChart.value.getZr();
        myChart.value.on('mouseover', function (v) {
          stopShowTip(v.dataIndex);
        });
        myChart.value.on('mouseout', function () {
          autoShowTip();
        });
        zRender.on('mousemove', v => {
          stopShowTip(v.dataIndex);
        });
        zRender.on('globalout', () => {
          // autoShowTip();
        });
      }
      autoShowTip();
      myChartResizeObserver = new ResizeObserver(() => {
        // 宽高改变图表自适应
        myChart.value && myChart.value.resize();
      });
      myChartResizeObserver.observe(chartRef);
    };
    // 自动滚动
    let timers: any = null;
    const pos = ref(-1);
    const initTimer = () => {
      myChart.value &&
        myChart.value.dispatchAction({
          type: 'hideTip',
        });
      myChart.value &&
        myChart.value.dispatchAction({
          type: 'downplay',
        });
      pos.value = -1;
      if (timers) {
        clearInterval(timers);
      }
      const intervalDo = () => {
        let dataLen = props.data.length || pieChartOptions.value.series[0]?.data.length || 0;
        myChart.value.dispatchAction({
          type: 'downplay',
          seriesIndex: 0,
          dataIndex: pos.value,
        });
        pos.value++;
        if (pos.value > dataLen - 1) {
          pos.value = 0;
        }
        myChart.value.dispatchAction({
          type: 'highlight',
          seriesIndex: 0,
          dataIndex: pos.value,
        });
        myChart.value.dispatchAction({
          type: 'showTip',
          seriesIndex: 0,
          dataIndex: pos.value,
        });
      };
      intervalDo();
      timers = setInterval(() => {
        intervalDo();
      }, 2000);
    };
    onMounted(() => {
      initSetChart();
    });
    onUnmounted(() => {
      if (timers) {
        clearInterval(timers);
      }
      myChart.value && myChart.value.dispose();
      myChartResizeObserver && chartRef && myChartResizeObserver.unobserve(chartRef);
      myChartResizeObserver = undefined;
    });
    watch(
      () => props.data,
      () => {
        myChart.value.setOption(pieChartOptions.value, true);
        if (props.autoShowToolTip) {
          initTimer();
        }
      }
    );
    return () => (<div class="lsq-pie-chart">
      <div class="chart" ref="chartRef"></div>
      {
        (pieChartOptions.value.series[0].data.length && !props.hideVideo) ? <div class="video-wrap">
          <video
            muted
            autoplay
            loop
            src={pieVideo}
            style={{ left: props.videoLeft }}
            class={{ 'ring-effect': props.showLegend }}
          /> </div> : null
      }

      {
        props.showLegend ?
          <div class={{ 'legend-wrap': true, 'legend-wrap_morerow': props.legendColumnCount > 1 }} >
            {
              (chunk(
                pieChartOptions.value.series[0].data || [],
                props.legendColumnCount
              )).map((legendList, rowIndx) => {
                return (
                  <div
                    class="legend-row"
                    key={rowIndx}
                  >
                    {
                      legendList.map((legend: DataOfItem, index) => {
                        return (
                          <div class="legend" key={(legend.name || index).toString()} style={{ width: props.legendItemWidth }}>
                            <div
                              class="rect"
                              style={{
                                background:
                                  pieChartOptions.value.color[
                                  (index + rowIndx * props.legendColumnCount) % pieChartOptions.value.color.length
                                  ],
                              }}
                            ></div>
                            <div class={{ "name": true, 'name_wrap': props.legendWrap }} style={{ width: props.legendNameWidth }} >
                              {legend.name}
                            </div>
                            <div class="value">{legend.legendValue ?? legend.value}</div>
                          </div >
                        )
                      })

                    }
                  </div >)
              })

            }

          </div > : null
      }
    </div >)
  }
})
