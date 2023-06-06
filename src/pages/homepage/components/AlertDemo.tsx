import { Alert, Card, Space } from "antd";

export default () => (
  <Card title="Alert">
    <Space direction="vertical" style={{ width: "100%" }}>
      <Alert message="Success Text" type="success" />
      <Alert message="Info Text" type="info" />
      <Alert message="Warning Text" type="warning" />
      <Alert message="Error Text" type="error" />
    </Space>
  </Card>
);