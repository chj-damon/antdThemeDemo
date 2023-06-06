import { Card, TreeSelect } from "antd";

const treeData = [
  {
    value: "parent 1",
    title: "parent 1",
    children: [
      {
        value: "parent 1-0",
        title: "parent 1-0",
        children: [
          {
            value: "leaf1",
            title: "leaf1",
          },
          {
            value: "leaf2",
            title: "leaf2",
          },
        ],
      },
      {
        value: "parent 1-1",
        title: "parent 1-1",
        children: [
          {
            value: "leaf3",
            title: <b style={{ color: "#08c" }}>leaf3</b>,
          },
        ],
      },
    ],
  },
];

export default () => (
  <Card title="TreeSelect">
    <TreeSelect
      showSearch
      style={{ width: "100%" }}
      dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
      placeholder="Please select"
      allowClear
      treeDefaultExpandAll
      treeData={treeData}
    />
  </Card>
);
