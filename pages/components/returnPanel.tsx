import {Button, message} from "antd";
import {Undo} from "grommet-icons";
import React from "react";
import styles from "./css/returnPanel.module.css";

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
            <div className={styles.panelTitle}>Return</div>
            <div className={styles.panelRow}>
                <div className={styles.btnCol}>
                    {!showReturnButtons ? (
                        <Button
                            className={styles.panelBtn}
                            type="primary"
                            onClick={onInClick}
                        >
                            <div className={styles.btnTitle}>In</div>
                        </Button>
                    ) : (
                        <div>
                            <Button
                                className={styles.hiddenBtn}
                                type="primary"
                                style={{
                                    background: "rgba(37, 187, 57, 0.986)",
                                    border: "rgba(37, 187, 57, 0.986)",
                                }}
                                onClick={onWinningButtonClick}
                            >
                                <div className={styles.winLostBtn}>Won</div>
                            </Button>
                            <Button
                                className={styles.hiddenBtn}
                                type="primary"
                                style={{
                                    background: "#ff0000",
                                    border: "#ff0000",
                                }}
                                onClick={onLosingButtonClick}
                            >
                                <div className={styles.winLostBtn}>Lost</div>
                            </Button>
                        </div>
                    )}
                </div>
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
                        <div className={styles.btnTitle}>Miss</div>
                    </Button>
                </div>
                <div className={styles.undoCol}>
                    <Button
                        className={styles.undo}
                        type="default"
                        icon={<Undo/>}
                        onClick={pointUndone}
                    />
                </div>
            </div>
        </>
    );
};

export default ReturnPanel;
