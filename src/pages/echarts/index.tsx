import { Space } from "antd";
import LineChart from "./components/LineChart";
import BarChart from "./components/BarChart";
import PieChart from "./components/PieChart";
import ScatterChart from "./components/ScatterChart";
import CandlestickChart from "./components/CandlestickChart";
import RadarChart from "./components/RadarChart";
import BoxplotChart from "./components/BoxplotChart";
import HeatmapChart from "./components/HeatmapChart";
import GraphChart from "./components/GraphChart";
import SunburstChart from "./components/SunburstChart";
import SankeyChart from "./components/SankeyChart";
import FunnelChart from "./components/FunnelChart";
import GaugeChart from "./components/GaugeChart";
import ThemeRiverChart from "./components/ThemeRiverChart";

export default () => {

  return (
    <Space direction="vertical" style={{display: 'flex'}}>
      <LineChart />
      <BarChart />
      <PieChart />
      <ScatterChart />
      <CandlestickChart />
      <RadarChart />
      <BoxplotChart />
      <HeatmapChart />
      <GraphChart />
      <SunburstChart />
      <SankeyChart />
      <FunnelChart />
      <GaugeChart />
      <ThemeRiverChart />
    </Space>
  );
};
