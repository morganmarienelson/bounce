import React, { useState } from "react";
import "antd/dist/antd.css";
import { Button, Form, Input, PageHeader, Radio, Select } from "antd";
import Link from "next/link";
const { Option } = Select;

const MatchInfo = () => {
  const [form] = Form.useForm();
  var playerName = "";
  var opponentName = "";

  return (
    <>
      <PageHeader className="site-page-header" title="Match Information" />
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
          <Input value={playerName} />
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
          <Input value={opponentName} />
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
        <Form.Item
          name="Match Scoring"
          label="Match Scoring"
          rules={[
            {
              required: true,
              message: "Please input how the match will be scored!",
            },
          ]}
        >
          <Select
            style={{
              width: 120,
            }}
          >
            <Option value="3">3 Sets</Option>
            <Option value="5">5 Sets</Option>
            <Option value="8">8 Game Pro Set</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="courtType"
          label="Type of Surface"
          rules={[
            {
              required: true,
              message: "Please input the type of surface!",
            },
          ]}
        >
          <Select
            defaultValue="Hard"
            style={{
              width: 120,
            }}
          >
            <Option value="hard">Hard</Option>
            <Option value="clay">Clay</Option>
            <Option value="grass">Grass</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="inside"
          label="Outdoors or Indoors"
          rules={[
            {
              required: true,
              message: "Please input where the match will be played",
            },
          ]}
        >
          <Radio.Group>
            <Radio value="outdoors">Outdoors</Radio>
            <Radio value="indoors">Indoors</Radio>
          </Radio.Group>
        </Form.Item>
        <Button type="primary" htmlType="submit">
          <Link href={"/matchOverview"}>Submit</Link>
        </Button>
      </Form>
    </>
  );
};

export default MatchInfo;
