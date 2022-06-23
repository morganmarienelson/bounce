import { Card, Col, Row, Statistic } from "antd";
import React, { useEffect } from "react";

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
  const scores = ["Love", 15, 30, 40, "Deuce", "Advantage"];
  return (
    <>
      <Row>
        <Col span={12}>
          <Card>
            <Statistic
              title="Player Set Score"
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
              title="Opponent Set Score"
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
              value={scores[pointsWon]}
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
              value={scores[pointsLost]}
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
