import { Card, Steps } from "antd";

const description = "This is a description.";

export default () => (
  <Card title="Steps">
    <Steps
      current={1}
      items={[
        {
          title: "Finished",
          description,
        },
        {
          title: "In Progress",
          description,
          subTitle: "Left 00:00:08",
        },
        {
          title: "Waiting",
          description,
        },
      ]}
    />
  </Card>
);
