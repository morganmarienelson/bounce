import { Button, Col, message, Row } from "antd";
import { Undo } from "grommet-icons";
import React from "react";
import styles from "./panel.module.css";

interface ReturnPanelProps {
  pointFinished: () => void;
  showReturnButtons: boolean;
  setShowReturnButtons: (showReturnButtons: boolean) => void;
  setShowServeButtons: (showServeButtons: boolean) => void;
  onWinningButtonClick: () => void;
  onLosingButtonClick: () => void;
}

const ReturnPanel: React.FC<ReturnPanelProps> = ({
  pointFinished,
  showReturnButtons,
  onWinningButtonClick,
  onLosingButtonClick,
  setShowReturnButtons,
  setShowServeButtons,
}) => {
  const pointUndone = () => {
    message.success("The last point has been removed from record", 2);
  };

  const onInClick = () => {
    setShowReturnButtons(true);
    setShowServeButtons(false);
  };

  return (
    <>
      <Col span={8}></Col>
      <Col>
        <div className={styles.panelTitle}>Return</div>
      </Col>
      <Col span={11}></Col>
      <Col span={10}>
        {!showReturnButtons ? (
          <Button
            className={styles.panelButton}
            type="primary"
            style={{ width: 500, height: 200 }}
            onClick={onInClick}
          >
            <h1 style={{ color: "white" }}>In</h1>
          </Button>
        ) : (
          <Row>
            <Button
              className={styles.panelButton}
              type="primary"
              style={{
                width: 250,
                height: 200,
                background: "rgba(37, 187, 57, 0.986)",
                border: "rgba(37, 187, 57, 0.986)",
              }}
              onClick={onWinningButtonClick}
            >
              <h1 style={{ color: "white" }}>Won</h1>
            </Button>
            <Button
              className={styles.panelButton}
              type="primary"
              style={{
                width: 250,
                height: 200,
                background: "#ff0000",
                border: "#ff0000",
              }}
              onClick={onLosingButtonClick}
            >
              <h1 style={{ color: "white" }}>Lost</h1>
            </Button>
          </Row>
        )}
      </Col>
      <Col span={11}>
        <Button
          className={styles.panelButton}
          type="primary"
          style={{
            width: 500,
            height: 200,
            background: "#ff0000",
            border: "#ff0000",
          }}
          onClick={pointFinished}
        >
          <h1 style={{ color: "white" }}>Miss</h1>
        </Button>
      </Col>
      <Col span={2}>
        <Button
          className={styles.undo}
          type="default"
          style={{ width: 100, height: 100, marginTop: 60 }}
          icon={<Undo />}
          onClick={pointUndone}
        />
      </Col>
    </>
  );
};

export default ReturnPanel;
