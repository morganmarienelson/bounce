import { Card, Col, Row, Statistic } from "antd";
import { useEffect } from "react";

interface ScoreProps {
  updateGameScore: (pointsLost: number, pointsWon: number) => Array<any>;
  gamesLost: number;
  gamesWon: number;
  pointsLost: number;
  pointsWon: number;
}

const Score: React.FC<ScoreProps> = ({
  gamesLost,
  gamesWon,
  updateGameScore,
  pointsLost,
  pointsWon,
}) => {
  useEffect(() => {
    updateGameScore(pointsLost, pointsWon);
  }, [pointsWon, pointsLost]);

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
