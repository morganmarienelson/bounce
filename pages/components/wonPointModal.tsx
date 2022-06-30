import React, {useState} from "react";
import "antd/dist/antd.css";
import {Form, message, Modal, Radio, Switch} from "antd";

interface WonPointModalProps {
    winningModalVisible: boolean;
    setWinningModalVisible: (winningModalVisible: boolean) => void;
    pointFinished: () => void;
    setShowWinLostButtons: (showWinLostButtons: boolean) => void;
}

const WonPointModal: React.FC<WonPointModalProps> = ({
                                                         winningModalVisible,
                                                         setWinningModalVisible,
                                                         pointFinished,
                                                         setShowWinLostButtons,
                                                     }) => {
    const [overhead, disableOverhead] = useState(true);
    const onSwitchClicked = (checked: boolean) => {
        if (checked) {
            disableOverhead(false);
        } else {
            disableOverhead(true);
        }
    };

    const onModalCancel = () => {
        setWinningModalVisible(false);
        setShowWinLostButtons(false);
    }

    const onModalOk = () => {
        setWinningModalVisible(false);
        pointFinished();
    };

    return (
        <>
            <Modal
                visible={winningModalVisible}
                onCancel={onModalCancel}
                destroyOnClose={true}
                onOk={onModalOk}
            >
                <Form name="Match Information" style={{margin: 20}}>
                    <Form.Item label="Winner" valuePropName="checked">
                        <Switch/>
                    </Form.Item>
                    <Form.Item label="At Net" valuePropName="checked">
                        <Switch onChange={onSwitchClicked}/>
                    </Form.Item>
                    <Form.Item label="Shot Type">
                        <Radio.Group>
                            <Radio value="forehand"> Forehand </Radio>
                            <Radio value="backhand">Backhand</Radio>
                            <Radio
                                value="overhead"
                                defaultChecked={false}
                                disabled={overhead}
                            >
                                Overhead
                            </Radio>
                        </Radio.Group>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
};

export default WonPointModal;
