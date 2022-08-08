import React, {useState} from "react";
import "antd/dist/antd.css";
import {Col, Form, Modal, Radio, Row, Switch} from "antd";
import styles from "../css/modal.module.scss";
import {MatchDataEvents} from "../../../machines/matchData";
import {ShotTypes} from "../../../types";

interface LostPointModalProps {
    losingModalVisible: boolean;
    setLosingModalVisible: (losingModalVisible: boolean) => void;
    pointFinished: () => void;
    setShowServeButtons: (showServeButtons: boolean) => void;
    setShowReturnButtons: (showReturnButtons: boolean) => void;
    send: (event: any) => any;
    isServing: boolean;
    pointLog: Array<String>;
    secondServe: boolean;
}


const LostPointModal: React.FC<LostPointModalProps> = ({
                                                           losingModalVisible,
                                                           setLosingModalVisible,
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
    const [unforcedError, setUnforcedError] = useState(false);

    const onSelectedAtNet = (checked: boolean) => {
        if (checked) {
            setAtBaseline(false);
        } else {
            setAtBaseline(true);
        }
    };

    const onSelectedUnforcedError = (checked: boolean) => {
        if (checked) {
            setUnforcedError(true);
        } else {
            setUnforcedError(false);
        }
    };

    const onShotSelected = (e: any) => {
        setShotType(e.target.value);
    };

    const onModalOk = () => {
        if (atBaseline) {
            if (shotType == ShotTypes.forehand) {
                if (unforcedError) {
                    send({type: MatchDataEvents.IncrementForehandUnforcedError});
                    pointLog.push(MatchDataEvents.DecrementForehandUnforcedError);
                } else {
                    send({type: MatchDataEvents.IncrementForehandLoss});
                    pointLog.push(MatchDataEvents.DecrementForehandLoss);
                }
            } else if (shotType == ShotTypes.backhand) {
                if (unforcedError) {
                    send({type: MatchDataEvents.IncrementBackhandUnforcedError});
                    pointLog.push(MatchDataEvents.DecrementBackhandUnforcedError);
                } else {
                    send({type: MatchDataEvents.IncrementBackhandLoss});
                    pointLog.push(MatchDataEvents.DecrementBackhandLoss);
                }
            }
        } else {
            if (shotType == ShotTypes.forehand) {
                if (unforcedError) {
                    send({type: MatchDataEvents.IncrementForehandVolleyUnforcedError});
                    pointLog.push(MatchDataEvents.DecrementForehandVolleyUnforcedError);
                } else {
                    send({type: MatchDataEvents.IncrementForehandVolleyLoss});
                    pointLog.push(MatchDataEvents.DecrementForehandVolleyLoss);
                }
            } else if (shotType == ShotTypes.backhand) {
                if (unforcedError) {
                    send({type: MatchDataEvents.IncrementBackhandVolleyUnforcedError});
                    pointLog.push(MatchDataEvents.DecrementBackhandVolleyUnforcedError);
                } else {
                    send({type: MatchDataEvents.IncrementBackhandVolleyLoss});
                    pointLog.push(MatchDataEvents.DecrementBackhandVolleyLoss);
                }
            }
        }
        if (shotType == ShotTypes.overhead) {
            if (unforcedError) {
                send({type: MatchDataEvents.IncrementOverheadUnforcedError});
                pointLog.push(MatchDataEvents.DecrementOverheadUnforcedError);
            } else {
                send({type: MatchDataEvents.IncrementOverheadLoss});
                pointLog.push(MatchDataEvents.DecrementOverheadLoss);
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
            send({type: MatchDataEvents.IncrementPointsLostOnServe});
            pointLog.push(MatchDataEvents.DecrementPointsLostOnServe);
        } else {
            send({type: MatchDataEvents.IncrementPointsLostOnReturn});
            pointLog.push(MatchDataEvents.DecrementPointsLostOnReturn);
            pointLog.push(ShotTypes.filler);
        }
        setLosingModalVisible(false);
        setUnforcedError(false);
        setShotType(ShotTypes.forehand);
        setAtBaseline(true);
        pointFinished();
    };

    const onModalCancel = () => {
        setLosingModalVisible(false);
        setUnforcedError(false);
        setAtBaseline(true);
        setShotType(ShotTypes.forehand);
        setShowServeButtons(false);
        setShowReturnButtons(false);
    };

    return (
        <Modal
            visible={losingModalVisible}
            onCancel={onModalCancel}
            onOk={onModalOk}
            destroyOnClose={true}
        >
            <div className={styles.title}>Point Information</div>
            <Form name="Match Information" scrollToFirstError className={styles.form}>
                <Row>
                    <Col>
                        <div className={styles.label}>Unforced Error:</div>
                    </Col>
                    <Col>
                        <Form.Item valuePropName="checked" >
                            <Switch onChange={onSelectedUnforcedError}/>
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
                <Form.Item
                >
                    <Radio.Group size="large" value={shotType} onChange={onShotSelected}  >
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

export default LostPointModal;
