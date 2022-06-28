import { Button, Col, Row } from "antd";
import "antd/dist/antd.css";
import { useState } from "react";
import LosingModal from "./components/losingModal";
import PointOutcomeComponent from "./components/pointOutcome";
import WinningModal from "./components/winningModal";

const PointInput = () => {
  const [isWinningModalVisible, setIsWinningModalVisible] = useState(false);
  const [isLosingModalVisible, setIsLosingModalVisible] = useState(false);
  const [undoButtonDisabled, setUndoButtonDisabled] = useState(true);

  const handleOkWinningModal = () => {
    setIsWinningModalVisible(false);
    setUndoButtonDisabled(false);
  };

  const handleCancelModal = () => {
    setIsWinningModalVisible(false);
    setIsLosingModalVisible(false);
  };

  const handleOkLosingModal = () => {
    setIsLosingModalVisible(false);
    setUndoButtonDisabled(false);
  };

  //TODO: delete method will go here
  const undoButton = () => {};

  return (
    <>
      <Row>
        <div style={{ border: "solid" }}>
          <h1>Return</h1>
          <Button
            type="primary"
            style={{ width: 200, height: 200, marginRight: 10, marginLeft: 20 }}
          >
            In
          </Button>
          <Button
            type="primary"
            style={{ width: 200, height: 200, marginRight: 10 }}
          >
            Winner
          </Button>
          <Button
            type="primary"
            danger={true}
            style={{ width: 200, height: 200, marginRight: 10 }}
          >
            Miss
          </Button>
        </div>
        <div style={{ border: "solid" }}>
          <h1>Serve</h1>
          <Button
            type="primary"
            style={{ width: 200, height: 200, marginRight: 10 }}
          >
            Ace
          </Button>
          <Button
            danger={true}
            type="primary"
            style={{ width: 200, height: 200, marginRight: 10 }}
          >
            In
          </Button>
          <Button
            danger={true}
            type="primary"
            style={{ width: 200, height: 200, marginRight: 10 }}
          >
            Fault
          </Button>
        </div>
      </Row>
      <PointOutcomeComponent
        setIsWinningModalVisible={setIsWinningModalVisible}
        setIsLosingModalVisible={setIsLosingModalVisible}
        undoButton={undoButton}
        undoButtonDisabled={undoButtonDisabled}
      />

      <WinningModal
        handleOkWinningModal={handleOkWinningModal}
        isWinningModalVisible={isWinningModalVisible}
        handleCancelModal={handleCancelModal}
      />

      <LosingModal
        handleOkLosingModal={handleOkLosingModal}
        isLosingModalVisible={isLosingModalVisible}
        handleCancelModal={handleCancelModal}
      />
    </>
  );
};

export default PointInput;
