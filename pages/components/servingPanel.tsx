import {Button} from "antd";
import React from "react";
import styles from "./css/servePanel.module.css";

interface ServingPanelProps {
    pointFinished: () => void;
    showServeButtons: boolean;
    setShowServeButtons: (showServeButtons: boolean) => void;
    setShowReturnButtons: (showReturnButtons: boolean) => void;
    onWinningButtonClick: () => void;
    onLosingButtonClick: () => void;
    confirmStop: () => void;
}

const ServingPanel: React.FC<ServingPanelProps> = ({
                                                       pointFinished,
                                                       showServeButtons,
                                                       onWinningButtonClick,
                                                       onLosingButtonClick,
                                                       setShowServeButtons,
                                                       setShowReturnButtons,
                                                       confirmStop
                                                   }) => {
    const onInClick = () => {
        setShowServeButtons(true);
        setShowReturnButtons(false);
    };

    return (
        <>
            <div className={styles.panelTitle}>Serve</div>
            <div className={styles.panelRow}>
                <div className={styles.btnCol}>
                    <Button
                        className={styles.serveBtn}
                        type="primary"
                        style={{
                            background: "#ff0000",
                            border: "#ff0000",
                        }}
                        onClick={pointFinished}
                    >
                        <div className={styles.btnTitle}>Fault</div>
                    </Button>
                </div>
                <div className={styles.btnCol}>
                    <Button
                        className={styles.serveBtn}
                        type="primary"
                        style={{
                            background: "rgba(37, 187, 57, 0.986)",
                            border: "rgba(37, 187, 57, 0.986)",
                        }}
                        onClick={pointFinished}
                    >
                        <div className={styles.btnTitle}>Ace</div>
                    </Button>
                </div>
                {!showServeButtons ? (
                    <>
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
                        <div className={styles.btnCol}>
                            <Button
                                className={styles.hiddenBtn}
                                ty pe="primary"
                                style={{
                                    background: "#38B563 ",
                                    border: "rgba(37, 187, 57, 0.986)",
                                }}
                                onClick={onWinningButtonClick}
                            >
                                <div className={styles.winLostBtn}>Won</div>
                            </Button>
                        </div>
                        <div className={styles.btnCol}>
                            <Button
                                className={styles.hiddenBtn}
                                type="primary"
                                style={{
                                    background: "#EE1A1A  ",
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
