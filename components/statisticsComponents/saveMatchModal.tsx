import React, {useState} from "react";
import "antd/dist/antd.css";
import {Form, Input, Modal, Radio, Select} from "antd";
import styles from "../dashboardComponents/css/modal.module.css";

interface SaveMatchModalProps{
    showModal : boolean;
    setShowModal: (showModal: boolean) => void;
    setMatchSaved: (setSaved: boolean) => void;
}

const SaveMatchModal:  React.FC<SaveMatchModalProps> = ( {showModal, setShowModal, setMatchSaved}) => {
    const [match, setMatch ] = useState([])

    const onModalOk = () => {
        setShowModal(false);
        setMatchSaved(true);
        saveMatch();
    };

    const onModalCancel = () => {
        setShowModal(false);

    };

    const saveMatch = async () => {
        const response = await fetch('api/matches', {
            method: 'POST',
            body: JSON.stringify({match }),
        headers: {
            'Content-Type': 'application/json',
        },
        })
        const data = await response.json();
        console.log(data);
    }

    return (
        <Modal
            visible={showModal}
            onCancel={onModalCancel}
            onOk={onModalOk}
            destroyOnClose={true}
        >
            <div className={styles.title}>Match Information</div>
            <Form name="Match Information" scrollToFirstError className={styles.form}>
                <Form.Item label="Player's Name">
                    <Input />
                </Form.Item>
                <Form.Item label="Opponent's Name">
                    <Input />
                </Form.Item>
                <Form.Item label="Court Type">
                    <Select>
                        <Select.Option value="hard">Hard</Select.Option>
                        <Select.Option value="clay">Clay</Select.Option>
                        <Select.Option value="grass">Grass</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item label="Location">
                    <Input />
                </Form.Item>
                <Form.Item label="Setting">
                    <Radio.Group>
                        <Radio value="indoor"> Indoor </Radio>
                        <Radio value="Outdoor"> Outdoor </Radio>
                    </Radio.Group>
                </Form.Item>
                <Form.Item label="Match Type">
                    <Radio.Group>
                        <Radio value="3"> 3 Sets </Radio>
                        <Radio value="5"> 5 Sets </Radio>
                        <Radio value="8"> 8 Game Pro Set </Radio>
                    </Radio.Group>
                </Form.Item>
                <Form.Item label="Additional Notes">
                    <Input.TextArea />
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default SaveMatchModal;
