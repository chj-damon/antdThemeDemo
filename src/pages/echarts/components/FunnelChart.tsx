import { useThemeMode } from "antd-style";
import ReactECharts from "echarts-for-react";
import { Card } from "antd";

export default () => {
  const { isDarkMode } = useThemeMode();
  const theme = isDarkMode ? "td-dark" : "td-light";

  const option = {
    title: {
      text: "Funnel",
    },
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b} : {c}%",
    },
    toolbox: {
      feature: {
        dataView: { readOnly: false },
        restore: {},
        saveAsImage: {},
      },
    },
    legend: {
      data: ["Show", "Click", "Visit", "Inquiry", "Order"],
    },
    series: [
      {
        name: "Funnel",
        type: "funnel",
        left: "10%",
        top: 60,
        bottom: 60,
        width: "80%",
        min: 0,
        max: 100,
        minSize: "0%",
        maxSize: "100%",
        sort: "descending",
        gap: 2,
        label: {
          show: true,
          position: "inside",
        },
        emphasis: {
          label: {
            fontSize: 20,
          },
        },
        data: [
          { value: 60, name: "Visit" },
          { value: 40, name: "Inquiry" },
          { value: 20, name: "Order" },
          { value: 80, name: "Click" },
          { value: 100, name: "Show" },
        ],
      },
    ],
  };

  return (
    <Card title="FunnelChart">
      <ReactECharts
        option={option}
        notMerge={true}
        lazyUpdate={true}
        theme={theme}
      />
    </Card>
  );
};
