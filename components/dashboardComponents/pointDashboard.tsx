import { message, Modal} from "antd";
import "antd/dist/antd.css";
import React, {useState} from "react";
import ReturnPanel from "./returnPanel";
import ServingPanel from "./servingPanel";
import LostPointModal from "./dashboardModals/lostPointModal";
import WonPointModal from "./dashboardModals/wonPointModal";
import styles from "../../css/dashboard/pointDashboard.module.scss"

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
    const [pointLog, setPointLog] = useState(Array<String>);

    const pointFinished = () => {
        setShowServeButtons(false);
        setShowReturnButtons(false);
        setIsServing(false);
        setSecondServe(false);
        message.success("Point has been recorded", 1);
    };

    const confirmStop = () => {
        Modal.confirm({
            title: "Are you sure you want to leave this page? You will not be able to record any new data for this match.",
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
                        pointLog={pointLog}
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
                        pointLog={pointLog}
                    />
                </div>
            </div>
            <LostPointModal
                losingModalVisible={losingModalVisible}
                setLosingModalVisible={setLosingModalVisible}
                pointFinished={pointFinished}
                send={send}
                isServing={isServing}
                pointLog={pointLog}
                secondServe={secondServe}
                setShowServeButtons={setShowServeButtons}
                setShowReturnButtons={setShowReturnButtons} />
            <WonPointModal
                send={send}
                winningModalVisible={winningModalVisible}
                setWinningModalVisible={setWinningModalVisible}
                pointFinished={pointFinished}
                setShowServeButtons={setShowServeButtons}
                setShowReturnButtons={setShowReturnButtons}
                isServing={isServing}
                pointLog={pointLog}
                secondServe={secondServe}
            />
        </div>
    );
};

export default PointDashboard;
