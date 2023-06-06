import { MenuProps, Card, Space, Dropdown, Button } from "antd";

const items: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        1st menu item
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        2nd menu item
      </a>
    ),
  },
  {
    key: "3",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        3rd menu item
      </a>
    ),
  },
];

export default () => (
  <Card title="Dropdown">
    <Space direction="vertical">
      <Space wrap>
        <Dropdown menu={{ items }} placement="bottomLeft">
          <Button>bottomLeft</Button>
        </Dropdown>
        <Dropdown menu={{ items }} placement="bottom">
          <Button>bottom</Button>
        </Dropdown>
        <Dropdown menu={{ items }} placement="bottomRight">
          <Button>bottomRight</Button>
        </Dropdown>
      </Space>
      <Space wrap>
        <Dropdown menu={{ items }} placement="topLeft">
          <Button>topLeft</Button>
        </Dropdown>
        <Dropdown menu={{ items }} placement="top">
          <Button>top</Button>
        </Dropdown>
        <Dropdown menu={{ items }} placement="topRight">
          <Button>topRight</Button>
        </Dropdown>
      </Space>
    </Space>
  </Card>
);
