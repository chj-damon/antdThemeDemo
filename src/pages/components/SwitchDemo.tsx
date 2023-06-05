import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import { Card, Space, Switch } from "antd";

export default () => (
  <Card title="Switch">
    <Space direction="vertical">
      <Switch checkedChildren="开启" unCheckedChildren="关闭" defaultChecked />
      <Switch checkedChildren="1" unCheckedChildren="0" />
      <Switch
        checkedChildren={<CheckOutlined />}
        unCheckedChildren={<CloseOutlined />}
        defaultChecked
      />
    </Space>
  </Card>
);
