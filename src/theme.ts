export const darkTheme = {
  // 主题色
  color: ["#3fb1e3", "#6be6c1", "#626c91", "#e6a0cc", "#c4ebad", "#96dee8"],
  // 背景色
  backgroundColor: "rgba(26,32,53,1)",
  // 是否暗黑模式
  darkMode: true,
  // 全局的字体样式
  textStyle: {
    color: "#ffffff",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 12,
  },
  // 标题组件，包含主标题和副标题
  title: {
    // 主标题样式
    textStyle: {
      color: "#ffffff",
      fontStyle: "normal",
      fontWeight: "bolder",
      fontSize: 18,
    },
    // 副标题样式
    subtextStyle: {
      color: "#ffffff",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: 12,
    },
  },
  // 折线图
  line: {
    // 折线拐点标志的样式
    itemStyle: {
      borderWidth: 0,
    },
    // 线条样式
    lineStyle: {
      width: 3,
    },
    symbolSize: 8,
    symbol: "emptyCircle",
    smooth: false,
  },
  // 雷达图
  radar: {
    // 折线拐点标志的样式
    itemStyle: {
      borderWidth: 0,
    },
    // 线条样式
    lineStyle: {
      width: 3,
    },
    symbolSize: 8,
    symbol: "emptyCircle",
    smooth: false,
  },
  // 柱图
  bar: {
    itemStyle: {
      borderWidth: 0,
      borderColor: "#ffffff",
    },
  },
  // 饼图
  pie: {
    itemStyle: {
      borderWidth: 0,
      borderColor: "#ffffff",
    },
  },
  // 散点图
  scatter: {
    itemStyle: {
      borderWidth: 0,
      borderColor: "#ffffff",
    },
  },
  // 盒须图
  boxplot: {
    itemStyle: {
      borderWidth: 1,
      borderColor: "#ffffff",
    },
    emphasis: {
      itemStyle: {
        borderWidth: 2,
        borderColor: "#ffffff",
        shadowBlur: 0,
        shadowOffsetX: 0,
        shadowOffsetY: 0,
      },
    },
  },
  // 平行坐标系
  parallel: {
    itemStyle: {
      borderWidth: 0,
      borderColor: "#ffffff",
    },
  },
  // 桑基图
  sankey: {
    // 节点矩形的样式
    itemStyle: {
      borderWidth: 0,
      borderColor: "#ffffff",
    },
    lineStyle: {
      opacity: 0.5,
      curveness: 0.5,
    },
    emphasis: {
      lineStyle: {
        opacity: 0.8,
      },
    },
  },
  // 漏斗图
  funnel: {
    itemStyle: {
      borderWidth: 0,
      borderColor: "#ffffff",
    },
  },
  // 仪表盘
  gauge: {
    itemStyle: {
      borderWidth: 0,
      borderColor: "#ffffff",
    },
  },
  // K线图
  candlestick: {
    itemStyle: {
      color: "#fc0000",
      color0: "#45d96e",
    },
  },
  // 关系图
  graph: {
    itemStyle: {
      borderWidth: 0,
      borderColor: "#ffffff",
    },
    lineStyle: {
      width: 1,
      color: "#ffffff",
    },
    symbolSize: 8,
    symbol: "emptyCircle",
    smooth: false,
    label: {
      color: "#ffffff",
    },
  },
  // 地图
  map: {
    itemStyle: {
      areaColor: "#eeeeee",
      borderColor: "#aaaaaa",
      borderWidth: 0.5,
    },
    label: {
      color: "#ffffff",
    },
    emphasis: {
      itemStyle: {
        areaColor: "rgba(63,177,227,0.25)",
        borderColor: "#3fb1e3",
        borderWidth: 1,
      },
      label: {
        color: "#3fb1e3",
      },
    },
  },
  // 地理坐标系
  geo: {
    itemStyle: {
      areaColor: "#eeeeee",
      borderColor: "#aaaaaa",
      borderWidth: 0.5,
    },
    label: {
      color: "#ffffff",
    },
    emphasis: {
      itemStyle: {
        areaColor: "rgba(63,177,227,0.25)",
        borderColor: "#3fb1e3",
        borderWidth: 1,
      },
      label: {
        color: "#3fb1e3",
      },
    },
  },
  // 坐标系类轴
  categoryAxis: {
    nameTextStyle: {
      color: "rgba(255,255,255,0.65)",
    },
    // 坐标轴轴线相关设置
    axisLine: {
      show: true,
      lineStyle: {
        color: "rgba(255,255,255,0.2)",
      },
    },
    // 坐标轴刻度线相关设置
    axisTick: {
      show: false,
      lineStyle: {
        color: "rgba(255,255,255,0.4)",
      },
    },
    // 坐标轴刻度标签的相关设置
    axisLabel: {
      show: true,
      color: "rgba(255,255,255,0.65)",
    },
    // 坐标轴在 grid 区域中的分隔线
    splitLine: {
      show: true,
      lineStyle: {
        color: ["rgba(255,255,255,0.2)"],
      },
    },
    // 坐标轴在 grid 区域中的分隔区域
    splitArea: {
      show: true,
      areaStyle: {
        color: ["rgba(250,250,250,0.05)", "rgba(200,200,200,0.02)"],
      },
    },
  },
  // 坐标系值轴
  valueAxis: {
    nameTextStyle: {
      color: "rgba(255,255,255,0.65)",
    },
    axisLine: {
      show: true,
      lineStyle: {
        color: "rgba(255,255,255,0.2)",
      },
    },
    axisTick: {
      show: false,
      lineStyle: {
        color: "rgba(255,255,255,0.4)",
      },
    },
    axisLabel: {
      show: true,
      color: "rgba(255,255,255,0.65)",
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: ["rgba(255,255,255,0.2)"],
      },
    },
    splitArea: {
      show: false,
      areaStyle: {
        color: ["rgba(250,250,250,0.05)", "rgba(200,200,200,0.02)"],
      },
    },
  },
  logAxis: {
    nameTextStyle: {
      color: "rgba(255,255,255,0.65)",
    },
    axisLine: {
      show: true,
      lineStyle: {
        color: "rgba(255,255,255,0.2)",
      },
    },
    axisTick: {
      show: false,
      lineStyle: {
        color: "rgba(255,255,255,0.4)",
      },
    },
    axisLabel: {
      show: true,
      color: "rgba(255,255,255,0.65)",
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: ["rgba(255,255,255,0.2)"],
      },
    },
    splitArea: {
      show: false,
      areaStyle: {
        color: ["rgba(250,250,250,0.05)", "rgba(200,200,200,0.02)"],
      },
    },
  },
  timeAxis: {
    nameTextStyle: {
      color: "rgba(255,255,255,0.65)",
    },
    axisLine: {
      show: true,
      lineStyle: {
        color: "rgba(255,255,255,0.2)",
      },
    },
    axisTick: {
      show: false,
      lineStyle: {
        color: "rgba(255,255,255,0.4)",
      },
    },
    axisLabel: {
      show: true,
      color: "rgba(255,255,255,0.65)",
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: ["rgba(255,255,255,0.2)"],
      },
    },
    splitArea: {
      show: false,
      areaStyle: {
        color: ["rgba(250,250,250,0.05)", "rgba(200,200,200,0.02)"],
      },
    },
  },
  // 工具栏
  toolbox: {
    iconStyle: {
      borderColor: "#ffffff",
    },
  },
  // 图例
  legend: {
    itemStyle: {
      borderWidth: 0,
    },
    textStyle: {
      color: "#ffffff",
    },
  },
  // 提示框
  tooltip: {
    // 坐标轴指示器配置项
    axisPointer: {
      lineStyle: {
        color: "rgba(255,255,255,0.4)",
        width: 1,
      },
      crossStyle: {
        color: "rgba(255,255,255,0.4)",
        width: 1,
      },
    },
  },
  // 时间线
  timeline: {
    lineStyle: {
      color: "#ffffff",
      width: 1,
    },
    itemStyle: {
      color: "#ffffff",
      borderWidth: 1,
    },
    controlStyle: {
      color: "#ffffff",
      borderColor: "#ffffff",
      borderWidth: 0.5,
    },
    checkpointStyle: {
      color: "#1890ff",
      borderColor: "#ffffff",
    },
    label: {
      color: "#ffffff",
    },
  },
  // 视觉映射
  visualMap: {
    color: ["#2a99c9", "#84c2dc"],
  },
  // 区域缩放
  dataZoom: {
    backgroundColor: "rgba(255,255,255,0)",
    dataBackgroundColor: "rgba(222,222,222,1)",
    fillerColor: "rgba(114,230,212,0.25)",
    handleColor: "#cccccc",
    handleSize: "100%",
    textStyle: {
      color: "#999999",
    },
  },
  // 图表标注
  markPoint: {
    label: {
      color: "#ffffff",
    },
  },
};

