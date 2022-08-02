import React, {useState} from "react";
import "antd/dist/antd.css";
import {Button, Form, Input, Modal, Radio, Select} from "antd";
import styles from "../dashboardComponents/css/modal.module.css";

interface SaveMatchModalProps{
    showModal : boolean;
    setShowModal: (showModal: boolean) => void;
    setMatchSaved: (setSaved: boolean) => void;
}

const SaveMatchModal:  React.FC<SaveMatchModalProps> = ( {showModal, setShowModal, setMatchSaved}) => {
    const [match, setMatch] = useState([]);

    const onModalOk = () => {
        setShowModal(false);
        setMatchSaved(true);
    };

    const onModalCancel = () => {
        setShowModal(false);

    };

    const onFinish = (values: any) => {
        setMatch(values);
        saveMatch();
    };

    const saveMatch = async () => {
        const response = await fetch('api/matches', {
            method: 'POST',
            body: JSON.stringify({ match }),
            headers: {
            'Content-Type': 'application/json',
            },
        })
        const data = await response.json();
    }

    const validateMessages = {
        required: '${label} is required!',
    };


    return (
        <Modal
            visible={showModal}
            onCancel={onModalCancel}
            onOk={onModalOk}
            destroyOnClose={true}
        >
            <div className={styles.title}>Match Information</div>
            <Form name="Match Information" scrollToFirstError className={styles.form} onFinish={onFinish} validateMessages={validateMessages}>
                <Form.Item label="Player's Name" name="playerName"  rules={[
                    {
                        required: true,
                    },
                ]}>
                    <Input />
                </Form.Item>
                <Form.Item label="Opponent's Name" name="opponentName"     rules={[
                    {
                        required: true,
                    },
                ]}>
                    <Input />
                </Form.Item>
                <Form.Item label="Court Type"  name="courtType"    rules={[
                    {
                        required: true,
                    },
                ]}>
                    <Select>
                        <Select.Option value="hard">Hard</Select.Option>
                        <Select.Option value="clay">Clay</Select.Option>
                        <Select.Option value="grass">Grass</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item label="Location"  name="location"  rules={[
                    {
                        required: true,
                    },
                ]}>
                    <Input />
                </Form.Item>
                <Form.Item label="Setting"  name="setting"     rules={[
                    {
                        required: true,
                    },
                ]}>
                    <Radio.Group>
                        <Radio value="indoor"> Indoor </Radio>
                        <Radio value="Outdoor"> Outdoor </Radio>
                    </Radio.Group>
                </Form.Item>
                <Form.Item label="Match Type"  name="matchType"    rules={[
                    {
                        required: true,
                    },
                ]}>
                    <Radio.Group>
                        <Radio value="3"> 3 Sets </Radio>
                        <Radio value="5"> 5 Sets </Radio>
                        <Radio value="8"> 8 Game Pro Set </Radio>
                    </Radio.Group>
                </Form.Item >
                <Form.Item label="Additional Notes"  name="notes"    rules={[
                    {
                        required: true,
                    },
                ]}>
                    <Input.TextArea />
                </Form.Item>
                <Form.Item
                    wrapperCol={{
                        span: 12,
                        offset: 6,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default SaveMatchModal;