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
                            background: "rgba(37, 187, 57, 0.986)",
                            border: "rgba(37, 187, 57, 0.986)",
                        }}
                        onClick={pointFinished}
                    >
                        <div className={styles.btnTitle}>Ace</div>
                    </Button>
                </div>
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
                <div className={styles.serveInCol}>
                    {!showServeButtons ? (
                        <Button
                            className={styles.serveInBtn}
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
                <div className={styles.stopBtnCol}>
                    <Button
                        type="primary"
                        danger={true}
                        style={{
                            background: "#ff0000",
                            border: "#ff0000",
                            boxShadow:
                                "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
                        }}
                        onClick={confirmStop}
                    >
                        <h2 style={{color: "white"}}>Stop</h2>
                    </Button>
                </div>
            </div>
        </>
    );
};

export default ServingPanel;
