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
  const [server, setFirstServer] = useState("");
  const [gamesLost, setGamesLost] = useState(0);
  const [gamesWon, setGamesWon] = useState(0);
  const [showSetTieBreak, setShowSetTieBreak] = useState(false);

  const scores = ["Love", 15, 30, 40, "Deuce", "Advantage"];
  const tieBreakScores = [pointsWon, pointsLost];
  var counter = 1;

  const handleOkWinningModal = () => {
    setIsWinningModalVisible(false);
    setPointsWon(pointsWon + 1);
  };

  const handleOkLosingModal = () => {
    setIsLosingModalVisible(false);
    setPointsLost(pointsLost + 1);
  };

  const onDoubleFaultClick = () => {
    if (server == "Player") {
      setPointsLost(pointsLost + 1);
    } else {
      setPointsWon(pointsWon + 1);
    }
  };

  const updateGameScore = (pointsLost: number, pointsWon: number) => {
    if (!showSetTieBreak) {
      if (
        (pointsWon == 3 && pointsLost < 3) ||
        pointsLost == 6 ||
        pointsWon == 6 ||
        (pointsLost == 4 && pointsWon < 3)
      ) {
        updateMatchScore(pointsWon);
        setPointsWon(0);
        setPointsLost(0);
      } else if (
        (pointsLost == 3 && pointsWon == 3) ||
        (pointsLost == 5 && pointsWon == 5)
      ) {
        setPointsWon(4);
        setPointsLost(4);
      }
    } else {
      if (counter % 2 != 0) {
        if (server == "Player") {
          setFirstServer("Opponent");
        } else {
          setFirstServer("Player");
        }
      }
      counter++;
      return [tieBreakScores[0], tieBreakScores[1]];
    }
  };

  const updateMatchScore = (pointsWon: number) => {
    if ((pointsWon == 4 && pointsLost != 6) || pointsWon == 6) {
      setGamesWon(gamesWon + 1);
    } else {
      setGamesLost(gamesLost + 1);
    }
    if ((gamesLost == 6 && gamesWon == 7) || gamesLost == 6 || gamesWon == 6) {
      console.log("in a tiebreak");
      setShowSetTieBreak(true);
    }
    if (server == "Player") {
      setFirstServer("Opponent");
    } else {
      setFirstServer("Player");
    }
  };

  return (
    <>
      <MatchInfo setFirstServer={setFirstServer} server={server} />

      <Score
        gamesLost={gamesLost}
        gamesWon={gamesWon}
        updateGameScore={updateGameScore}
        pointsLost={pointsLost}
        pointsWon={pointsWon}
      />

      <PointOutcomeComponent
        setIsWinningModalVisible={setIsWinningModalVisible}
        setIsLosingModalVisible={setIsLosingModalVisible}
        onDoubleFaultClick={onDoubleFaultClick}
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
