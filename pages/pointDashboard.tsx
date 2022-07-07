import {Button, Col, message, Modal, Row} from "antd";
import "antd/dist/antd.css";
import React, {useState} from "react";
import ReturnPanel from "./components/returnPanel";
import ServingPanel from "./components/servingPanel";
import LostPointModal from "./components/lostPointModal";
import WonPointModal from "./components/wonPointModal";
import {Grommet, Header, Heading, Nav} from "grommet";

interface PointDashboardProps {
    setShowDashboard: (showDashboard: boolean) => void;
}

const PointDashboard: React.FC<PointDashboardProps> = ({
                                                           setShowDashboard,
                                                       }) => {
    const [showServeButtons, setShowServeButtons] = useState(false);
    const [showReturnButtons, setShowReturnButtons] = useState(false);
    const [losingModalVisible, setLosingModalVisible] = useState(false);
    const [winningModalVisible, setWinningModalVisible] = useState(false);

    const pointFinished = () => {
        message.success("Point has been recorded", 1);
        setShowServeButtons(false);
        setShowReturnButtons(false);
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
        <>
            <Row>
                <ReturnPanel
                    showReturnButtons={showReturnButtons}
                    setShowReturnButtons={setShowReturnButtons}
                    pointFinished={pointFinished}
                    setShowServeButtons={setShowServeButtons}
                    onWinningButtonClick={onWinningButtonClick}
                    onLosingButtonClick={onLosingButtonClick}
                />
                <ServingPanel
                    showServeButtons={showServeButtons}
                    setShowReturnButtons={setShowReturnButtons}
                    setShowServeButtons={setShowServeButtons}
                    pointFinished={pointFinished}
                    onWinningButtonClick={onWinningButtonClick}
                    onLosingButtonClick={onLosingButtonClick}
                />
            </Row>

            <Button
                type="primary"
                danger={true}
                style={{
                    width: 100,
                    height: 60,
                    marginTop: 180,
                    background: "#ff0000",
                    border: "#ff0000",
                    boxShadow:
                        "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
                }}
                //TODO: add this back in
                //onClick={confirmStop}
            >
                <h2 style={{color: "white"}}>Stop</h2>
            </Button>

            <LostPointModal
                losingModalVisible={losingModalVisible}
                setLosingModalVisible={setLosingModalVisible}
                onModalCancel={onModalCancel}
                pointFinished={pointFinished}
            />

            <WonPointModal
                winningModalVisible={winningModalVisible}
                setWinningModalVisible={setWinningModalVisible}
                pointFinished={pointFinished}
                onModalCancel={onModalCancel}
            />
        </>
    );
};

export default PointDashboard;
