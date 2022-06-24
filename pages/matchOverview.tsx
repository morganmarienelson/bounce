import React, { useEffect, useState } from "react";
import LosingModal from "./components/losingModal";
import PointOutcomeComponent from "./components/pointOutcome";
import Score from "./components/score";
import WinningModal from "./components/winningModal";
import MatchInfo from "./matchInfo";

const MatchOverview = () => {
  const [isWinningModalVisible, setIsWinningModalVisible] = useState(false);
  const [isLosingModalVisible, setIsLosingModalVisible] = useState(false);
  const [pointsWon, setPointsWon] = useState(0);
  const [pointsLost, setPointsLost] = useState(0);
  const [gamesLost, setGamesLost] = useState(0);
  const [gamesWon, setGamesWon] = useState(0);
  const [showSetTieBreak, setShowSetTieBreak] = useState(false);
  const scores = ["Love", 15, 30, 40, "Deuce", "Advantage"];

  const handleOkWinningModal = () => {
    setIsWinningModalVisible(false);
    setPointsWon(pointsWon + 1);
  };

  const handleOkLosingModal = () => {
    setIsLosingModalVisible(false);
    setPointsLost(pointsLost + 1);
  };

  const updateMatchScore = (pointsWon: number, pointsLost: number) => {
    if ((pointsWon == 4 && pointsLost != 6) || pointsWon == 6) {
     setGamesWon(gamesWon+1)
    } else {
      setGamesLost(gamesLost + 1);
    }
    if ((gamesLost == 6 && gamesWon < 5) || (gamesWon == 6 || gamesLost < 5)) {
      setGamesLost(0);
      setGamesWon(0);
    }
    else if ((gamesLost == 7 && gamesWon == 5) || (gamesWon == 7 || gamesLost == 5)) {
      setGamesLost(0);
      setGamesWon(0);
    }
    else if ((gamesLost == 6 && gamesWon == 6) || (gamesWon == 6 || gamesLost == 6)) {
     setShowSetTieBreak(true)
      setPointsWon(0);
     setPointsLost(0);
    }

  };

  const updateGameScore = () => {
      if (
          (pointsWon == 4 && pointsLost < 3) ||
          pointsLost == 6 ||
          pointsWon == 6 ||
          (pointsLost == 4 && pointsWon < 3)
      ) {
        updateMatchScore(pointsWon, pointsLost);
        setPointsWon(0);
        setPointsLost(0);
      } else if (
          (pointsLost == 3 && pointsWon == 3) ||
          (pointsLost == 5 && pointsWon == 5)
      ) {
        setPointsWon(4);
        setPointsLost(4);
      }
      return [scores[pointsWon], scores[pointsLost]];
  };

  return (
    <>
      <MatchInfo />

      <Score
        gamesLost={gamesLost}
        gamesWon={gamesWon}
        pointsLost={pointsLost}
        pointsWon={pointsWon}
        updateGameScore={updateGameScore}
      />

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
