import { useState } from "react";
import LosingModal from "./components/losingModal";
import PointOutcomeComponent from "./components/pointOutcome";
import WinningModal from "./components/winningModal";

const MatchOverview = () => {
  const [isWinningModalVisible, setIsWinningModalVisible] = useState(false);
  const [isLosingModalVisible, setIsLosingModalVisible] = useState(false);

  const handleOkWinningModal = () => {
    setIsWinningModalVisible(false);
  };

  const handleOkLosingModal = () => {
    setIsLosingModalVisible(false);
  };
  return (
    <>
      <PointOutcomeComponent
        setIsWinningModalVisible={setIsWinningModalVisible}
        setIsLosingModalVisible={setIsLosingModalVisible}
      />
      <WinningModal
        handleOkWinningModal={handleOkWinningModal}
        isWinningModalVisible={isWinningModalVisible}
      />

      <LosingModal
        handleOkLosingModal={handleOkLosingModal}
        isLosingModalVisible={isLosingModalVisible}
      />
    </>
  );
};

export default MatchOverview;
