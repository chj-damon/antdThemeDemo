import { Card, Tabs, TabsProps } from "antd";

const items: TabsProps['items'] = [
  {
    key: '1',
    label: `Tab 1`,
    children: `Content of Tab Pane 1`,
  },
  {
    key: '2',
    label: `Tab 2`,
    children: `Content of Tab Pane 2`,
  },
  {
    key: '3',
    label: `Tab 3`,
    children: `Content of Tab Pane 3`,
  },
];

export default () => (
  <Card title="Tabs">
    <Tabs defaultActiveKey="1" items={items} />
  </Card>
);