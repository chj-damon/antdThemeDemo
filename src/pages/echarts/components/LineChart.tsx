import { useThemeMode } from "antd-style";
import ReactECharts from "echarts-for-react";
import { Card } from "antd";

export default () => {
  const { isDarkMode } = useThemeMode();
  const theme = isDarkMode ? "td-dark" : "td-light";

  const option = {
    tooltip: {
      trigger: 'axis'
    },
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [150, 230, 224, 218, 135, 147, 260],
        type: "line",
      },
    ],
  };

  return (
    <Card title="LineChart">
      <ReactECharts
        option={option}
        notMerge={true}
        lazyUpdate={true}
        theme={theme}
      />
    </Card>
  );
};
