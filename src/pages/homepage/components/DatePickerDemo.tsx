import { Card, DatePicker, Space, TimePicker } from "antd";
const { RangePicker } = DatePicker;


export default () => (
  <Card title="DatePicker">
    <Space direction="vertical">
      <DatePicker />
      <RangePicker />
      <TimePicker />
      <DatePicker picker="date" />
      <DatePicker picker="week" />
      <DatePicker picker="month" />
      <DatePicker picker="quarter" />
      <DatePicker picker="year" />
    </Space>
  </Card>
);
