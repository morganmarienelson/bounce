import { Button } from "antd";
import React, { useState } from "react";
import styles from "./css/servePanel.module.css";
import { MatchDataEvents } from "../../machines/matchData";
import ServeLocationModal from "./serveLocationModal";

interface ServingPanelProps {
  pointFinished: () => void;
  showServeButtons: boolean;
  setShowServeButtons: (showServeButtons: boolean) => void;
  setShowReturnButtons: (showReturnButtons: boolean) => void;
  onWinningButtonClick: () => void;
  onLosingButtonClick: () => void;
  confirmStop: () => void;
  setIsServing: (isServing: boolean) => void;
  secondServe: boolean;
  setSecondServe: (secondServe: boolean) => void;
  send: (event: any) => any;
  pointLog: Array<String>;
}

const ServingPanel: React.FC<ServingPanelProps> = ({
  pointFinished,
  showServeButtons,
  onWinningButtonClick,
  onLosingButtonClick,
  setShowServeButtons,
  setShowReturnButtons,
  confirmStop,
  setIsServing,
  secondServe,
  setSecondServe,
  send,
  pointLog,
}) => {
  const [serveLocationModalVisible, setServeLocationModalVisible] =
    useState(false);

  const onInClick = () => {
    setShowServeButtons(true);
    setShowReturnButtons(false);
    setIsServing(true);
  };

  const onFaultClick = () => {
    if (secondServe) {
      send({ type: MatchDataEvents.IncrementDoubleFaults });
      pointLog.push(MatchDataEvents.DecrementDoubleFaults);
      send({ type: MatchDataEvents.IncrementPointsLostOnServe });
      pointLog.push(MatchDataEvents.DecrementPointsLostOnServe);
      pointLog.push("filler");
      pointFinished();
    } else {
      setSecondServe(true);
    }
  };

  const onNotReturned = () => {
    setServeLocationModalVisible(true);
    if (secondServe) {
      send({ type: MatchDataEvents.IncrementNotReturnedSecondServes });
      pointLog.push(MatchDataEvents.DecrementNotReturnedSecondServes);
    } else {
      send({ type: MatchDataEvents.IncrementNotReturnedFirstServes });
      pointLog.push(MatchDataEvents.DecrementNotReturnedFirstServes);
    }
  };

  const onAceClick = () => {
    setServeLocationModalVisible(true);
    if (secondServe) {
      send({ type: MatchDataEvents.IncrementAcesOnSecondServe });
      pointLog.push(MatchDataEvents.DecrementAcesOnSecondServe);
    } else {
      send({ type: MatchDataEvents.IncrementAcesOnFirstServe });
      pointLog.push(MatchDataEvents.DecrementAcesOnFirstServe);
    }
  };

  return (
    <>
      <div className={styles.panelTitle}>Serve</div>
      <div className={styles.panelRow}>
        {!showServeButtons ? (
          <>
            <div className={styles.btnCol}>
              <Button
                className={styles.serveBtn}
                type="primary"
                style={{
                  background: "#26CC3E ",
                  border: "rgba(37, 187, 57, 0.986)",
                }}
                onClick={onAceClick}
              >
                <div className={styles.btnTitle}>Ace</div>
              </Button>
            </div>
            <div className={styles.btnCol}>
              <Button
                className={styles.serveBtn}
                type="primary"
                style={{
                  background: "#26CC3E ",
                  border: "rgba(37, 187, 57, 0.986)",
                }}
                onClick={onNotReturned}
              >
                <div className={styles.btnTitle}>Not Returned</div>
              </Button>
            </div>
            <div className={styles.btnCol}>
              <Button
                className={styles.serveBtn}
                type="primary"
                style={{
                  background: "#FF0000",
                  border: "#ff0000",
                }}
                onClick={onFaultClick}
              >
                {!secondServe ? (
                  <div className={styles.btnTitle}>Fault</div>
                ) : (
                  <div className={styles.btnTitle}>Double Fault</div>
                )}
              </Button>
            </div>
            <div className={styles.serveInCol}>
              <Button
                className={styles.serveInBtn}
                type="primary"
                onClick={onInClick}
              >
                <div className={styles.btnTitle}>In</div>
              </Button>
            </div>
          </>
        ) : (
          <>
            <div className={styles.serveInCol}>
              <Button
                className={styles.serveInBtn}
                type="primary"
                style={{
                  background: "#26CC3E ",
                  border: "rgba(37, 187, 57, 0.986)",
                }}
                onClick={onWinningButtonClick}
              >
                <div className={styles.winLostBtn}>Won</div>
              </Button>
            </div>
            <div className={styles.serveInCol}>
              <Button
                className={styles.serveInBtn}
                type="primary"
                style={{
                  background: "#FF0000",
                  border: "#ff0000",
                }}
                onClick={onLosingButtonClick}
              >
                <div className={styles.winLostBtn}>Lost</div>
              </Button>
            </div>
          </>
        )}
        <div className={styles.stopBtnCol}>
          <Button
            type="primary"
            className={styles.stopBtn}
            style={{
              background: "#ff0000",
              border: "#ff0000",
            }}
            onClick={confirmStop}
          >
            <div className={styles.btnTitle}>Stop</div>
          </Button>
        </div>
      </div>
      <ServeLocationModal
        serveLocationModalVisible={serveLocationModalVisible}
        setServeLocationModalVisible={setServeLocationModalVisible}
        pointFinished={pointFinished}
        send={send}
        pointLog={pointLog}
      />
    </>
  );
};

export default ServingPanel;
