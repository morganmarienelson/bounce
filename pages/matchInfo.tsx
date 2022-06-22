import React, { useState } from "react";
import "antd/dist/antd.css";
import { Form, Input, PageHeader, Radio, Select } from "antd";
const { Option } = Select;
import { SettingsOption, Close } from "grommet-icons";
import { Box, Heading, Layer, Button } from "grommet/components";

const MatchInfo = () => {
  const [form] = Form.useForm();
  const [open, setOpen] = useState(true);

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <>
      <Box fill align="end" justify="end">
        <Button icon={<SettingsOption />} label="Settings" onClick={onOpen} />
        {open && (
          <Layer full="vertical" modal onEsc={onClose}>
            <Box
              as="form"
              fill="vertical"
              overflow="auto"
              width="medium"
              pad="medium"
              onSubmit={onClose}
            >
              <Box flex={false} direction="row" justify="between" align="end">
                <Heading level={2} margin="none">
                  Match Info
                </Heading>
                <Button icon={<Close />} onClick={onClose} />
              </Box>
              <Box flex="grow" overflow="auto" pad={{ vertical: "medium" }}>
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
                  <Button
                    type="submit"
                    label="Submit"
                    onClick={onClose}
                    primary
                  ></Button>
                </Form>
              </Box>
            </Box>
          </Layer>
        )}
      </Box>
    </>
  );
};

export default MatchInfo;
