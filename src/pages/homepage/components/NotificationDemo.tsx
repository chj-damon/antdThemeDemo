import {
  RadiusUpleftOutlined,
  RadiusUprightOutlined,
  RadiusBottomleftOutlined,
  RadiusBottomrightOutlined,
} from "@ant-design/icons";
import { Button, Card, Divider, Space, notification } from "antd";
import { NotificationPlacement } from "antd/es/notification/interface";
import { createContext, useMemo } from "react";

const Context = createContext({ name: "Default" });

export default () => {
  const [api, contextHolder] = notification.useNotification();

  const openNotification = (placement: NotificationPlacement) => {
    api.info({
      message: `Notification ${placement}`,
      description: (
        <Context.Consumer>{({ name }) => `Hello, ${name}!`}</Context.Consumer>
      ),
      placement,
    });
  };

  const contextValue = useMemo(() => ({ name: "Ant Design" }), []);

  return (
    <Card title="Notification">
      <Context.Provider value={contextValue}>
        {contextHolder}
        <Space>
          <Button
            type="primary"
            onClick={() => openNotification("topLeft")}
            icon={<RadiusUpleftOutlined />}
          >
            topLeft
          </Button>
          <Button
            type="primary"
            onClick={() => openNotification("topRight")}
            icon={<RadiusUprightOutlined />}
          >
            topRight
          </Button>
        </Space>
        <Divider />
        <Space>
          <Button
            type="primary"
            onClick={() => openNotification("bottomLeft")}
            icon={<RadiusBottomleftOutlined />}
          >
            bottomLeft
          </Button>
          <Button
            type="primary"
            onClick={() => openNotification("bottomRight")}
            icon={<RadiusBottomrightOutlined />}
          >
            bottomRight
          </Button>
        </Space>
      </Context.Provider>
    </Card>
  );
};
