import { Button, Card, Col, Row, Statistic } from "antd";
import "antd/dist/antd.css";
import { useState } from "react";

interface PointOutComeProps {
  setIsWinningModalVisible: (isWinningModalVisible: boolean) => void;
  setIsLosingModalVisible: (isLosingModalVisible: boolean) => void;
}

const PointOutcomeComponent: React.FC<PointOutComeProps> = ({
  setIsWinningModalVisible,
  setIsLosingModalVisible,
}) => {
  const [pointsWon, setPointsWon] = useState(0);
  const [pointsLost, setPointsLost] = useState(0);
  const [gamesLost, setGamesLost] = useState(0);
  const [gamesWon, setGamesWon] = useState(0);

  const winningButton = () => {
    setIsWinningModalVisible(true);
    setPointsWon(pointsWon + 1);
  };

  const losingButton = () => {
    setIsLosingModalVisible(true);
    setPointsLost(pointsLost + 1);
  };

  const updateGameScore = (pointsLost: number, pointsWon: number) => {
    const scores = ["Love", 15, 30, 40, "Deuce", "Advantage"];
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
    if ((gamesWon == 6 && gamesLost < 6) || (gamesLost == 6 && gamesWon < 6)) {
      setGamesWon(0);
      setGamesLost(0);
    }
  };

  return (
    <>
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
      <Col>
        <Card title="Serving Stats" bordered={false}>
          <Button style={{ width: 300 }}>Second Serve</Button>
          <Button style={{ width: 300 }}>Double Fault</Button>
        </Card>
      </Col>
      <Col>
        <Card title="Point Outcome" bordered={false}>
          <Button style={{ width: 300 }} onClick={winningButton}>
            Win
          </Button>
          <Button style={{ width: 300 }} onClick={losingButton}>
            Loss
          </Button>
        </Card>
      </Col>
    </>
  );
};

export default PointOutcomeComponent;
