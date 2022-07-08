import React, {useState} from "react";
import "antd/dist/antd.css";
import {Col, Row, DatePicker, Form, Input, Modal, Radio, Select, Switch} from "antd";
import {TextArea} from "grommet";
import styles from "./css/modal.module.css";

interface SaveMatchInfoModalProps {
    showSaveMatchModal: boolean;
    setShowSaveMatchModal: (saveMatchModal: boolean) => void;
    setSavedData: (savedData: boolean) => void;
}

const SaveMatchInfoModal: React.FC<SaveMatchInfoModalProps> = ({
                                                                   showSaveMatchModal,
                                                                   setShowSaveMatchModal,
                                                                   setSavedData,
                                                               }) => {
    const onModalOk = () => {
        setShowSaveMatchModal(false);
        setSavedData(true);
    };

    const onModalCancel = () => {
        setShowSaveMatchModal(false);
    };

    return (
        <Modal
            title="Match Information"
            destroyOnClose={true}
            visible={showSaveMatchModal}
            onOk={onModalOk}
            onCancel={onModalCancel}
        >
            <Form name="Match Information" style={{margin: 20}}>
                <Row className={styles.saveRow}>
                    <Col style={{width: 120}}>
                        <div className={styles.saveLabel}>Player Name:</div>
                    </Col>
                    <Col style={{width: 250}}>
                        <Input/>
                    </Col>
                </Row>
                <Row className={styles.saveRow}>
                    <Col>
                        <div className={styles.saveLabel}>Opponent Name:</div>
                    </Col>
                    <Col style={{width: 250}}>
                        <Input/>
                    </Col>
                </Row>
                <Row className={styles.saveRow}>
                    <Col>
                        <div className={styles.saveLabel}>Match Date:</div>
                    </Col>
                    <Col>
                        <DatePicker/>
                    </Col>
                </Row>
                <Row className={styles.saveRow}>
                    <Col>
                        <div className={styles.saveLabel}>Location:</div>
                    </Col>
                    <Col>
                        <Input/>
                    </Col>
                </Row>
                <Row className={styles.saveRow}>
                    <Col>
                        <div className={styles.saveLabel}>Setting:</div>
                    </Col>
                    <Col>
                        <Radio.Group>
                            <Radio value="indoors"> Indoors </Radio>
                            <Radio value="outdoors"> Outdoors </Radio>
                        </Radio.Group>
                    </Col>
                </Row>
                <Row className={styles.saveRow}>
                    <Col>
                        <div className={styles.saveLabel}>Court Type:</div>
                    </Col>
                    <Col>
                        <Select style={{width: 250}}>
                            <Select.Option value="Hard">Hard</Select.Option>
                            <Select.Option value="Clay">Clay</Select.Option>
                            <Select.Option value="Grass">Grass</Select.Option>
                        </Select>
                    </Col>
                </Row>
                <Row className={styles.saveRow}>
                    <Col>
                        <div className={styles.saveLabel}>Notes:</div>
                    </Col>
                    <Col>
                        <TextArea style={{width: 400}} rows={4}/>
                    </Col>
                </Row>
            </Form>
        </Modal>
    );
};

export default SaveMatchInfoModal;
