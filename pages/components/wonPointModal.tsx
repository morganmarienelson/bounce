import React, {useState} from "react";
import "antd/dist/antd.css";
import {Col, Form, Modal, Radio, Row, Switch} from "antd";
import styles from "./css/modal.module.css";
import {useMachine} from "@xstate/react";
import {matchData, MatchDataEvents} from "../../machines/matchData";

interface WonPointModalProps {
    winningModalVisible: boolean;
    setWinningModalVisible: (winningModalVisible: boolean) => void;
    pointFinished: () => void;
    onModalCancel: () => void;
    send: (event: any) => any;
}

const WonPointModal: React.FC<WonPointModalProps> = ({
                                                         winningModalVisible,
                                                         setWinningModalVisible,
                                                         pointFinished,
                                                         onModalCancel,
                                                         send,
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
        setWinningModalVisible(false);
        setWinner(false);
        setAtBaseline(true);
        pointFinished();
        if (atBaseline) {
            if (shotType == "forehand") {
                if (winner) {
                    send({type: MatchDataEvents.IncrementForehandWinner});
                } else {
                    send({type: MatchDataEvents.IncrementForehand});
                }
            } else if (shotType == "backhand") {
                if (winner) {
                    send({type: MatchDataEvents.IncrementBackhandWinner});
                } else {
                    send({type: MatchDataEvents.IncrementBackhand});
                }
            }
        } else {
            if (shotType == "forehand") {
                if (winner) {
                    send({type: MatchDataEvents.IncrementForehandVolleyWinner});
                } else {
                    send({type: MatchDataEvents.IncrementForehandVolley});
                }
            } else if (shotType == "backhand") {
                if (winner) {
                    send({type: MatchDataEvents.IncrementBackhandVolleyWinner});
                } else {
                    send({type: MatchDataEvents.IncrementBackhandVolley});
                }
            }
        }
        if (shotType == "overhead") {
            if (winner) {
                send({type: MatchDataEvents.IncrementOverheadWinner});
            } else {
                send({type: MatchDataEvents.IncrementOverhead});
            }
        }
    };

    return (
        <Modal
            visible={winningModalVisible}
            onCancel={onModalCancel}
            destroyOnClose={true}
            onOk={onModalOk}
        >
            <div className={styles.title}>Point Information</div>
            //TODO: clear data on ok and close
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
                            defaultChecked={false}
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
