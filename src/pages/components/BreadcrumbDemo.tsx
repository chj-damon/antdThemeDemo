import { Card, Breadcrumb } from "antd";

export default () => (
  <Card title="Breadcrumb">
    <Breadcrumb
      items={[
        {
          title: "Home",
        },
        {
          title: <a href="">Application Center</a>,
        },
        {
          title: <a href="">Application List</a>,
        },
        {
          title: "An Application",
        },
      ]}
    />
  </Card>
);