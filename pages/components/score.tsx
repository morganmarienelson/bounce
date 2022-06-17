import { Card, Col, Row, Statistic } from "antd";
import { useState } from "react";

interface ScoreProps {
  setPointsWon: (pointsWon: number) => void;
  setPointsLost: (pointsLost: number) => void;
  pointsLost: number;
  pointsWon: number;
}

const Score: React.FC<ScoreProps> = ({
  setPointsWon,
  setPointsLost,
  pointsLost,
  pointsWon,
}) => {
  const [gamesLost, setGamesLost] = useState(0);
  const [gamesWon, setGamesWon] = useState(0);

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
    </>
  );
};

export default Score;
