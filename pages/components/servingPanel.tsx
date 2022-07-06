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
      <Row className={styles.panelTitle}>
        <div>Serve</div>
      </Row>
      <Row className={styles.serveGrid}>
        <Col className={styles.returnButtonCol}>
          <Button
            className={styles.serveBtn}
            type="primary"
            style={{
              background: "rgba(37, 187, 57, 0.986)",
              border: "rgba(37, 187, 57, 0.986)",
            }}
            onClick={pointFinished}
          >
            <h1 style={{ color: "white" }}>Ace</h1>
          </Button>
        </Col>
        <Col className={styles.returnButtonCol}>
          <Button
            className={styles.serveBtn}
            type="primary"
            style={{
              background: "#ff0000",
              border: "#ff0000",
            }}
            onClick={pointFinished}
          >
            <h1 style={{ color: "white" }}>Fault</h1>
          </Button>
        </Col>
        <Col className={styles.returnButtonCol}>
          {!showServeButtons ? (
            <Button
              className={styles.serveIn}
              type="primary"
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
        <Col className={styles.returnButtonCol}>
          <Button
            type="primary"
            danger={true}
            style={{
              width: 100,
              height: 60,
              marginTop: 180,
              background: "#ff0000",
              border: "#ff0000",
              boxShadow:
                "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
            }}
            //TODO: add this back in
            //onClick={confirmStop}
          >
            <h2 style={{ color: "white" }}>Stop</h2>
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default ServingPanel;
