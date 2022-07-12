import {Button} from "antd";
import React, {useState} from "react";
import styles from "./css/servePanel.module.css";
import {MatchDataEvents} from "../../machines/matchData";

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
                                                       send
                                                   }) => {
    const onInClick = () => {
        setShowServeButtons(true);
        setShowReturnButtons(false);
        setIsServing(true);
    };

    const onFaultClick = () => {
        if (secondServe) {
            pointFinished();
            send({type: MatchDataEvents.IncrementDoubleFaults});
        } else {
            setSecondServe(true);
            send({type: MatchDataEvents.IncrementMissedFirstServes});
        }
    }

    const onAceClick = () => {
        if (secondServe) {
            pointFinished();
            send({type: MatchDataEvents.IncrementAcesOnSecondServe});
        } else {
            pointFinished();
            send({type: MatchDataEvents.IncrementAcesOnFirstServe});
        }
    }

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
                                    background: "#FF0000",
                                    border: "#ff0000",
                                }}
                                onClick={onFaultClick}
                            >
                                {!secondServe ? (
                                    <div className={styles.btnTitle}>Fault</div>
                                ) : (<div className={styles.btnTitle}>Double Fault</div>
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
        </>
    );
};

export default ServingPanel;
