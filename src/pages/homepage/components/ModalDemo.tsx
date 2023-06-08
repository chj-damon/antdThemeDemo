import { App, Button, Card, Modal } from "antd";
import { useState } from "react";

export default () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { modal } = App.useApp();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const showModal1 = () => {
    modal.info({
      title: "This is a notification message",
      content: (
        <div>
          <p>some messages...some messages...</p>
          <p>some messages...some messages...</p>
        </div>
      ),
      onOk() {},
    });
  }
  const showModal2 = () => {
    modal.success({
      content: "some messages...some messages...",
    });
  }
  const showModal3 = () => {
    modal.error({
      title: "This is an error message",
      content: "some messages...some messages...",
    });
  }
  const showModal4 = () => {
    modal.warning({
      title: "This is a warning message",
      content: "some messages...some messages...",
    });
  }
  const showModal5 = () => {
    modal.confirm({
      content: <Button>Click to destroy all</Button>,
      onOk() {
        console.log("OK");
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  }

  return (
    <Card title="Modal">
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Button type="primary" onClick={showModal1}>
        Modal Info
      </Button>
      <Button type="primary" onClick={showModal2}>
        Modal Success
      </Button>
      <Button type="primary" onClick={showModal3}>
        Modal Error
      </Button>
      <Button type="primary" onClick={showModal4}>
        Modal Warning
      </Button>
      <Button type="primary" onClick={showModal5}>
        Modal Confirm
      </Button>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </Card>
  );
};