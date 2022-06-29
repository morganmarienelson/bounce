import React, { useState } from "react";
import "antd/dist/antd.css";
import { Form, message, Modal, Radio, Switch } from "antd";

interface WonPointModalProps {
  winningModalVisible: boolean;
  setWinningModalVisible: (winningModalVisible: boolean) => void;
  setShowPointOutcomeModal: (showPointOutcomeModal: boolean) => void;
}

const WonPointModal: React.FC<WonPointModalProps> = ({
  winningModalVisible,
  setWinningModalVisible,
  setShowPointOutcomeModal,
}) => {
  const [overhead, disableOverhead] = useState(true);
  const onSwitchClicked = (checked: boolean) => {
    if (checked) {
      disableOverhead(false);
    } else {
      disableOverhead(true);
    }
  };

  const onModalCancel = () => {
    setWinningModalVisible(false);
    setShowPointOutcomeModal(true);
  };

  const onModalOk = () => {
    setWinningModalVisible(false);
  };

  return (
    <>
      <Modal
        visible={winningModalVisible}
        onCancel={onModalCancel}
        destroyOnClose={true}
        onOk={onModalOk}
      >
        <Form name="Match Information" style={{ margin: 20 }}>
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
              <Radio
                value="overhead"
                defaultChecked={false}
                disabled={overhead}
              >
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
    </>
  );
};

export default WonPointModal;
