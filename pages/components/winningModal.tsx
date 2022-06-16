import React from "react";
import "antd/dist/antd.css";
import { Form, Input, Modal, Radio, Select, Switch } from "antd";
const { Option } = Select;

interface WinningModalProps {
  isWinningModalVisible: boolean;
  handleOkWinningModal: any;
}

const WinningModal: React.FC<WinningModalProps> = ({
  isWinningModalVisible,
  handleOkWinningModal,
}) => {
  return (
    //TODO: handle oncancel of modal
    <Modal
      title="Point Break Down"
      visible={isWinningModalVisible}
      onOk={handleOkWinningModal}
    >
      <Form name="Match Information" scrollToFirstError style={{ margin: 20 }}>
        <Form.Item label="Winner" valuePropName="checked">
          <Switch />
        </Form.Item>
        <Form.Item label="At Net" valuePropName="checked">
          <Switch />
        </Form.Item>
        <Form.Item label="Shot Type">
          <Radio.Group>
            <Radio value="forehand"> Forehand </Radio>
            <Radio value="backhand">Backhand</Radio>
            <Radio value="backhand" disabled={true}>
              Overhead
            </Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Location">
          <Radio.Group>
            <Radio value="crossCourt"> Cross Court </Radio>
            <Radio value="downLine">Down the Line</Radio>
            <Radio value="middle">Middle</Radio>
          </Radio.Group>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default WinningModal;
