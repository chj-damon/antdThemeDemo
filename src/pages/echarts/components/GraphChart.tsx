import { useThemeMode } from "antd-style";
import ReactECharts from "echarts-for-react";
import { Card } from "antd";

const axisData = ["Mon", "Tue", "Wed", "Very Loooong Thu", "Fri", "Sat", "Sun"];
const data = axisData.map(function (item, i) {
  return Math.round(Math.random() * 1000 * (i + 1));
});
const links = data.map(function (item, i) {
  return {
    source: i,
    target: i + 1,
  };
});
links.pop();

export default () => {
  const { isDarkMode } = useThemeMode();
  const theme = isDarkMode ? "td-dark" : "td-light";

  const option = {
    title: {
      text: "Graph on Cartesian",
    },
    tooltip: {},
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: axisData,
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        type: "graph",
        layout: "none",
        coordinateSystem: "cartesian2d",
        symbolSize: 40,
        edgeSymbol: ["circle", "arrow"],
        edgeSymbolSize: [4, 10],
        data: data,
        links: links,
      },
    ],
  };

  return (
    <Card title="GraphChart">
      <ReactECharts
        option={option}
        notMerge={true}
        lazyUpdate={true}
        theme={theme}
      />
    </Card>
  );
};
