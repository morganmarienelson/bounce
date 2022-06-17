import React from "react";
import "antd/dist/antd.css";
import { Form, Input, Modal, Radio, Select, Switch } from "antd";

interface LosingModalProps {
  isLosingModalVisible: boolean;
  handleOkLosingModal: any;
}

const LosingModal: React.FC<LosingModalProps> = ({
  isLosingModalVisible,
  handleOkLosingModal,
}) => {
  return (
    //TODO: handle oncancel of modal
    //TODO: Clear all fields on commit
    <Modal
      title="Point Break Down"
      visible={isLosingModalVisible}
      onOk={handleOkLosingModal}
    >
      <Form name="Match Information" scrollToFirstError style={{ margin: 20 }}>
        <Form.Item label="Missed Return" valuePropName="checked">
          <Switch />
        </Form.Item>
        {/* disable missesd return field */}
        <Form.Item label="At Net" valuePropName="checked">
          <Switch />
        </Form.Item>
        <Form.Item label="Unforced Error" valuePropName="checked">
          <Switch />
        </Form.Item>
        <Form.Item label="Shot Type">
          <Radio.Group>
            <Radio value="forehand"> Forehand </Radio>
            <Radio value="backhand">Backhand</Radio>
            <Radio value="backhand">Overhead</Radio>
          </Radio.Group>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default LosingModal;
