import "antd/dist/antd.css";
import { useState } from "react";
import LosingModal from "./components/losingModal";
import PointOutcomeComponent from "./components/pointOutcome";
import ReturnPanel from "./components/returnPanel";
import ServingPanel from "./components/servingPanel";
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
      <ReturnPanel />

      <ServingPanel />

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
