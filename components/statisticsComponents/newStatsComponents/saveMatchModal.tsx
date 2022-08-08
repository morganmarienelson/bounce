import React, {useState} from "react";
import "antd/dist/antd.css";
import {Button, Form, Input, Modal, Radio, Select} from "antd";
import styles from "../../dashboardComponents/css/modal.module.scss";
import {prevMatchStats} from "../../../data/prevMatchStats";
interface SaveMatchModalProps{
    showModal : boolean;
    setShowModal: (showModal: boolean) => void;
    setMatchSaved: (setSaved: boolean) => void;
    state: any
}

const SaveMatchModal:  React.FC<SaveMatchModalProps> = ( {showModal, state, setShowModal, setMatchSaved}) => {
    const [componentDisabled, setComponentDisabled] = useState(false);

    const onModalOk = () => {
        if (componentDisabled){
            setMatchSaved(true);
            setShowModal(false);
        } else {
            Modal.confirm({
                title: "Are you sure that you want to close this form? This match is not saved. You did not press submit.",
                onOk: () => {
                    setShowModal(false);
                },
            });
        }
    };

    const onFinish = async (values: any) => {
        setComponentDisabled(true);
        const match = values;
        const response = await fetch('api/matches', {
            method: 'POST',
            body: JSON.stringify({ match }),
            headers: {
                'Content-Type': 'application/json',
            },
        })
        const data = await response.json();
        prevMatchStats.push(data);
        console.log(prevMatchStats);
    };


    const validateMessages = {
        required: '${label} is required!',
    };


    return (
        <Modal
            visible={showModal}
            onCancel={onModalOk}
            onOk={onModalOk}
            destroyOnClose={true}
        >
            <div className={styles.title}>Match Information</div>
            <Form name="Match Information" scrollToFirstError className={styles.form} onFinish={onFinish} validateMessages={validateMessages}
                  disabled={componentDisabled}>
                <Form.Item label="Player's Name" name="playerName"  rules={[
                    {
                        required: true,
                    },
                ]} >
                    <Input  />
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
                <Form.Item label="Additional Notes"  name="notes">
                    <Input.TextArea />
                </Form.Item>
                <Form.Item
                >
                    <Button type="primary" htmlType="submit" >
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default SaveMatchModal;
