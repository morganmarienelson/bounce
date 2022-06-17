import { useState } from "react";
import LosingModal from "./components/losingModal";
import MatchInfoModal from "./components/matchInfoModal";
import PointOutcomeComponent from "./components/pointOutcome";
import WinningModal from "./components/winningModal";

const App = () => {
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
      <MatchInfoModal />
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

export default App;
