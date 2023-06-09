import { Card, Transfer } from "antd";
import { TransferDirection } from "antd/es/transfer";
import { useState } from "react";

interface RecordType {
  key: string;
  title: string;
  description: string;
}

const mockData: RecordType[] = Array.from({ length: 20 }).map((_, i) => ({
  key: i.toString(),
  title: `content${i + 1}`,
  description: `description of content${i + 1}`,
}));

const initialTargetKeys = mockData
  .filter((item) => Number(item.key) > 10)
  .map((item) => item.key);

export default () => {
  const [targetKeys, setTargetKeys] = useState(initialTargetKeys);
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);

  const onChange = (
    nextTargetKeys: string[],
    direction: TransferDirection,
    moveKeys: string[]
  ) => {
    console.log("targetKeys:", nextTargetKeys);
    console.log("direction:", direction);
    console.log("moveKeys:", moveKeys);
    setTargetKeys(nextTargetKeys);
  };

  const onSelectChange = (
    sourceSelectedKeys: string[],
    targetSelectedKeys: string[]
  ) => {
    console.log("sourceSelectedKeys:", sourceSelectedKeys);
    console.log("targetSelectedKeys:", targetSelectedKeys);
    setSelectedKeys([...sourceSelectedKeys, ...targetSelectedKeys]);
  };

  const onScroll = (
    direction: TransferDirection,
    e: React.SyntheticEvent<HTMLUListElement>
  ) => {
    console.log("direction:", direction);
    console.log("target:", e.target);
  };

  return (
    <Card title="Transfer">
      <Transfer
        dataSource={mockData}
        titles={["Source", "Target"]}
        targetKeys={targetKeys}
        selectedKeys={selectedKeys}
        onChange={onChange}
        onSelectChange={onSelectChange}
        onScroll={onScroll}
        render={(item) => item.title}
      />
    </Card>
  );
};
