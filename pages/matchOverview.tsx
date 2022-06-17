import { useState } from "react";
import LosingModal from "./components/losingModal";
import PointOutcomeComponent from "./components/pointOutcome";
import Score from "./components/score";
import WinningModal from "./components/winningModal";

const MatchOverview = () => {
  const [isWinningModalVisible, setIsWinningModalVisible] = useState(false);
  const [isLosingModalVisible, setIsLosingModalVisible] = useState(false);
  const [pointsWon, setPointsWon] = useState(0);
  const [pointsLost, setPointsLost] = useState(0);

  const handleOkWinningModal = () => {
    setIsWinningModalVisible(false);
    setPointsWon(pointsWon + 1);
  };

  const handleOkLosingModal = () => {
    setIsLosingModalVisible(false);
    setPointsLost(pointsLost + 1);
  };
  return (
    <>
      <Score
        setPointsWon={setPointsWon}
        setPointsLost={setPointsLost}
        pointsLost={pointsLost}
        pointsWon={pointsWon}
      />
      <PointOutcomeComponent
        setIsWinningModalVisible={setIsWinningModalVisible}
        setIsLosingModalVisible={setIsLosingModalVisible}
        setPointsWon={setPointsWon}
        setPointsLost={setPointsLost}
        pointsLost={pointsLost}
        pointsWon={pointsWon}
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
