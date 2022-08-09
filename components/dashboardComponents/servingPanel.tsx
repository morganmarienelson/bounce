import { Button } from "antd";
import React, { useState } from "react";
import styles from "../../css/dashboard/returnAndServePanel.module.scss"
import { MatchDataEvents} from "../../enums/matchDataEvents";
import ServeLocationModal from "./dashboardModals/serveLocationModal";
import {
ShotTypes
} from "../../enums/shotTypes";

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
      pointLog.push(ShotTypes.filler);
      pointFinished();
    } else {
      setSecondServe(true);
    }
  };

  const onNotReturned = () => {
    setServeLocationModalVisible(true);
    if (secondServe) {
      send({ type: MatchDataEvents.IncrementNotReturnedSecondServes });
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
            <div className={styles.twoSingleBtns}>
              <Button
                className={styles.panelBtn}
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
            <div className={styles.twoSingleBtns}>
              <Button
                className={styles.panelBtn}
                type="primary"
                style={{
                  background: "#26CC3E ",
                  border: "rgba(37, 187, 57, 0.986)",
                }}
                onClick={onNotReturned}
              >
                <div className={styles.btnTitle}>Not
                  <br></br>
                  Returned</div>
              </Button>
            </div>
            <div className={styles.faultCol}>
              <Button
                className={styles.panelBtn}
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
            <div className={styles.inCol}>
              <Button
                className={styles.panelBtn}
                type="primary"
                onClick={onInClick}
              >
                <div className={styles.btnTitle}>In</div>
              </Button>
            </div>
          </>
        ) : (
          <>
            <div className={styles.inCol}>
              <Button
                className={styles.wonLostBtn}
                type="primary"
                style={{
                  background: "#26CC3E ",
                  border: "rgba(37, 187, 57, 0.986)",
                }}
                onClick={onWinningButtonClick}
              >
                <div className={styles.wonLostBtnTitle}>Won</div>
              </Button>
            </div>
            <div className={styles.inCol}>
              <Button
                className={styles.wonLostBtn}
                type="primary"
                style={{
                  background: "#FF0000",
                  border: "#ff0000",
                }}
                onClick={onLosingButtonClick}
              >
                <div className={styles.wonLostBtnTitle}>Lost</div>
              </Button>
            </div>
          </>
        )}
        <div className={styles.undoOrViewCol}>
          <Button
            type="primary"
            className={styles.undoOrView}
            style={{
              background: "#480096",
              border: "#480096",
            }}
            onClick={confirmStop}
          >
            <div className={styles.btnTitle}>View Match <br></br> Statistics</div>
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
