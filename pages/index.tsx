import React from "react";
import {
  Button,
  Cascader,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Switch,
  TreeSelect,
} from "antd";
import { useState } from "react";
const { Option } = Select;

const App = () => {
  const [form] = Form.useForm();

  const formItemLayout = {
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 8,
      },
    },
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 16,
      },
    },
  };

  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  };

  return (
    <Form
      {...formItemLayout}
      form={form}
      name="Match Information"
      scrollToFirstError
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
        label="Who is ServingFirst?"
        rules={[
          {
            required: true,
            message: "Please select a player!",
          },
        ]}
      >
        <Select placeholder="select your gender">
          <Option value="player">Player</Option>
          <Option value="opponent">Opponent</Option>
        </Select>
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default App;
