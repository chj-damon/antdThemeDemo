import { useThemeMode } from "antd-style";
import ReactECharts from "echarts-for-react";
import { Card } from "antd";

export default () => {
  const { isDarkMode } = useThemeMode();
  const theme = isDarkMode ? "td-dark" : "td-light";

  const option = {
    tooltip: {
      formatter: "{a} <br/>{b} : {c}%",
    },
    series: [
      {
        name: "Pressure",
        type: "gauge",
        progress: {
          show: true,
        },
        detail: {
          valueAnimation: true,
          formatter: "{value}",
        },
        data: [
          {
            value: 50,
            name: "SCORE",
          },
        ],
      },
    ],
  };

  return (
    <Card title="GaugeChart">
      <ReactECharts
        option={option}
        notMerge={true}
        lazyUpdate={true}
        theme={theme}
      />
    </Card>
  );
};
