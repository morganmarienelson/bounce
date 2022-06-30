import React, { useState } from "react";
import "antd/dist/antd.css";
import { DatePicker, Form, Input, Modal, Radio, Select } from "antd";
import { TextArea } from "grommet";

interface SaveMatchInfoModalProps {
  showSaveMatchModal: boolean;
  setShowSaveMatchModal: (saveMatchModal: boolean) => void;
  setSavedData: (savedData: boolean) => void;
}

const SaveMatchInfoModal: React.FC<SaveMatchInfoModalProps> = ({
  showSaveMatchModal,
  setShowSaveMatchModal,
  setSavedData,
}) => {
  const onModalOk = () => {
    setShowSaveMatchModal(false);
    setSavedData(true);
  };

  const onModalCancel = () => {
    setShowSaveMatchModal(false);
  };

  return (
    <Modal
      title="Match Information"
      destroyOnClose={true}
      visible={showSaveMatchModal}
      onOk={onModalOk}
      onCancel={onModalCancel}
    >
      <Form name="Match Information" style={{ margin: 20 }}>
        <Form.Item label="Player's Name">
          <Input />
        </Form.Item>
        <Form.Item label="Opponent's Name">
          <Input />
        </Form.Item>
        <Form.Item label="DatePicker">
          <DatePicker />
        </Form.Item>
        <Form.Item label="Location">
          <Input />
        </Form.Item>
        <Form.Item label="Setting">
          <Radio.Group>
            <Radio value="indoors"> Indoors </Radio>
            <Radio value="outdoors"> Outdoors </Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Court Type">
          <Select>
            <Select.Option value="Hard">Hard</Select.Option>
            <Select.Option value="Clay">Clay</Select.Option>
            <Select.Option value="Grass">Grass</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Notes">
          <TextArea rows={4} />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default SaveMatchInfoModal;
