import React from "react";
import "antd/dist/antd.css";
import {Modal} from "antd";

interface SettingsModalProps {
    settingsModalVisible: boolean;
    setSettingsModalVisible: (settingsModalVisible: boolean) => void;
}

const SettingsModal: React.FC<SettingsModalProps> = ({
                                                          settingsModalVisible,
                                                            setSettingsModalVisible,

                                                       }) => {

    const onModalOk = () => {
        setSettingsModalVisible(false);

    };

    const onModalCancel = () => {
        setSettingsModalVisible(false);
    };

    return (
        <Modal
            visible={settingsModalVisible}
            onCancel={onModalCancel}
            onOk={onModalOk}
            destroyOnClose={true}
        >
            <div>Settings</div>

        </Modal>
    );
};

export default SettingsModal;
