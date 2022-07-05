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
      <Col span={7}>
        <Button
          className={styles.panelButton}
          type="primary"
          style={{
            width: 300,
            height: 200,
            background: "rgba(37, 187, 57, 0.986)",
            border: "rgba(37, 187, 57, 0.986)",
          }}
          onClick={pointFinished}
        >
          <h2 style={{ color: "white" }}>Ace</h2>
        </Button>
      </Col>
      <Col span={7}>
        {!showServeButtons ? (
          <Button
            className={styles.panelButton}
            type="primary"
            style={{ width: 300, height: 200 }}
            onClick={onInClick}
          >
            <h2 style={{ color: "white" }}>In</h2>
          </Button>
        ) : (
          <Row>
            <Button
              className={styles.panelButton}
              type="primary"
              style={{
                width: 150,
                height: 200,
                background: "rgba(37, 187, 57, 0.986)",
                border: "rgba(37, 187, 57, 0.986)",
              }}
              onClick={onWinningButtonClick}
            >
              <h2 style={{ color: "white" }}>Won</h2>
            </Button>
            <Button
              className={styles.panelButton}
              type="primary"
              style={{
                width: 150,
                height: 200,
                background: "#ff0000",
                border: "#ff0000",
              }}
              onClick={onLosingButtonClick}
            >
              <h2 style={{ color: "white" }}>Lost</h2>
            </Button>
          </Row>
        )}
      </Col>
      <Col span={7}>
        <Button
          className={styles.panelButton}
          type="primary"
          style={{
            width: 300,
            height: 200,
            background: "#ff0000",
            border: "#ff0000",
          }}
          onClick={pointFinished}
        >
          <h2 style={{ color: "white" }}>Fault</h2>
        </Button>
      </Col>
    </>
  );
};

export default ServingPanel;
