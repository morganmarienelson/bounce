import React, { useState } from "react";
import "antd/dist/antd.css";
import { Form, Modal, Radio, Switch } from "antd";

interface WinningModalProps {
  isWinningModalVisible: boolean;
  handleOkWinningModal: () => void;
  handleCancelModal: () => void;
}

const WinningModal: React.FC<WinningModalProps> = ({
  isWinningModalVisible,
  handleOkWinningModal,
  handleCancelModal,
}) => {
  const [overhead, disableOverhead] = useState(true);
  const onSwitchClicked = (checked: boolean) => {
    if (checked) {
      disableOverhead(false);
    } else {
      disableOverhead(true);
    }
  };

  return (
    <Modal
      title="Point Break Down"
      visible={isWinningModalVisible}
      onOk={handleOkWinningModal}
      onCancel={handleCancelModal}
      destroyOnClose={true}
    >
      <Form name="Match Information" scrollToFirstError style={{ margin: 20 }}>
        <Form.Item label="Winner" valuePropName="checked">
          <Switch />
        </Form.Item>
        <Form.Item label="At Net" valuePropName="checked">
          <Switch onChange={onSwitchClicked} />
        </Form.Item>
        <Form.Item label="Shot Type">
          <Radio.Group>
            <Radio value="forehand"> Forehand </Radio>
            <Radio value="backhand">Backhand</Radio>
            <Radio value="overhead" defaultChecked={false} disabled={overhead}>
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
