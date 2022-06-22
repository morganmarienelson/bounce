import { Card, Col, Modal, Radio, Row, Statistic } from "antd";
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
  const [showOverview, setShowOverview] = useState(false);
  const [server, setFirstServer] = useState("Player");
  const [gamesLost, setGamesLost] = useState(0);
  const [gamesWon, setGamesWon] = useState(0);
  const [showSetTieBreak, setShowSetTieBreak] = useState(false);

  const scores = ["Love", 15, 30, 40, "Deuce", "Advantage"];
  const servers = ["Player", "Opponent"];
  const tieBreakScores = [pointsWon, pointsLost];

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
    if (!showSetTieBreak) {
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
    } else {
      return [tieBreakScores[0], tieBreakScores[1]];
    }
  };

  const updateMatchScore = (pointsWon: number) => {
    if (pointsWon == 4 || pointsWon == 6) {
      setGamesWon(gamesWon + 1);
    } else {
      setGamesLost(gamesLost + 1);
    }
    console.log(gamesWon);
    console.log(gamesLost);
    if (server == "Player") {
      setFirstServer("Opponent");
    } else {
      setFirstServer("Player");
    }
  };

  const checkMatchScore = (gamesWon: number, gamesLost: number) => {
    if ((gamesWon == 6 && gamesLost < 5) || (gamesLost == 6 && gamesWon < 5)) {
    } else if (gamesLost == 6 && gamesWon == 6) {
      setShowSetTieBreak(true);
    } else {
      console.log("blah");
    }
  };

  //TODO: add server opton
  return (
    <>
      <MatchInfo />
      <Row>
        <Col span={12}>
          <Card>
            <Statistic
              title="Player Score"
              value={gamesWon}
              valueStyle={{
                color: "#3f8600",
              }}
            />
          </Card>
        </Col>
        <Col span={12}>
          <Card>
            <Statistic
              title="Opponent's Score"
              value={gamesLost}
              valueStyle={{
                color: "#cf1322",
              }}
            />
          </Card>
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <Card>
            <Statistic
              title="Player Score"
              value={updateGameScore(pointsLost, pointsWon)[0]}
              valueStyle={{
                color: "#3f8600",
              }}
            />
          </Card>
        </Col>
        <Col span={12}>
          <Card>
            <Statistic
              title="Opponent's Score"
              value={updateGameScore(pointsLost, pointsWon)[1]}
              valueStyle={{
                color: "#cf1322",
              }}
            />
          </Card>
        </Col>
      </Row>

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
