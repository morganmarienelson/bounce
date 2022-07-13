import React, {useState} from "react";
import "antd/dist/antd.css";
import {Col, Form, Modal, Radio, Row, Switch} from "antd";
import styles from "./css/modal.module.css";
import {MatchDataEvents} from "../../machines/matchData";

interface ServeLocationModalProps {
    serveLocationModalVisible: boolean;
    setServeLocationModalVisible: (serveLocationModalVisible: boolean) => void;
    pointFinished: () => void;
    send: (event: any) => any;
    pointLog: Array<String>;
}

const ServeLocationModal: React.FC<ServeLocationModalProps> = ({
                                                                   serveLocationModalVisible,
                                                                   setServeLocationModalVisible,
                                                                   pointFinished,
                                                                   send,
                                                                   pointLog,
                                                               }) => {
    const [serveLocation, setServeLocation] = useState("");
    const [sideOfCourt, setSideOfCourt] = useState("");

    const onLocationSelected = (e: any) => {
        setServeLocation(e.target.value);
    };

    const onSideOfCourtSelected = (e: any) => {
        setSideOfCourt(e.target.value);
    };

    const onModalOk = () => {

        setServeLocationModalVisible(false);
        pointFinished();
    };


    const onModalCancel = () => {
        setServeLocationModalVisible(false);
    };

    //TODO: clear data on ok and close
    return (
        <Modal
            visible={serveLocationModalVisible}
            onCancel={onModalCancel}
            destroyOnClose={true}
            onOk={onModalOk}
        >
            <div className={styles.title}>Serve Information</div>
            <Form
                name="Match Information"
                scrollToFirstError
                style={{marginLeft: 30}}
            >
                <div className={styles.label}>Side Of Court:</div>
                <Form.Item>
                    <Radio.Group size="large" value={sideOfCourt} onChange={onSideOfCourtSelected}>
                        <Radio value="deuce">
                            <div className={styles.radioLabel}>Deuce Side</div>
                        </Radio>
                        <Radio value="ad">
                            <div className={styles.radioLabel}>Ad Side</div>
                        </Radio>
                    </Radio.Group>
                </Form.Item>
                <div className={styles.label}>Serve Location:</div>
                <Form.Item>
                    <Radio.Group size="large" value={serveLocation} onChange={onLocationSelected}>
                        <Radio value="alley">
                            <div className={styles.radioLabel}>Alley</div>
                        </Radio>
                        <Radio value="body">
                            <div className={styles.radioLabel}>Body</div>
                        </Radio>
                        <Radio value="center">
                            <div className={styles.radioLabel}>Center</div>
                        </Radio>
                    </Radio.Group>
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default ServeLocationModal;
