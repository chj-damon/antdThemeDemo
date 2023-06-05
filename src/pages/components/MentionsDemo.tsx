import { Card, Mentions } from "antd";

export default () => (
  <Card title="Mentions">
    <Mentions
      style={{ width: "100%" }}
      defaultValue="@afc163"
      options={[
        {
          value: "afc163",
          label: "afc163",
        },
        {
          value: "zombieJ",
          label: "zombieJ",
        },
        {
          value: "yesmeck",
          label: "yesmeck",
        },
      ]}
    />
  </Card>
);