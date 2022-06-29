import { Button, Col, Modal, Row } from "antd";
import "antd/dist/antd.css";
import React, { useState } from "react";
import LostPointModal from "./lostPointModal";
import WonPointModal from "./wonPointModal";

interface WonLostModalProps {
  showPointOutcomeModal: boolean;
  setShowPointOutcomeModal: (showPointOutcomeModal: boolean) => void;
}

const WonLostModal: React.FC<WonLostModalProps> = ({
  showPointOutcomeModal,
  setShowPointOutcomeModal,
}) => {
  const [losingModalVisible, setLosingModalVisible] = useState(false);
  const [winningModalVisible, setWinningModalVisible] = useState(false);

  const onModalButtonClick = () => {
    setShowPointOutcomeModal(false);
  };

  const onWinningButtonClick = () => {
    setWinningModalVisible(true);
    setShowPointOutcomeModal(false);
  };

  const onLosingButtonClick = () => {
    setLosingModalVisible(true);
    setShowPointOutcomeModal(false);
  };

  return (
    <>
      <Modal
        visible={showPointOutcomeModal}
        onCancel={onModalButtonClick}
        destroyOnClose={true}
      >
        <Row gutter={[16, 0]}>
          <Col span={12}>
            <Button
              type="primary"
              style={{ width: 200, height: 200 }}
              onClick={onWinningButtonClick}
            >
              <h2 style={{ color: "white" }}>Won</h2>
            </Button>
          </Col>
          <Col span={12}>
            <Button
              type="primary"
              danger={true}
              style={{ width: 200, height: 200 }}
              onClick={onLosingButtonClick}
            >
              <h2 style={{ color: "white" }}>Lost</h2>
            </Button>
          </Col>
        </Row>
      </Modal>

      <LostPointModal
        losingModalVisible={losingModalVisible}
        setLosingModalVisible={setLosingModalVisible}
        setShowPointOutcomeModal={setShowPointOutcomeModal}
      />

      <WonPointModal
        winningModalVisible={winningModalVisible}
        setWinningModalVisible={setWinningModalVisible}
        setShowPointOutcomeModal={setShowPointOutcomeModal}
      />
    </>
  );
};

export default WonLostModal;
