import React, { useState } from "react";
import "antd/dist/antd.css";
import { Button, Form, Modal, Radio, Select, Switch } from "antd";

interface LosingModalProps {
  isLosingModalVisible: boolean;
  handleOkLosingModal: any;
  handleCancelModal: () => void;
}

const LosingModal: React.FC<LosingModalProps> = ({
  isLosingModalVisible,
  handleOkLosingModal,
  handleCancelModal,
}) => {
  const [atNet, disableAtNet] = useState(false);
  const onMissedReturnSwitchClicked = (checked: boolean) => {
    if (checked) {
      disableAtNet(true);
    } else {
      disableAtNet(false);
    }
  };

  return (
    <Modal
      title="Losing Point Break Down"
      visible={isLosingModalVisible}
      onOk={handleOkLosingModal}
      onCancel={handleCancelModal}
      destroyOnClose={true}
    >
      <Form name="Match Information" scrollToFirstError style={{ margin: 20 }}>
        <Form.Item label="Missed Return" valuePropName="checked">
          <Switch onChange={onMissedReturnSwitchClicked} />
        </Form.Item>
        <Form.Item label="At Net" valuePropName="checked">
          <Switch disabled={atNet} />
        </Form.Item>
        <Form.Item label="Unforced Error" valuePropName="checked">
          <Switch />
        </Form.Item>
        <Form.Item label="Shot Type">
          <Radio.Group>
            <Radio value="forehand"> Forehand </Radio>
            <Radio value="backhand">Backhand</Radio>
            <Radio value="overhead">Overhead</Radio>
          </Radio.Group>
        </Form.Item>
        <Button
          style={{ width: 200, height: 50, marginRight: 0 }}
          type="primary"
          danger={true}
          onClick={handleOkLosingModal}
        >
          Double Fault
        </Button>
      </Form>
    </Modal>
  );
};

export default LosingModal;
