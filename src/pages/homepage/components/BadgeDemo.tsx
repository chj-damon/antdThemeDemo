import { ClockCircleOutlined } from "@ant-design/icons";
import { Avatar, Badge, Card, Space } from "antd";

export default () => (
  <Card title="Badge">
    <Space size="middle">
      <Badge count={5}>
        <Avatar shape="square" size="large" />
      </Badge>
      <Badge count={0} showZero>
        <Avatar shape="square" size="large" />
      </Badge>
      <Badge count={<ClockCircleOutlined style={{ color: "#f5222d" }} />}>
        <Avatar shape="square" size="large" />
      </Badge>
    </Space>
  </Card>
);