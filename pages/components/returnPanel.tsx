import {Button, message} from "antd";
import React from "react";
import styles from "./css/returnPanel.module.css";
import {Undo} from "grommet-icons";
import {matchData, MatchDataEvents} from "../../machines/matchData";

interface ReturnPanelProps {
    pointFinished: () => void;
    showReturnButtons: boolean;
    setShowReturnButtons: (showReturnButtons: boolean) => void;
    setShowServeButtons: (showServeButtons: boolean) => void;
    onWinningButtonClick: () => void;
    onLosingButtonClick: () => void;
    send: (event: any) => any;
}

const ReturnPanel: React.FC<ReturnPanelProps> = ({
                                                     pointFinished,
                                                     showReturnButtons,
                                                     onWinningButtonClick,
                                                     onLosingButtonClick,
                                                     setShowReturnButtons,
                                                     setShowServeButtons,
                                                     send,
                                                 }) => {
    const onInClick = () => {
        setShowReturnButtons(true);
        setShowServeButtons(false);
    };

    const onMissReturn = () => {
        send({type: MatchDataEvents.IncrementMissedReturns});
    };

    const pointUndone = () => {
        message.success("The last point has been removed from record", 2);
    };

    return (
        <>
            <div className={styles.panelTitle}>Return</div>
            <div className={styles.panelRow}>
                {!showReturnButtons ? (
                    <>
                        <div className={styles.btnCol}>
                            <Button
                                className={styles.panelBtn}
                                type="primary"
                                style={{
                                    background: "#ff0000",
                                    border: "#ff0000",
                                }}
                                onClick={pointFinished}
                            >
                                <div className={styles.btnTitle} onClick={onMissReturn}>Miss</div>
                            </Button>
                        </div>
                        <div className={styles.btnCol}>
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
                        <div className={styles.btnCol}>
                            <Button
                                className={styles.panelBtn}
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
                        <div className={styles.btnCol}>
                            <Button
                                className={styles.panelBtn}
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
                <div className={styles.undoCol}>
                    <Button
                        className={styles.undo}
                        type="default"
                        icon={<Undo/>}
                        onClick={pointUndone}
                    ></Button>
                </div>
            </div>
        </>
    );
};

export default ReturnPanel;
