import React, {useState} from "react";
import "antd/dist/antd.css";
import {Col, Form, Modal, Radio, Row, Switch} from "antd";
import styles from "./css/modal.module.css";
import {MatchDataEvents} from "../../machines/matchData";

interface LostPointModalProps {
    losingModalVisible: boolean;
    setLosingModalVisible: (losingModalVisible: boolean) => void;
    pointFinished: () => void;
    onModalCancel: () => void;
    send: (event: any) => any;
    isServing: boolean;
}

const LostPointModal: React.FC<LostPointModalProps> = ({
                                                           losingModalVisible,
                                                           setLosingModalVisible,
                                                           pointFinished,
                                                           onModalCancel,
                                                           send,
                                                           isServing
                                                       }) => {
    const [atBaseline, setAtBaseline] = useState(true);
    const [shotType, setShotType] = useState("");
    const [unforcedError, setUnforcedError] = useState(false);

    const onSelectedAtNet = (checked: boolean) => {
        if (checked) {
            setAtBaseline(false);
        } else {
            setAtBaseline(true);
        }
    }

    const onSelectedUnforcedError = (checked: boolean) => {
        if (checked) {
            setUnforcedError(true);
        } else {
            setUnforcedError(false);
        }
    }

    const onShotSelected = (e: any) => {
        setShotType(e.target.value);
    };

    const onModalOk = () => {
        if (atBaseline) {
            if (shotType == "forehand") {
                if (unforcedError) {
                    send({type: MatchDataEvents.IncrementForehandUnforcedError});
                } else {
                    send({type: MatchDataEvents.IncrementForehandLoss});
                }
            } else if (shotType == "backhand") {
                if (unforcedError) {
                    send({type: MatchDataEvents.IncrementBackhandUnforcedError});
                } else {
                    send({type: MatchDataEvents.IncrementBackhandLoss});
                }
            }
        } else {
            if (shotType == "forehand") {
                if (unforcedError) {
                    send({type: MatchDataEvents.IncrementForehandVolleyUnforcedError});
                } else {
                    send({type: MatchDataEvents.IncrementForehandVolleyLoss});
                }
            } else if (shotType == "backhand") {
                if (unforcedError) {
                    send({type: MatchDataEvents.IncrementBackhandVolleyUnforcedError});
                } else {
                    send({type: MatchDataEvents.IncrementBackhandVolleyLoss});
                }
            }
        }
        if (shotType == "overhead") {
            if (unforcedError) {
                send({type: MatchDataEvents.IncrementOverheadUnforcedError});
            } else {
                send({type: MatchDataEvents.IncrementOverheadLoss});
            }
        }
        if (isServing) {
            send({type: MatchDataEvents.IncrementPointsLostOnServe});
        } else {
            send({type: MatchDataEvents.IncrementPointsLostOnReturn});
        }
        setLosingModalVisible(false);
        pointFinished();
        setUnforcedError(false);
        setAtBaseline(true);
    };

    return (
        <Modal
            visible={losingModalVisible}
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
                        <div className={styles.label}>Unforced Error:</div>
                    </Col>
                    <Col>
                        <Form.Item valuePropName="checked">
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
                <Form.Item>
                    <Radio.Group size="large" value={shotType} onChange={onShotSelected}>
                        <Radio value="forehand">
                            <div className={styles.radioLabel}>Forehand</div>
                        </Radio>
                        <Radio value="backhand">
                            <div className={styles.radioLabel}>Backhand</div>
                        </Radio>
                        <Radio value="overhead">
                            <div className={styles.radioLabel}>Overhead</div>
                        </Radio>
                    </Radio.Group>
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default LostPointModal;
