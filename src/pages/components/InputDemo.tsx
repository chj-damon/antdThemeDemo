import { SettingOutlined } from "@ant-design/icons";
import { Card, Cascader, Input, Select, Space } from "antd";
const { Option } = Select;

const selectBefore = (
  <Select defaultValue="http://">
    <Option value="http://">http://</Option>
    <Option value="https://">https://</Option>
  </Select>
);
const selectAfter = (
  <Select defaultValue=".com">
    <Option value=".com">.com</Option>
    <Option value=".jp">.jp</Option>
    <Option value=".cn">.cn</Option>
    <Option value=".org">.org</Option>
  </Select>
);
export default () => (
  <Card title="Input">
    <Space direction="vertical">
      <Input addonBefore="http://" addonAfter=".com" defaultValue="mysite" />
      <Input
        addonBefore={selectBefore}
        addonAfter={selectAfter}
        defaultValue="mysite"
      />
      <Input addonAfter={<SettingOutlined />} defaultValue="mysite" />
      <Input addonBefore="http://" suffix=".com" defaultValue="mysite" />
      <Input
        addonBefore={<Cascader placeholder="cascader" style={{ width: 150 }} />}
        defaultValue="mysite"
      />
    </Space>
  </Card>
);
