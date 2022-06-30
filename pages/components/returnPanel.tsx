import {Button, Col, message, Modal, Row} from "antd";
import {Undo} from "grommet-icons";
import React from "react";


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
        message.success('The last point has been removed from record', 2);
    };

    const onInClick = () => {
        setShowReturnButtons(true);
        setShowServeButtons(false);
    }


    return (
        <>
            <Col span={9}></Col>
            <Col style={{marginTop: 20}}>
                <h1>Return</h1>
            </Col>
            <Col span={11}></Col>
            <Col span={10}>
                {!showReturnButtons ? (
                        <Button
                            type="primary"
                            style={{width: 500, height: 200}}
                            onClick={onInClick}
                        >
                            <h2 style={{color: "white"}}>In</h2>
                        </Button>
                    ) :
                    (

                        <Row>
                            <Button
                                type="primary"
                                style={{width: 250, height: 200}}
                                onClick={onWinningButtonClick}
                            >
                                <h2 style={{color: "white"}}>Won</h2>
                            </Button>
                            <Button
                                type="primary"
                                danger={true}
                                style={{width: 250, height: 200}}
                                onClick={onLosingButtonClick}
                            >
                                <h2 style={{color: "white"}}>Lost</h2>
                            </Button>
                        </Row>
                    )}
            </Col>
            <Col span={11}>
                <Button
                    type="primary"
                    danger={true}
                    style={{width: 500, height: 200}}
                    onClick={pointFinished}
                >
                    <h2 style={{color: "white"}}>Miss</h2>
                </Button>
            </Col>
            <Col span={2}>
                <Button
                    type="default"
                    style={{width: 100, height: 100, marginTop: 60}}
                    icon={<Undo/>}
                    onClick={pointUndone}
                />
            </Col>
        </>
    );
};

export default ReturnPanel;
