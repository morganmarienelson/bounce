import {message, Modal} from "antd";
import "antd/dist/antd.css";
import React, {useState} from "react";
import ReturnPanel from "./components/returnPanel";
import ServingPanel from "./components/servingPanel";
import LostPointModal from "./components/lostPointModal";
import WonPointModal from "./components/wonPointModal";
import styles from "./components/css/pointDashboard.module.css";

interface PointDashboardProps {
    setShowDashboard: (showDashboard: boolean) => void;
    send: (event: any) => any;
}

const PointDashboard: React.FC<PointDashboardProps> = ({
                                                           setShowDashboard,
                                                           send
                                                       }) => {
    const [showServeButtons, setShowServeButtons] = useState(false);
    const [showReturnButtons, setShowReturnButtons] = useState(false);
    const [losingModalVisible, setLosingModalVisible] = useState(false);
    const [winningModalVisible, setWinningModalVisible] = useState(false);
    const [isServing, setIsServing] = useState(false);
    const [secondServe, setSecondServe] = useState(false);

    const pointFinished = () => {
        message.success("Point has been recorded", 1);
        setShowServeButtons(false);
        setShowReturnButtons(false);
        setIsServing(false);
        setSecondServe(false);
    };

    const confirmStop = () => {
        Modal.confirm({
            title: "Are you sure you want to stop recording data for this match?",
            okType: "danger",
            onOk: () => {
                setShowDashboard(false);
            },
        });
    };

    const onWinningButtonClick = () => {
        setWinningModalVisible(true);
    };

    const onLosingButtonClick = () => {
        setLosingModalVisible(true);
    };

    const onModalCancel = () => {
        setLosingModalVisible(false);
        setWinningModalVisible(false);
        setShowServeButtons(false);
        setShowReturnButtons(false);
    };

    return (
        <div className={styles.page}>
            <div className={styles.row}>
                <div className={styles.col}>
                    <ReturnPanel
                        showReturnButtons={showReturnButtons}
                        setShowReturnButtons={setShowReturnButtons}
                        pointFinished={pointFinished}
                        setShowServeButtons={setShowServeButtons}
                        onWinningButtonClick={onWinningButtonClick}
                        onLosingButtonClick={onLosingButtonClick}
                        send={send}
                    />
                </div>
                <div className={styles.col}>
                    <ServingPanel
                        showServeButtons={showServeButtons}
                        setShowReturnButtons={setShowReturnButtons}
                        setShowServeButtons={setShowServeButtons}
                        pointFinished={pointFinished}
                        onWinningButtonClick={onWinningButtonClick}
                        onLosingButtonClick={onLosingButtonClick}
                        confirmStop={confirmStop}
                        setIsServing={setIsServing}
                        secondServe={secondServe}
                        setSecondServe={setSecondServe}
                        send={send}
                    />
                </div>
            </div>

            <LostPointModal
                losingModalVisible={losingModalVisible}
                setLosingModalVisible={setLosingModalVisible}
                onModalCancel={onModalCancel}
                pointFinished={pointFinished}
                send={send}
                isServing={isServing}
            />

            <WonPointModal
                send={send}
                winningModalVisible={winningModalVisible}
                setWinningModalVisible={setWinningModalVisible}
                pointFinished={pointFinished}
                onModalCancel={onModalCancel}
                isServing={isServing}
            />
        </div>
    );
};

export default PointDashboard;
