import React, {useState} from "react";
import "antd/dist/antd.css";
import { Form, Modal} from "antd";
import styles from "../dashboardComponents/css/modal.module.css";

interface SaveMatchModalProps{
    showModal : boolean;
    setShowModal: (showModal: boolean) => void;
}

const SaveMatchModal:  React.FC<SaveMatchModalProps> = ( {showModal, setShowModal}) => {
    const onModalOk = () => {
        setShowModal(false);
    };

    const onModalCancel = () => {
        setShowModal(false);

    };

    return (
        <Modal
            visible={showModal}
            onCancel={onModalCancel}
            onOk={onModalOk}
            destroyOnClose={true}
        >
            <div className={styles.title}>Match Information</div>
            <Form name="Match Information" scrollToFirstError className={styles.form}>
            </Form>
        </Modal>
    );
};

export default SaveMatchModal;
