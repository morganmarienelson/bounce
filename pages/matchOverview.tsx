import { Modal, Radio } from "antd";
import { useEffect, useState } from "react";
import LosingModal from "./components/losingModal";
import PointOutcomeComponent from "./components/pointOutcome";
import Score from "./components/score";
import WinningModal from "./components/winningModal";

const MatchOverview = () => {
  const [isWinningModalVisible, setIsWinningModalVisible] = useState(false);
  const [isLosingModalVisible, setIsLosingModalVisible] = useState(false);
  const [pointsWon, setPointsWon] = useState(0);
  const [pointsLost, setPointsLost] = useState(0);
  const [showOverview, setShowOverview] = useState(false);
  const [server, setFirstServer] = useState("Player");
  const [gamesLost, setGamesLost] = useState(0);
  const [gamesWon, setGamesWon] = useState(0);

  const scores = ["Love", 15, 30, 40, "Deuce", "Advantage"];
  const servers = ["Player", "Opponent"];

  const onServerSelected = (e: any) => {
    setFirstServer(e);
    setShowOverview(true);
  };

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
    if (
      (pointsWon == 4 && pointsLost < 3) ||
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
    return [scores[pointsWon], scores[pointsLost]];
  };

  const updateMatchScore = (pointsWon: number) => {
    if (pointsWon == 4 || pointsWon == 6) {
      setGamesWon(gamesWon + 1);
    } else {
      setGamesLost(gamesLost + 1);
    }
    if (
      (gamesWon == 6 && gamesLost <= 5) ||
      (gamesLost == 6 && gamesWon <= 5)
    ) {
      setGamesWon(0);
      setGamesLost(0);
    }
    if (server == "Player") {
      setFirstServer("Opponent");
    } else {
      setFirstServer("Player");
    }
  };

  return (
    <>
      <h4>Server</h4>
      <Radio.Group
        options={servers}
        onChange={onServerSelected}
        disabled={showOverview}
      />
      {showOverview ? (
        <>
          <Score
            updateGameScore={updateGameScore}
            gamesLost={gamesLost}
            gamesWon={gamesWon}
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
      ) : null}
    </>
  );
};

export default MatchOverview;
