import { Card, Checkbox } from "antd";

const plainOptions = ["Apple", "Pear", "Orange"];

const options = [
  { label: "Apple", value: "Apple" },
  { label: "Pear", value: "Pear" },
  { label: "Orange", value: "Orange" },
];

const optionsWithDisabled = [
  { label: "Apple", value: "Apple" },
  { label: "Pear", value: "Pear" },
  { label: "Orange", value: "Orange", disabled: false },
];

export default () => (
  <Card title="Checkbox">
    <Checkbox.Group options={plainOptions} defaultValue={["Apple"]} />
    <br />
    <br />
    <Checkbox.Group options={options} defaultValue={["Pear"]} />
    <br />
    <br />
    <Checkbox.Group
      options={optionsWithDisabled}
      disabled
      defaultValue={["Apple"]}
    />
  </Card>
);
