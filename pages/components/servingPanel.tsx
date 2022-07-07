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
                        <h1 style={{color: "white"}}>Ace</h1>
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
                        <h1 style={{color: "white"}}>Fault</h1>
                    </Button>
                </div>
                <div className={styles.serveInCol}>
                    {!showServeButtons ? (
                        <Button
                            className={styles.serveInBtn}
                            type="primary"
                            onClick={onInClick}
                        >
                            <h1 style={{color: "white"}}>In</h1>
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
            </div>
        </>
    );
};

export default ServingPanel;
