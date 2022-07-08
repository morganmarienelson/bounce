import React, {useState} from "react";
import "antd/dist/antd.css";
import {Col, Form, Modal, Radio, Row, Switch} from "antd";
import styles from "./css/pointModal.module.css";

interface LostPointModalProps {
    losingModalVisible: boolean;
    setLosingModalVisible: (losingModalVisible: boolean) => void;
    pointFinished: () => void;
    onModalCancel: () => void;
}

const LostPointModal: React.FC<LostPointModalProps> = ({
                                                           losingModalVisible,
                                                           setLosingModalVisible,
                                                           pointFinished,
                                                           onModalCancel,
                                                       }) => {
    const [overhead, disableOverhead] = useState(true);
    const onSwitchClicked = (checked: boolean) => {
        if (checked) {
            disableOverhead(false);
        } else {
            disableOverhead(true);
        }
    };

    const onModalOk = () => {
        setLosingModalVisible(false);
        pointFinished();
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
                            <Switch/>
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className={styles.label}>At Net:</div>
                    </Col>
                    <Col>
                        <Form.Item valuePropName="checked">
                            <Switch onChange={onSwitchClicked}/>
                        </Form.Item>
                    </Col>
                </Row>
                <div className={styles.label}>Shot Type:</div>
                <Form.Item>
                    <Radio.Group size="large">
                        <Radio value="forehand">
                            <div className={styles.radioLabel}>Forehand</div>
                        </Radio>
                        <Radio value="backhand">
                            <div className={styles.radioLabel}>Backhand</div>
                        </Radio>
                        <Radio value="overhead" defaultChecked={false} disabled={overhead}>
                            <div className={styles.radioLabel}>Overhead</div>
                        </Radio>
                    </Radio.Group>
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default LostPointModal;
