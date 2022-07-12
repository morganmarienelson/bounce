import React, {useState} from "react";
import "antd/dist/antd.css";
import {Col, Form, Modal, Radio, Row, Switch} from "antd";
import styles from "./css/modal.module.css";
import {MatchDataEvents} from "../../machines/matchData";

interface WonPointModalProps {
    winningModalVisible: boolean;
    setWinningModalVisible: (winningModalVisible: boolean) => void;
    pointFinished: () => void;
    onModalCancel: () => void;
    send: (event: any) => any;
    isServing: boolean;
    pointLog: Array<String>;
}

const WonPointModal: React.FC<WonPointModalProps> = ({
                                                         winningModalVisible,
                                                         setWinningModalVisible,
                                                         pointFinished,
                                                         onModalCancel,
                                                         send,
                                                         isServing,
                                                         pointLog
                                                     }) => {
    const [atBaseline, setAtBaseline] = useState(true);
    const [shotType, setShotType] = useState("");
    const [winner, setWinner] = useState(false);

    const onSelectedAtNet = (checked: boolean) => {
        if (checked) {
            setAtBaseline(false);
        } else {
            setAtBaseline(true);
        }
    }

    const onSelectedWinner = (checked: boolean) => {
        if (checked) {
            setWinner(true);
        } else {
            setWinner(false);
        }
    }

    const onShotSelected = (e: any) => {
        setShotType(e.target.value);
    };

    const onModalOk = () => {
        if (atBaseline) {
            if (shotType == "forehand") {
                if (winner) {
                    send({type: MatchDataEvents.IncrementForehandWinner});
                    pointLog.push(MatchDataEvents.DecrementForehandWinner);
                } else {
                    send({type: MatchDataEvents.IncrementForehandWin});
                    pointLog.push(MatchDataEvents.DecrementForehandWin);
                }
            } else if (shotType == "backhand") {
                if (winner) {
                    send({type: MatchDataEvents.IncrementBackhandWinner});
                    pointLog.push(MatchDataEvents.DecrementBackhandWinner);
                } else {
                    send({type: MatchDataEvents.IncrementBackhandWin});
                    pointLog.push(MatchDataEvents.DecrementBackhandWin);
                }
            }
        } else {
            if (shotType == "forehand") {
                if (winner) {
                    send({type: MatchDataEvents.IncrementForehandVolleyWinner});
                    pointLog.push(MatchDataEvents.DecrementForehandVolleyWinner);
                } else {
                    send({type: MatchDataEvents.IncrementForehandVolleyWin});
                    pointLog.push(MatchDataEvents.DecrementForehandVolleyWin);
                }
            } else if (shotType == "backhand") {
                if (winner) {
                    send({type: MatchDataEvents.IncrementBackhandVolleyWinner});
                    pointLog.push(MatchDataEvents.DecrementBackhandVolleyWinner);
                } else {
                    send({type: MatchDataEvents.IncrementBackhandVolleyWin});
                    pointLog.push(MatchDataEvents.DecrementBackhandVolleyWin);
                }
            }
        }
        if (shotType == "overhead") {
            if (winner) {
                send({type: MatchDataEvents.IncrementOverheadWinner});
                pointLog.push(MatchDataEvents.DecrementOverheadWinner);
            } else {
                send({type: MatchDataEvents.IncrementOverheadWin});
                pointLog.push(MatchDataEvents.DecrementOverheadWin);
            }
        }
        if (isServing) {
            send({type: MatchDataEvents.IncrementPointsWonOnServe});
            pointLog.push(MatchDataEvents.DecrementPointsWonOnServe);
        } else {
            send({type: MatchDataEvents.IncrementPointsWonOnReturn});
            pointLog.push(MatchDataEvents.DecrementPointsWonOnReturn);
        }
        setWinningModalVisible(false);
        setWinner(false);
        setAtBaseline(true);
        pointFinished();
    };
    //TODO: clear data on ok and close
    return (
        <Modal
            visible={winningModalVisible}
            onCancel={onModalCancel}
            destroyOnClose={true}
            onOk={onModalOk}
        >
            <div className={styles.title}>Point Information</div>
            <Form
                name="Match Information"
                scrollToFirstError
                style={{marginLeft: 30}}
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
                        <Radio value="forehand">
                            <div className={styles.radioLabel}>Forehand</div>
                        </Radio>
                        <Radio value="backhand">
                            <div className={styles.radioLabel}>Backhand</div>
                        </Radio>
                        <Radio
                            value="overhead"
                        >
                            <div className={styles.radioLabel}>Overhead</div>
                        </Radio>
                    </Radio.Group>
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default WonPointModal;
