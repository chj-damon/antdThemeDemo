import { Card, Pagination } from "antd";

export default () => (
  <Card title="Pagination">
    <Pagination showSizeChanger defaultCurrent={3} total={500} />
    <br />
    <Pagination showSizeChanger defaultCurrent={3} total={500} disabled />
  </Card>
);