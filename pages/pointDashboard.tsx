import {Button, message, Modal, Row} from "antd";
import "antd/dist/antd.css";
import React, {useState} from "react";
import ReturnPanel from "./components/returnPanel";
import ServingPanel from "./components/servingPanel";
import WonLostModal from "./components/wonLostModal";

interface PointDashboardProps {
    setShowDashboard: (showDashboard: boolean) => void;
}

const PointDashboard: React.FC<PointDashboardProps> = ({setShowDashboard}) => {
    const [showPointOutcomeModal, setShowPointOutcomeModal] = useState(false);

    const onServeAndReturn = () => {
        setShowPointOutcomeModal(true);
    };

    const pointFinished = () => {
        message.success('Point has been recorded', 1);
    };

    const confirmStop = () => {
        Modal.confirm({
            title: "Are you sure you want to stop the match?",
            okType: "danger",
            onOk: () => {
                setShowDashboard(false);

            },
        });
    };

    return (
        <>
            <Row style={{marginLeft: 35}}>
                <ReturnPanel onServeAndReturn={onServeAndReturn} pointFinished={pointFinished}/>
                <ServingPanel onServeAndReturn={onServeAndReturn} pointFinished={pointFinished}/>
            </Row>

            <WonLostModal
                showPointOutcomeModal={showPointOutcomeModal}
                setShowPointOutcomeModal={setShowPointOutcomeModal}
                pointFinished={pointFinished}
            />

            <Button
                type="primary"
                danger={true}
                style={{
                    width: 100,
                    height: 60,
                    marginTop: 180,
                }}
                onClick={confirmStop}
            >
                <h2 style={{color: "white"}}>Stop</h2>
            </Button>
        </>
    );
};

export default PointDashboard