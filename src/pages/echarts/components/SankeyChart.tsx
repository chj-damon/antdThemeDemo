import { useThemeMode } from "antd-style";
import ReactECharts from "echarts-for-react";
import { Card } from "antd";

export default () => {
  const { isDarkMode } = useThemeMode();
  const theme = isDarkMode ? "td-dark" : "td-light";

  const option = {
    series: {
      type: "sankey",
      layout: "none",
      emphasis: {
        focus: "adjacency",
      },
      data: [
        {
          name: "a",
        },
        {
          name: "b",
        },
        {
          name: "a1",
        },
        {
          name: "a2",
        },
        {
          name: "b1",
        },
        {
          name: "c",
        },
      ],
      links: [
        {
          source: "a",
          target: "a1",
          value: 5,
        },
        {
          source: "a",
          target: "a2",
          value: 3,
        },
        {
          source: "b",
          target: "b1",
          value: 8,
        },
        {
          source: "a",
          target: "b1",
          value: 3,
        },
        {
          source: "b1",
          target: "a1",
          value: 1,
        },
        {
          source: "b1",
          target: "c",
          value: 2,
        },
      ],
    },
  };

  return (
    <Card title="SankeyChart">
      <ReactECharts
        option={option}
        notMerge={true}
        lazyUpdate={true}
        theme={theme}
      />
    </Card>
  );
};
