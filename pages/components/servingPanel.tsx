import {Button, Col, Row} from "antd";
import React from "react";


interface ServingPanelProps {
    pointFinished: () => void;
    showServeButtons: boolean;
    setShowServeButtons: (showServeButtons: boolean) => void;
    onWinningButtonClick: () => void;
    onLosingButtonClick: () => void;
}

const ServingPanel: React.FC<ServingPanelProps> = ({
                                                       pointFinished,
                                                       showServeButtons,
                                                       onWinningButtonClick,
                                                       onLosingButtonClick,
                                                       setShowServeButtons,
                                                   }) => {

    const onInClick = () => {
        setShowServeButtons(true);
    }

    return (
        <>
            <Col span={9}></Col>
            <Col style={{marginTop: 30}}>
                <h1>Serve</h1>
            </Col>
            <Col span={10}></Col>
            <Col span={7}>
                <Button type="primary" style={{width: 300, height: 200}} onClick={pointFinished}>
                    <h2 style={{color: "white"}}>Ace</h2>
                </Button>
            </Col>
            <Col span={7}>
                {!showServeButtons ? (
                        <Button
                            type="primary"
                            style={{width: 300, height: 200}}
                            onClick={onInClick}
                        >
                            <h2 style={{color: "white"}}>In</h2>
                        </Button>
                    ) :
                    (

                        <Row>
                            <Button
                                type="primary"
                                style={{width: 150, height: 200}}
                                onClick={onWinningButtonClick}
                            >
                                <h2 style={{color: "white"}}>Won</h2>
                            </Button>
                            <Button
                                type="primary"
                                danger={true}
                                style={{width: 150, height: 200}}
                                onClick={onLosingButtonClick}
                            >
                                <h2 style={{color: "white"}}>Lost</h2>
                            </Button>
                        </Row>
                    )}
            </Col>
            <Col span={7}>
                <Button
                    type="primary"
                    danger={true}
                    style={{width: 300, height: 200}}
                    onClick={pointFinished}
                >
                    <h2 style={{color: "white"}}>Fault</h2>
                </Button>
            </Col>
        </>
    );
};

export default ServingPanel;
