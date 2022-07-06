import { Button, Col, Row } from "antd";
import React from "react";
import styles from "./panel.module.css";

interface ServingPanelProps {
  pointFinished: () => void;
  showServeButtons: boolean;
  setShowServeButtons: (showServeButtons: boolean) => void;
  setShowReturnButtons: (showReturnButtons: boolean) => void;
  onWinningButtonClick: () => void;
  onLosingButtonClick: () => void;
}

const ServingPanel: React.FC<ServingPanelProps> = ({
  pointFinished,
  showServeButtons,
  onWinningButtonClick,
  onLosingButtonClick,
  setShowServeButtons,
  setShowReturnButtons,
}) => {
  const onInClick = () => {
    setShowServeButtons(true);
    setShowReturnButtons(false);
  };

  return (
    <>
      <Col span={8}></Col>
      <Col>
        <div className={styles.panelTitle}>Serve</div>
      </Col>
      <Col span={11}></Col>
      <Col span={6}>
        <Button
          className={styles.panelButton}
          type="primary"
          style={{
            width: 200,
            height: 200,
            background: "rgba(37, 187, 57, 0.986)",
            border: "rgba(37, 187, 57, 0.986)",
          }}
          onClick={pointFinished}
        >
          <h1 style={{ color: "white" }}>Ace</h1>
        </Button>
      </Col>
      <Col span={10}>
        {!showServeButtons ? (
          <Button
            className={styles.panelButton}
            type="primary"
            style={{ width: 400, height: 200 }}
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
                width: 200,
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
                width: 200,
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
      <Col span={5}>
        <Button
          className={styles.panelButton}
          type="primary"
          style={{
            width: 200,
            height: 200,
            background: "#ff0000",
            border: "#ff0000",
          }}
          onClick={pointFinished}
        >
          <h1 style={{ color: "white" }}>Fault</h1>
        </Button>
      </Col>
    </>
  );
};

export default ServingPanel;
