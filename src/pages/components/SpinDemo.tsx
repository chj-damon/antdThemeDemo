import { Alert, Card, Space, Spin } from "antd";

export default () => (
  <Card title="Spin">
    <Spin tip="Loading...">
      <Alert
        message="Alert message title"
        description="Further details about the context of this alert."
        type="info"
      />
    </Spin>
  </Card>
);