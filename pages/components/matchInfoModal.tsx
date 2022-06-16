import React from "react";
import "antd/dist/antd.css";
import { Button, Form, Input, Modal, PageHeader, Select } from "antd";
const { Option } = Select;

interface MatchModalProps {
  isModalVisible: boolean;
  handleOk: any;
}

const MatchInfoModal: React.FC<MatchModalProps> = ({
  isModalVisible,
  handleOk,
}) => {
  const [form] = Form.useForm();

  return (
    <Modal title="Match Information" visible={isModalVisible} onOk={handleOk}>
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
