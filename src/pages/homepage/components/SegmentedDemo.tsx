import { Card, Segmented } from "antd";

export default () => (
  <Card title="Segmented">
    <Segmented
      options={["Daily", "Weekly", "Monthly", "Quarterly", "Yearly"]}
    />
  </Card>
);