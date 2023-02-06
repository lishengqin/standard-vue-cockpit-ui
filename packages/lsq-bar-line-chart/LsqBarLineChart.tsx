
import { defineComponent, getCurrentInstance } from "vue";
import * as echarts from 'echarts';
import { onMounted, onUnmounted, ref, computed, shallowRef, watch } from 'vue';
import ResizeObserver from 'resize-observer-polyfill';
import { cloneDeep, omit } from 'lodash';
import "./index.scss";
export const lsqBarLineChartProps = {
  /** 图表属性 */
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
export const lsqBarLineChartEmits = {}
export const lsqBarLineChartSlots = {}
export const lsqBarLineChartEvents = {
  /** 可以通过实例获取chart，然后绑定一些图表的事件等  */
  chart: () => { }
}
export default defineComponent({
  props: lsqBarLineChartProps,
  emits: lsqBarLineChartEmits,
  name: "lsq-bar-line-chart",
  setup(props, { emit, slots, expose }) {
    const instance = getCurrentInstance() as any;// 实例
    const getDefaultOptions = (yAxis: [], series: any[]) => {
      let serieStyle = {
        line: {
          smooth: true,
          symbolSize: 0,
          lineStyle: { color: 'rgba(26, 204, 255, 1)' },
          itemStyle: { color: 'rgba(26, 204, 255, 1)' },
        },
        bar: {
          barWidth: '16px',
          itemStyle: {
            color: '#EBB21A',
          },
        },
      };
      let valueLineConfig = {
        name: '',
        nameLocation: 'end',
        splitLine: {
          show: true,
          lineStyle: {
            type: 'solid',
            color: '#29304D',
          },
        },
        splitNumber: 3,
        axisLabel: {
          color: '#90B6D2',
          fontSize: 14,
        },
        nameTextStyle: {
          color: '#90B6D2',
          fontSize: 14,
        },
      }
      let categoryLineConfig = {
        axisLine: {
          lineStyle: {
            color: '#29304D',
            type: 'solid',
          },
        },
        axisLabel: {
          fontSize: 14,
          interval: 0, //坐标刻度之间的显示间隔，默认就可以了（默认是不重叠）
          color: '#90B6D2',
        },
        axisTick: {
          show: false,
        },
      }
      let xlineConfig = props.chartOptions.xAxis.type === "value" ? valueLineConfig : categoryLineConfig;
      let ylineConfig = props.chartOptions.xAxis.type === "value" ? categoryLineConfig : valueLineConfig

      let initY = {
        type: 'value',
        nameGap: 20,
        splitLine: {
          show: false
        },
        ...ylineConfig
      };
      // 系列
      let newSeries: any[] = [];
      series = series ?? [];
      (series || []).forEach(serie => {
        let oneSerie = cloneDeep(serieStyle[serie.type]);
        objectAssignFn(serie, oneSerie);
        newSeries.push(oneSerie);
      });
      // y轴
      let newYAxis: object[] = [];
      (yAxis || []).forEach((y, index) => {
        let oneY = cloneDeep(initY);
        if (index > 0 && oneY.splitLine) {
          oneY.splitLine.show = false;
        }
        objectAssignFn(y, oneY);
        newYAxis.push(oneY);
      });
      // 图表option
      let option = {
        legend: {
          show: true,
          top: '2%',
          right: '3%',
          icon: 'rect',
          itemWidth: 34,
          itemHeight: 4,
          itemGap: 16,
          textStyle: {
            color: '#fff',
          },
        },
        tooltip: {
          show: true,
          trigger: 'axis',
          borderColor: '#278BFF',
          borderWidth: 1,
          backgroundColor: '#07266C',
          formatter: function (params) {
            let str =
              "<div style='width: 100%; font-size: 14px;font-weight: bold;color: #fff;'>" +
              params[0].name +
              '</div>';
            params.forEach((one, index) => {
              str +=
                "<div style='width: 100%;margin-top: vh(6);font-size: 12px;color: #6CD0FF'>" +
                one.seriesName +
                "：<span style='margin-left: 8px;font-size: 14px;color: #FFFFFF;'> " +
                one.value +
                (series[index]?.unit ?? '') +
                '</span>' +
                '</div>';
            });
            return str;
          },
        },
        xAxis: {
          type: 'category',
          data: [],
          ...xlineConfig
        },
        yAxis: newYAxis,
        grid: {
          top: '15%',
          left: '2%',
          right: '3%',
          bottom: '1%',
          containLabel: true,
        },
        series: newSeries,
      };
      return option;
    };
    const newChartOptions = computed(() => {
      let yAxis = cloneDeep(props.chartOptions.yAxis || []);
      let series = cloneDeep(props.chartOptions.series || []);
      if (!Array.isArray(yAxis)) {
        yAxis = [yAxis];
      }
      if (!Array.isArray(series)) {
        series = [series];
      }
      // 
      let option = getDefaultOptions(yAxis, series);
      let _chartOptions = omit(props.chartOptions, ['yAxis', 'series']);
      objectAssignFn(_chartOptions, option);
      return option;
    });
    const objectAssignFn = (originObj, targetObj) => {
      // 不可以直接 Object.assign(targetObj,originObj),不然对象里面的对象会进行覆盖，更深层次的对象目前不考虑
      for (let key in originObj) {
        if (targetObj[key] && originObj[key] && typeof targetObj[key] === 'object') {
          targetObj[key] = Object.assign(targetObj[key], originObj[key]);
        } else {
          targetObj[key] = originObj[key];
        }
      }
    };
    let chartRef: any = null;
    let myChart: any = shallowRef(null);
    expose({ chart: myChart })
    let myChartResizeObserver: any = null;
    const initSetChart = () => {
      chartRef = instance.refs.chartRef;
      myChart.value = echarts.init(chartRef);
      myChart.value.setOption(newChartOptions.value);
      let autoShowTip = () => {
        if (props.autoShowToolTip) {
          initTimer();
        }
      };
      let stopShowTip = () => {
        clearInterval(timers);
      };
      // 鼠标悬浮上去时自动轮播停止
      if (props.hoverStopShowTip) {
        let zRender = myChart.value.getZr();
        myChart.value.on('mouseover', function () {
          stopShowTip();
        });
        myChart.value.on('mouseout', function () {
          autoShowTip();
        });
        zRender.on('mousemove', () => {
          stopShowTip();
        });
        zRender.on('globalout', () => {
          autoShowTip();
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
      if (newChartOptions.value.xAxis.type === "value") {
        // @ts-ignore 
        pos.value = newChartOptions.value.yAxis[0]?.data.length || -1;
      } else {
        pos.value = -1;
      }

      if (timers) {
        clearInterval(timers);
      }
      const intervalDo = () => {
        let dataLen = 0;
        if (newChartOptions.value.xAxis.type === "value") {
          // @ts-ignore 
          dataLen = newChartOptions.value.yAxis[0]?.data.length || 0;
        } else {
          dataLen = newChartOptions.value.xAxis?.data.length || 0;
        }
        myChart.value.dispatchAction({
          type: 'downplay',
          seriesIndex: 0,
          dataIndex: pos.value,
        });
        if (newChartOptions.value.xAxis.type === "value") {
          pos.value--;
          if (pos.value < 0) {
            pos.value = dataLen - 1;
          }
        } else {
          pos.value++;
          if (pos.value > dataLen - 1) {
            pos.value = 0;
          }
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
      () => props.chartOptions,
      () => {
        myChart.value.setOption(newChartOptions.value, true);
        if (props.autoShowToolTip) {
          initTimer();
        }
      }
    );


    return () => (<div class="lsq-bar-line-chart" ref="chartRef"></div>)
  }
})