export const lightTheme = {
  color: ["#3fb1e3", "#6be6c1", "#626c91", "#a0a7e6", "#c4ebad", "#96dee8"],
  backgroundColor: "rgba(255,255,255,1)",
  darkMode: false,
  textStyle: {
    color: "#333333",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 12,
  },
  title: {
    textStyle: {
      color: "#333333",
      fontStyle: "normal",
      fontWeight: "bolder",
      fontSize: 18,
    },
    subtextStyle: {
      color: "#666666",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: 12,
    },
  },
  line: {
    itemStyle: {
      borderWidth: 0,
    },
    lineStyle: {
      width: 3,
    },
    symbolSize: 8,
    symbol: "emptyCircle",
    smooth: false,
  },
  radar: {
    itemStyle: {
      borderWidth: 0,
    },
    lineStyle: {
      width: 3,
    },
    symbolSize: 8,
    symbol: "emptyCircle",
    smooth: false,
  },
  bar: {
    itemStyle: {
      borderWidth: 0,
      borderColor: "#cccccc",
    },
  },
  pie: {
    itemStyle: {
      borderWidth: 0,
      borderColor: "#cccccc",
    },
  },
  scatter: {
    itemStyle: {
      borderWidth: 0,
      borderColor: "#cccccc",
    },
  },
  boxplot: {
    itemStyle: {
      borderWidth: 1,
      borderColor: "#333",
    },
    emphasis: {
      itemStyle: {
        borderWidth: 2,
        borderColor: "#333",
        shadowBlur: 0,
        shadowOffsetX: 0,
        shadowOffsetY: 0,
      },
    },
  },
  parallel: {
    itemStyle: {
      borderWidth: 0,
      borderColor: "#cccccc",
    },
  },
  sankey: {
    itemStyle: {
      borderWidth: 0,
      borderColor: "#cccccc",
    },
    lineStyle: {
      opacity: 0.3,
      curveness: 0.5,
    },
    emphasis: {
      lineStyle: {
        opacity: 0.5,
      },
    },
  },
  funnel: {
    itemStyle: {
      borderWidth: 0,
      borderColor: "#cccccc",
    },
  },
  gauge: {
    itemStyle: {
      borderWidth: 0,
      borderColor: "#cccccc",
    },
  },
  candlestick: {
    itemStyle: {
      color: "#fc0000",
      color0: "#45d96e",
    },
  },
  graph: {
    itemStyle: {
      borderWidth: 0,
      borderColor: "#cccccc",
    },
    lineStyle: {
      width: 1,
      color: "#cccccc",
    },
    symbolSize: 8,
    symbol: "emptyCircle",
    smooth: false,
    label: {
      color: "#ffffff",
    },
  },
  map: {
    itemStyle: {
      areaColor: "#eeeeee",
      borderColor: "#aaaaaa",
      borderWidth: 0.5,
    },
    label: {
      color: "#ffffff",
    },
    emphasis: {
      itemStyle: {
        areaColor: "rgba(63,177,227,0.25)",
        borderColor: "#3fb1e3",
        borderWidth: 1,
      },
      label: {
        color: "#3fb1e3",
      },
    },
  },
  geo: {
    itemStyle: {
      areaColor: "#eeeeee",
      borderColor: "#aaaaaa",
      borderWidth: 0.5,
    },
    label: {
      color: "#ffffff",
    },
    emphasis: {
      itemStyle: {
        areaColor: "rgba(63,177,227,0.25)",
        borderColor: "#3fb1e3",
        borderWidth: 1,
      },
      label: {
        color: "#3fb1e3",
      },
    },
  },
  categoryAxis: {
    nameTextStyle: {
      color: "#666",
    },
    axisLine: {
      show: true,
      lineStyle: {
        color: "#cccccc",
      },
    },
    axisTick: {
      show: false,
      lineStyle: {
        color: "#333",
      },
    },
    axisLabel: {
      show: true,
      color: "#666",
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: ["#eeeeee"],
      },
    },
    splitArea: {
      show: true,
      areaStyle: {
        color: ["rgba(250,250,250,0.05)", "rgba(200,200,200,0.02)"],
      },
    },
  },
  valueAxis: {
    nameTextStyle: {
      color: "#666",
    },
    axisLine: {
      show: true,
      lineStyle: {
        color: "#cccccc",
      },
    },
    axisTick: {
      show: false,
      lineStyle: {
        color: "#333",
      },
    },
    axisLabel: {
      show: true,
      color: "#666",
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: ["#eeeeee"],
      },
    },
    splitArea: {
      show: false,
      areaStyle: {
        color: ["rgba(250,250,250,0.05)", "rgba(200,200,200,0.02)"],
      },
    },
  },
  logAxis: {
    nameTextStyle: {
      color: "#666",
    },
    axisLine: {
      show: true,
      lineStyle: {
        color: "#cccccc",
      },
    },
    axisTick: {
      show: false,
      lineStyle: {
        color: "#333",
      },
    },
    axisLabel: {
      show: true,
      color: "#666",
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: ["#eeeeee"],
      },
    },
    splitArea: {
      show: false,
      areaStyle: {
        color: ["rgba(250,250,250,0.05)", "rgba(200,200,200,0.02)"],
      },
    },
  },
  timeAxis: {
    nameTextStyle: {
      color: "#666",
    },
    axisLine: {
      show: true,
      lineStyle: {
        color: "#cccccc",
      },
    },
    axisTick: {
      show: false,
      lineStyle: {
        color: "#333",
      },
    },
    axisLabel: {
      show: true,
      color: "#666",
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: ["#eeeeee"],
      },
    },
    splitArea: {
      show: false,
      areaStyle: {
        color: ["rgba(250,250,250,0.05)", "rgba(200,200,200,0.02)"],
      },
    },
  },
  toolbox: {
    iconStyle: {
      borderColor: "#666",
    },
  },
  legend: {
    itemStyle: {
      borderWidth: 0,
    },
    textStyle: {
      color: "#666",
    },
  },
  tooltip: {
    axisPointer: {
      lineStyle: {
        color: "#cccccc",
        width: 1,
      },
      crossStyle: {
        color: "#cccccc",
        width: 1,
      },
    },
  },
  timeline: {
    lineStyle: {
      color: "#999999",
      width: 1,
    },
    itemStyle: {
      color: "#999999",
      borderWidth: 1,
    },
    controlStyle: {
      color: "#666666",
      borderColor: "#666666",
      borderWidth: 0.5,
    },
    checkpointStyle: {
      color: "#1890ff",
      borderColor: "#3fb1e3",
    },
    label: {
      color: "#626c91",
    },
    emphasis: {
      itemStyle: {
        color: "#666666",
      },
      controlStyle: {
        color: "#666666",
        borderColor: "#666666",
        borderWidth: 0.5,
      },
      label: {
        color: "#626c91",
      },
    },
  },
  visualMap: {
    color: ["#2a99c9", "#afe8ff"],
  },
  dataZoom: {
    backgroundColor: "rgba(255,255,255,0)",
    dataBackgroundColor: "rgba(222,222,222,1)",
    fillerColor: "rgba(114,230,212,0.25)",
    handleColor: "#cccccc",
    handleSize: "100%",
    textStyle: {
      color: "#666",
    },
  },
  markPoint: {
    label: {
      color: "#ffffff",
    },
  },
};
