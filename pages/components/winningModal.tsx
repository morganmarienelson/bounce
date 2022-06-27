import React, {useState} from "react";
import "antd/dist/antd.css";
import { Button, Form, Input, Modal, Radio, Select, Switch } from "antd";
const { Option } = Select;

interface WinningModalProps {
  isWinningModalVisible: boolean;
  handleOkWinningModal: any;
  handleCancelModal: () => void;
}

const WinningModal: React.FC<WinningModalProps> = ({
  isWinningModalVisible,
  handleOkWinningModal,
                                                     handleCancelModal,
}) => {
  const [overhead, disableOverhead ] = useState(true);
  const onSwitchClicked = (checked : boolean) => {
    if (checked){
      disableOverhead(false);
    } else {
      disableOverhead(true);
    }

  }

  return (
    //TODO: handle oncancel of modal
    //TODO: make modal data disappear on ok
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
        {/* TODO: disable overhead option unless switch is on */}
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
        <Button
          style={{ width: 200, height: 50, marginRight: 0 }}
          type="primary"
          danger={true}
          onClick={handleOkWinningModal}
        >
          Double Fault
        </Button>
      </Form>
    </Modal>
  );
};

export default WinningModal;
