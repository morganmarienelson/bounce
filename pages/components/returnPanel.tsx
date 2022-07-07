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
                            className={styles.panelButton}
                            type="primary"
                            onClick={onInClick}
                        >
                            <h1 style={{color: "white"}}>In</h1>
                        </Button>
                    ) : (
                        <>
                            <Button
                                className={styles.returnEmbeddedButton}
                                type="primary"
                                style={{
                                    background: "rgba(37, 187, 57, 0.986)",
                                    border: "rgba(37, 187, 57, 0.986)",
                                }}
                                onClick={onWinningButtonClick}
                            >
                                <h1 style={{color: "white"}}>Won</h1>
                            </Button>
                            <Button
                                className={styles.returnEmbeddedButton}
                                type="primary"
                                style={{
                                    background: "#ff0000",
                                    border: "#ff0000",
                                }}
                                onClick={onLosingButtonClick}
                            >
                                <h1 style={{color: "white"}}>Lost</h1>
                            </Button>
                        </>
                    )}
                </div>
                <div className={styles.btnCol}>
                    <Button
                        className={styles.panelButton}
                        type="primary"
                        style={{
                            background: "#ff0000",
                            border: "#ff0000",
                        }}
                        onClick={pointFinished}
                    >
                        <h1 style={{color: "white"}}>Miss</h1>
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
