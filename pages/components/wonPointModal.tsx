import React, { useState } from "react";
import "antd/dist/antd.css";
import { Col, Form, Modal, Radio, Row, Switch } from "antd";
import styles from "./css/modal.module.css";

interface WonPointModalProps {
  winningModalVisible: boolean;
  setWinningModalVisible: (winningModalVisible: boolean) => void;
  pointFinished: () => void;
  onModalCancel: () => void;
  send: (event: any) => any;
}

const WonPointModal: React.FC<WonPointModalProps> = ({
  winningModalVisible,
  setWinningModalVisible,
  pointFinished,
  onModalCancel,
  send,
}) => {
  const [atBaseline, setAtBaseline] = useState(true);
  const [shotType, setShotType] = useState("");

  const onWinnerSwitch = (checked: boolean) => {
    if (checked) {
      send({ type: "incrementWinners" });
    } else {
      send({ type: "decrementWinners" });
    }
  };

  const onSwitchClicked = (checked: boolean) => {
    if (checked) {
      setAtBaseline(false);
    } else {
      setAtBaseline(true);
    }
  };

  const onShotSelected = (e: any) => {
    setShotType(e.target.value);
  };

  const onModalOk = () => {
    setWinningModalVisible(false);
    pointFinished();
    console.log(atBaseline);
    if (atBaseline) {
      if (shotType == "forehand") {
        send({ type: "incrementForehand" });
      } else if (shotType == "backhand") {
        send({ type: "incrementBackhand" });
      }
    } else {
      if (shotType == "forehand") {
        send({ type: "incrementForehandVolley" });
      } else if (shotType == "backhand") {
        send({ type: "incrementBackhandVolley" });
      } else if (shotType == "overhead") {
        send({ type: "incrementOverhead" });
      }
    }
    send({ type: "incrementTotalPoints" });
  };

  return (
    <Modal
      visible={winningModalVisible}
      onCancel={onModalCancel}
      destroyOnClose={true}
      onOk={onModalOk}
    >
      <div className={styles.title}>Point Information</div>
      <Form
        name="Match Information"
        scrollToFirstError
        style={{ marginLeft: 30 }}
      >
        <Row>
          <Col>
            <div className={styles.label}>Winner:</div>
          </Col>
          <Col>
            <Form.Item valuePropName="checked">
              <Switch onChange={onWinnerSwitch} />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className={styles.label}>At Net:</div>
          </Col>
          <Col>
            <Form.Item valuePropName="netChecked">
              <Switch onChange={onSwitchClicked} />
            </Form.Item>
          </Col>
        </Row>
        <div className={styles.label}>Shot Type:</div>
        <Form.Item>
          <Radio.Group size="large" value={shotType} onChange={onShotSelected}>
            <Radio value="forehand">
              <div className={styles.radioLabel}>Forehand</div>
            </Radio>
            <Radio value="backhand">
              <div className={styles.radioLabel}>Backhand</div>
            </Radio>
            <Radio
              value="overhead"
              defaultChecked={false}
              disabled={atBaseline}
            >
              <div className={styles.radioLabel}>Overhead</div>
            </Radio>
          </Radio.Group>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default WonPointModal;
