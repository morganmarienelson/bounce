import React from "react";
import "antd/dist/antd.css";
import { Form, Input, Modal, Select } from "antd";
const { Option } = Select;

interface MatchModalProps {
  isStartModalVisible: boolean;
  handleOkStartModal: any;
}

const MatchInfoModal: React.FC<MatchModalProps> = ({
  isStartModalVisible,
  handleOkStartModal,
}) => {
  const [form] = Form.useForm();

  return (
    //TODO: handle oncancel of modal
    <Modal
      title="Match Information"
      visible={isStartModalVisible}
      onOk={handleOkStartModal}
    >
      <Form
        form={form}
        name="Match Information"
        scrollToFirstError
        style={{ margin: 20 }}
      >
        <Form.Item
          name="playerName"
          label="Player's Name"
          rules={[
            {
              required: true,
              message: "Please input the player's name!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="opponentName"
          label="Opponent's Name"
          rules={[
            {
              required: true,
              message: "Please input the opponent's name!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="serving"
          label="Serving First"
          rules={[
            {
              required: true,
              message: "Please select a player!",
            },
          ]}
        >
          <Select placeholder="Select Player">
            <Option value="player">Player</Option>
            <Option value="opponent">Opponent</Option>
          </Select>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default MatchInfoModal;
