import React, { useState } from "react";
import "antd/dist/antd.css";
import { Form, Modal, Radio, Switch } from "antd";

interface LostPointModalProps {
  losingModalVisible: boolean;
  setLosingModalVisible: (losingModalVisible: boolean) => void;
  pointFinished: () => void;
  onModalCancel: () => void;
}

const LostPointModal: React.FC<LostPointModalProps> = ({
  losingModalVisible,
  setLosingModalVisible,
  pointFinished,
  onModalCancel,
}) => {
  const [overhead, disableOverhead] = useState(true);
  const onSwitchClicked = (checked: boolean) => {
    if (checked) {
      disableOverhead(false);
    } else {
      disableOverhead(true);
    }
  };

  const onModalOk = () => {
    setLosingModalVisible(false);
    pointFinished();
  };

  return (
    <>
      <Modal
        visible={losingModalVisible}
        onCancel={onModalCancel}
        onOk={onModalOk}
        title="Losing Point Information"
        destroyOnClose={true}
      >
        <Form
          name="Match Information"
          scrollToFirstError
          style={{ margin: 20 }}
        >
          <Form.Item label="Unforced Error" valuePropName="checked">
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
        </Form>
      </Modal>
    </>
  );
};

export default LostPointModal;
