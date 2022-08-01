import {Button, message} from "antd";
import React from "react";
import styles from "./css/returnPanel.module.css";
import {Undo} from "grommet-icons";
import {MatchDataEvents} from "../../machines/matchData";

interface ReturnPanelProps {
    pointFinished: () => void;
    showReturnButtons: boolean;
    setShowReturnButtons: (showReturnButtons: boolean) => void;
    setShowServeButtons: (showServeButtons: boolean) => void;
    onWinningButtonClick: () => void;
    onLosingButtonClick: () => void;
    send: (event: any) => any;
    pointLog: Array<String>;
}

const ReturnPanel: React.FC<ReturnPanelProps> = ({
                                                     pointFinished,
                                                     showReturnButtons,
                                                     onWinningButtonClick,
                                                     onLosingButtonClick,
                                                     setShowReturnButtons,
                                                     setShowServeButtons,
                                                     send,
                                                     pointLog,
                                                 }) => {

    const onInClick = () => {
        setShowReturnButtons(true);
        setShowServeButtons(false);
    };

    const onMissReturnFirstServe = () => {
        send({type: MatchDataEvents.IncrementMissedFirstServeReturns});
        pointLog.push(MatchDataEvents.DecrementMissedFirstServeReturns);
        send({type: MatchDataEvents.IncrementPointsLostOnReturn});
        pointLog.push(MatchDataEvents.DecrementPointsLostOnReturn);
        pointLog.push("filler");
        setShowServeButtons(false);
        pointFinished();
    };

    const onMissReturnSecondServe = () => {
        send({type: MatchDataEvents.IncrementMissedSecondServeReturns});
        pointLog.push(MatchDataEvents.DecrementMissedSecondServeReturns);
        send({type: MatchDataEvents.IncrementPointsLostOnReturn});
        pointLog.push(MatchDataEvents.DecrementPointsLostOnReturn);
        pointLog.push("filler");
        setShowServeButtons(false);
        pointFinished();
    };

    const onDoubleFault = () => {
        send({type: MatchDataEvents.IncrementPointsWonOnReturn});
        pointLog.push(MatchDataEvents.IncrementPointsWonOnReturn);
        pointLog.push("filler");
        pointLog.push("filler");
        setShowServeButtons(false);
        pointFinished();
    };

    const pointUndone = () => {
        if (pointLog.length == 0) {
            message.error("There is not a recorded point to undo", 2);
        } else {
            const lastEntry = pointLog.pop();
            if (lastEntry == "filler") {
                const nextEntry = pointLog.pop();
                if (nextEntry == "filler"){
                    send({type: pointLog.pop()});
                    message.success("The last point has been removed from record", 2);
                } else{
                    send({type: nextEntry});
                    send({type: pointLog.pop()});
                    message.success("The last point has been removed from record", 2);
                }
            } else {
                send({type: lastEntry});
                send({type: pointLog.pop()});
                send({type: pointLog.pop()});
                message.success("The last point has been removed from record", 2);
            }
        }
    };

    return (
        <>
            <div className={styles.panelTitle}>Return</div>
            <div className={styles.panelRow}>
                {!showReturnButtons ? (
                    <>
                        <div className={styles.missBtn}>
                            <Button
                                className={styles.panelBtn}
                                type="primary"
                                style={{
                                    background: "#ff0000",
                                    border: "#ff0000",
                                }}
                                onClick={onMissReturnFirstServe}
                            >
                                <div className={styles.btnTitle}>
                                    Missed     <br></br>
                                    First
                                    <br></br>
                                    Serve
                                </div>
                            </Button>
                        </div>
                        <div className={styles.missBtn}>
                            <Button
                                className={styles.panelBtn}
                                type="primary"
                                style={{
                                    background: "#ff0000",
                                    border: "#ff0000",
                                }}
                                onClick={onMissReturnSecondServe}
                            >
                                <div className={styles.btnTitle}>
                                    Missed     <br></br>
                                    Second
                                    <br></br>
                                    Serve
                                </div>
                            </Button>
                        </div>
                        <div className={styles.faultCol}>
                            <Button
                                className={styles.panelBtn}
                                type="primary"
                                style={{
                                    background: "#26CC3E ",
                                    border: "rgba(37, 187, 57, 0.986)",
                                }}
                                onClick={onDoubleFault}
                            >
                                <div className={styles.btnTitle}>Double <br></br> Fault</div>
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
