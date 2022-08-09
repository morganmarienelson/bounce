import React, {useState} from "react";
import "antd/dist/antd.css";
import {Col, Form, Modal, Radio, Row, Switch} from "antd";
import styles from "../css/modal.module.scss";
import {MatchDataEvents} from "../../../enums/matchDataEvents";
import {ShotTypes} from "../../../enums/shotTypes";

interface WonPointModalProps {
    winningModalVisible: boolean;
    setWinningModalVisible: (winningModalVisible: boolean) => void;
    pointFinished: () => void;
    send: (event: any) => any;
    isServing: boolean;
    pointLog: Array<String>;
    secondServe: boolean;
    setShowServeButtons: (showServeButtons: boolean) => void;
    setShowReturnButtons: (showReturnButtons: boolean) => void;
}

const WonPointModal: React.FC<WonPointModalProps> = ({
                                                         winningModalVisible,
                                                         setWinningModalVisible,
                                                         pointFinished,
                                                         setShowServeButtons,
                                                         setShowReturnButtons,
                                                         send,
                                                         isServing,
                                                         pointLog,
                                                         secondServe,
                                                     }) => {
    const [atBaseline, setAtBaseline] = useState(true);
    const [shotType, setShotType] = useState("forehand");
    const [winner, setWinner] = useState(false);

    const onSelectedAtNet = (checked: boolean) => {
        if (checked) {
            setAtBaseline(false);
        } else {
            setAtBaseline(true);
        }
    };

    const onSelectedWinner = (checked: boolean) => {
        if (checked) {
            setWinner(true);
        } else {
            setWinner(false);
        }
    };

    const onShotSelected = (e: any) => {
        setShotType(e.target.value);
    };

    const onModalOk = () => {
        if (atBaseline) {
            if (shotType == ShotTypes.forehand) {
                if (winner) {
                    send({type: MatchDataEvents.IncrementForehandWinner});
                    pointLog.push(MatchDataEvents.DecrementForehandWinner);
                } else {
                    send({type: MatchDataEvents.IncrementForehandWin});
                    pointLog.push(MatchDataEvents.DecrementForehandWin);
                }
            } else if (shotType == ShotTypes.backhand) {
                if (winner) {
                    send({type: MatchDataEvents.IncrementBackhandWinner});
                    pointLog.push(MatchDataEvents.DecrementBackhandWinner);
                } else {
                    send({type: MatchDataEvents.IncrementBackhandWin});
                    pointLog.push(MatchDataEvents.DecrementBackhandWin);
                }
            }
        } else {
            if (shotType == ShotTypes.forehand) {
                if (winner) {
                    send({type: MatchDataEvents.IncrementForehandVolleyWinner});
                    pointLog.push(MatchDataEvents.DecrementForehandVolleyWinner);
                } else {
                    send({type: MatchDataEvents.IncrementForehandVolleyWin});
                    pointLog.push(MatchDataEvents.DecrementForehandVolleyWin);
                }
            } else if (shotType == ShotTypes.backhand) {
                if (winner) {
                    send({type: MatchDataEvents.IncrementBackhandVolleyWinner});
                    pointLog.push(MatchDataEvents.DecrementBackhandVolleyWinner);
                } else {
                    send({type: MatchDataEvents.IncrementBackhandVolleyWin});
                    pointLog.push(MatchDataEvents.DecrementBackhandVolleyWin);
                }
            }
        }
        if (shotType == ShotTypes.overhead) {
            if (winner) {
                send({type: MatchDataEvents.IncrementOverheadWinner});
                pointLog.push(MatchDataEvents.DecrementOverheadWinner);
            } else {
                send({type: MatchDataEvents.IncrementOverheadWin});
                pointLog.push(MatchDataEvents.DecrementOverheadWin);
            }
        }
        if (isServing) {
            if (secondServe) {
                send({type: MatchDataEvents.IncrementMadeSecondServes});
                pointLog.push(MatchDataEvents.DecrementMadeSecondServes);
            } else {
                send({type: MatchDataEvents.IncrementMadeFirstServes});
                pointLog.push(MatchDataEvents.DecrementMadeFirstServes);
            }
            send({type: MatchDataEvents.IncrementPointsWonOnServe});
            pointLog.push(MatchDataEvents.DecrementPointsWonOnServe);
        } else {
            send({type: MatchDataEvents.IncrementPointsWonOnReturn});
            pointLog.push(MatchDataEvents.DecrementPointsWonOnReturn);
            pointLog.push(ShotTypes.filler);
        }
        setWinningModalVisible(false);
        setWinner(false);
        setAtBaseline(true);
        setShotType(ShotTypes.forehand);
        pointFinished();
    };


    const onModalCancel = () => {
        setWinningModalVisible(false);
        setWinner(false);
        setAtBaseline(true);
        setShotType(ShotTypes.forehand);
        setShowServeButtons(false);
        setShowReturnButtons(false);
    };

    return (
        <Modal
            visible={winningModalVisible}
            onCancel={onModalCancel}
            onOk={onModalOk}
            destroyOnClose={true}
        >
            <div className={styles.title}>Point Information</div>
            <Form
                name="Match Information"
                scrollToFirstError
                className={styles.form}
            >
                <Row>
                    <Col>
                        <div className={styles.label}>Winner:</div>
                    </Col>
                    <Col>
                        <Form.Item valuePropName="checked">
                            <Switch onChange={onSelectedWinner}/>
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className={styles.label}>At Net:</div>
                    </Col>
                    <Col>
                        <Form.Item valuePropName="checked">
                            <Switch onChange={onSelectedAtNet}/>
                        </Form.Item>
                    </Col>
                </Row>
                <div className={styles.label}>Shot Type:</div>
                <Form.Item>
                    <Radio.Group size="large" value={shotType} onChange={onShotSelected}>
                        <Radio value={ShotTypes.forehand}>
                            <div className={styles.radioLabel}>Forehand</div>
                        </Radio>
                        <Radio value={ShotTypes.backhand}>
                            <div className={styles.radioLabel}>Backhand</div>
                        </Radio>
                        <Radio value={ShotTypes.overhead}>
                            <div className={styles.radioLabel}>Overhead</div>
                        </Radio>
                    </Radio.Group>
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default WonPointModal;
